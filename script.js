document.addEventListener('DOMContentLoaded', () => {
    const modalProducto = document.getElementById('modalProducto');
    if (modalProducto) {
        modalProducto.addEventListener('show.bs.modal', (event) => {
            const boton = event.relatedTarget;

            // Extraer datos de los atributos data-* del botón
            const titulo = boton.getAttribute('data-titulo');
            const imagen = boton.getAttribute('data-imagen');
            const descripcion = boton.getAttribute('data-descripcion');
            const descripcionLarga = boton.getAttribute('data-descripcion-larga');
            const cantidadPersonas = boton.getAttribute('data-cantidad-personas');
            const tiempoPreparacion = boton.getAttribute('data-tiempo-preparacion');
            const calorias = boton.getAttribute('data-calorias');
            const precio = boton.getAttribute('data-precio');

            // Actualizar contenido del modal
            modalProducto.querySelector('.modal-title').textContent = titulo;
            modalProducto.querySelector('#modalImagen').src = imagen;
            modalProducto.querySelector('#modalImagen').alt = titulo;
            modalProducto.querySelector('#modalDescripcion').textContent = descripcion;
            modalProducto.querySelector('#modalDescripcionLarga').textContent = descripcionLarga;
            modalProducto.querySelector('#modalCantidadPersonas').textContent = cantidadPersonas;
            modalProducto.querySelector('#modalTiempoPreparacion').textContent = tiempoPreparacion;
            modalProducto.querySelector('#modalCalorias').textContent = calorias;
            modalProducto.querySelector('#modalPrecio').textContent = precio;
        });
    }
});