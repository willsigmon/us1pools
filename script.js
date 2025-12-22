const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

const closeNavMenus = () => {
  if (navLinks) {
    navLinks.classList.remove("open");
  }
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
  dropdownToggles.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    const wrapper = button.closest(".nav-dropdown");
    if (wrapper) {
      wrapper.classList.remove("open");
    }
  });
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a") && navLinks.classList.contains("open")) {
      closeNavMenus();
    }
  });
}

dropdownToggles.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const wrapper = button.closest(".nav-dropdown");
    const isOpen = wrapper ? wrapper.classList.toggle("open") : false;
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!navLinks || !navToggle) {
    return;
  }
  if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
    closeNavMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavMenus();
  }
});

const currentPage = document.body.dataset.page;
if (currentPage) {
  document.querySelectorAll(`[data-page-link="${currentPage}"]`).forEach((link) => {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  });
}

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

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const formStatus = document.getElementById("formStatus");
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Update button state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.style.display = "none";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
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
    } catch (error) {
      formStatus.className = "form-status error";
      formStatus.textContent = error.message || "Failed to send. Please call us at (919) 880-4323.";
      formStatus.style.display = "block";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send project details";
    }
  });
}

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".image-card img");
let currentImageIndex = 0;
let lightboxImages = [];

if (galleryImages.length > 0) {
  // Create lightbox element
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
    <button class="lightbox-next" aria-label="Next image">&rsaquo;</button>
    <img class="lightbox-image" alt="" />
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  const showLightbox = (index) => {
    currentImageIndex = index;
    const img = lightboxImages[index];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };

  const showNext = () => {
    currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
    showLightbox(currentImageIndex);
  };

  const showPrev = () => {
    currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
    showLightbox(currentImageIndex);
  };

  galleryImages.forEach((img, index) => {
    lightboxImages.push(img);
    img.style.cursor = "pointer";
    img.addEventListener("click", () => showLightbox(index));
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
  });
}

// Seasonal Messaging
const updateSeasonalMessage = () => {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const seasonalElements = document.querySelectorAll("[data-seasonal]");

  let message = "Closed for winter — call for appointments";
  let isWinter = month >= 10 || month <= 2; // Nov-Feb

  if (!isWinter) {
    // Spring/Summer/Fall hours
    message = "Mon-Fri 10am-5pm, Sat 10am-2pm";
  }

  seasonalElements.forEach(el => {
    el.textContent = message;
  });
};

// Run on page load
updateSeasonalMessage();
