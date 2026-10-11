
const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');

// Mobile Menu
menuButton.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

// Close Menu After Clicking a Link
document.querySelectorAll('#mainNav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

// Dynamic Copyright Year
document.getElementById('year').textContent =
  new Date().getFullYear();
