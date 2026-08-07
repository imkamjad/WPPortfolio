export function initSpeedBenchmark() {
  const slider = document.getElementById('benchmark-slider');
  const loadTimeEl = document.getElementById('bench-load-time');
  const pageSizeEl = document.getElementById('bench-page-size');
  const pluginsEl = document.getElementById('bench-plugins');
  const scoreEl = document.getElementById('bench-score');
  const statusBadge = document.getElementById('bench-status-badge');

  if (!slider) return;

  slider.addEventListener('input', () => {
    const val = parseInt(slider.value, 10); // 0 (bloated) to 100 (optimized)

    // Calculate dynamic values
    const loadTime = (7.8 - (val / 100) * 7.0).toFixed(1); // 7.8s down to 0.8s
    const pageSize = (14.2 - (val / 100) * 13.8).toFixed(1); // 14.2MB down to 0.4MB
    const plugins = Math.round(65 - (val / 100) * 58); // 65 plugins down to 7
    const score = Math.round(28 + (val / 100) * 71); // 28 score up to 99

    loadTimeEl.textContent = `${loadTime}s`;
    pageSizeEl.textContent = `${pageSize}MB`;
    pluginsEl.textContent = `${plugins}`;
    scoreEl.textContent = `${score}/100`;

    if (val < 40) {
      scoreEl.className = 'text-3xl font-bold font-mono text-red-500';
      statusBadge.className = 'px-3 py-1 text-xs font-mono rounded-full bg-red-500/10 text-red-400 border border-red-500/20';
      statusBadge.textContent = '❌ FAILED Core Web Vitals (Unoptimized Bloat)';
    } else if (val < 85) {
      scoreEl.className = 'text-3xl font-bold font-mono text-yellow-400';
      statusBadge.className = 'px-3 py-1 text-xs font-mono rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20';
      statusBadge.textContent = '⚠️ Average Speed (Needs Optimization)';
    } else {
      scoreEl.className = 'text-3xl font-bold font-mono text-emerald-400';
      statusBadge.className = 'px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      statusBadge.textContent = '⚡ PASSED (Alex Morgan Optimized Standard)';
    }
  });
}
