const contenedorProductos = document.getElementById("contenedor-productos");

fetch("data/productos.json")
  .then(response => response.json())
  .then(destinos => {
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
  });