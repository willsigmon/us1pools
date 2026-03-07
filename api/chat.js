import {
  enforceRateLimit,
  isAllowedOrigin,
  jsonError,
  normalizeText,
  setApiHeaders,
} from "./_utils.js";

const SYSTEM_PROMPT = `You are the US-1 Pools virtual assistant. You help customers learn about pools, hot tubs, services, and getting started.

ABOUT US-1 POOLS:
- Family-owned pool store in Franklinton, NC (3453 US Hwy 1 South, Franklinton, NC 27525)
- Phone: 919.441.0033
- Email: us1pools@gmail.com
- Hours: Mon-Thu 11am-3pm, Fri 11am-5pm, Sat 10am-5pm, Sun 12pm-3pm
- Closed for winter (Nov-Feb) — call for appointments during winter

PRODUCTS WE SELL:
Above-Ground Pools:
- Resin: Genesis, Nakoma, Discovery
- Hybrid: AquaSport, Oasis, Ultimate
- Steel: Coral Seas, Distinction, Eclipse, Serena, Southport
- Vinyl Liners: Cardinal and Latham

In-Ground Pools:
- Fiberglass: Imagine Fiberglass and Pools by Genesis
- Equipment: Pentair pumps, filters, heaters, automation
- Upgrades: salt/oxygen sanitation, LED lighting, automation panels

Hot Tubs & Swim Spas:
- Tranquility spas
- Garden Leisure spas
- Delivery, setup, and ongoing service included

Pool Liners:
- GLI Pool Products (vinyl liners, safety covers)
- Latham Pools (liners and covers)
- Cardinal Systems (liners)

Water Treatment:
- Oxygen Pools (alternative to chlorine)
- Salt systems
- Traditional chemical treatment
- Free water testing in-store

SERVICES:
- Pool installation (above-ground and in-ground)
- Hot tub delivery and setup
- Liner replacement
- Equipment repair and upgrades
- Water testing and chemical balancing
- Opening and closing services
- Service memberships available

FORMATTING:
- Use markdown-style formatting in your responses for readability
- Use **bold** for product names and key terms
- Use bullet points (• ) for lists of products, features, or options
- Keep paragraphs short — 1-2 sentences max per paragraph
- Add line breaks between sections for breathing room
- Never output a wall of text — always structure your response

SALES APPROACH:
- Always end with a soft call-to-action nudging toward contact or a visit
- Examples: "Want me to have Shayne reach out with options?" or "Drop by the showroom and we'll walk you through it!"
- If someone asks about a product, mention we can do a free quote
- If someone seems interested, offer to pass their info to the team
- Be warm and genuine — not pushy, but always helpfully steering toward next steps
- Mention specific pages when relevant: pools.html, hot-tubs.html, above-ground.html, in-ground.html, liners.html, videos.html, contact.html

GUIDELINES:
- Be friendly, helpful, and knowledgeable
- If asked about pricing, say we offer free quotes and they should contact us or visit
- If you don't know something specific, direct them to call 919.441.0033
- Never make up specific prices, inventory counts, or availability`;

const MAX_HISTORY_ITEMS = 10;
const MAX_MESSAGE_LENGTH = 500;

export default async function handler(req, res) {
  setApiHeaders(res);

  if (req.method !== "POST") {
    return jsonError(res, 405, "Method not allowed");
  }

  if (!isAllowedOrigin(req)) {
    return jsonError(res, 403, "Forbidden");
  }

  const rateLimit = enforceRateLimit(req, res, {
    namespace: "chat",
    windowMs: 10 * 60 * 1000,
    maxRequests: 25,
  });
  if (!rateLimit.allowed) {
    return jsonError(res, 429, "Too many chat requests. Please wait a minute and try again.");
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const message = normalizeText(body.message, MAX_MESSAGE_LENGTH);
  const history = Array.isArray(body.history) ? body.history : [];

  if (!message) {
    return jsonError(res, 400, "Message is required");
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return jsonError(res, 500, "Chat service not configured");
  }

  const contents = history
    .slice(-MAX_HISTORY_ITEMS)
    .map((msg) => {
      if (!msg || typeof msg !== "object") return null;
      const role = msg.role === "user" ? "user" : null;
      const content = normalizeText(msg.content, MAX_MESSAGE_LENGTH);
      if (!role || !content) return null;
      return { role, parts: [{ text: content }] };
    })
    .filter(Boolean);

  contents.push({ role: "user", parts: [{ text: message }] });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const modelName = process.env.GEMINI_MODEL || "gemini-3.1-pro-preview";
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
            topP: 0.9,
          },
        }),
      }
    ).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      const errorData = await response.text();
      console.error("AI service error:", errorData);
      return jsonError(res, 502, "AI service error");
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Give us a call at 919.441.0033!";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return jsonError(res, 500, "Failed to reach AI service");
  }
}
