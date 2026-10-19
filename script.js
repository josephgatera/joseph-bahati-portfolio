
"use strict";

// Update the copyright year automatically.
document.querySelectorAll(".current-year").forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

// Demonstration contact form.
// This validates the form and shows a message, but does not send email.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const feedback = document.getElementById("formFeedback");

    if (feedback) {
      feedback.className = "alert alert-success mt-3";
      feedback.textContent =
        "Demo only: your form passed validation. No message was sent.";
    }

    contactForm.reset();
  });
}
