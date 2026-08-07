export function initHero() {
  // Count-up animation for stats
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCountUp(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-countup]').forEach(el => obs.observe(el));

  function animateCountUp(el) {
    const text = el.textContent.trim();
    const match = text.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const decimals = (numStr.split('.')[1] || '').length;
    const hasComma = numStr.includes(',');
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 4); // ease-out quart
      const current = target * ease;
      let formatted = current.toFixed(decimals);
      if (hasComma) {
        formatted = Number(formatted).toLocaleString('en-US', { minimumFractionDigits: decimals });
      }
      el.textContent = prefix + formatted + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = text;
    }

    requestAnimationFrame(frame);
  }
}
