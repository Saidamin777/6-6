const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  // Change icon depending on theme
  themeToggleBtn.textContent = 
    document.body.classList.contains('light-theme') ? '🌙' : '☀️';
});
