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
      brandLogo.style.transform = "translateY(" + drift + "px) rotate(" + (-drift * 0.8) + "deg)";
    }
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

  /* ── Bubble Particle System ────────────────────────────── */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) {
    const BUBBLE_COUNT = 12;
    const bubbleContainer = document.createDocumentFragment();

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = 4 + Math.random() * 14;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      bubble.style.left = (Math.random() * 100) + "%";
      bubble.style.bottom = "-20px";
      bubble.style.animationDuration = (12 + Math.random() * 18) + "s";
      bubble.style.animationDelay = (Math.random() * 10) + "s";
      bubble.style.opacity = String(0.15 + Math.random() * 0.35);
      bubbleContainer.appendChild(bubble);
    }
    document.body.appendChild(bubbleContainer);
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

  /* ── Gallery Filter ────────────────────────────────────── */
  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-category]");

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        galleryItems.forEach((item) => {
          const categories = item.dataset.category?.split(" ") || [];
          const isMatch = filter === "all" || categories.includes(filter);
          item.classList.toggle("is-hidden", !isMatch);
        });
      });
    });
  }

  /* ── Contact Form ──────────────────────────────────────── */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("submitBtn");
      const formStatus = document.getElementById("formStatus");
      const data = Object.fromEntries(new FormData(contactForm).entries());

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      formStatus.style.display = "none";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok) {
          formStatus.className = "form-status success";
          formStatus.textContent = result.message || "Thank you! We'll be in touch soon.";
          formStatus.style.display = "block";
          contactForm.reset();
        } else {
          throw new Error(result.error || "Something went wrong");
        }
      } catch (err) {
        formStatus.className = "form-status error";
        formStatus.textContent = err.message || "Failed to send. Please call us at (919) 441-0033.";
        formStatus.style.display = "block";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send project details";
      }
    });
  }

  /* ── Gallery Lightbox ──────────────────────────────────── */
  const galleryImages = document.querySelectorAll(".image-card img");
  let currentImageIndex = 0;
  const lightboxImages = [];

  if (galleryImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const closeBtn = document.createElement("button");
    closeBtn.className = "lightbox-close";
    closeBtn.setAttribute("aria-label", "Close lightbox");
    closeBtn.textContent = "\u00D7";

    const prevBtn = document.createElement("button");
    prevBtn.className = "lightbox-prev";
    prevBtn.setAttribute("aria-label", "Previous image");
    prevBtn.textContent = "\u2039";

    const nextBtn = document.createElement("button");
    nextBtn.className = "lightbox-next";
    nextBtn.setAttribute("aria-label", "Next image");
    nextBtn.textContent = "\u203A";

    const lbImage = document.createElement("img");
    lbImage.className = "lightbox-image";
    lbImage.alt = "";

    const lbCaption = document.createElement("div");
    lbCaption.className = "lightbox-caption";

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);
    lightbox.appendChild(lbImage);
    lightbox.appendChild(lbCaption);
    document.body.appendChild(lightbox);

    const showLightbox = (idx) => {
      currentImageIndex = idx;
      const img = lightboxImages[idx];
      lbImage.src = img.src;
      lbImage.alt = img.alt;
      lbCaption.textContent = img.alt || "";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    };

    const showNext = () => showLightbox((currentImageIndex + 1) % lightboxImages.length);
    const showPrev = () => showLightbox((currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length);

    galleryImages.forEach((img, i) => {
      lightboxImages.push(img);
      img.style.cursor = "pointer";
      img.addEventListener("click", () => showLightbox(i));
    });

    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
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

  // Header
  const chatHeader = document.createElement("div");
  chatHeader.className = "chat-header";
  const avatar = document.createElement("div");
  avatar.className = "chat-header-avatar";
  avatar.textContent = "\uD83C\uDF0A";
  const headerInfo = document.createElement("div");
  headerInfo.className = "chat-header-info";
  const headerTitle = document.createElement("h4");
  headerTitle.textContent = "US-1 Pools Assistant";
  const headerSub = document.createElement("p");
  headerSub.textContent = "Ask about pools, spas, or services";
  headerInfo.appendChild(headerTitle);
  headerInfo.appendChild(headerSub);
  chatHeader.appendChild(avatar);
  chatHeader.appendChild(headerInfo);
  chatPanel.appendChild(chatHeader);

  // Messages
  const chatMessages = document.createElement("div");
  chatMessages.className = "chat-messages";
  chatMessages.id = "chatMessages";
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
  const chatSendBtn = document.createElement("button");
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

  chatToggleBtn.addEventListener("click", () => {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle("open", chatOpen);
    chatToggleBtn.classList.toggle("open", chatOpen);
    if (chatOpen) chatInput.focus();
  });

  const addMessage = (text, role) => {
    const msg = document.createElement("div");
    msg.className = "chat-msg " + role;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const showTyping = () => {
    const typing = document.createElement("div");
    typing.className = "chat-msg bot typing";
    typing.id = "typingIndicator";
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
    if (!text.trim()) return;
    addMessage(text, "user");
    chatInput.value = "";
    quickActions.style.display = "none";
    conversationHistory.push({ role: "user", content: text });

    showTyping();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: conversationHistory.slice(-10) }),
      });

      removeTyping();

      if (response.ok) {
        const data = await response.json();
        const reply = data.reply || "Sorry, I couldn't process that. Call us at 919.441.0033!";
        addMessage(reply, "bot");
        conversationHistory.push({ role: "assistant", content: reply });
      } else {
        addMessage("Something went wrong. Give us a call at 919.441.0033 and we'll help you out!", "bot");
      }
    } catch (err) {
      removeTyping();
      addMessage("I'm having trouble connecting. Feel free to call us at 919.441.0033!", "bot");
    }
  };

  chatSendBtn.addEventListener("click", () => sendChatMessage(chatInput.value));
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendChatMessage(chatInput.value);
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
