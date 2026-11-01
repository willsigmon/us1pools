/* Shared, progressively enhanced interactions. No third-party script is loaded. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('#site-nav');
  const dropdownToggle = document.querySelector('[data-dropdown-toggle]');
  const dropdown = dropdownToggle?.closest('.nav-dropdown');
  const dropdownMenu = dropdownToggle
    ? document.getElementById(dropdownToggle.getAttribute('aria-controls'))
    : null;

  const setDropdownOpen = (open, restoreFocus = false) => {
    dropdownToggle?.setAttribute('aria-expanded', String(open));
    dropdown?.classList.toggle('is-open', open);
    if (restoreFocus) dropdownToggle?.focus();
  };

  const setMenuOpen = (open, restoreFocus = false) => {
    menuToggle?.setAttribute('aria-expanded', String(open));
    navigation?.classList.toggle('is-open', open);
    if (!open) setDropdownOpen(false);
    if (restoreFocus) menuToggle?.focus();
  };

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  dropdownToggle?.addEventListener('click', () => {
    setDropdownOpen(dropdownToggle.getAttribute('aria-expanded') !== 'true');
  });

  dropdownToggle?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown') return;
    event.preventDefault();
    setDropdownOpen(true);
    dropdownMenu?.querySelector('a')?.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (dropdownToggle?.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setDropdownOpen(false, true);
    } else if (menuToggle?.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setMenuOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (dropdown && !dropdown.contains(event.target)) setDropdownOpen(false);
    if (
      navigation && menuToggle &&
      !navigation.contains(event.target) && !menuToggle.contains(event.target)
    ) setMenuOpen(false);
  });

  navigation?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  dropdown?.addEventListener('focusout', (event) => {
    if (!dropdown.contains(event.relatedTarget)) setDropdownOpen(false);
  });

  const desktop = window.matchMedia('(min-width: 960px)');
  desktop.addEventListener('change', () => setMenuOpen(false));

  if (header) {
    let frameRequested = false;
    const updateHeader = () => {
      header.classList.toggle('is-condensed', window.scrollY > 24);
      frameRequested = false;
    };
    updateHeader();
    window.addEventListener('scroll', () => {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(updateHeader);
    }, { passive: true });
  }

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const heroVideo = document.querySelector('.hero-video');
  const stopHeroForReducedMotion = () => {
    if (!heroVideo || !motionPreference.matches) return;
    heroVideo.pause();
    heroVideo.removeAttribute('autoplay');
  };
  stopHeroForReducedMotion();
  motionPreference.addEventListener('change', stopHeroForReducedMotion);
  heroVideo?.addEventListener('error', () => { heroVideo.hidden = true; });

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if ('IntersectionObserver' in window && !motionPreference.matches) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    for (const item of revealItems) {
      // Keep already visible content painted on first load.
      if (item.getBoundingClientRect().top < window.innerHeight) {
        item.classList.add('is-visible');
      } else {
        item.classList.add('reveal-ready');
        observer.observe(item);
      }
    }
    motionPreference.addEventListener('change', (event) => {
      if (!event.matches) return;
      observer.disconnect();
      revealItems.forEach((item) => item.classList.add('is-visible'));
    });
  }

  document.querySelectorAll('button[data-video]').forEach((button) => {
    button.addEventListener('click', () => {
      const videoId = button.dataset.video;
      if (!/^[\w-]{11}$/.test(videoId || '')) return;
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      frame.title = button.dataset.title || 'US-1 Pools video';
      frame.loading = 'eager';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.tabIndex = 0;
      button.replaceWith(frame);
      frame.focus();
    }, { once: true });
  });
})();

/* Print every accordion panel; restore the previous state afterwards. */
(() => {
  const groups = [...document.querySelectorAll('details')];
  if (!groups.length) return;
  let saved = [];
  addEventListener('beforeprint', () => {
    saved = groups.map((d) => [d, d.open, d.getAttribute('name')]);
    groups.forEach((d) => { d.removeAttribute('name'); d.open = true; });
  });
  addEventListener('afterprint', () => {
    saved.forEach(([d, open, name]) => { d.open = open; if (name) d.setAttribute('name', name); });
  });
})();
