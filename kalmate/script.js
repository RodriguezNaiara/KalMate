// Asegúrate de que este script se ejecute solo en producto-detalle.html
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el parámetro de la URL
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get('id'); // ¡CAMBIO AQUÍ! Ahora busca el 'id'
    
    // El objeto 'productos' ahora debe estar definido en el archivo productos.js
    // que se enlaza en el HTML.

    const producto = productos[idProducto];

    // 4. Inyectar la información en la plantilla HTML
    if (producto) {
        document.getElementById('producto-titulo').innerText = producto.titulo;
        document.getElementById('producto-imagen').src = producto.imagen;
        document.getElementById('producto-imagen').alt = producto.titulo;
        document.getElementById('producto-precio').innerText = `Precio: ${producto.precio}`;
        document.getElementById('producto-descripcion').innerText = producto.descripcion;
    } else {
        // Manejar el caso de que el producto no exista
        const contenedor = document.getElementById('producto-info');
        contenedor.innerHTML = '<h2>Producto no encontrado</h2><p>Lo sentimos, el producto que buscas no existe.</p>';
    }
});