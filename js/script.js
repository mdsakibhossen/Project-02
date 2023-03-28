document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-active');
  document.querySelector('.nav-btn').classList.toggle('active');
});