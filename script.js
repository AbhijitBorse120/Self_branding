document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
    
    cursorRing.animate({
      transform: `translate(${posX}px, ${posY}px)`
    }, { duration: 500, fill: "forwards" });
  });

  const interactiveElems = document.querySelectorAll('a, button, .project-card, .achievement-badge, .hamburger');
  interactiveElems.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  const marqueeContent = document.querySelector('.marquee-content');
  if (marqueeContent) {
    const clone = marqueeContent.innerHTML;
    marqueeContent.insertAdjacentHTML('beforeend', clone);
  }

  const heroBg = document.querySelector('.hero-bg-image');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos < window.innerHeight && heroBg) {
      heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 15, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.alignItems = 'center';
      }
    });
  }
});
