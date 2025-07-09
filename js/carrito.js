let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cargar datos del archivo JSON
fetch("data/productos.json")
  .then(response => response.json())
  .then(destinos => {
    // Si estamos en la página de carrito.html
    if (document.getElementById("carrito-contenedor")) {
      mostrarCarrito(destinos);
    }
  });

// Agrega un destino al carrito por su ID
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

// Muestra el carrito con los destinos agregados
function mostrarCarrito(destinosData) {
  const contenedor = document.getElementById("carrito-contenedor");
  contenedor.innerHTML = "";

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

  document.getElementById("total").innerText = `Total: $${total}`;
}

// Elimina un destino del carrito por índice
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload(); // Refresca para actualizar la vista
}

// Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  location.reload();
} 