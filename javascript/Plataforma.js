class Plataforma {

    // declaro las propiedades de la clase
    opcionSelect = null;
    card = null;
    playstationGames = null ;
    xboxGames = null;

    // establezco el constructor de plataformas
    constructor() {
        // asigno los elementos de html para obtener y mostrar informacion
        this.opcionSelect = document.querySelector("select.form-select#plataformas");
        this.card = document.querySelector("div.card-container#card-template");
        this.playstationGames = videoJuegosPlayStation;
        this.xboxGames = videoJuegosXbox;
    }

    // metodo que contiene la platilla html de cada card
    cardVideoJuego(videojuego) {
        return `<div class="card card__container--st">
                    <img src="${videojuego.img}" class="img--card" alt="${videojuego.titulo} juego">
                    <div class="card-body texto">
                        <h5 class="card__title--st" id="${videojuego.titulo}">${videojuego.titulo}</h5>
                        <p class="card__text--st">${videojuego.descripcion}</p>
                    </div>
                    <div class="card-body btn__comprar">
                        <button class="btn__comprar--st" id="${videojuego.id}">Comprar</button>
                    </div>
                </div>`;
    }

    // metodo que contiene la platilla html si no se encuentran productos
    cardNoFound(){
        return `<div class="card card__container--st" style="grid-column: 2/3">
                    <h2 class="exclusivo__consola--st">No se encontraron resultados</h2>
                    <img src="../assets/icons/no-results.png" alt="logo no found" style="
                    width: 10rem;
                    margin: 0 auto;
                    padding-bottom: 2rem;
                    ">
                </div>`;
    }

    // establece un tooltip en los botones de cada card
    infoTooltip(){
        const btnVerInfo = document.querySelectorAll("button.btn__comprar--st")
        btnVerInfo.forEach(boton => {
            boton.addEventListener("mouseover", ()=> {
                boton.title = "Click aqui para comprar"
            })
        })
    }

    // pinto o muestro la data de cards para plataforma playstation
    mostrarJuegosPlayStation(){
        if (this.playstationGames.length > 0){
             // limpio el contenido de la tarjeta
            this.card.innerHTML = '';
            // mapeo la informacion del array
            this.playstationGames.map((videojuego)=> {
            // por cada objeto del array se crea una card
            this.card.innerHTML += this.cardVideoJuego(videojuego);
            //return videojuego.id;
        })

            // tooltip para el boton ver informacion de las cards
            this.infoTooltip()
        } else {
            this.card.innerHTML += this.cardNoFound()
        }
    }

    // pinto o muestro la data de cards para plataforma xbox
    mostrarJuegosXbox(){
        if (this.xboxGames.length > 0){
            // limpio el contenido de la tarjeta
            this.card.innerHTML = '';
            // mapeo la informacion del array
            this.xboxGames.map((videojuego)=> {
            // por cada objeto del array se crea una card
            this.card.innerHTML += this.cardVideoJuego(videojuego)
            //return videojuego.id;
        })

            // tooltip para el boton ver informacion de las cards
            this.infoTooltip()
        } else {
            this.card.innerHTML += this.cardNoFound()
        }
    }

    mostrarJuegosFiltrados(juegosFiltrados) {
        // limpio el contenido de la tarjeta
        this.card.innerHTML = '';

        if (juegosFiltrados.length === 0 ){
            this.card.innerHTML += this.cardNoFound()
        } else {
            // mapeo la informacion del array
            juegosFiltrados.map((juego) => {
            // por cada objeto del array se crea una card
            this.card.innerHTML += this.cardVideoJuego(juego)})
        }
    }

    // almacena en el local storage el juego al cual se hace clic en comprar
    // recibe como parametro boton, para indicar el elemento especifico relacionado con el boton comprar presionado
    guardarJuegoComprado(boton){

        /*

        Con el metodo closests obtengo el elemento padre más cercano del botón comprar que tiene la clase "card"
        Esto me permite que al momento de hacer clic en comprar, me llame la informacion de la card donde
        se presionó el botón.

        */
        const nombreJuego = boton.closest(".card").querySelector("h5.card__title--st");
        let nombre = nombreJuego.id

        const btnComprar = boton.closest(".card").querySelector("button.btn__comprar--st");
        let idJuego = btnComprar.id

        // obtengo los valores del formulario y lo almaceno en el objeto dataJuego
        const dataJuego = {
            fecha: new Date(),
            id: idJuego,
            titulo: nombre
        }
        localStorage.setItem("dataJuego", JSON.stringify(dataJuego))
    }

}

// Creo una instancia de Plataformas
const plataforma = new Plataforma()
//plataforma.mostrarJuegos();
mostrarJuegos(plataforma)

// obtengo la referencia del boton de busqueda
const btnBuscar = document.querySelector("button.btn-st#btn-buscar");
// Agrego un controlador de eventos para el botón de búsqueda
btnBuscar.addEventListener("click", () => {
    buscar(plataforma);
})

const btnComprar = document.querySelectorAll("button.btn__comprar--st");
btnComprar.forEach((button) => {
    button.addEventListener('click', () => plataforma.guardarJuegoComprado(button));
})
