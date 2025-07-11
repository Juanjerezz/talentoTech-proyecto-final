document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("contenedor-adicionales");
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  fetch("https://dummyjson.com/products?limit=12")
    .then(res => res.json())
    .then(data => {
      data.products.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
          <img src="${producto.thumbnail}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <p>${producto.description}</p>
          <p class="precio">USD $${producto.price}</p>
          <button class="agregar-carrito">Agregar</button>
        `;

        // Botón agregar al carrito
        div.querySelector("button").addEventListener("click", () => {
          // Agregamos el producto al carrito con un formato simple
          carrito.push({
            id: producto.id,
            nombre: producto.title,
            descripcion: producto.description,
            precio: producto.price,
            imagen: producto.thumbnail,
            adicional: true // para identificar que es un producto adicional
          });
          localStorage.setItem("carrito", JSON.stringify(carrito));
          alert(`Producto agregado: ${producto.title}`);
        });

        contenedor.appendChild(div);
      });
    })
    .catch(error => {
      contenedor.innerHTML = "<p>Error al cargar los productos adicionales.</p>";
      console.error("Error:", error);
    });

  // Menu toggle móvil (opcional)
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('activo');
  });
});