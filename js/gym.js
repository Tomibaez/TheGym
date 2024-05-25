let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value.trim();
    let nombre = document.getElementById('nombre').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value.trim();
    let acepto = document.getElementById('acepto').checked;
    let contactPref = document.querySelector('input[name="contacto"]:checked');

    if (!email) {
        alert('Por favor, ingrese su Email.');
        return;
    }

    if (!nombre) {
        alert('Por favor, ingrese su Nombre.');
        return;
    }

    if (!telefono) {
        alert('Por favor, ingrese su Teléfono.');
        return;
    }

    if (!asunto) {
        alert('Por favor, seleccione un Asunto.');
        return;
    }

    if (!mensaje) {
        alert('Por favor, ingrese su Mensaje.');
        return;
    }

    if (!acepto) {
        alert('Debe aceptar los términos y condiciones.');
        return;
    }

    if (!contactPref) {
        alert('Por favor, seleccione una preferencia de contacto.');
        return;
    }

    if (contactPref.value === 'prefer_phone') {
        alert('Formulario completado!!, Ahora lo contactaremos por su número de teléfono.');
    } else {
        alert('Formulario enviado con éxito!, ahora le eviaremos un Email');
    }

    // If all validations pass, you can submit the form or perform desired actions
    // this.submit(); // Uncomment to actually submit the form if using server-side handling
});
