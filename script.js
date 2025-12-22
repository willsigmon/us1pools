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
