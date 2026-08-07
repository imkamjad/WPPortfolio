import './style.css';
import { initNavbar } from './components/navbar.js';
import { initHero } from './components/hero.js';
import { initProjects } from './components/projects.js';
import { initContactForm } from './components/contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  initNavbar();
  initHero();
  initProjects();
  initContactForm();

  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
