document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('section').forEach(function(section) {
    section.classList.add('collapsed');
    const arrow = section.querySelector('.arrow');
    if (arrow) arrow.textContent = '▶';
  });
  document.querySelectorAll('section .section-header').forEach(function(header) {
    header.addEventListener('click', function() {
      const section = header.parentElement;
      section.classList.toggle('collapsed');
      const arrow = header.querySelector('.arrow');
      if (section.classList.contains('collapsed')) {
        arrow.textContent = '▶';
      } else {
        arrow.textContent = '▼';
      }
    });
  });
  document.querySelectorAll('.main-nav a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      if (section) {
        section.classList.remove('collapsed');
        const arrow = section.querySelector('.arrow');
        if (arrow) arrow.textContent = '▼';
      }
    });
  });
});
