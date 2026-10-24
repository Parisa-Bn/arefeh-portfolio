// Only interactions live here. Edit page content directly in the HTML files.
const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
function setMenuOpen(open) {
  mainNav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close −' : 'Menu +';
}
menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});
window.matchMedia('(max-width: 800px)').addEventListener('change', () => setMenuOpen(false));

const filters = document.getElementById('filters');
if (filters) {
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    const category = button.dataset.filter;
    const cards = document.querySelectorAll('#projectGrid .project-card');
    let count = 0;
    cards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) count += 1;
    });
    document.getElementById('filterStatus').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown`;
  });
}

// Keep bookmarks to the original project URLs working. Content lives in HTML.
const legacyProjects = document.getElementById('legacyProjects');
if (legacyProjects) {
  const slug = new URLSearchParams(window.location.search).get('slug');
  const link = Array.from(legacyProjects.querySelectorAll('a[data-slug]'))
    .find(anchor => anchor.dataset.slug === slug);
  if (link) window.location.replace(link.href);
}
