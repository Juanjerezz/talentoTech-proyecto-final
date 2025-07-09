const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contador = document.getElementById('carrito-contador');
const total = document.getElementById('carrito-total');
const contenedor = document.getElementById('productos-container');
const carritoItems = document.getElementById('carrito-items');

function actualizarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  contador.textContent = carrito.length;

  carritoItems.innerHTML = '';
  let totalCompra = 0;
  carrito.forEach((producto, i) => {
    const div = document.createElement('div');
    div.innerHTML = `${producto.title} - $${producto.price} <button onclick="eliminar(${i})">❌</button>`;
    carritoItems.appendChild(div);
    totalCompra += producto.price;
  });
  total.textContent = totalCompra;
}

function eliminar(i) {
  carrito.splice(i, 1);
  actualizarCarrito();
}

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(prod => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <img src="${prod.image}" alt="${prod.title}">
        <h3>${prod.title}</h3>
        <p>$${prod.price}</p>
        <button onclick='agregar(${JSON.stringify(prod)})'>Agregar</button>
      `;
      contenedor.appendChild(div);
    });
  });

function agregar(prod) {
  carrito.push(prod);
  actualizarCarrito();
}

actualizarCarrito();