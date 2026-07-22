/* NoorAsk - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initMobileMenu();
  initFaqAccordion();
  initScrollShadow();
  initSmoothScroll();
});

/* Navbar scroll shadow */
function initScrollShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function updateShadow() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  updateShadow();
  window.addEventListener('scroll', updateShadow, { passive: true });
}

/* Mobile menu toggle */
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    if (icon) {
      if (menu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
}

/* FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all items in the same category
      const category = item.closest('.faq-category');
      if (category) {
        category.querySelectorAll('.faq-item').forEach(function(otherItem) {
          otherItem.classList.remove('active');
        });
      }

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* Smooth scroll for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* Highlight current nav item based on page */
function initNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === './' + currentPage || (currentPage === '' && href === './index.html')) {
      link.classList.add('active');
    }
  });
}
