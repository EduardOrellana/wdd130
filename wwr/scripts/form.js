// Obtén el elemento div de retroalimentación para poder manipularlo.
const feedbackElement = document.getElementById('feedback');

// Obtén el formulario para poder leer lo que se ingresó en él.
const formElement = document.forms[0];

// Agrega un 'escucha' para esperar una presentación de nuestro formulario. Cuando esto suceda, ejecuta el código a continuación.
formElement.addEventListener('submit', function(e) {
    // Detén la acción predeterminada del formulario.
    e.preventDefault();

    // Establece el contenido de nuestro elemento de retroalimentación con un mensaje que informa al usuario que el formulario se envió correctamente. ¡Observa que extraemos el nombre ingresado en el formulario para personalizar el mensaje!
    feedbackElement.innerHTML = '¡Hola ' + formElement.user_name.value + '! Gracias por tu mensaje. Nos pondremos en contacto contigo tan pronto como sea posible.';

    // Haz visible el elemento de retroalimentación.
    feedbackElement.style.display = "block";

    // Agrega una clase para mover todo hacia abajo para que nuestro mensaje no lo cubra.
    document.body.classList.toggle('moveDown');
});
