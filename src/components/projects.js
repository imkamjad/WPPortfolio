import projectsData from '../data/projects.json';

export function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');

    return `
      <a href="${p.link}" target="_blank" rel="noopener" class="pcard reveal" style="--d:${i * 0.05}s">

        <div class="pcard-media">
          <div class="frame-browser">
            <div class="browser-bar">
              <span class="browser-dot"></span>
              <span class="browser-dot"></span>
              <span class="browser-dot"></span>
            </div>
            <div style="padding:16px 18px;background:var(--bg-3);">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <span class="display" style="font-size:0.9rem;color:#fff;">${p.name}</span>
                <span class="mono" style="font-size:0.6rem;color:var(--accent);padding:2px 6px;background:rgba(232,85,47,0.12);border-radius:4px;">${p.badge}</span>
              </div>
              <p style="font-size:0.72rem;color:var(--ink-dim);line-height:1.5;margin-bottom:12px;">${p.tagline}</p>
              <div style="display:flex;gap:16px;padding-top:8px;border-top:1px solid var(--line);font-size:0.62rem;">
                ${p.metrics.map(m => `
                  <div>
                    <span style="color:var(--accent);font-weight:700;font-family:'JetBrains Mono',monospace;">${m.val}</span>
                    <span style="color:var(--ink-faint);margin-left:3px;">${m.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <span class="pcard-num mono">// ${num}</span>
        </div>

        <div class="pcard-body">
          <div class="pcard-toprow">
            <span class="tag-label">${p.categoryLabel}</span>
            <span class="pcard-status mono">Live · Production</span>
          </div>
          <h3 class="display">${p.name}</h3>
          <p>${p.tagline}</p>
          <div class="pcard-stack mono">${p.stack.join(' · ')}</div>
          <span class="pcard-cta mono">Case study <span class="arrow">→</span></span>
        </div>

      </a>
    `;
  }).join('');
}
