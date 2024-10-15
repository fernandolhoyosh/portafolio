// Funcion para animar la pagina al recargar

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

//Funcion del botón para mostrar o ocultar el menu principal de navegación

document.querySelector('.btn-menu-flotante').addEventListener('click',function(){
    let menu = document.querySelector('.menu__navegacion__items');
    menu.classList.toggle('show');
});

// Función para mostrar el botón de ir al arriba cuando se hace scroll hacia abajo
window.onscroll = function() {
    let boton = document.querySelector('.btn-ir-arriba');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = 'block';
    } else {
        boton.style.display = 'none';
    }
};

// Función para ir arriba de la página
document.querySelector('.btn-ir-arriba').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const validarFomulario = () => {

    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        const nombre = document.getElementById('input-nombre').value;
        const email = document.getElementById('input-email').value;
        const asunto = document.getElementById('input-asunto').value;
        const mensaje = document.getElementById('textarea-mensaje').value;

        const inputNombre = document.getElementById('input-nombre');
        const inputEmail = document.getElementById('input-email');
        const inputAsunto = document.getElementById('input-asunto');
        const inputMensaje = document.getElementById('textarea-mensaje');

        const errorNombre = document.getElementById('errorNombre');
        const errorEmail = document.getElementById('errorEmail');
        const errorAsunto = document.getElementById('errorAsunto');
        const errorMensaje = document.getElementById('errorMensaje');



        let esValido = true;
    
        // Resetear mensajes de error
        errorNombre.style.display = 'none';
        errorNombre.textContent = '';
        errorEmail.style.display = 'none';
        errorEmail.textContent = '';
        errorAsunto.style.display = 'none';
        errorAsunto.textContent = '';
        errorMensaje.style.display = 'none';
        errorMensaje.textContent = '';

        inputNombre.style.border = '1px solid #444';
        inputEmail.style.border = '1px solid #444';
        inputAsunto.style.border = '1px solid #444';
        inputMensaje.style.border = '1px solid #444';
    
        // Validar que el campo no esté vacío
        if (nombre.trim() === '') {
            inputNombre.style.border = '1px solid red';
            errorNombre.style.display = 'block';
            errorNombre.textContent = '⛔ El campo Nombre no debe estar en blanco o vacío.';
            esValido = false;
        }
    
        // Validar que el campo no exceda los 50 caracteres
        if (nombre.length > 50) {
            inputNombre.style.border = '1px solid red';
            errorNombre.style.display = 'block';
            errorNombre.textContent = '⛔ El campo Nombre debe contener máximo 50 caracteres.';
            esValido = false;
        }

        //Expresión regular para validar el email
        var emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

        if (email.trim() === '') {
            inputEmail.style.border = '1px solid red';
            errorEmail.style.display = 'block';
            errorEmail.textContent = '⛔ El campo Correo no debe estar en blanco o vacío';
            esValido = false;
        } else if (!emailRegex.test(email)) {
            inputEmail.style.border = '1px solid red';
            errorEmail.style.display = 'block';
            errorEmail.textContent = '⛔ El campo Email debe estar en formato correcto (ejemplo: texto@texto.com).';
            esValido = false;
        }

        //Validar campo Asunto

         // Validar que el campo no esté vacío y no exceda los 50 caracteres
         if (asunto.trim() === '') {
            inputAsunto.style.border = '1px solid red';
            errorAsunto.style.display = 'block';
            errorAsunto.textContent = '⛔ El campo Asunto no debe estar en blanco o vacío.';
            esValido = false;
        } else if (asunto.length > 50) {
            inputAsunto.style.border = '1px solid red';
            errorAsunto.style.display = 'block';
            errorAsunto.textContent = '⛔ El campo Asunto debe contener máximo 50 caracteres.';
            esValido = false;
        }

        //validar campo Mensaje TextArea

        // Validar que el campo no esté vacío y no exceda los 300 caracteres
        if (mensaje.trim() === '') {
            inputMensaje.style.border = '1px solid red';
            errorMensaje.style.display = 'block';
            errorMensaje.textContent = '⛔ El campo Mensaje no debe estar en blanco o vacío.';
            esValido = false;
        } else if (mensaje.length > 300) {
            inputMensaje.style.border = '1px solid red';
            errorMensaje.style.display = 'block';
            errorMensaje.textContent = '⛔ El campo Mensaje debe contener máximo 300 caracteres.';
            esValido = false;
        }
    
        // Prevenir el envío del formulario si no es válido
        if (!esValido) {
            event.preventDefault();
        }
    });

}

validarFomulario();