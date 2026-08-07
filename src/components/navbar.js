export function initNavbar() {
  const nav = document.querySelector('.site-nav');
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.nav-drawer');

  // Scroll shadow
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  // Mobile drawer toggle
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const isOpen = !drawer.hasAttribute('hidden');
      if (isOpen) {
        drawer.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('open');
      } else {
        drawer.removeAttribute('hidden');
        burger.setAttribute('aria-expanded', 'true');
        burger.classList.add('open');
      }
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.setAttribute('hidden', '');
        burger.classList.remove('open');
      });
    });
  }
}
