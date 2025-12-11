// Simple portfolio interactivity: theme toggle, active nav, scroll top, mobile nav
const themeToggle = document.getElementById('themeToggle');
const scrollTopBtn = document.getElementById('scrollTop');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-links');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// show scroll button
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  // active nav link
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    const id = section.id;
    const link = document.querySelector(`a[href="#${id}"]`);
    if(link){
      if(rect.top <= 120 && rect.bottom >= 120) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// mobile nav toggle
navToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
    if(window.innerWidth <= 900) navList.style.display = 'none';
  });
});
