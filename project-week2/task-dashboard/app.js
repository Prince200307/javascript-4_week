// ============================================
// Dark Mode Toggle — Task Dashboard
// ============================================

(function () {
    'use strict';

    // --------------------------------------------------
    // 1. Inject the dark-mode toggle button into the navbar
    // --------------------------------------------------
    const navActions = document.querySelector('nav .flex.items-center.gap-2\\.5');

    if (navActions) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'dark-mode-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.className =
            'relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/30 hover:border-indigo-400 text-white text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400';
        toggleBtn.innerHTML = '🌙';
        navActions.prepend(toggleBtn);
    }

    // --------------------------------------------------
    // 2. CSS colour-palette overrides for dark mode
    //    Injected as a <style> block so the HTML stays untouched
    // --------------------------------------------------
    const darkStyles = document.createElement('style');
    darkStyles.id = 'dark-mode-styles';
    darkStyles.textContent = `
    /* ---------- TRANSITIONS ---------- */
    html.dark-transition,
    html.dark-transition *,
    html.dark-transition *::before,
    html.dark-transition *::after {
      transition: background-color 0.35s ease,
                  color            0.35s ease,
                  border-color     0.35s ease,
                  box-shadow       0.35s ease !important;
    }

    /* ---------- BASE ---------- */
    html.dark body {
      background-color: #0f172a;          /* slate-900 */
      color: #e2e8f0;                     /* slate-200 */
    }

    /* ---------- NAVBAR ---------- */
    html.dark nav.sticky {
      background-color: #1e1b4b;          /* indigo-950 */
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    }
    html.dark nav .bg-white.text-gray-800,
    html.dark nav .bg-opacity-10 {
      background-color: rgba(255,255,255,0.08);
      color: #c7d2fe;                     /* indigo-200 */
    }

    /* ---------- HEADER ---------- */
    html.dark header {
      border-color: #334155;              /* slate-700 */
    }
    html.dark h1.text-slate-800,
    html.dark h1 {
      color: #f1f5f9;                     /* slate-100 */
    }
    html.dark .text-gray-600 {
      color: #94a3b8 !important;          /* slate-400 */
    }

    /* ---------- STAT CARDS ---------- */
    html.dark header .bg-white {
      background-color: #1e293b;          /* slate-800 */
      border-color: #475569;             /* slate-600 */
    }
    html.dark header .text-blue-500 {
      color: #818cf8 !important;          /* indigo-400 */
    }
    html.dark header .text-gray-700 {
      color: #cbd5e1 !important;          /* slate-300 */
    }

    /* ---------- SEARCH BAR ---------- */
    html.dark #task-search {
      background-color: #1e293b;
      border-color: #475569;
      color: #e2e8f0;
    }
    html.dark #task-search::placeholder {
      color: #64748b;                     /* slate-500 */
    }
    html.dark #task-search:focus {
      border-color: #818cf8;
      box-shadow: 0 0 0 3px rgba(129,140,248,0.25);
    }

    /* ---------- FILTER BUTTONS ---------- */
    html.dark .filter-btn {
      background-color: #1e293b;
      border-color: #475569;
      color: #cbd5e1;
    }
    html.dark .filter-btn:hover {
      border-color: #818cf8 !important;
      color: #a5b4fc !important;
    }
    html.dark .filter-btn:active {
      background-color: #6366f1 !important;
      color: #fff !important;
      border-color: #6366f1 !important;
    }

    /* ---------- KANBAN COLUMNS ---------- */
    /* To Do column */
    html.dark .bg-blue-50 {
      background-color: #1a1c3a;          /* deep indigo-black */
    }
    /* Completed column */
    html.dark .bg-green-50 {
      background-color: #132326;          /* deep emerald-black */
    }

    html.dark .bg-blue-50 .border-b-2,
    html.dark .bg-green-50 .border-b-2 {
      border-color: #475569;
    }

    /* Column titles */
    html.dark h2.text-slate-800,
    html.dark h2 {
      color: #f1f5f9 !important;
    }

    /* Count badges */
    html.dark .bg-amber-400 {
      background-color: #f59e0b;
    }
    html.dark .bg-green-500 {
      background-color: #22c55e;
    }

    /* ---------- TASK CARDS ---------- */
    html.dark .bg-white.border.border-gray-300 {
      background-color: #1e293b;          /* slate-800 */
      border-color: #334155;             /* slate-700 */
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    html.dark .bg-white.border.border-gray-300:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.45);
    }

    /* Task number badge */
    html.dark .bg-gray-200 {
      background-color: #334155;
      color: #e2e8f0 !important;
    }

    /* Status badges */
    html.dark .bg-amber-100 {
      background-color: rgba(245,158,11,0.15);
      color: #fbbf24 !important;
    }
    html.dark .bg-green-100 {
      background-color: rgba(34,197,94,0.15);
      color: #4ade80 !important;
    }

    /* Card title */
    html.dark h3.text-slate-800 {
      color: #f1f5f9 !important;
    }
    /* Card description */
    html.dark p.text-gray-700,
    html.dark .text-gray-700 {
      color: #94a3b8 !important;
    }

    /* Priority / type / label badges */
    html.dark .bg-red-100 {
      background-color: rgba(239,68,68,0.15);
      color: #fca5a5 !important;
    }
    html.dark .bg-blue-100 {
      background-color: rgba(99,102,241,0.15);
      color: #a5b4fc !important;
    }
    html.dark .bg-cyan-100 {
      background-color: rgba(6,182,212,0.15);
      color: #67e8f9 !important;
    }

    /* Card footer border */
    html.dark .border-t.border-gray-200 {
      border-color: #334155;
    }

    /* Footer labels */
    html.dark .text-gray-500 {
      color: #64748b !important;
    }

    /* Action buttons in cards */
    html.dark .border.border-gray-300.bg-transparent {
      border-color: #475569;
      color: #cbd5e1;
    }
    html.dark .border.border-gray-300.bg-transparent:hover {
      background-color: #334155 !important;
    }

    /* ---------- NAV BUTTONS ---------- */
    html.dark nav button.border-2 {
      border-color: rgba(255,255,255,0.2);
    }
    html.dark nav button.border-2:hover {
      border-color: #818cf8;
      color: #a5b4fc;
    }
    html.dark nav button.bg-blue-500 {
      background-color: #6366f1;         /* indigo-500 */
    }
    html.dark nav button.bg-blue-500:hover {
      background-color: #4f46e5;         /* indigo-600 */
    }

    /* ---------- TOGGLE BUTTON GLOW ---------- */
    html.dark #dark-mode-toggle {
      border-color: #818cf8;
      box-shadow: 0 0 12px rgba(129,140,248,0.35);
    }
  `;
    document.head.appendChild(darkStyles);

    // --------------------------------------------------
    // 3. Read saved preference (localStorage + OS pref)
    // --------------------------------------------------
    const STORAGE_KEY = 'taskDashboardDarkMode';

    function getPreference() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) return stored === 'true';
        // Fall-back to OS preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function applyMode(isDark) {
        const html = document.documentElement;

        // Add transition class for smooth toggle
        html.classList.add('dark-transition');

        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        // Update button emoji
        const btn = document.getElementById('dark-mode-toggle');
        if (btn) {
            btn.innerHTML = isDark ? '☀️' : '🌙';
        }

        // Persist
        localStorage.setItem(STORAGE_KEY, isDark);

        // Remove transition class after animation completes
        //setTimeout(() => html.classList.remove('dark-transition'), 400);
    }

    // --------------------------------------------------
    // 4. Initial apply (before paint flicker)
    // --------------------------------------------------
    applyMode(getPreference());

    // --------------------------------------------------
    // 5. Toggle handler
    // --------------------------------------------------
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDark = !document.documentElement.classList.contains('dark');
            applyMode(isDark);
        });
    }

    // --------------------------------------------------
    // 6. Listen for OS theme changes
    // --------------------------------------------------
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a pref in this session
        if (localStorage.getItem(STORAGE_KEY) === null) {
            applyMode(e.matches);
        }
    });

      // --------------------------------------------------
      // Interactive features: search, filters, keyboard shortcuts,
      // card interactions and statistics (runs after DOM is ready)
      // --------------------------------------------------
      document.addEventListener('DOMContentLoaded', () => {
        // Element references
        const searchInput = document.getElementById('task-search');
        const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
        const darkToggle = document.getElementById('dark-mode-toggle');

        // Build a list of task card elements by locating card titles and finding their nearest card container
        const titleEls = Array.from(document.querySelectorAll('main h3'));
        const cardSet = new Set();
        titleEls.forEach(h3 => {
          let container = h3.closest('div');
          // Climb until we find an element that looks like a card (has border + rounded)
          while (container && !(container.classList && container.classList.contains('border'))) {
            container = container.parentElement;
          }
          if (container) cardSet.add(container);
        });
        const cards = Array.from(cardSet).map(el => {
          const titleEl = el.querySelector('h3');
          const descEl = el.querySelector('p');
          return {
            el,
            title: titleEl ? titleEl.textContent.trim() : '',
            desc: descEl ? descEl.textContent.trim() : '',
            // lazy getters parsed from DOM
            getStatus() {
              // look for explicit status badge text inside the card
              const txt = Array.from(this.el.querySelectorAll('span,div'))
                .map(n => (n.textContent || '').trim().toLowerCase())
                .join(' ');
              if (txt.includes('open')) return 'open';
              if (txt.includes('closed')) return 'closed';
              return 'open';
            },
            getPriority() {
              const txt = Array.from(this.el.querySelectorAll('span,div'))
                .map(n => (n.textContent || '').trim().toLowerCase())
                .join(' ');
              if (txt.includes('p1') || txt.includes('high')) return 'high';
              if (txt.includes('p2') || txt.includes('medium')) return 'medium';
              if (txt.includes('p3') || txt.includes('low')) return 'low';
              return 'normal';
            }
          };
        });

        // State
        let activeFilter = 'all';
        let searchQuery = '';

        // Helpers
        const matchesSearch = (card, q) => {
          if (!q) return true;
          const hay = (card.title + ' ' + card.desc).toLowerCase();
          return hay.includes(q);
        };

        const matchesFilter = (card, filter) => {
          if (!filter || filter === 'all') return true;
          if (filter === 'open') return card.getStatus() === 'open';
          if (filter === 'closed') return card.getStatus() === 'closed';
          if (filter === 'high') return card.getPriority() === 'high';
          return true;
        };

        // Update statistics (Total, Completed, Pending) from visible cards
        const updateStats = () => {
          const header = document.querySelector('main header');
          if (!header) return;
          const statBlocks = Array.from(header.querySelectorAll('.bg-white'));
          const visibleCards = cards.filter(c => {
            const styleHidden = c.el.style.display === 'none' || c.el.getAttribute('aria-hidden') === 'true';
            return !styleHidden;
          });
          const total = visibleCards.length;
          const completed = visibleCards.filter(c => c.getStatus() === 'closed').length;
          const pending = visibleCards.filter(c => c.getStatus() === 'open').length;

          statBlocks.forEach(block => {
            const label = (block.querySelector('.text-xs, .text-sm')?.textContent || '').toLowerCase();
            const valueEl = block.querySelector('.font-bold');
            if (!valueEl) return;
            if (label.includes('total')) valueEl.textContent = total;
            else if (label.includes('completed')) valueEl.textContent = completed;
            else if (label.includes('pending') || label.includes('open')) valueEl.textContent = pending;
          });
        };

        // Apply combined search + filter and show/hide cards
        const updateVisibility = () => {
          const q = searchQuery.trim().toLowerCase();
          cards.forEach(card => {
            const visible = matchesFilter(card, activeFilter) && matchesSearch(card, q);
            card.el.style.display = visible ? '' : 'none';
            card.el.setAttribute('aria-hidden', visible ? 'false' : 'true');
          });
          updateStats();
        };

        // Search input wiring
        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            searchQuery = (e.target.value || '').trim().toLowerCase();
            updateVisibility();
          });
          searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              if (searchInput.value) {
                searchInput.value = ''; searchQuery = ''; updateVisibility();
              }
            }
          });
        }

        // Filter buttons wiring
        filterBtns.forEach((btn, idx) => {
          btn.setAttribute('role', 'button');
          btn.setAttribute('aria-pressed', 'false');
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
              b.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
              b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
            btn.setAttribute('aria-pressed', 'true');
            activeFilter = btn.dataset.filter || 'all';
            updateVisibility();
          });
        });

        // Card interactions: make focusable and respond to Enter/Space/click
        cards.forEach(card => {
          if (!card.el.hasAttribute('tabindex')) card.el.setAttribute('tabindex', '0');
          card.el.addEventListener('click', () => {
            // simple visual toggle to indicate activation
            card.el.classList.toggle('ring-2');
            card.el.classList.toggle('ring-indigo-400');
          });
          card.el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              card.el.click();
            }
          });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
          const mod = e.ctrlKey || e.metaKey;
          if (mod && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            if (darkToggle) darkToggle.click();
          } else if (mod && (e.key === 'f' || e.key === 'F')) {
            if (searchInput) { e.preventDefault(); searchInput.focus(); if (searchInput.select) searchInput.select(); }
          } else if (e.key === 'Escape') {
            if (document.activeElement === searchInput && searchInput.value) {
              searchInput.value = ''; searchQuery = ''; updateVisibility(); e.preventDefault();
            }
          } else if (!mod && ['1','2','3','4'].includes(e.key)) {
            e.preventDefault();
            const map = { '1': 'all', '2': 'open', '3': 'closed', '4': 'high' };
            const target = map[e.key];
            const btn = filterBtns.find(b => b.dataset.filter === target);
            if (btn) btn.click();
          }
        });

        // Initial apply
        updateVisibility();
      }); // DOMContentLoaded
    })();