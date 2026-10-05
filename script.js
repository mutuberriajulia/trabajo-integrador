document.addEventListener('DOMContentLoaded', () => {

    const modalProducto = document.getElementById('modalProducto');

    if (modalProducto) {

        modalProducto.addEventListener('show.bs.modal', (event) => {

            const boton = event.relatedTarget;
            const titulo = boton.getAttribute('data-titulo');
            const imagen = boton.getAttribute('data-imagen');
            const descripcion = boton.getAttribute('data-descripcion');
            const descripcionLarga = boton.getAttribute('data-descripcion-larga');
            const cantidadPersonas = boton.getAttribute('data-cantidad-personas');
            const tiempoPreparacion = boton.getAttribute('data-tiempo-preparacion');
            const calorias = boton.getAttribute('data-calorias');
            const precio = boton.getAttribute('data-precio');

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

    const formulario = document.getElementById("formContacto");

    if (formulario) {

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            let formularioValido = true;

            if (nombre === "") {
                alert("Por favor, ingresá tu nombre.");
                formularioValido = false;
            } else if (nombre.length < 3) {
                alert("El nombre debe tener al menos 3 caracteres.");
                formularioValido = false;
            }

            const expresionEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                alert("Por favor, ingresá tu email.");
                formularioValido = false;
            } else if (!expresionEmail.test(email)) {
                alert("Por favor, ingresá un email válido.");
                formularioValido = false;
            }

            if (mensaje === "") {
                alert("Por favor, escribí un mensaje.");
                formularioValido = false;
            } else if (mensaje.length < 10) {
                alert("El mensaje debe tener al menos 10 caracteres.");
                formularioValido = false;

            }

            if (formularioValido) {
                alert("Mensaje enviado correctamente.");
                formulario.reset();
            }

        });

    }

});