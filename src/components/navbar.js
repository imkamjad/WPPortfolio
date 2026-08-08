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
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        burger.setAttribute('aria-expanded', 'true');
        burger.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}
