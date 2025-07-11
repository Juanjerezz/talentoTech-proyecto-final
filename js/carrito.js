let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cargar destinos desde JSON local
fetch("data/productos.json")
  .then(response => response.json())
  .then(destinos => {
    if (document.getElementById("carrito-contenedor")) {
      mostrarCarrito(destinos);
    }
  });

function mostrarCarrito(destinosData) {
  const contenedor = document.getElementById("carrito-contenedor");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="mensaje-vacio">Tu viaje aún no tiene destinos o adicionales. <a href="destinos.html">Agregá lugares para comenzar</a>.</p>`;
    document.getElementById("total").style.display = "none";
    return;
  }

  let total = 0;

  carrito.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("producto");

    // Si es adicional (desde API)
    if (item.adicional) {
      div.classList.add("adicional");
      total += item.precio;
      div.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <p class="precio">USD $${item.precio}</p>
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
    } else {
      // Es un destino local
      const destinoInfo = destinosData.find(d => d.id === item.id);
      if (destinoInfo) {
        // Extraer número del precio para sumarlo
        const precioNumerico = parseInt(destinoInfo.precio.replace(/[^0-9]/g, ""));
        total += precioNumerico;

        div.innerHTML = `
          <img src="${destinoInfo.imagen}" alt="${destinoInfo.nombre}">
          <h3>${destinoInfo.nombre}</h3>
          <p>${destinoInfo.descripcion}</p>
          <p class="precio">${destinoInfo.precio}</p>
          <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
      } else {
        // En caso que no encuentre el destino, no mostrar nada o mostrar mensaje
        div.innerHTML = `<p>Producto no encontrado</p>`;
      }
    }

    contenedor.appendChild(div);
  });

  document.getElementById("total").innerText = `Total (${carrito.length} producto${carrito.length !== 1 ? 's' : ''}): $${total}`;
  document.getElementById("total").style.display = "block";
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}

function vaciarCarrito() {
  if (confirm("¿Estás seguro de que querés vaciar el viaje?")) {
    carrito = [];
    localStorage.removeItem("carrito");
    location.reload();
  }
}

function finalizarCompra() {
  const confirmar = confirm("¿Estás seguro de querer confirmar tu compra?");
  if (confirmar) {
    localStorage.removeItem('carrito');
    alert("¡Gracias por tu compra! Te llegará un correo con el itinerario.");
    window.location.href = "index.html";
  }
}

// Menu toggle móvil (opcional)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('activo');
    });
  }
});