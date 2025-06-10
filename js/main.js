document.addEventListener('DOMContentLoaded', function () {
  // Modo oscuro toggle
  const darkBtn = document.getElementById('toggle-darkmode');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('darkmode');
    darkBtn.textContent = '☀️';
  }
  darkBtn.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
    darkBtn.textContent = document.body.classList.contains('darkmode') ? '☀️' : '🌙';
  });

  // Formulario de contacto accesible
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = 'Enviando...';
      status.style.color = '#6c63ff';
      setTimeout(function() {
        status.textContent = '¡Mensaje enviado! (Simulado)';
        status.style.color = 'green';
        form.reset();
      }, 1200);
    });
  }

  // Carrusel y navegación existentes
  const sections = Array.from(document.querySelectorAll('section'));
  let current = 0;

  function showSection(idx) {
    sections.forEach((section, i) => {
      if (i === idx) {
        section.classList.add('active');
        section.style.display = 'block';
      } else {
        section.classList.remove('active');
        section.style.display = 'none';
      }
    });
    document.getElementById('prevSection').disabled = idx === 0;
    document.getElementById('nextSection').disabled = idx === sections.length - 1;
    current = idx;
  }

  showSection(current);

  document.getElementById('prevSection').addEventListener('click', function() {
    if (current > 0) showSection(current - 1);
  });
  document.getElementById('nextSection').addEventListener('click', function() {
    if (current < sections.length - 1) showSection(current + 1);
  });

  document.querySelectorAll('.main-nav a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      const idx = sections.findIndex(section => section.id === id);
      if (idx !== -1) showSection(idx);
    });
  });
});
