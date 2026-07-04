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

  const lightbox = document.createElement("dialog");
  lightbox.className = "lightbox";
  lightbox.id = "gallery-lightbox";
  lightbox.setAttribute("closedby", "any");
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

  const showLightbox = (idx, sourceImage) => {
    currentImageIndex = idx;
    lastFocusedImage = sourceImage || lightboxImages[idx];
    const img = lightboxImages[idx];
    lbImage.src = img.src;
    lbImage.alt = img.alt;
    lbCaption.textContent = img.alt || "";
    if (!lightbox.open) {
      lightbox.showModal();
    }
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const closeLightbox = () => {
    if (lightbox.open) {
      lightbox.close();
    }
  };

  lightbox.addEventListener("close", () => {
    document.body.style.overflow = "";
    lastFocusedImage?.focus();
  });

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
  
  // Backdrop click handler for Safari/older browser compatibility
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.open) return;
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Listen for agentic custom window events to open lightbox programmatically
  window.addEventListener("us1-pools-open-lightbox", (e) => {
    const idx = e.detail && typeof e.detail.index === "number" ? e.detail.index : 0;
    if (idx >= 0 && idx < lightboxImages.length) {
      showLightbox(idx);
    }
  });
})();

