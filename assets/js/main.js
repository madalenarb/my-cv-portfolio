/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Text set by this script goes through the site translations (assets/js/i18n.js) when they are loaded
   */
  const t = (text) => (window.SiteI18n ? window.SiteI18n.t(text) : text);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setMobileNavLabel() {
    const isOpen = document.body.classList.contains('mobile-nav-active');
    mobileNavToggleBtn.setAttribute('aria-label', isOpen ? t('Close menu') : t('Open menu'));
  }

  function mobileNavToogle() {
    const isOpen = document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
    mobileNavToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    setMobileNavLabel();
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  document.addEventListener('site:lang', setMobileNavLabel);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      disable: prefersReducedMotion
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animate the skills items on reveal
   */
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => bar.style.width = '0%');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        bar.style.transition = 'width 2s ease-in-out';
        void bar.offsetWidth; // Force a reflow to ensure animation triggers
        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
      } else {
        bar.style.transition = 'none';
        bar.style.width = '0%';
      }
    });
  }, { threshold: 0.1 });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter === 'function') {
    new PureCounter();
  }

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox === 'function') {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
    // Captions come from data-title, which changes with the language
    document.addEventListener('site:lang', function() {
      if (lightbox && typeof lightbox.reload === 'function') lightbox.reload();
    });
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    if (typeof imagesLoaded !== 'function' || typeof Isotope !== 'function') return;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });
    // Card text changes length with the language, so the grid is laid out again
    document.addEventListener('site:lang', function() {
      if (initIsotope) initIsotope.layout();
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        if (!initIsotope) return;
        const current = isotopeItem.querySelector('.isotope-filters .filter-active');
        current.classList.remove('filter-active');
        this.classList.add('filter-active');
        // Each filter contains a real <button>, so keyboards work natively; keep its pressed state in sync
        isotopeItem.querySelectorAll('.isotope-filters li > button').forEach(b => b.setAttribute('aria-pressed', 'false'));
        const btn = this.querySelector('button');
        if (btn) btn.setAttribute('aria-pressed', 'true');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== 'function') return;
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
      if (prefersReducedMotion && config.autoplay) {
        delete config.autoplay;
      }

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Dark/Light Mode Toggle
   */

  // Theme Toggle Button (Dark/Light Mode)
  // Order of preference: the visitor's saved choice, the page's data-theme attribute, the system setting, dark.
  // Storage can be unavailable (private windows, blocked site data), so every access is guarded.
  const themeToggleBtn = document.getElementById('theme-toggle');
  const lightSchemeQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;

  function readStoredTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function storeTheme(value) {
    try { localStorage.setItem('theme', value); } catch (e) { /* the choice simply isn't remembered */ }
  }

  function setThemeIcon(isDark) {
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-moon', !isDark);
        icon.classList.toggle('bi-sun', isDark);
      }
    }
  }

  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    setThemeIcon(isDark);
  }

  function ambientThemeIsDark() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr === 'dark';
    return !(lightSchemeQuery && lightSchemeQuery.matches);
  }

  function followAmbientTheme() {
    if (!readStoredTheme()) applyTheme(ambientThemeIsDark());
  }

  function toggleTheme(e) {
    if (e) e.preventDefault();
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    storeTheme(isDark ? 'dark' : 'light');
  }

  const storedTheme = readStoredTheme();
  applyTheme(storedTheme ? storedTheme === 'dark' : ambientThemeIsDark());
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (lightSchemeQuery && typeof lightSchemeQuery.addEventListener === 'function') {
    lightSchemeQuery.addEventListener('change', followAmbientTheme);
  }
  if (window.MutationObserver) {
    new MutationObserver(followAmbientTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  /**
   * Copy-email button: copy on click, or select the address if the clipboard is unavailable
   */
  document.querySelectorAll('.copy-email').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const label = btn.querySelector('span');
      const show = function(text) {
        if (!label) return;
        label.textContent = t(text);
        clearTimeout(btn._resetTimer);
        btn._resetTimer = setTimeout(function() { label.textContent = t('Copy'); }, 2200);
      };
      const selectAddress = function() {
        const address = btn.parentElement.querySelector('.email-address');
        if (address && window.getSelection) {
          const range = document.createRange();
          range.selectNodeContents(address);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
        show('Selected');
      };
      const value = btn.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function() { show('Copied'); }, selectAddress);
      } else {
        selectAddress();
      }
    });
  });

  /**
   * Spotlight Mouse Tracking
   */
  const spotlightBody = document.body;
  const finePointerQuery = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');

  function syncPointerCapability() {
    if (!finePointerQuery.matches) {
      spotlightBody.classList.remove('has-cursor');
      spotlightBody.classList.remove('spotlight-active');
      return;
    }
    spotlightBody.classList.add('has-cursor');
  }

  function updateSpotlightPosition(e) {
    if (!spotlightBody.classList.contains('dark-mode') || !finePointerQuery.matches) return;

    const x = e.clientX;
    const y = e.clientY;

    spotlightBody.style.setProperty('--cursor-x', x + 'px');
    spotlightBody.style.setProperty('--cursor-y', y + 'px');
    spotlightBody.style.setProperty('--mouse-x', x + 'px');
    spotlightBody.style.setProperty('--mouse-y', y + 'px');
    spotlightBody.classList.add('has-cursor');
    spotlightBody.classList.add('spotlight-active');
  }

  syncPointerCapability();

  if (typeof finePointerQuery.addEventListener === 'function') {
    finePointerQuery.addEventListener('change', syncPointerCapability);
  } else if (typeof finePointerQuery.addListener === 'function') {
    finePointerQuery.addListener(syncPointerCapability);
  }

  document.addEventListener('mousemove', updateSpotlightPosition, { passive: true });
  document.addEventListener('mouseleave', function() {
    spotlightBody.classList.remove('spotlight-active');
  });
  document.addEventListener('mouseout', function(e) {
    if (!e.relatedTarget && !e.toElement) {
      spotlightBody.classList.remove('spotlight-active');
    }
  });
  document.addEventListener('pointerdown', function(e) {
    if (e.pointerType !== 'mouse') {
      spotlightBody.classList.remove('spotlight-active');
      spotlightBody.classList.remove('has-cursor');
    }
  }, { passive: true });

})();

/**
 * Research Modal Functions
 */
function openResearchModal(section) {
  const modal = document.getElementById('researchModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Switch to the requested section
  switchModalSection(section);
}

function closeResearchModal() {
  const modal = document.getElementById('researchModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function switchModalSection(sectionId) {
  // Update tabs
  const tabs = document.querySelectorAll('.modal-tab');
  tabs.forEach(tab => {
    if (tab.dataset.section === sectionId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  // Update sections
  const sections = document.querySelectorAll('.modal-section');
  sections.forEach(section => {
    if (section.id === sectionId + '-section') {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Modal tab click handlers
document.addEventListener('DOMContentLoaded', function() {
  const modalTabs = document.querySelectorAll('.modal-tab');
  modalTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      switchModalSection(this.dataset.section);
    });
  });
  
  // Close modal on backdrop click
  const modal = document.getElementById('researchModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeResearchModal();
      }
    });
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeResearchModal();
    }
  });
});
