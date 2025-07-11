let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cargar datos del archivo JSON
fetch("data/productos.json")
  .then(response => response.json())
  .then(destinos => {
    if (document.getElementById("carrito-contenedor")) {
      mostrarCarrito(destinos);
    }
  });

function agregarAlCarrito(id) {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(destinos => {
      const destinoSeleccionado = destinos.find(dest => dest.id === id);
      carrito.push(destinoSeleccionado);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`Agregaste ${destinoSeleccionado.nombre} a tu viaje`);
    });
}

function mostrarCarrito(destinosData) {
  const contenedor = document.getElementById("carrito-contenedor");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="mensaje-vacio">Tu viaje aún no tiene destinos. <a href="destinos.html">Agregá lugares para comenzar</a>.</p>`;
    document.getElementById("total").style.display = "none";
    return;
  }

  let total = 0;

  carrito.forEach((destino, index) => {
    const destinoInfo = destinosData.find(d => d.id === destino.id);
    const div = document.createElement("div");
    div.classList.add("producto");

    const precioNumerico = parseInt(destinoInfo.precio.replace(/[^0-9]/g, ""));
    total += precioNumerico;

    div.innerHTML = `
      <img src="${destinoInfo.imagen}" alt="${destinoInfo.nombre}">
      <h3>${destinoInfo.nombre}</h3>
      <p>${destinoInfo.descripcion}</p>
      <p class="precio">${destinoInfo.precio}</p>
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;

    contenedor.appendChild(div);
  });

  document.getElementById("total").innerText = `Total (${carrito.length} destino${carrito.length !== 1 ? 's' : ''}): $${total}`;
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