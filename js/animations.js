/* ============================================
   IT Service Dental - Scroll Animations
   ============================================ */

(function() {
  'use strict';

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-delay')) || 0;

          setTimeout(() => {
            el.classList.add('visible');
          }, delay);

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }

  // Also run for dynamically added content
  window.initScrollAnimations = initScrollAnimations;
})();
