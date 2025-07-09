// Inicializar el carrito desde localStorage o como un arreglo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un destino al carrito
function agregarAlCarrito(id) {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(destinos => {
      const destinoSeleccionado = destinos.find(dest => dest.id === id);
      if (!carrito.some(item => item.id === destinoSeleccionado.id)) {
        carrito.push(destinoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`Agregaste ${destinoSeleccionado.nombre} a tu viaje`);
      } else {
        alert(`${destinoSeleccionado.nombre} ya está en tu viaje.`);
      }
    })
    .catch(error => console.error('Error al agregar al carrito:', error));
}

// Cargar destinos desde productos.json y mostrarlos en el contenedor
fetch("data/productos.json")
  .then(response => response.json())
  .then(destinos => {
    const contenedorProductos = document.getElementById("contenedor-productos");
    destinos.forEach(destino => {
      const div = document.createElement("div");
      div.classList.add("producto");
      
      div.innerHTML = `
        <img src="${destino.imagen}" alt="${destino.nombre}">
        <h3>${destino.nombre}</h3>
        <p>${destino.descripcion}</p>
        <p class="precio">${destino.precio}</p>
        <button onclick="agregarAlCarrito(${destino.id})">Agregar al viaje</button>
      `;
      
      contenedorProductos.appendChild(div);
    });
  })
  .catch(error => console.error('Error al cargar los destinos:', error)); 