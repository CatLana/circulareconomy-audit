/* main.js — navigation state & scroll effects */
(function () {
  'use strict';

  // ── Active nav link based on current page ──────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      href === currentPath ||
      (currentPath === '' && href === 'index.html') ||
      (currentPath === 'index.html' && href === 'index.html') ||
      (currentPath === 'solution.html' && href === 'solution.html')
    ) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // ── Sticky nav shadow on scroll ────────────────────────────
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 4) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close on nav link click (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  }
})();
