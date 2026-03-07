/* ============================================================
   US-1 Pools — Interactive Script
   Patterns adapted from willsigmon.media + carterhelms.com
   ============================================================ */

(() => {
  "use strict";

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
  const brandLogo = header && header.querySelector(".brand img");

  const onScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;
    progressBar.style.transform = "scaleX(" + progress + ")";

    if (header) {
      header.classList.toggle("scrolled", scrollY > 40);
    }

    if (brandLogo) {
      const drift = Math.min(scrollY * 0.04, 6);
      brandLogo.style.transform = "translateY(" + drift + "px) rotate(" + (-drift * 0.3) + "deg)";
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

  chatToggleBtn.addEventListener("click", () => {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle("open", chatOpen);
    chatToggleBtn.classList.toggle("open", chatOpen);
    chatToggleBtn.setAttribute("aria-expanded", String(chatOpen));
    chatPanel.setAttribute("aria-hidden", String(!chatOpen));
    chatToggleBtn.setAttribute("aria-label", chatOpen ? "Close chat assistant" : "Open chat assistant");
    if (chatOpen) chatInput.focus();
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

  const sendChatMessage = async (text) => {
    const trimmedText = text.trim().slice(0, 500);
    if (!trimmedText || chatRequestInFlight) return;

    addMessage(trimmedText, "user");
    chatInput.value = "";
    quickActions.style.display = "none";
    pushConversationEntry("user", trimmedText);

    showTyping();
    updateChatPendingState(true);

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
})();
