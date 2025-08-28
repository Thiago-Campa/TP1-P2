const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // Evita enviar el formulario

    // Obtener valores
    const Nombre = document.getElementById("Nombre").value.trim();
    const Apellido = document.getElementById("Apellido").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const Edad = document.getElementById("Edad").value;
    const Telefono = document.getElementById("telefono").value.trim();
    const Genero = document.querySelector("input[name='Genero']:checked");
    const Terminos = document.getElementById("terminos").checked;

    // Obtener elementos de error
    const errorNombre = document.getElementById("error-Nombre");
    const errorApellido = document.getElementById("error-Apellido");
    const errorEmail = document.getElementById("error-Email");
    const errorEdad = document.getElementById("error-Edad");
    const errorTelefono = document.getElementById("error-Telefono");
    const errorGenero = document.getElementById("error-Genero");
    const errorTerminos = document.getElementById("error-Termino");
    const errorExito = document.getElementById("registro-exitoso");

    // Regex
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/;
    const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/;
    const regexEmail = /\S+@\S+\.\S+/;
    const soloNumeros = /^\d+$/;

    let formValido = true;

    // VALIDACIÓN NOMBRE
    if(Nombre === ""){
        errorNombre.innerText = "Este campo es obligatorio";
        formValido = false;
    } else if(!regexNombre.test(Nombre)){
        errorNombre.innerText = "Solo letras y entre 3 y 30 caracteres";
        formValido = false;
    } else {
        errorNombre.innerText = "";
    }

    // VALIDACIÓN APELLIDO
    if(Apellido === ""){
        errorApellido.innerText = "Este campo es obligatorio";
        formValido = false;
    } else if(!regexApellido.test(Apellido)){
        errorApellido.innerText = "Solo letras y entre 3 y 30 caracteres";
        formValido = false;
    } else {
        errorApellido.innerText = "";
    }

    // VALIDACIÓN EMAIL
    if(Email === ""){
        errorEmail.innerText = "Este campo es obligatorio";
        formValido = false;
    } else if(!regexEmail.test(Email)){
        errorEmail.innerText = "Ingrese un email válido";
        formValido = false;
    } else {
        errorEmail.innerText = "";
    }

    // VALIDACIÓN EDAD
    if(Edad === ""){
        errorEdad.innerText = "Este campo es obligatorio";
        formValido = false;
    } else {
        errorEdad.innerText = "";
    }

    // VALIDACIÓN TELÉFONO
    if(Telefono === ""){
        errorTelefono.innerText = "Este campo es obligatorio";
        formValido = false;
    } else if(!soloNumeros.test(Telefono)){
        errorTelefono.innerText = "Ingrese solo números";
        formValido = false;
    } else {
        errorTelefono.innerText = "";
    }

    // VALIDACIÓN GÉNERO
    if(!Genero){
        errorGenero.innerText = "Seleccione una opción";
        formValido = false;
    } else {
        errorGenero.innerText = "";
    }

    // VALIDACIÓN TÉRMINOS
    if(!Terminos){
        errorTerminos.innerText = "Debe aceptar los términos";
        formValido = false;
    } else {
        errorTerminos.innerText = "";
    }

    // Si todo es válido
    if(formValido){
        errorExito.innerText = "Registro completado!";
    }
});



