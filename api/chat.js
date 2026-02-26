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

GUIDELINES:
- Be friendly, helpful, and concise (2-3 sentences max per response)
- If asked about pricing, say we offer free quotes and they should contact us
- Always encourage visiting the store or calling for detailed questions
- If you don't know something specific, direct them to call 919.441.0033
- Never make up specific prices, inventory counts, or availability
- You can suggest they visit specific pages: pools.html, hot-tubs.html, above-ground.html, in-ground.html, liners.html, videos.html, contact.html`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Chat service not configured" });
  }

  const { message, history } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  const contents = [];

  if (history && Array.isArray(history)) {
    history.forEach((msg) => {
      if (msg.role === "user") {
        contents.push({ role: "user", parts: [{ text: msg.content }] });
      } else if (msg.role === "assistant") {
        contents.push({ role: "model", parts: [{ text: msg.content }] });
      }
    });
  }

  contents.push({ role: "user", parts: [{ text: message }] });

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.9,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      return res.status(502).json({ error: "AI service error", details: errorData });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Give us a call at 919.441.0033!";

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: "Failed to reach AI service" });
  }
}
