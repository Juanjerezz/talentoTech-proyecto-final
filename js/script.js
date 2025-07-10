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
});