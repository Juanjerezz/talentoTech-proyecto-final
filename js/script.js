document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contacto');
    if (form) {
      form.addEventListener('submit', function (e) {
        const email = form.querySelector('input[name="email"]');
        const nombre = form.querySelector('input[name="nombre"]');

        if (!email.value.includes('@')) {
          e.preventDefault();
          alert('Por favor, ingresá un correo electrónico válido.');
        }

        if (nombre.value.trim().length < 2) {
          e.preventDefault();
          alert('El nombre es demasiado corto.');
        }
      });
    }

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle('activo');
      });

      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('activo');
        });
      });
    }

    const carrusel = document.getElementById('carrusel');
    if (carrusel) {
      let index = 0;
      setInterval(() => {
        const total = carrusel.children.length;
        index = (index + 1) % total;
        carrusel.scrollTo({
          left: carrusel.children[index].offsetLeft,
          behavior: 'smooth'
        });
      }, 4000);
    }
  });