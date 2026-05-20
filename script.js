/* ============================================================
   US-1 Pools — Interactive Script
   Patterns adapted from willsigmon.media + carterhelms.com
   ============================================================ */

(() => {
  "use strict";

  document.documentElement.classList.add("reveal-ready");

  // Load WebMCP Agent Tools
  const webmcpScript = document.createElement("script");
  webmcpScript.src = "/webmcp-agent.js";
  webmcpScript.defer = true;
  document.head.appendChild(webmcpScript);

  /* ── Navigation ────────────────────────────────────────── */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  const closeNavMenus = () => {
    navLinks?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    dropdownToggles.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.closest(".nav-dropdown")?.classList.remove("open");
    });
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.matches("a") && navLinks.classList.contains("open")) closeNavMenus();
    });
  }

  dropdownToggles.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const wrapper = btn.closest(".nav-dropdown");
      const isOpen = wrapper ? wrapper.classList.toggle("open") : false;
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.addEventListener("click", (e) => {
    if (!navLinks || !navToggle) return;
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) closeNavMenus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNavMenus();
  });

  /* ── Active Page ───────────────────────────────────────── */
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(`[data-page-link="${currentPage}"]`).forEach((link) => {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    });
  }

  /* ── Scroll Progress Bar ───────────────────────────────── */
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.prepend(progressBar);

  /* ── Scroll-Driven Water-to-Dry Background ────────────── */
  const scrollBgWet = document.createElement("div");
  scrollBgWet.className = "scroll-bg";
  const scrollBgDry = document.createElement("div");
  scrollBgDry.className = "scroll-bg-dry";
  document.body.prepend(scrollBgDry);
  document.body.prepend(scrollBgWet);

  /* ── Header Scroll Effect + Logo Parallax ─────────────── */
  const header = document.querySelector(".site-header");
  const brand = header && header.querySelector(".brand");
  const brandLogo = brand && brand.querySelector("img");

  const floatingCta = document.getElementById("floatingCta");

  const onScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;
    progressBar.style.transform = "scaleX(" + progress + ")";

    if (header) {
      header.classList.toggle("scrolled", scrollY > 40);
    }

    if (floatingCta) {
      const showAfter = window.innerHeight * 0.8;
      floatingCta.classList.toggle("visible", scrollY > showAfter);
    }

    if (brandLogo) {
      const drift = Math.min(scrollY * 0.04, 6);
      brandLogo.style.setProperty("--logo-scroll-y", drift + "px");
      brandLogo.style.setProperty("--logo-scroll-rotate", (-drift * 0.3) + "deg");
    }

    /* Water → dry transition: wet fades out, dry fades in */
    const dryStart = 0.4;
    const dryEnd = 0.85;
    const dryProgress = Math.min(Math.max((progress - dryStart) / (dryEnd - dryStart), 0), 1);
    scrollBgWet.style.opacity = String(1 - dryProgress);
    scrollBgDry.style.opacity = String(dryProgress);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Water Texture Overlay ─────────────────────────────── */
  const waterGrain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  waterGrain.setAttribute("class", "water-grain");
  waterGrain.setAttribute("aria-hidden", "true");
  const waterFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  waterFilter.setAttribute("id", "water-texture");
  const turbulence = document.createElementNS("http://www.w3.org/2000/svg", "feTurbulence");
  turbulence.setAttribute("type", "fractalNoise");
  turbulence.setAttribute("baseFrequency", "0.9");
  turbulence.setAttribute("numOctaves", "4");
  turbulence.setAttribute("stitchTiles", "stitch");
  waterFilter.appendChild(turbulence);
  waterGrain.appendChild(waterFilter);
  const waterRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  waterRect.setAttribute("width", "100%");
  waterRect.setAttribute("height", "100%");
  waterRect.setAttribute("filter", "url(#water-texture)");
  waterGrain.appendChild(waterRect);
  document.body.appendChild(waterGrain);

  /* ── Caustic Light Patches (pool floor refraction) ─────── */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Lightweight Haptic Feedback ───────────────────────── */
  const HAPTIC_PATTERNS = {
    light: [8],
    medium: [14],
    success: [8, 30, 12],
    nudge: [6, 20, 6],
    error: [12, 40, 12, 40, 12],
  };

  window.__us1HapticsInitialized = true;

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-haptic]");
    if (!target || !navigator.vibrate) return;
    const pattern = HAPTIC_PATTERNS[target.getAttribute("data-haptic") || "light"] || HAPTIC_PATTERNS.light;
    navigator.vibrate(pattern);
  });

  if (brand && brandLogo && !prefersReduced) {
    brand.addEventListener("pointermove", (event) => {
      const bounds = brand.getBoundingClientRect();
      const offsetX = event.clientX - bounds.left - bounds.width / 2;
      const offsetY = event.clientY - bounds.top - bounds.height / 2;
      const translateX = Math.max(Math.min(offsetX * 0.08, 10), -10);
      const translateY = Math.max(Math.min(offsetY * 0.08, 8), -8);
      const rotateY = Math.max(Math.min(offsetX * 0.08, 8), -8);
      const rotateX = Math.max(Math.min(offsetY * -0.08, 8), -8);

      brandLogo.style.setProperty("--logo-hover-x", translateX + "px");
      brandLogo.style.setProperty("--logo-hover-y", translateY + "px");
      brandLogo.style.setProperty("--logo-hover-rotate-x", rotateX + "deg");
      brandLogo.style.setProperty("--logo-hover-rotate-y", rotateY + "deg");
    });

    brand.addEventListener("pointerleave", () => {
      brandLogo.style.setProperty("--logo-hover-x", "0px");
      brandLogo.style.setProperty("--logo-hover-y", "0px");
      brandLogo.style.setProperty("--logo-hover-rotate-x", "0deg");
      brandLogo.style.setProperty("--logo-hover-rotate-y", "0deg");
    });
  }

  if (!prefersReduced) {
    const CAUSTIC_COUNT = 10;
    const causticContainer = document.createDocumentFragment();

    for (let i = 0; i < CAUSTIC_COUNT; i++) {
      const patch = document.createElement("div");
      patch.className = "caustic";
      const w = 80 + Math.random() * 180;
      const h = 50 + Math.random() * 120;
      patch.style.width = w + "px";
      patch.style.height = h + "px";
      patch.style.left = (Math.random() * 100) + "%";
      patch.style.bottom = (-h) + "px";
      patch.style.animationDuration = (18 + Math.random() * 24) + "s";
      patch.style.animationDelay = (Math.random() * 14) + "s";
      const hue = 190 + Math.random() * 30;
      const lightness = 55 + Math.random() * 15;
      patch.style.background = "radial-gradient(ellipse at " + (30 + Math.random() * 40) + "% " + (30 + Math.random() * 40) + "%, hsla(" + hue + ", 60%, " + lightness + "%, 0.2) 0%, hsla(" + hue + ", 50%, " + lightness + "%, 0.08) 40%, transparent 70%)";
      causticContainer.appendChild(patch);
    }
    document.body.appendChild(causticContainer);
  }

  /* ── Stagger Children Setup (must run before observer) ── */
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    Array.from(parent.children).forEach((child, i) => {
      child.classList.add("reveal");
      child.classList.add("stagger-" + Math.min(i + 1, 6));
    });
  });

  /* ── Scroll Reveal Observer ────────────────────────────── */
  const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

  if (revealItems.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));

      /* Fallback: if items are still hidden after 3s, force them visible */
      setTimeout(() => {
        revealItems.forEach((item) => {
          if (!item.classList.contains("is-visible")) {
            item.classList.add("is-visible");
          }
        });
      }, 3000);
    } else {
      /* No IntersectionObserver support — show everything immediately */
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }

  /* ── Counter Animation ─────────────────────────────────── */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 2000;

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(target * eased) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    countObserver.observe(el);
  });

  /* ── Tilt Effect on Cards ──────────────────────────────── */
  if (!prefersReduced) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(600px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(600px) rotateY(0) rotateX(0)";
      });
    });
  }

  /* ── Magnetic Button Effect ────────────────────────────── */
  if (!prefersReduced) {
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + (x * 0.15) + "px, " + (y * 0.15) + "px)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ── Seasonal Messaging ────────────────────────────────── */
  const updateSeasonalMessage = () => {
    const month = new Date().getMonth();
    const isWinter = month >= 10 || month <= 1;
    const message = isWinter
      ? "Closed for winter \u2014 call for appointments"
      : "M-Th 11am-3pm \u00b7 Fri 11am-5pm \u00b7 Sat 10am-5pm \u00b7 Sun 12pm-3pm";
    document.querySelectorAll("[data-seasonal]").forEach((el) => {
      el.textContent = message;
    });
  };
  updateSeasonalMessage();

  /* ── Smooth Anchor Scrolling ───────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ── AI Chatbot Widget ─────────────────────────────────── */
  const chatWidget = document.createElement("div");
  chatWidget.className = "chat-widget";

  // Build toggle button
  const chatToggleBtn = document.createElement("button");
  chatToggleBtn.className = "chat-toggle";
  chatToggleBtn.setAttribute("aria-label", "Open chat assistant");
  chatToggleBtn.setAttribute("aria-expanded", "false");
  chatToggleBtn.setAttribute("aria-controls", "chatPanel");

  const pulse = document.createElement("span");
  pulse.className = "chat-toggle-pulse";
  chatToggleBtn.appendChild(pulse);

  const chatIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  chatIcon.setAttribute("viewBox", "0 0 24 24");
  chatIcon.setAttribute("aria-hidden", "true");
  const chatIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  chatIconPath.setAttribute("d", "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z");
  chatIcon.appendChild(chatIconPath);
  chatToggleBtn.appendChild(chatIcon);

  // Build panel
  const chatPanel = document.createElement("div");
  chatPanel.className = "chat-panel";
  chatPanel.id = "chatPanel";
  chatPanel.setAttribute("role", "dialog");
  chatPanel.setAttribute("aria-hidden", "true");

  // Header
  const chatHeader = document.createElement("div");
  chatHeader.className = "chat-header";
  const avatar = document.createElement("div");
  avatar.className = "chat-header-avatar";
  avatar.textContent = "\uD83C\uDF0A";
  const headerInfo = document.createElement("div");
  headerInfo.className = "chat-header-info";
  const headerTitle = document.createElement("h4");
  headerTitle.id = "chatPanelTitle";
  headerTitle.textContent = "US-1 Pools Assistant";
  const headerSub = document.createElement("p");
  headerSub.textContent = "Ask about pools, spas, or services";
  chatPanel.setAttribute("aria-labelledby", "chatPanelTitle");
  headerInfo.appendChild(headerTitle);
  headerInfo.appendChild(headerSub);
  chatHeader.appendChild(avatar);
  chatHeader.appendChild(headerInfo);
  chatPanel.appendChild(chatHeader);

  // Messages
  const chatMessages = document.createElement("div");
  chatMessages.className = "chat-messages";
  chatMessages.id = "chatMessages";
  chatMessages.setAttribute("role", "log");
  chatMessages.setAttribute("aria-live", "polite");
  chatMessages.setAttribute("aria-relevant", "additions text");
  const welcomeMsg = document.createElement("div");
  welcomeMsg.className = "chat-msg bot";
  welcomeMsg.textContent = "Hey! I'm the US-1 Pools assistant. Ask me about our pools, hot tubs, services, or anything else. How can I help?";
  chatMessages.appendChild(welcomeMsg);
  chatPanel.appendChild(chatMessages);

  // Quick actions
  const quickActions = document.createElement("div");
  quickActions.className = "chat-quick-actions";
  quickActions.id = "chatQuickActions";
  const quickData = [
    ["What pools do you sell?", "Pools you sell"],
    ["Tell me about hot tubs", "Hot tubs"],
    ["What are your hours?", "Hours"],
    ["How do I get a quote?", "Get a quote"],
  ];
  quickData.forEach(([msg, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chat-quick-btn";
    btn.dataset.msg = msg;
    btn.textContent = label;
    quickActions.appendChild(btn);
  });
  chatPanel.appendChild(quickActions);

  // Input
  const inputWrap = document.createElement("div");
  inputWrap.className = "chat-input-wrap";
  const chatInput = document.createElement("input");
  chatInput.className = "chat-input";
  chatInput.id = "chatInput";
  chatInput.type = "text";
  chatInput.placeholder = "Ask anything...";
  chatInput.autocomplete = "off";
  chatInput.maxLength = 500;
  const chatSendBtn = document.createElement("button");
  chatSendBtn.type = "button";
  chatSendBtn.className = "chat-send";
  chatSendBtn.id = "chatSend";
  chatSendBtn.setAttribute("aria-label", "Send message");
  const sendIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  sendIcon.setAttribute("viewBox", "0 0 24 24");
  sendIcon.setAttribute("aria-hidden", "true");
  const sendPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  sendPath.setAttribute("d", "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z");
  sendIcon.appendChild(sendPath);
  chatSendBtn.appendChild(sendIcon);
  inputWrap.appendChild(chatInput);
  inputWrap.appendChild(chatSendBtn);
  chatPanel.appendChild(inputWrap);

  chatWidget.appendChild(chatToggleBtn);
  chatWidget.appendChild(chatPanel);
  document.body.appendChild(chatWidget);

  let chatOpen = false;
  const conversationHistory = [];
  let chatRequestInFlight = false;

  // Local Chrome Gemini Nano integration
  let nanoSession = null;
  let nanoAvailable = "no";

  const SYSTEM_PROMPT = `You are the US-1 Pools virtual assistant. You help customers learn about pools, hot tubs, services, and getting started.

ABOUT US-1 POOLS:
- Family-owned pool store in Franklinton, NC (3453 US Hwy 1 South, Franklinton, NC 27525)
- Phone: 919.441.0033
- Email: us1pools@gmail.com
- Hours: Mon-Thu 11am-3pm, Fri 11am-5pm, Sat 10am-5pm, Sun 12pm-3pm
- Closed for winter (Nov-Feb) — call for appointments during winter

PRODUCTS WE SELL:
Above-Ground Pools:
- Resin/current options: Genesis, Nakoma, Discovery (availability can change)
- Hybrid options: Aquasport and Oasis (Oasis can only be recessed 27–30 inches; confirm current availability)
- Steel options: Coral Seas, Distinction, Eclipse, Serena, Southport
- Vinyl Liners: Cardinal and Latham

In-Ground Pools:
- Fiberglass shells: Imagine Fiberglass
- Vinyl liner pools: steel/polymer wall systems with replaceable vinyl liner surfaces
- Equipment: Pentair pumps, filters, heaters, automation
- Upgrades: salt/oxygen sanitation, equipment controls, automation panels

Hot Tubs & Swim Spas:
- Tranquility spas
- Garden Leisure spas
- Delivery, setup, and ongoing service included

Pool Liners:
- GLI Pool Products (vinyl liners, in-ground mesh safety covers, solid safety covers)
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
- Keep pool terminology precise: in-ground is a placement category; fiberglass, vinyl liner, and concrete/gunite are material/construction categories
- Do not call a vinyl liner pool fiberglass, a fiberglass shell a liner pool, or Genesis a fiberglass product
- If asked about pricing, say we offer free quotes and they should contact us or visit
- If you don't know something specific, direct them to call 919.441.0033
- Never make up specific prices, inventory counts, or availability

TOOL CALLING CAPABILITIES:
- If the user wants a price, calculation, estimate, or quote, output a block starting with [CALCULATE: poolType, poolSize, features] so the frontend can execute it natively. Values must be:
  - poolType: 'above-ground', 'in-ground-vinyl', 'in-ground-fiberglass', or 'spa'
  - poolSize: 'small', 'medium', or 'large'
  - features: 'basic', 'mid', or 'premium'
- If the user wants to submit their contact info or lead, output [CONTACT: name, email, phone, message] so we can submit it programmatically.
- If the user wants to view photos/images or open the gallery lightbox, output [GALLERY: index] where index is 0 to 11.
- Make sure to output these tag commands clearly on their own line at the very end of your response, e.g. [CALCULATE: in-ground-fiberglass, medium, premium]`;

  const checkNanoAvailability = async () => {
    try {
      if (typeof window !== "undefined" && typeof window.LanguageModel !== "undefined") {
        const availability = await window.LanguageModel.availability();
        nanoAvailable = availability.available;
      } else if (typeof window !== "undefined" && window.ai && window.ai.languageModel) {
        const availability = await window.ai.languageModel.availability();
        nanoAvailable = availability.available;
      }
    } catch (e) {
      console.warn("LanguageModel detection error:", e);
    }
  };

  const initNanoSession = async () => {
    if (nanoSession) return nanoSession;
    if (nanoAvailable === "no") return null;

    try {
      const options = {
        initialPrompts: [
          { role: "system", content: SYSTEM_PROMPT }
        ]
      };

      if (typeof window.LanguageModel !== "undefined") {
        nanoSession = await window.LanguageModel.create(options);
      } else if (window.ai && window.ai.languageModel) {
        nanoSession = await window.ai.languageModel.create(options);
      }
      return nanoSession;
    } catch (err) {
      console.error("Failed to create local Gemini Nano session:", err);
      return null;
    }
  };

  // Run availability check
  checkNanoAvailability();

  chatToggleBtn.addEventListener("click", () => {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle("open", chatOpen);
    chatToggleBtn.classList.toggle("open", chatOpen);
    chatToggleBtn.setAttribute("aria-expanded", String(chatOpen));
    chatPanel.setAttribute("aria-hidden", String(!chatOpen));
    chatToggleBtn.setAttribute("aria-label", chatOpen ? "Close chat assistant" : "Open chat assistant");
    if (chatOpen) {
      chatInput.focus();
      // Warm up Gemini Nano session when chat toggle is clicked
      if (nanoAvailable !== "no") initNanoSession();
    }
  });

  const appendInlineFormattedText = (parent, text) => {
    const segments = String(text ?? "").split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    segments.forEach((segment) => {
      if (segment.startsWith("**") && segment.endsWith("**")) {
        const strong = document.createElement("strong");
        strong.textContent = segment.slice(2, -2);
        parent.appendChild(strong);
      } else {
        parent.appendChild(document.createTextNode(segment));
      }
    });
  };

  const appendFormattedMessage = (container, text) => {
    String(text ?? "")
      .split(/\n{2,}/)
      .map((block) => block.split("\n").filter(Boolean))
      .filter((lines) => lines.length > 0)
      .forEach((lines) => {
        if (lines.every((line) => /^([•-])\s+/.test(line))) {
          const list = document.createElement("ul");
          lines.forEach((line) => {
            const item = document.createElement("li");
            appendInlineFormattedText(item, line.replace(/^([•-])\s+/, ""));
            list.appendChild(item);
          });
          container.appendChild(list);
          return;
        }

        const paragraph = document.createElement("p");
        lines.forEach((line, index) => {
          appendInlineFormattedText(paragraph, line);
          if (index < lines.length - 1) {
            paragraph.appendChild(document.createElement("br"));
          }
        });
        container.appendChild(paragraph);
      });
  };

  const addMessage = (text, role) => {
    const msg = document.createElement("div");
    msg.className = "chat-msg " + role;
    if (role === "bot") {
      appendFormattedMessage(msg, text);
    } else {
      msg.textContent = text;
    }
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const pushConversationEntry = (role, content) => {
    conversationHistory.push({ role, content });
    if (conversationHistory.length > 12) {
      conversationHistory.splice(0, conversationHistory.length - 12);
    }
  };

  const updateChatPendingState = (isPending) => {
    chatRequestInFlight = isPending;
    chatSendBtn.disabled = isPending;
    chatInput.disabled = isPending;
    quickActions.querySelectorAll(".chat-quick-btn").forEach((button) => {
      button.disabled = isPending;
    });
  };

  const readResponsePayload = async (response) => {
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return response.json();
    }

    const text = await response.text();
    return { error: text.trim() };
  };

  const showTyping = () => {
    const typing = document.createElement("div");
    typing.className = "chat-msg bot typing";
    typing.id = "typingIndicator";
    typing.setAttribute("aria-hidden", "true");
    const dots = document.createElement("div");
    dots.className = "typing-dots";
    for (let i = 0; i < 3; i++) dots.appendChild(document.createElement("span"));
    typing.appendChild(dots);
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const removeTyping = () => {
    const el = document.getElementById("typingIndicator");
    if (el) el.remove();
  };

  // Helper to parse and execute agentic commands from response
  const executeAgenticCommands = (reply) => {
    // 1. Calculate Command Parser
    const calculateMatch = reply.match(/\[CALCULATE:\s*([^,]+),\s*([^,]+),\s*([^\]]+)\]/i);
    if (calculateMatch) {
      const poolType = calculateMatch[1].trim().toLowerCase();
      const poolSize = calculateMatch[2].trim().toLowerCase();
      const features = calculateMatch[3].trim().toLowerCase();
      
      if (window.US1PoolsMCP) {
        try {
          const calc = window.US1PoolsMCP.calculatePoolPricing(poolType, poolSize, features);
          setTimeout(() => {
            const card = document.createElement("div");
            card.className = "chat-calculation-card";
            card.innerHTML = `
              <div class="chat-calc-title">🏊 Estimated Price Range</div>
              <div class="chat-calc-desc">${calc.description}</div>
              <div class="chat-calc-price">${calc.formattedEstimate}</div>
              <div class="chat-calc-footnote">This is a rough estimate. For an accurate quote, drop by our showroom or click below!</div>
              <a href="/contact.html" class="chat-calc-btn">Request a Final Quote</a>
            `;
            chatMessages.appendChild(card);
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }, 800);
        } catch (e) {
          console.error("Local calculation failed:", e);
        }
      }
    }

    // 2. Gallery Lightbox Opener Parser
    const galleryMatch = reply.match(/\[GALLERY:\s*(\d+)\]/i);
    if (galleryMatch) {
      const index = parseInt(galleryMatch[1], 10);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("us1-pools-open-lightbox", { detail: { index } }));
        addMessage("✨ Opened the gallery lightbox for you!", "bot");
      }, 800);
    }

    // 3. Contact Lead Submission Parser
    const contactMatch = reply.match(/\[CONTACT:\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\]]+)\]/i);
    if (contactMatch) {
      const name = contactMatch[1].trim();
      const email = contactMatch[2].trim();
      const phone = contactMatch[3].trim();
      const message = contactMatch[4].trim();
      
      if (window.US1PoolsMCP) {
        try {
          addMessage("📝 Submitting your quote request to our sales team...", "bot");
          window.US1PoolsMCP.submitContactRequest({ name, email, phone, message }).then(result => {
            setTimeout(() => {
              if (result.success) {
                addMessage("✅ Inquiry submitted successfully! Shayne or the team will get in touch with you shortly.", "bot");
              } else {
                 addMessage(`❌ Submission failed: ${result.message}. Please call us at 919.441.0033!`, "bot");
              }
            }, 800);
          });
        } catch (e) {
          console.error("Local contact submit failed:", e);
        }
      }
    }
  };

  const sendChatMessage = async (text) => {
    const trimmedText = text.trim().slice(0, 500);
    if (!trimmedText || chatRequestInFlight) return;

    addMessage(trimmedText, "user");
    chatInput.value = "";
    quickActions.style.display = "none";
    pushConversationEntry("user", trimmedText);

    showTyping();
    updateChatPendingState(true);

    // Dynamic Route: Built-in Chrome Gemini Nano (Local) vs Vercel Serverless Fallback (Cloud)
    if (nanoAvailable !== "no") {
      try {
        const session = await initNanoSession();
        if (session) {
          // Construct conversational context history
          let fullPrompt = trimmedText;
          if (conversationHistory.length > 0) {
            const historyText = conversationHistory
              .map((h) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`)
              .join("\n");
            fullPrompt = `${historyText}\nUser: ${trimmedText}\nAssistant:`;
          }

          const rawReply = await session.prompt(fullPrompt);
          removeTyping();
          updateChatPendingState(false);

          if (rawReply) {
            // Clean commands out of the visible bot message
            const cleanReply = rawReply.replace(/\[(CALCULATE|CONTACT|GALLERY):[^\]]+\]/g, "").trim();
            addMessage(cleanReply || "Sure, let me help you with that!", "bot");
            pushConversationEntry("assistant", cleanReply || "Helpful guidance");
            
            // Execute any embedded agentic command
            executeAgenticCommands(rawReply);
          } else {
            throw new Error("Empty local LLM reply");
          }
          
          if (chatOpen) chatInput.focus();
          return; // Skip cloud fallback
        }
      } catch (err) {
        console.warn("Local Gemini Nano execution failed, falling back to API:", err);
      }
    }

    // Cloud Fallback pathway
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedText, history: conversationHistory.slice(-10) }),
      });
      const data = await readResponsePayload(response);

      if (response.ok) {
        const reply = data.reply || "Sorry, I couldn't process that. Call us at 919.441.0033!";
        addMessage(reply, "bot");
        pushConversationEntry("assistant", reply);
      } else {
        addMessage(data.error || "Something went wrong. Give us a call at 919.441.0033 and we'll help you out!", "bot");
      }
    } catch (err) {
      addMessage("I'm having trouble connecting. Feel free to call us at 919.441.0033!", "bot");
    } finally {
      removeTyping();
      updateChatPendingState(false);
      if (chatOpen) chatInput.focus();
    }
  };

  chatSendBtn.addEventListener("click", () => sendChatMessage(chatInput.value));
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage(chatInput.value);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatOpen) {
      chatOpen = false;
      chatPanel.classList.remove("open");
      chatToggleBtn.classList.remove("open");
      chatToggleBtn.setAttribute("aria-expanded", "false");
      chatPanel.setAttribute("aria-hidden", "true");
      chatToggleBtn.setAttribute("aria-label", "Open chat assistant");
      chatToggleBtn.focus();
    }
  });

  quickActions.querySelectorAll(".chat-quick-btn").forEach((btn) => {
    btn.addEventListener("click", () => sendChatMessage(btn.dataset.msg));
  });

  /* ── Add Interactive Classes to Existing Elements ───── */
  document.querySelectorAll(".service-card, .list-card, .video-card, .highlight, .trust-item, .stat").forEach((card) => {
    card.classList.add("hover-lift", "card-shine");
  });

  document.querySelectorAll(".image-card").forEach((card) => {
    card.classList.add("card-shine");
  });

  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.classList.add("magnetic-btn");
  });

  document.querySelectorAll(".clinic-card").forEach((card) => {
    card.classList.add("tilt-card");
  });

/* ── Cookie Consent Banner ─────────────────────────────── */
const cookieBanner = document.createElement("div");
cookieBanner.className = "cookie-banner";
cookieBanner.setAttribute("role", "region");
cookieBanner.setAttribute("aria-label", "Cookie consent");

const cookieText = document.createElement("p");
cookieText.innerHTML = 'We use minimal cookies for payment processing. We use <a href="https://plausible.io" target="_blank" rel="noopener noreferrer">Plausible Analytics</a> which is cookie-free. <a href="privacy-policy.html">Privacy Policy</a>';

const cookieActions = document.createElement("div");
cookieActions.className = "cookie-banner-actions";

const acceptBtn = document.createElement("button");
acceptBtn.type = "button";
acceptBtn.className = "btn-accept";
acceptBtn.textContent = "Got it";
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("us1pools_cookie_consent", "accepted");
  cookieBanner.classList.remove("is-visible");
});

cookieActions.appendChild(acceptBtn);
cookieBanner.appendChild(cookieText);
cookieBanner.appendChild(cookieActions);
document.body.appendChild(cookieBanner);

if (!localStorage.getItem("us1pools_cookie_consent")) {
  setTimeout(() => cookieBanner.classList.add("is-visible"), 1500);
}
})();
