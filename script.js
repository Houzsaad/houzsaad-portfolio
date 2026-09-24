const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.body.removeAttribute('data-theme');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});