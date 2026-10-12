(() => {
  window.kisaanSathiViewTransition = (trigger, update) => {
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      update();
      return;
    }

    const bounds = trigger.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.style.setProperty('--theme-reveal-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-reveal-y', `${y}px`);
    document.documentElement.style.setProperty('--theme-reveal-radius', `${radius}px`);
    document.startViewTransition(update);
  };

  window.kisaanSathiLanguageTransition = (trigger, update) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !Element.prototype.animate) {
      update();
      return;
    }

    const wasDisabled = trigger.disabled;
    trigger.disabled = true;
    document.body.classList.add('is-language-changing');

    window.setTimeout(() => {
      try {
        update();
      } finally {
        document.body.classList.remove('is-language-changing');
        document.body.classList.add('is-language-entering');
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            document.body.classList.remove('is-language-entering');
          });
        });
        window.setTimeout(() => {
          trigger.disabled = wasDisabled;
        }, 300);
      }
    }, 260);
  };

  const settingsMenu = document.querySelector('.settings-menu');
  const settingsSummary = settingsMenu?.querySelector('summary');
  const settingsLabel = settingsMenu?.querySelector('.settings-menu-label');
  const refreshSettingsLabel = () => {
    const isHindi = document.documentElement.lang === 'hi';
    if (settingsLabel) {
      settingsLabel.textContent = isHindi ? 'सेटिंग्स' : 'Settings';
    }
    settingsSummary?.setAttribute(
      'aria-label',
      isHindi ? 'भाषा और दिखावट सेटिंग्स' : 'Language and appearance settings'
    );
  };
  refreshSettingsLabel();

  document.addEventListener('click', (event) => {
    if (!settingsMenu) {
      return;
    }

    if (event.target.closest('#language-toggle')) {
      window.setTimeout(refreshSettingsLabel, 320);
    }

    if (event.target.closest('.settings-menu-panel button')) {
      window.setTimeout(() => {
        settingsMenu.open = false;
      }, 0);
    } else if (settingsMenu.open && !settingsMenu.contains(event.target)) {
      settingsMenu.open = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && settingsMenu?.open) {
      settingsMenu.open = false;
      settingsSummary?.focus();
    }
  });

  const pageLoader = document.querySelector('.page-loader');
  if (pageLoader) {
    let loaderHidden = false;
    const hideLoader = () => {
      if (loaderHidden) {
        return;
      }
      loaderHidden = true;
      pageLoader.classList.add('is-hidden');
      pageLoader.addEventListener('transitionend', () => pageLoader.remove(), { once: true });
      window.setTimeout(() => pageLoader.remove(), 450);
    };

    window.setTimeout(hideLoader, 350);
    window.addEventListener('load', hideLoader, { once: true });
  }

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download')) {
      return;
    }

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    event.preventDefault();
    document.body.classList.add('is-leaving');
    window.setTimeout(() => window.location.assign(destination.href), 180);
  });

  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle || themeToggle.id === 'theme-toggle') {
    return;
  }

  const themeKey = 'kisaanSathiTheme';
  const labels = {
    en: {
      dark: { text: 'Dark Mode', aria: 'Switch to dark mode', title: 'Dark mode' },
      light: { text: 'Light Mode', aria: 'Switch to light mode', title: 'Light mode' },
    },
    hi: {
      dark: { text: 'डार्क मोड', aria: 'डार्क मोड चालू करें', title: 'डार्क मोड' },
      light: { text: 'लाइट मोड', aria: 'लाइट मोड चालू करें', title: 'लाइट मोड' },
    },
  };
  let isDark = document.documentElement.dataset.theme === 'dark';

  window.kisaanSathiRefreshThemeLabel = () => {
    const language = document.documentElement.lang === 'hi' ? 'hi' : 'en';
    const label = labels[language][isDark ? 'light' : 'dark'];
    themeToggle.textContent = label.text;
    themeToggle.setAttribute('aria-label', label.aria);
    themeToggle.title = label.title;
  };

  function setTheme(useDarkTheme, animate = false) {
    isDark = useDarkTheme;
    if (isDark) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }

    localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
    window.kisaanSathiRefreshThemeLabel();

    if (animate) {
      themeToggle.classList.remove('is-changing');
      void themeToggle.offsetWidth;
      themeToggle.classList.add('is-changing');
    }
  }

  setTheme(isDark);
  themeToggle.addEventListener('animationend', (event) => {
    if (event.animationName === 'themeToggleChange') {
      themeToggle.classList.remove('is-changing');
    }
  });
  themeToggle.addEventListener('click', () => {
    window.kisaanSathiViewTransition(themeToggle, () => setTheme(!isDark, true));
  });

})();
