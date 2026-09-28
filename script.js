const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

const resumeBtn = document.getElementById('resume-btn');
const resumeModal = document.getElementById('resume-modal');
const resumeClose = document.getElementById('resume-close');

resumeBtn.addEventListener('click', () => {
  resumeModal.classList.remove('hidden');
});

resumeClose.addEventListener('click', () => {
  resumeModal.classList.add('hidden');
});

resumeModal.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.add('hidden');
  }
});

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