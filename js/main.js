// Small optional interactions. All content remains accessible without JavaScript.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-difficulty]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  const chosen = button.dataset.filter;
  cards.forEach(card => { card.hidden = chosen !== 'all' && card.dataset.difficulty !== chosen; });
}));
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    message.textContent = 'Demo only: your information was not sent or saved.';
    message.classList.add('show');
  });
});
