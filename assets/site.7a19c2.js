const mobileMenu = document.querySelector('.mobile-nav');
if (mobileMenu) {
  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) mobileMenu.removeAttribute('open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.removeAttribute('open');
      mobileMenu.querySelector('summary')?.focus();
    }
  });
}
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
