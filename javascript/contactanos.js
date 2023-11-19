const nombreUsuario = document.querySelector("input.form-control#nombre");
const apellidoUsuario = document.querySelector("input.form-control#apellido");
const emailUsuario = document.querySelector("input.form-control#email");
const telefonoUsuario = document.querySelector("input.form-control#telefono");
const esNuevo = document.querySelectorAll("input.form-check-input");
const opinionUsuario = document.querySelector("textarea.form-control#opinionUsuario");
const botonEnviar = document.querySelector("button.btn#botonForm");

// obtengo el valor del checkbox seleccionado en el formulario de Contactanos
function checkboxValue(){

    let checkboxSeleccionado = null;

    esNuevo.forEach((opcion)=> {
        if(opcion.checked == true){
            checkboxSeleccionado = opcion.value;
        }
    })

    return checkboxSeleccionado;
}

// almacena en el localStore la informacion suministrada por el usuario en el formulario de Contactanos
function guardarDatosUsuario(){

    // obtengo los valores del formulario y lo almaceno en el objeto dataUsuario
    const dataUsuario = {
        fecha: new Date(),
        nombre: nombreUsuario.value,
        apellido: apellidoUsuario.value,
        email: emailUsuario.value,
        telefono: telefonoUsuario.value,
        usuarioNuevo: checkboxValue(),
        opinion: opinionUsuario.value
    }

    localStorage.setItem("dataUsuario", JSON.stringify(dataUsuario))

}
botonEnviar.addEventListener('click', ()=> guardarDatosUsuario())