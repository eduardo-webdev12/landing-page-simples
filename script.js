// Menu mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fade-in ao scroll
const fades = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
fades.forEach(el => observer.observe(el));

// Form (feedback simples)
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada! Entraremos em contato em breve.');
  e.target.reset();
});