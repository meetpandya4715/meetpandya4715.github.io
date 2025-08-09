// Theme handling with localStorage persistence
// - Honors system preference on first load
// - Toggle with button having id "themeToggle"
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme) {
      root.setAttribute('data-theme', theme);
      btn && (btn.textContent = theme === 'light' ? '🌙' : '☀️');
    } else {
      root.removeAttribute('data-theme');
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      btn && (btn.textContent = prefersLight ? '🌙' : '☀️');
    }
  }

  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : current === 'dark' ? null : 'light';
      if (next) {
        localStorage.setItem('theme', next);
      } else {
        localStorage.removeItem('theme');
      }
      applyTheme(next);
    });
  }

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();


