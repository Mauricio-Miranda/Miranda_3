

// Maneja el evento submit del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    // Evitar el envío del por defecto
    event.preventDefault();
    
    // Obtener los campos a completar
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    
    // Limpiar los estilos y mensajes de error anteriores
    limpiarErrores();
    
    // Obtener los contenedores de los mensajes de error
    const errorTelefono = document.getElementById('error-telefono');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');
    
    // Validar campos
    let valid = true;

    // Validar Teléfono y Email
    const telefonoVal = telefono.value.trim();
    const emailVal = email.value.trim();

    if (!telefonoVal && !emailVal) {
        telefono.classList.add('invalid');
        email.classList.add('invalid');
        errorTelefono.textContent = 'Por favor, introduce un teléfono o un email.';
        errorEmail.textContent = 'Por favor, introduce un teléfono o un email.';
        valid = false;
    }

    // Validación específica del teléfono
    if (telefonoVal) {
        const telefonoRegex = /^(\d+(\s\d+)*)?$/;
        if (!telefonoRegex.test(telefonoVal)) {
            telefono.classList.add('invalid');
            errorTelefono.textContent = 'El teléfono debe contener solo números y espacios permitidos.';
            valid = false;
        }
    }

    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        email.classList.add('invalid');
        errorEmail.textContent = 'Por favor, introduce un correo electrónico válido.';
        valid = false;
    }
    
    // Validar Mensaje
    const mensajeVal = mensaje.value.trim();
    if (!mensajeVal) {
        mensaje.classList.add('invalid');
        errorMensaje.textContent = 'Por favor, completa este campo.';
        valid = false;
    }
    
    // Si todos los campos son válidos se envia el formulario
    if (valid) {
        const mensajeEnviado = document.getElementById('mensaje-enviado');
        mensajeEnviado.textContent = 'Formulario enviado con éxito';
        mensajeEnviado.classList.add('mensaje-exito');
        // Limpia el formulario
        telefono.value = '';
        email.value = '';
        asunto.value = '';
        mensaje.value = '';
    }
});

// Limpia los estilos de error
function limpiarEstilosError() {
    const camposInvalidos = document.querySelectorAll('.input-ingreso input.invalid, .input-ingreso textarea.invalid');
    camposInvalidos.forEach(campo => {
        campo.classList.remove('invalid');
    });
}

// Limpia el mensaje de error
function limpiarMensajeError() {
    const mensajesError = document.querySelectorAll('.mensaje-error');
    mensajesError.forEach(mensaje => {
        mensaje.textContent = '';
    });
}

// Limpia los estilos de error y mensajes de error
function limpiarErrores() {
    limpiarEstilosError();
    limpiarMensajeError();
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    mensajeEnviado.textContent = '';
    mensajeEnviado.classList.remove('mensaje-exito');
}

// Limpia los estilos y mensajes de error al 
document.querySelectorAll('.input-ingreso input, .input-ingreso textarea').forEach(campo => {
    campo.addEventListener('focus', limpiarErrores);
});

// Limpiar los estilos y mensajes de error con una nueva página o un nuevo formulario
window.addEventListener('load', limpiarErrores);
document.getElementById('formulario-contacto').addEventListener('reset', limpiarErrores);



