(() => {
  "use strict";

  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-category]");

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        galleryItems.forEach((item) => {
          const categories = item.dataset.category?.split(" ") || [];
          const isMatch = filter === "all" || categories.includes(filter);
          item.classList.toggle("is-hidden", !isMatch);
          item.setAttribute("aria-hidden", String(!isMatch));
        });
      });
    });
  }

  const galleryImages = document.querySelectorAll(".gallery-grid .image-card img");
  let currentImageIndex = 0;
  let lastFocusedImage = null;
  const lightboxImages = [];

  if (galleryImages.length === 0) return;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image viewer");

  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close lightbox");
  closeBtn.textContent = "\u00D7";

  const prevBtn = document.createElement("button");
  prevBtn.className = "lightbox-prev";
  prevBtn.type = "button";
  prevBtn.setAttribute("aria-label", "Previous image");
  prevBtn.textContent = "\u2039";

  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-next";
  nextBtn.type = "button";
  nextBtn.setAttribute("aria-label", "Next image");
  nextBtn.textContent = "\u203A";

  const lbImage = document.createElement("img");
  lbImage.className = "lightbox-image";
  lbImage.alt = "";

  const lbCaption = document.createElement("div");
  lbCaption.className = "lightbox-caption";
  lbCaption.id = "lightboxCaption";
  lightbox.setAttribute("aria-describedby", "lightboxCaption");

  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(nextBtn);
  lightbox.appendChild(lbImage);
  lightbox.appendChild(lbCaption);
  document.body.appendChild(lightbox);

  let inertedElements = [];
  const setBackgroundInert = (isInert) => {
    if (isInert) {
      inertedElements = Array.from(document.body.children).filter((element) => element !== lightbox);
      inertedElements.forEach((element) => { element.inert = true; });
      return;
    }

    inertedElements.forEach((element) => { element.inert = false; });
    inertedElements = [];
  };

  const trapLightboxFocus = (e) => {
    if (e.key !== "Tab" || !lightbox.classList.contains("active")) return;
    const focusable = [closeBtn, prevBtn, nextBtn].filter((element) => !element.disabled);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const showLightbox = (idx, sourceImage) => {
    currentImageIndex = idx;
    lastFocusedImage = sourceImage || lightboxImages[idx];
    const img = lightboxImages[idx];
    lbImage.src = img.src;
    lbImage.alt = img.alt;
    lbCaption.textContent = img.alt || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    setBackgroundInert(true);
    closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    setBackgroundInert(false);
    lastFocusedImage?.focus();
  };

  const showNext = () => showLightbox((currentImageIndex + 1) % lightboxImages.length);
  const showPrev = () => showLightbox((currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length);

  galleryImages.forEach((img, i) => {
    lightboxImages.push(img);
    img.style.cursor = "pointer";
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `${img.alt || "Open image"} (opens large view)`);
    img.addEventListener("click", () => showLightbox(i, img));
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showLightbox(i, img);
      }
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    trapLightboxFocus(e);
  });
})();

