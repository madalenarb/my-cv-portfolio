/**
 * Site language switch: English (source), Portuguese (pt-PT) and Dutch.
 *
 * How it works: the English text in the HTML is the source. Every element that holds text directly
 * (a heading, a paragraph, a list item, a button...) is looked up by its English content in the
 * dictionaries in assets/js/i18n/*.js and swapped for the translation. Text without a translation
 * stays in English, so editing the English never breaks the page; that block just shows in English
 * until its translation is updated. aria-label, alt, title, placeholder and data-title are
 * translated the same way.
 *
 * Choice order: ?lang=pt|nl|en in the address, then the visitor's saved choice, then English.
 * Links can point somewhere else per language with data-href-pt / data-href-nl
 * (and data-src-pt / data-src-nl for embedded frames).
 */
(function () {
  'use strict';

  var LANGS = ['en', 'pt', 'nl'];
  var HTML_LANG = { en: 'en', pt: 'pt-PT', nl: 'nl' };
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, SVG: 1, PRE: 1, CODE: 1, TEXTAREA: 1 };
  var ATTRS = ['aria-label', 'alt', 'title', 'placeholder', 'data-title'];

  var letter;
  try { letter = new RegExp('\\p{L}', 'u'); } catch (e) { letter = /[A-Za-zÀ-ɏ]/; }

  var dict = { pt: Object.create(null), nl: Object.create(null) };
  var units = [];      // elements whose content is translated: { el, en, key }
  var attrUnits = [];  // translated attributes: { el, attr, en }
  var swaps = [];      // links/frames that change target per language: { el, href, src }
  var titleEN = null;
  var current = 'en';
  var started = false;

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  function hasLetter(s) { return letter.test(s); }

  /** Register translations: [{ en: '...', pt: '...', nl: '...' }, ...] */
  function add(entries) {
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var k = norm(e.en);
      if (e.pt != null) dict.pt[k] = e.pt;
      if (e.nl != null) dict.nl[k] = e.nl;
    }
  }

  function collect(root) {
    (function walk(el) {
      if (SKIP[el.tagName] || el.getAttribute('translate') === 'no' || el.classList.contains('notranslate')) return;
      for (var a = 0; a < ATTRS.length; a++) {
        var v = el.getAttribute(ATTRS[a]);
        if (v && hasLetter(v)) attrUnits.push({ el: el, attr: ATTRS[a], en: v });
      }
      if (el.hasAttribute('data-href-pt') || el.hasAttribute('data-href-nl') ||
          el.hasAttribute('data-src-pt') || el.hasAttribute('data-src-nl')) {
        swaps.push({ el: el, href: el.getAttribute('href'), src: el.getAttribute('src') });
      }
      var direct = false;
      for (var n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3 && hasLetter(n.nodeValue)) { direct = true; break; }
      }
      if (direct && el !== document.body) {
        units.push({ el: el, en: el.innerHTML, key: norm(el.innerHTML) });
        return;
      }
      for (var c = el.firstElementChild; c; c = c.nextElementSibling) walk(c);
    })(root);
  }

  /** Translate one English string into the current language (for text set by scripts). */
  function t(s) {
    if (current === 'en') return s;
    var v = dict[current][norm(s)];
    return v != null ? v : s;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = 'en';
    current = lang;
    var d = lang === 'en' ? null : dict[lang];

    for (var i = 0; i < units.length; i++) {
      var u = units[i];
      var v = d ? d[u.key] : null;
      var html = v != null ? v : u.en;
      if (u.el.innerHTML !== html) u.el.innerHTML = html;
    }
    for (var j = 0; j < attrUnits.length; j++) {
      var au = attrUnits[j];
      var w = d ? d[norm(au.en)] : null;
      au.el.setAttribute(au.attr, w != null ? w : au.en);
    }
    for (var k = 0; k < swaps.length; k++) {
      var s = swaps[k];
      if (s.href != null) s.el.setAttribute('href', (d && s.el.getAttribute('data-href-' + lang)) || s.href);
      if (s.src != null) {
        var src = (d && s.el.getAttribute('data-src-' + lang)) || s.src;
        if (s.el.getAttribute('src') !== src) s.el.setAttribute('src', src);
      }
    }
    if (titleEN != null) {
      var tt = d ? d[norm(titleEN)] : null;
      document.title = tt != null ? tt : titleEN;
    }

    document.documentElement.lang = HTML_LANG[lang];
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var b = 0; b < buttons.length; b++) {
      buttons[b].setAttribute('aria-pressed', buttons[b].getAttribute('data-set-lang') === lang ? 'true' : 'false');
    }
    try { localStorage.setItem('lang', lang); } catch (e) { /* the choice simply isn't remembered */ }
    document.documentElement.classList.remove('i18n-pending');

    var evt;
    try { evt = new CustomEvent('site:lang', { detail: { lang: lang } }); }
    catch (e) { evt = document.createEvent('CustomEvent'); evt.initCustomEvent('site:lang', false, false, { lang: lang }); }
    document.dispatchEvent(evt);
  }

  function initialLang() {
    var q = null;
    try { q = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* old browser */ }
    if (q && LANGS.indexOf(q) >= 0) return q;
    var stored = null;
    try { stored = localStorage.getItem('lang'); } catch (e) { /* storage blocked */ }
    if (stored && LANGS.indexOf(stored) >= 0) return stored;
    return 'en';
  }

  function init() {
    if (started) return;
    started = true;
    titleEN = document.title;
    collect(document.body);
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('[data-set-lang]') : null;
      if (!btn) return;
      e.preventDefault();
      apply(btn.getAttribute('data-set-lang'));
    });
    apply(initialLang());
  }

  window.SiteI18n = {
    add: add,
    init: init,
    apply: apply,
    t: t,
    lang: function () { return current; }
  };
})();
