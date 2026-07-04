(() => {
  "use strict";

  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  const readResponsePayload = async (response) => {
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return response.json();
    }

    const text = await response.text();
    return { error: text.trim() };
  };

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    const formStatus = document.getElementById("formStatus");
    const data = Object.fromEntries(new FormData(contactForm).entries());

    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-busy", "true");
    submitBtn.textContent = "Sending...";
    formStatus.hidden = true;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await readResponsePayload(response);
      if (response.ok) {
        formStatus.className = "form-status success";
        formStatus.setAttribute("role", "status");
        formStatus.textContent = result.message || "Thank you! We'll be in touch soon.";
        formStatus.hidden = false;
        contactForm.reset();
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      formStatus.className = "form-status error";
      formStatus.setAttribute("role", "alert");
      formStatus.textContent = err.message || "Failed to send. Please call us at (919) 441-0033.";
      formStatus.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.removeAttribute("aria-busy");
      submitBtn.textContent = "Get a Free Quote";
    }
  });
})();

