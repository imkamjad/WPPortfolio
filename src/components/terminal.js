export function initTerminal() {
  const terminalInput = document.getElementById('term-input');
  const terminalOutput = document.getElementById('term-output');
  const quickCmdBtns = document.querySelectorAll('.term-quick-cmd');

  if (!terminalInput || !terminalOutput) return;

  const commands = {
    help: `Available commands:
  • <span class="text-accent">stack</span>     : Display core tech stack & WordPress tools
  • <span class="text-accent">speed</span>     : Show performance optimization benchmark stats
  • <span class="text-accent">bio</span>       : Short developer summary & background
  • <span class="text-accent">contact</span>   : Get direct contact links (Email/WhatsApp)
  • <span class="text-accent">clear</span>     : Clear terminal console screen`,

    stack: `<span class="text-emerald-400">=== CORE WORDPRESS ARCHITECTURE ===</span>
  [Frontend]  : HTML5, Tailwind CSS, Native Gutenberg, Vue.js, Alpine.js
  [Backend]   : PHP 8.2, WordPress REST API, Custom Plugins, ACF Pro
  [Database]  : MySQL 8, Redis Object Caching, Custom Query Indexing
  [Server]    : Cloudflare Enterprise WAF, Nginx, LiteSpeed, Docker`,

    speed: `<span class="text-accent">=== PERFORMANCE BENCHMARK STANDARDS ===</span>
  • Average Mobile PageSpeed : <span class="text-emerald-400 font-bold">98/100</span>
  • Target Server Load Time  : <span class="text-emerald-400 font-bold">&lt; 0.9s</span>
  • Core Web Vitals Status   : <span class="text-emerald-400 font-bold">PASS (All Green)</span>
  • DOM Node Limit           : &lt; 600 nodes (Zero Elementor Bloat)`,

    bio: `<span class="text-blue-400">=== DEVELOPER PROFILE ===</span>
  Developer : Alex Morgan
  Location  : Senior Remote Engineer
  Specialty : Custom WordPress Themes, WooCommerce Scaling, PageSpeed
  Motto     : "Clean code over heavy plugins."`,

    contact: `<span class="text-accent">=== DIRECT CONTACT INFO ===</span>
  Email    : alex@example.com
  WhatsApp : +1 (234) 567-890
  Upwork   : top-rated-wordpress-architect
  Status   : <span class="text-emerald-400">Available for new client projects</span>`
  };

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();

    if (cleanCmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const commandLineHtml = `
      <div class="flex items-center gap-2 text-slate-400 mt-2">
        <span class="text-accent font-bold">alex@wp-terminal:~$</span>
        <span class="text-white">${cmd}</span>
      </div>
    `;

    let responseHtml = '';
    if (commands[cleanCmd]) {
      responseHtml = `<div class="pl-4 text-slate-300 whitespace-pre-line leading-relaxed my-1">${commands[cleanCmd]}</div>`;
    } else if (cleanCmd !== '') {
      responseHtml = `<div class="pl-4 text-red-400 my-1">zsh: command not found: ${cleanCmd}. Type '<span class="text-accent">help</span>' for available options.</div>`;
    }

    terminalOutput.insertAdjacentHTML('beforeend', commandLineHtml + responseHtml);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}
