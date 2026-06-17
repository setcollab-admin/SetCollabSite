// SetCollab site.js
// Lightweight site interactions

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active nav link highlight
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = '#0d7a75';
      link.style.fontWeight = '600';
    }
  });

});
