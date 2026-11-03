/**
 * Global Menu Generator
 * This script renders the navigation menu into the #navmenu element.
 * It automatically adjusts links to point to index.html when on a subpage.
 */
(function() {
  const navMenu = document.getElementById('navmenu');
  if (!navMenu) return;

  const path = window.location.pathname;
  const page = path.split("/").pop();
  const isHomePage = page === "" || page === "index.html";
  const base = isHomePage ? "" : "index.html";

  navMenu.setAttribute('aria-label', 'Main navigation');
  navMenu.innerHTML = `
    <ul>
      <li><a href="${base}#hero" class="${isHomePage ? 'active' : ''}">Home</a></li>
      <li><a href="${base}#about">About</a></li>
      <li><a href="${base}#resume">Experience</a></li>
      <li class="dropdown"><a href="${base}#featured-research"><span>Research</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="${base}#featured-research">Thesis Overview</a></li>
          <li><a href="research-details.html" class="${page === 'research-details.html' ? 'active' : ''}">Full Thesis Page</a></li>
        </ul>
      </li>
      <li><a href="${base}#portfolio">Portfolio</a></li>
      <li class="dropdown"><a href="${base}#life"><span>Beyond work</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="${base}#life">Photos and fun facts</a></li>
          <li><a href="gavle-goat.html" class="${page === 'gavle-goat.html' ? 'active' : ''}">The Gävle Goat timeline</a></li>
        </ul>
      </li>
      <li><a href="${base}#contact">Contact</a></li>
      <li class="lang-switch">
        <div class="lang-switch-group" role="group" aria-label="Language">
          <button type="button" data-set-lang="en" lang="en" translate="no" aria-pressed="true" title="English" aria-label="English, EN">EN</button>
          <button type="button" data-set-lang="pt" lang="pt-PT" translate="no" aria-pressed="false" title="Português" aria-label="Português, PT">PT</button>
          <button type="button" data-set-lang="nl" lang="nl" translate="no" aria-pressed="false" title="Nederlands" aria-label="Nederlands, NL">NL</button>
        </div>
      </li>
    </ul>
    <button type="button" class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Open menu" aria-expanded="false"></button>
  `;
})();