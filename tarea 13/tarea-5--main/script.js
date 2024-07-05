// script.js

document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma estándar

    // Validación de los campos
    var cedula = document.getElementById('cedula').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var nombres = document.getElementById('nombre').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();

    // Expresiones regulares para validaciones
    var cedulaRegex = /^\d{10}$/;  // Cédula debe ser un número de 10 dígitos
    var nombresRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;  // Nombres y apellidos solo letras y espacios, hasta 40 caracteres
    var direccionRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;  // Dirección letras, números y algunos caracteres especiales
    var telefonoRegex = /^\d{7,}$/;  // Teléfono debe ser un número de al menos 7 dígitos
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email debe tener formato válido

    // Función para validar con expresión regular
    function validarCampo(valor, regex) {
        return regex.test(valor);
    }

    // Función para mostrar mensaje de error
    function mostrarError(campo, mensaje) {
        var elemento = document.createElement('div');
        elemento.className = 'error';
        elemento.textContent = mensaje;

        var formGroup = campo.parentElement;
        formGroup.appendChild(elemento);
    }

    // Función para limpiar mensajes de error
    function limpiarErrores() {
        var errores = document.querySelectorAll('.error');
        errores.forEach(function(error) {
            error.remove();
        });
    }

    // Validar cada campo
    limpiarErrores();
    var esValido = true;

    if (!validarCampo(cedula, cedulaRegex)) {
        mostrarError(document.getElementById('cedula'), 'Cédula inválida. Debe contener 10 dígitos.');
        esValido = false;
    }

    if (!validarCampo(apellidos, nombresRegex)) {
        mostrarError(document.getElementById('apellidos'), 'Ingrese apellidos válidos (solo letras y espacios).');
        esValido = false;
    }

    if (!validarCampo(nombres, nombresRegex)) {
        mostrarError(document.getElementById('nombre'), 'Ingrese nombres válidos (solo letras y espacios).');
        esValido = false;
    }

    if (!validarCampo(direccion, direccionRegex)) {
        mostrarError(document.getElementById('direccion'), 'Ingrese una dirección válida (mínimo 3 caracteres, letras, números y algunos caracteres especiales).');
        esValido = false;
    }

    if (telefono !== '' && !validarCampo(telefono, telefonoRegex)) {
        mostrarError(document.getElementById('telefono'), 'Teléfono inválido. Debe contener al menos 7 dígitos.');
        esValido = false;
    }

    if (!validarCampo(email, emailRegex)) {
        mostrarError(document.getElementById('email'), 'Email inválido. Verifique el formato.');
        esValido = false;
    }

    // Si todos los campos son válidos, se puede enviar el formulario
    if (esValido) {
        // Aquí puedes enviar los datos a través de AJAX o realizar otras acciones necesarias
        console.log('Formulario válido. Datos a enviar:');
        console.log('Cédula:', cedula);
        console.log('Apellidos:', apellidos);
        console.log('Nombres:', nombres);
        console.log('Dirección:', direccion);
        console.log('Teléfono:', telefono);
        console.log('Correo electrónico:', email);
    }
});

