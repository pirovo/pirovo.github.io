document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de validación y envío del formulario
        console.log('Formulario enviado');
        // Puedes usar AJAX para enviar los datos del formulario a un servidor
    });
});