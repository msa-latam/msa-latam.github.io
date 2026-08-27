(() => {
  'use strict';

  const root = document.documentElement;
  const main = document.querySelector('#content');
  const skipLink = document.querySelector('.skip-link');
  const brand = document.querySelector('.brand');
  const languageSelect = document.querySelector('#language-select');
  const themeToggle = document.querySelector('#theme-toggle');
  const menuToggle = document.querySelector('#menu-toggle');
  const sidebar = document.querySelector('#sidebar');
  const overlay = document.querySelector('#mobile-overlay');
  const backToTop = document.querySelector('#back-to-top');
  const toc = document.querySelector('#table-of-contents');
  const searchLabel = document.querySelector('#search-label');
  const searchInput = document.querySelector('#search-input');
  const searchStatus = document.querySelector('#search-status');
  const verifiedNote = document.querySelector('#verified-note');
  const footer = document.querySelector('.site-footer');
  const independentFooter = document.querySelector('#independent-footer');
  const lightbox = document.querySelector('#image-lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  const lightboxClose = document.querySelector('#lightbox-close');

  let currentLocale;
  let sectionObserver;

  const detectLanguage = () => {
    const saved = localStorage.getItem('msa-language');
    if (saved) return saved;
    const language = navigator.language.toLowerCase();
    if (language.startsWith('es')) return 'es';
    if (language.startsWith('en')) return 'en';
    return 'pt-BR';
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('msa-theme', theme);
    const dark = theme === 'dark';
    themeToggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    if (currentLocale) {
      themeToggle.setAttribute('aria-label', dark ? currentLocale.ui.lightTheme : currentLocale.ui.darkTheme);
    }
  };

  const closeMenu = () => {
    sidebar.classList.remove('open');
    overlay.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    if (currentLocale) menuToggle.setAttribute('aria-label', currentLocale.ui.openMenu);
  };

  const buildToc = () => {
    const headings = [...document.querySelectorAll('main section[id] h2')];
    toc.innerHTML = headings.map((heading) => {
      const section = heading.closest('section');
      return `<a href="#${section.id}">${heading.textContent}</a>`;
    }).join('');

    toc.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    if (sectionObserver) sectionObserver.disconnect();
    sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      toc.querySelectorAll('a').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-18% 0px -72% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
  };

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();

  const resetSearch = () => {
    searchInput.value = '';
    searchStatus.textContent = '';
    document.querySelectorAll('[data-searchable]').forEach((section) => section.classList.remove('search-hidden'));
  };

  const runSearch = () => {
    const query = normalize(searchInput.value.trim());
    const sections = [...document.querySelectorAll('[data-searchable]')];
    if (!query) {
      sections.forEach((section) => section.classList.remove('search-hidden'));
      searchStatus.textContent = '';
      return;
    }

    let count = 0;
    sections.forEach((section) => {
      const matches = normalize(section.textContent).includes(query);
      section.classList.toggle('search-hidden', !matches);
      if (matches) count += 1;
    });
    searchStatus.textContent = count ? currentLocale.ui.searchCount(count) : currentLocale.ui.searchEmpty;
  };

  const bindFaq = () => {
    document.querySelectorAll('.faq-list details').forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        document.querySelectorAll('.faq-list details[open]').forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  };

  const bindGallery = () => {
    document.querySelectorAll('.gallery-item img, .milestone-image img, .unlock-card img').forEach((image) => {
      image.loading = 'lazy';
      image.decoding = 'async';
    });
    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        lightboxImage.src = item.dataset.full;
        lightboxImage.alt = item.querySelector('img').alt;
        lightboxCaption.textContent = item.dataset.caption;
        if (typeof lightbox.showModal === 'function') lightbox.showModal();
        else lightbox.setAttribute('open', '');
      });
    });
  };

  const applyLocale = (language, persist = true) => {
    currentLocale = window.MSA_LOCALES[language] || window.MSA_LOCALES['pt-BR'];
    const selectedLanguage = currentLocale.documentLanguage === 'pt-BR' ? 'pt-BR' : currentLocale.documentLanguage;

    root.lang = currentLocale.documentLanguage;
    document.title = currentLocale.title;
    document.querySelector('meta[name="description"]').setAttribute('content', currentLocale.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', currentLocale.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', currentLocale.description);
    languageSelect.value = selectedLanguage;
    languageSelect.setAttribute('aria-label', currentLocale.ui.language);
    skipLink.textContent = currentLocale.ui.skip;
    brand.setAttribute('aria-label', currentLocale.ui.brandHome);
    brand.querySelector('strong').textContent = currentLocale.ui.brandTitle;
    brand.querySelector('small').textContent = currentLocale.ui.brandSubtitle;
    searchLabel.textContent = currentLocale.ui.searchLabel;
    searchInput.placeholder = currentLocale.ui.searchPlaceholder;
    toc.setAttribute('aria-label', currentLocale.ui.tocLabel);
    verifiedNote.textContent = currentLocale.ui.verified;
    menuToggle.setAttribute('aria-label', currentLocale.ui.openMenu);
    backToTop.setAttribute('aria-label', currentLocale.ui.backToTop);
    lightboxClose.setAttribute('aria-label', currentLocale.ui.closeImage);
    footer.firstElementChild.innerHTML = `${currentLocale.ui.footer} <a href="https://github.com/tkusal" target="_blank" rel="noopener noreferrer">Thiago Kusal</a>.`;
    independentFooter.textContent = currentLocale.ui.independent;
    main.innerHTML = currentLocale.html;

    if (persist) localStorage.setItem('msa-language', languageSelect.value);
    resetSearch();
    buildToc();
    bindFaq();
    bindGallery();
    setTheme(root.dataset.theme);

    const hashTarget = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (hashTarget) requestAnimationFrame(() => hashTarget.scrollIntoView({ block: 'start' }));
  };

  applyLocale(detectLanguage(), false);

  languageSelect.addEventListener('change', () => {
    applyLocale(languageSelect.value);
  });

  themeToggle.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  menuToggle.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open);
    overlay.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? currentLocale.ui.closeMenu : currentLocale.ui.openMenu);
  });

  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
    if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  searchInput.addEventListener('input', runSearch);

  lightboxClose.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 700);
  }, { passive: true });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
