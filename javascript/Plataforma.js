class Plataforma {

    // declaro las propiedades de la clase
    opcionSelect = null;
    card = null;
    videoJuegosPlayStation = [
        {
            "id": 1,
            "img": "../assets/juegos/playstation/god-of-war-ragnarok.jpg",
            "titulo": "God of war Ragnarok",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 2,
            "img": "../assets/juegos/playstation/spiderman_2.jpeg",
            "titulo": "Spiderman 2",
            "descripcion": "Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer toda la ciudad de Nueva York de Marvel. También podrás cambiar rápidamente entre Peter Parker y Miles Morales para vivir diferentes historias y canalizar poderes nuevos y épicos, mientras el emblemático villano Venom amenaza con destruir sus vidas, la ciudad y a todos sus seres queridos."
        },
        {   
            "id": 3,
            "img": "../assets/juegos/playstation/bloodborne.webp",
            "titulo": "Bloodborne",
            "descripcion": "Enfrenta tus pesadillas mientras buscas respuestas en la antigua ciudad de Yharnam, ahora maldecida por una enfermedad endémica que se propaga por las calles como un fuego arrasador. El peligro, la muerte y la locura merodean en cada esquina de este mundo oscuro y espantoso, y debes descubrir sus secretos más oscuros para poder sobrevivir."
        },
        {   
            "id": 4,
            "img": "../assets/juegos/playstation/daysgone.webp",
            "titulo": "Daysgone",
            "descripcion": "Ponte en los zapatos sucios y salpicados del antiguo motero forajido Deacon St. John, un cazarrecompensas que busca una razón para vivir en una tierra rodeada de muerte. Rebusca equipamiento entre asentamientos abandonados para fabricar objetos valiosos y armas, o prueba tu suerte con otros sobrevivientes."
        },
        {   
            "id": 5,
            "img": "../assets/juegos/playstation/Ghost_of_Tsushima.webp",
            "titulo": "Ghost of Tsushima",
            "descripcion": "Forja un nuevo camino y emplea tácticas de guerra poco convencionales para liberar Tsushima. Desafía a tus enemigos con tu katana, domina el arco para eliminar las amenazas lejanas, aprende tácticas de sigilo para emboscar a los enemigos y explora una nueva historia en la Isla Iki."
        },
        {   
            "id": 6,
            "img": "../assets/juegos/playstation/horizon-zero-dawn.jpeg",
            "titulo": "Horizon Zero Dawn",
            "descripcion": "En un exuberante mundo postapocalíptico donde la naturaleza ha reclamado las ruinas de una civilización olvidada, los remanentes de la humanidad viven en primitivas tribus cazadoras-recolectoras. Su dominio sobre esta nueva tierra salvaje ha sido usurpado por las máquinas, temibles criaturas mecánicas de origen desconocido."
        },
        {   
            "id": 7,
            "img": "../assets/juegos/playstation/horizon-zero-dawn-fw.jpeg",
            "titulo": "Horizon Zero Dawn Forbbiden West",
            "descripcion": "La tierra se muere. Las rugientes tormentas y una desolación imparable causan estragos entre lo que queda de la humanidad, unas cuantas tribus dispersas, mientras nuevas y temibles máquinas merodean por sus fronteras. La vida en la Tierra se enfrenta a una nueva extinción y nadie sabe por qué."
        },
        {   
            "id": 8,
            "img": "../assets/juegos/playstation/god-of-war-game.webp",
            "titulo": "God of war",
            "descripcion": "Kratos vuelve a ser padre. Como mentor y protector de Atreus, un hijo determinado a ganarse el respeto de su padre, se ve obligado a contener la ira que durante tanto tiempo lo ha caracterizado mientras recorre un mundo lleno de peligros junto a su muchacho. Kratos ahora vive en el reino de las deidades y monstruos nórdicos."
        },
        {   
            "id": 9,
            "img": "../assets/juegos/playstation/uncharted-legacy.jpeg",
            "titulo": "Uncharted Legacy",
            "descripcion": "Descubre la historia perdida con los carismáticos, aunque complejos, ladrones, Nathan Drake y Chloe Frazer, mientras viajan por el mundo con un sentido de curiosidad en busca de aventuras extraordinarias y la historia perdida. Busca tu legado y deja tu marca en el mapa en UNCHARTED: Colección Legado de ladrones."
        },
        {   
            "id": 10,
            "img": "../assets/juegos/playstation/the_last_of_us_game.webp",
            "titulo": "The Last of Us",
            "descripcion": "En una civilización devastada, donde los infectados y los empedernidos sobrevivientes proliferan, Joel, un protagonista cansado, es contratado para rescatar de contrabando a una niña de 14 años llamada Ellie de una zona de cuarentena militar. Sin embargo, lo que comienza como un pequeño trabajo pronto se transforma en una brutal travesía por todo el país."
        },
        {   
            "id": 11,
            "img": "../assets/juegos/playstation/the-last-of-us-2.avif",
            "titulo": "The Last of Us 2",
            "descripcion": "Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer toda la ciudad de Nueva York de Marvel. También podrás cambiar rápidamente entre Peter Parker y Miles Morales para vivir diferentes historias y canalizar poderes nuevos y épicos, mientras el emblemático villano Venom amenaza con destruir sus vidas, la ciudad y a todos sus seres queridos."
        },
        {   
            "id": 12,
            "img": "../assets/juegos/playstation/demon-souls.webp",
            "titulo": "Demon Souls",
            "descripcion": "En su búsqueda de poder, el 12.º rey de Boletaria, el rey Allant canalizó las antiguas artes del arma, despertando a un demonio desde los albores del tiempo mismo, el Antiguo. Con la invocación del Antiguo, una niebla sin color barrió por la tierra, desatando criaturas pesadillescas con hambre de almas humanas."
        }
    ];
    videoJuegosXbox = [
        {
            "id": 13,
            "img": "../assets/juegos/xbox/hellblade.jpeg",
            "titulo": "Hellblade",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 14,
            "img": "../assets/juegos/xbox/stalker2.jpeg",
            "titulo": "Stalker 2",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 15,
            "img": "../assets/juegos/xbox/starfield.jpg",
            "titulo": "Starfield",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 16,
            "img": "../assets/juegos/xbox/Redfall.jpeg",
            "titulo": "RedFall",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 17,
            "img": "../assets/juegos/xbox/Halo-Infinite.webp",
            "titulo": "Halo Infinite",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 18,
            "img": "../assets/juegos/xbox/ravenlok.jpeg",
            "titulo": "Ravenlok",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 19,
            "img": "../assets/juegos/xbox/forza-horizon-5.jpeg",
            "titulo": "Forza Horizon 5",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 20,
            "img": "../assets/juegos/xbox/the-gunk.jpeg",
            "titulo": "The Gunk",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 21,
            "img": "../assets/juegos/xbox/halo-the-master-chief-collection.jpeg",
            "titulo": "Halo: The Master Chief Collection",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 22,
            "img": "../assets/juegos/xbox/titan-fall.jpeg",
            "titulo": "Titanfall",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 23,
            "img": "../assets/juegos/xbox/gears-5.webp",
            "titulo": "Gears 5",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        },
        {   
            "id": 24,
            "img": "../assets/juegos/xbox/Forza-Motorsport.webp",
            "titulo": "Forza Motorsport",
            "descripcion": "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo.La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
        }
    ];

    // establezco el constructor de plataformas
    constructor() {
        // asigno los elementos de html para obtener y mostrar informacion
        this.opcionSelect = document.getElementById("plataformas");
        this.card = document.getElementById("card-template");

        // obtengo la referencia del boton de busqueda
        const btnBuscar = document.getElementById("btn-buscar");
        // Agrego un controlador de eventos para el botón de búsqueda
        btnBuscar.addEventListener("click", () => {
            this.buscar();
        })
    }

    // pinto o muestro la data de cards para plataforma playstation
    mostrarJuegosPlayStation(){
        // limpio el contenido de la tarjeta
        this.card.innerHTML = '';

        // mapeo la informacion del array
        this.videoJuegosPlayStation.map((x)=> {
        // por cada objeto del array se crea una card
        this.card.innerHTML += `
        <div class="card card__container--st">
            <img src="${x.img}" class="img--card" alt="${x.titulo} juego">
            <div class="card-body texto">
                <h5 class="card__title--st">${x.titulo}</h5>
                <p class="card__text--st">${x.descripcion}</p>
            </div>
            <div class="card-body btn__comprar">
                <button class="btn__comprar--st">Ver informacion</button>
            </div>
        </div>
        `;
        })
    }

    // pinto o muestro la data de cards para plataforma xbox
    mostrarJuegosXbox(){
        // limpio el contenido de la tarjeta
        this.card.innerHTML = '';

        // mapeo la informacion del array
        this.videoJuegosXbox.map((x)=> {
        // por cada objeto del array se crea una card
        this.card.innerHTML += `
        <div class="card card__container--st">
            <img src="${x.img}" class="img--card" alt="${x.titulo} juego">
            <div class="card-body texto">
                <h5 class="card__title--st">${x.titulo}</h5>
                <p class="card__text--st">${x.descripcion}</p>
            </div>
            <div class="card-body btn__comprar">
                <button class="btn__comprar--st">Comprar</button>
            </div>
        </div>
        `;
        })
    }

    // obtengo la url de la pagina
    obtenerUrl(){
        //obtengo la url
        return window.location.href
    }

    // Se muestra las cards de los diferentes juegos en base a la plataforrma escogida
    mostrarJuegos(){
        const url = this.obtenerUrl();

        if (url.endsWith("playstation.html")){
            this.mostrarJuegosPlayStation();
        } else {
            this.mostrarJuegosXbox();
        }
    }

    // Obtiene las cards de los juegos que se buscan
    buscar(){
        // obtengo la data ingresada en el input de buscar y la transformo todo en miniscula
        const inputBusqueda = document.getElementById("buscar").value.toLowerCase();

        // Valido si estoy en plataforma playstation o xbox
        const url = this.obtenerUrl();
        const plataforma = url.endsWith("playstation.html") ? "PlayStation" : "Xbox";

        // Obtengo los juegos según la plataforma
        const juegosInfo = plataforma === "PlayStation" ? this.videoJuegosPlayStation : this.videoJuegosXbox;
        console.log(juegosInfo)

        // Filtro los juegos que coincidan con la busqueda
        const juegoFiltrado = juegosInfo.filter((juego) => {
            return juego.titulo.toLowerCase().includes(inputBusqueda)
        })

        // limpio el contenido de la tarjeta
        this.card.innerHTML = '';
        
        // Valido el tamaño del array juegoFiltrado para mostar mensansaje en caso de que al buscar no exista el juego
        if (juegoFiltrado.length == 0 ){
            this.card.innerHTML += `
            <div class="card card__container--st">
                <h2 class="exclusivo__consola--st">No se encontraron resultados</h2>
            </div>
            `;
        } else {
            // mapeo la informacion del array
            juegoFiltrado.map((juego) => {
            // por cada objeto del array se crea una card
            this.card.innerHTML += `
            <div class="card card__container--st">
                <img src="${juego.img}" class="img--card" alt="${juego.titulo} juego">
                <div class="card-body texto">
                    <h5 class="card__title--st">${juego.titulo}</h5>
                    <p class="card__text--st">${juego.descripcion}</p>
                </div>
                <div class="card-body btn__comprar">
                    <button class="btn__comprar--st">Ver informacion</button>
                </div>
            </div>
            `;
            })
        }
    }
}
const plataforma = new Plataforma()
plataforma.mostrarJuegos();
