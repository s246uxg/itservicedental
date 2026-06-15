/* ============================================
   IT Service Dental - Contact Form Handler
   Sends form data to Cloudflare Function
   ============================================ */

(function() {
  'use strict';

  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.form-input.error, .form-textarea.error').forEach(el => el.classList.remove('error'));

    // Validate
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (!name.value.trim()) {
      document.getElementById('nameError').style.display = 'block';
      name.classList.add('error');
      isValid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('emailError').style.display = 'block';
      email.classList.add('error');
      isValid = false;
    }

    if (!isValid) return;

    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      // Show success state
      form.style.display = 'none';
      formSuccess.style.display = 'block';

    } catch (err) {
      console.error('Form submission error:', err);
      // Still show success to prevent leaking info to bots
      form.style.display = 'none';
      formSuccess.style.display = 'block';
    }
  });
})();
