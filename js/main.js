document.addEventListener('DOMContentLoaded', function () {

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Hamburger menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');

  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  }

  // Active navigation link
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
    // Remove active class from other links
    else {
      link.classList.remove('active');
    }
  });

});
