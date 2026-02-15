/**
 * Kaiying Wu – Academic Personal Website
 * Minimal JavaScript for navigation toggle and smooth interactions
 */

(function () {
  'use strict';

  /* =================== MOBILE NAV TOGGLE =================== */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  /* =================== CLOSE NAV ON OUTSIDE CLICK =================== */
  document.addEventListener('click', function (e) {
    if (navLinks && navLinks.classList.contains('is-open')) {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('is-open');
      }
    }
  });

  /* =================== ACTIVE NAV HIGHLIGHT =================== */
  const sections = document.querySelectorAll('.section[id]');
  const navItems = document.querySelectorAll('.masthead__links a');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(function (item) {
          item.classList.remove('is-active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* =================== MASTHEAD SHADOW ON SCROLL =================== */
  const masthead = document.getElementById('masthead');

  function updateMasthead() {
    if (window.scrollY > 10) {
      masthead.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
    } else {
      masthead.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', updateMasthead, { passive: true });
  updateMasthead();

})();
