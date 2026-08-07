export function initCommandPalette() {
  const modalHtml = `
    <div id="cmd-k-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-200">
      <div class="w-full max-w-xl bg-[#0C1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-all duration-200" id="cmd-k-box">
        
        <!-- Input Header -->
        <div class="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <svg class="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" id="cmd-k-input" placeholder="Type a command or search section (e.g. 'work', 'speed', 'email')..." class="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono" />
          <kbd class="px-2 py-1 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded">ESC</kbd>
        </div>

        <!-- Options List -->
        <div class="p-2 max-h-80 overflow-y-auto space-y-1 font-mono text-xs text-slate-300" id="cmd-k-options">
          <button data-action="goto-work" class="cmd-option w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-accent transition-colors">
            <span class="flex items-center gap-2"><span>📂</span> View Selected Work & Case Studies</span>
            <kbd class="text-[10px] text-slate-500">Jump</kbd>
          </button>
          <button data-action="goto-services" class="cmd-option w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-accent transition-colors">
            <span class="flex items-center gap-2"><span>⚡</span> Website Speed & Core Web Vitals Audit</span>
            <kbd class="text-[10px] text-slate-500">Jump</kbd>
          </button>
          <button data-action="goto-terminal" class="cmd-option w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-accent transition-colors">
            <span class="flex items-center gap-2"><span>💻</span> Open Interactive Terminal</span>
            <kbd class="text-[10px] text-slate-500">CLI</kbd>
          </button>
          <button data-action="copy-email" class="cmd-option w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-accent transition-colors">
            <span class="flex items-center gap-2"><span>📧</span> Copy Developer Email (alex@example.com)</span>
            <kbd class="text-[10px] text-slate-500">Copy</kbd>
          </button>
          <button data-action="goto-contact" class="cmd-option w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-accent transition-colors">
            <span class="flex items-center gap-2"><span>💬</span> Schedule a Project Scope Call</span>
            <kbd class="text-[10px] text-slate-500">Form</kbd>
          </button>
        </div>

        <!-- Footer -->
        <div class="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation Palette</span>
          <span>Use ↑ ↓ to navigate, ESC to close</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('cmd-k-modal');
  const box = document.getElementById('cmd-k-box');
  const input = document.getElementById('cmd-k-input');
  const options = document.querySelectorAll('.cmd-option');

  function openModal() {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    box.classList.remove('scale-95');
    box.classList.add('scale-100');
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    box.classList.remove('scale-100');
    box.classList.add('scale-95');
  }

  // Trigger buttons
  document.querySelectorAll('.cmd-k-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Keyboard shortcut (Cmd+K / Ctrl+K / ESC)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('opacity-0')) openModal();
      else closeModal();
    }
    if (e.key === 'Escape') closeModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Option actions
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const action = opt.getAttribute('data-action');
      closeModal();

      if (action === 'goto-work') document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      if (action === 'goto-services') document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      if (action === 'goto-terminal') document.getElementById('terminal-section')?.scrollIntoView({ behavior: 'smooth' });
      if (action === 'goto-contact') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      if (action === 'copy-email') {
        navigator.clipboard.writeText('alex@example.com');
        const toast = document.getElementById('toast-notification');
        if (toast) {
          toast.querySelector('.toast-message').textContent = '📋 Email copied to clipboard!';
          toast.classList.remove('translate-y-20', 'opacity-0');
          setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
        }
      }
    });
  });

  // Search filter
  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    options.forEach(opt => {
      const text = opt.textContent.toLowerCase();
      if (text.includes(query)) opt.classList.remove('hidden');
      else opt.classList.add('hidden');
    });
  });
}
