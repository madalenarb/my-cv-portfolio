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

  navMenu.innerHTML = `
    <ul>
      <li><a href="${base}#hero" class="${isHomePage ? 'active' : ''}">Home<br></a></li>
      <li><a href="${base}#about">About</a></li>
      <li class="dropdown"><a href="${base}#services"><span>Projects</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="${base}#services">Projects Overview</a></li>
          <li><a href="research-details.html" class="${page === 'research-details.html' ? 'active' : ''}">Master's Thesis</a></li>
        </ul>
      </li>
      <li><a href="${base}#portfolio">Portfolio</a></li>
    </ul>
    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
  `;
})();