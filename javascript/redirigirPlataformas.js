// Redirige al usuario a la plataforma deseada

let opcionSelect = document.getElementById("plataformas");

// agrego un evento de cambio dependiendo de la opcion marcada en el select
opcionSelect.addEventListener("change", ()=> {
    // obtengo la opcion seleccionada
    let plataformaSeleccionada = opcionSelect.value;

    // Valido si se escogió una opción -- es decir, si no está vacío
    if (plataformaSeleccionada) {
        // se redirige a la opcion que escogió
        window.location.href = plataformaSeleccionada;
    }
})