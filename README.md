# Turismo en Argentina

Este proyecto es una página web interactiva para explorar destinos turísticos en Argentina. Permite a los usuarios visualizar destinos, agregarlos a un carrito de viaje, enviar un formulario de contacto y disfrutar de una experiencia completa desde cualquier dispositivo.

---

## Objetivo

El objetivo de esta página es simular una agencia de turismo digital que permita:
- Explorar diferentes regiones y destinos turísticos del país.
- Agregar destinos a un "viaje" personalizado.
- Enviar un mensaje de contacto a través de un formulario funcional.
- Visualizar testimonios de otros viajeros.
- Utilizar tecnologías modernas como HTML5, CSS3, JavaScript y Fetch API.

---

## Contenido y Funcionalidades

### 1. Estructura Semántica
La página está dividida en secciones semánticas claras usando `header`, `nav`, `main`, `section`, y `footer`.

---

### 2. Formulario de Contacto
Formulario funcional integrado con [Formspree](https://formspree.io/) que incluye:
- Campo de nombre
- Campo de correo electrónico
- Campo de mensaje
- Validación con JavaScript

---

### 3. Estilos CSS
El archivo `styles.css` incluye:
- Estilos para header, footer y navegación
- Uso de Google Fonts (`Roboto`)
- Imágenes de fondo aplicadas con `background-image`
- Adaptación completa a mobile con `Media Queries`

---

### 4. Diseño Responsivo
- **Destinos:** organizados en tarjetas (cards) usando Flexbox.
- **Reseñas:** organizadas en Grid, con formato carrusel dinámico.
- **Formulario de Contacto:** completamente responsivo.


---

### 5. Multimedia y Navegación
- Imágenes reales integradas (ej. Cataratas, paisajes).
- Navegación semántica con anclas internas y múltiples páginas (`index.html`, `destinos.html`, `carrito.html`).

---

### 6. Hosting
El sitio puede visualizarse en línea mediante servicios gratuitos como:
- GitHub Pages
- Netlify

---

### 7. JavaScript
Archivo `script.js` con las siguientes funcionalidades:
- Validación del formulario de contacto.
- Manipulación del DOM para interactividad general.

---

### 8. Carrito de Compras
- Agregar destinos desde tarjetas dinámicas (cargadas con `fetch` desde un JSON/API).
- Visualizar destinos seleccionados.
- Eliminar destinos y vaciar el carrito.
- Mostrar total acumulado.
- Guardar el carrito en `localStorage` para persistencia.

---

### 9. Edición del Carrito
- El usuario puede visualizar y editar los destinos seleccionados.
- El total se actualiza automáticamente al modificar el carrito.

---

### 10. SEO & Accesibilidad
- Todas las imágenes incluyen atributos `alt`.
- Navegación con teclado posible.
- Metadatos SEO básicos en el `<head>` (`meta name="description"`, `keywords`, `author`).

---

## Cómo usar el proyecto

1. Cloná o descargá el repositorio.
2. Abrí `index.html` en tu navegador.
3. Si vas a desplegarlo, subilo a GitHub Pages o Netlify.
4. ¡Explorá y armá tu viaje!

---

## 📁 Estructura del Proyecto

```
/proyecto-final/
│
├── index.html
├── destinos.html
├── carrito.html
├── styles/
│   └── styles.css
├── js/
│   ├── script.js
│   ├── apiProductos.js
│   └── carrito.js
└── images/
    └── fotoReseña.jpg (y otras imágenes)
```

---

## 👨‍💻 Autor

**Nombre:** Juan Jerez 
**Curso:** Argentina Programa / FrontEnd - Proyecto Final  

---

## Licencia

Este proyecto es solo con fines educativos.