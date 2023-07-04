const elecciones = ["piedra", "papel", "tijeras"];

let cantidadDeJugadas;
let jugadaComputadora;
let jugadaUsuario;
let resultado;
let puntosComputadora=0;
let puntosUsuario=0

function obtenerJugadaComputadora() {
   jugadaComputadora = elecciones[Math.floor(Math.random()*3)];
   return jugadaComputadora;
}

function obtenerJugadaUsuario() {
    do {
        const readlineSync = require('readline-sync');
        jugadaUsuario = readlineSync.question("Elige piedra, papel o tijeras: ");
        if (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijeras") {
            console.log("Esa elección no es válida");
        }
    } while (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijeras");
    return jugadaUsuario;
}

function determinarGanador() {
    if ((jugadaComputadora=="piedra" && jugadaUsuario=="tijeras") || (jugadaComputadora=="tijeras" && jugadaUsuario=="papel") || (jugadaComputadora=="papel" && jugadaUsuario=="piedra")) {
        return resultado = "Gana la computadora";
    }
    else if (jugadaComputadora == jugadaUsuario) {
        return resultado = "Empate";
    }
    else {
        return resultado = "Gana el usuario";
    }
}

function consultaCantidadJugadas() {
    console.log("Elige el modo de juego");
    console.log("1 - Para una sola jugada.");
    console.log("2 - Para dos jugadas con posibilidad de empate.");
    console.log("3 - Para el mejor de tres.")
    const readlineSync = require('readline-sync');
    cantidadDeJugadas = readlineSync.question("");
    return cantidadDeJugadas;
}

function jugada() {
    obtenerJugadaComputadora();
    obtenerJugadaUsuario();
    determinarGanador();
    devolucion();
}


function devolucion() {
     console.log("La computadora eligio: %s. El usuario eligio: %s. El resultado fue: %s.",jugadaComputadora, jugadaUsuario, resultado);
}



consultaCantidadJugadas();

switch (Number(cantidadDeJugadas)) {
    case 1:
        jugada();
        break;

    case 2:
        for (let i=0; i < 2; i++) {
            jugada()
            if (resultado == "Gana el usuario") {
                puntosUsuario++;
            }
            else if (resultado == "Gana la computadora") {
                puntosComputadora++;
            }
            else {}
        }
        if (puntosUsuario > puntosComputadora) {
            console.log("Ganaste %i a %i",puntosUsuario, puntosComputadora);
        }
        else if (puntosUsuario==puntosComputadora) {
            console.log("Empataste");
        }
        else {
            console.log("Gana la computadora %i a %i",puntosComputadora, puntosUsuario);
        }
        break;

    case 3:
        do {
            jugada();
            if (resultado== "Gana el usuario") {
                puntosUsuario++;
            }
            else if (resultado== "Gana la computadora") {
                puntosComputadora++;
            }
            else{}
        } while (puntosUsuario < 2 && puntosComputadora < 2);

        if (puntosUsuario > puntosComputadora) {
            console.log("Ganaste %i a %i",puntosUsuario, puntosComputadora);
        }
        else {
            console.log("Gana la computadora %i a %i",puntosComputadora, puntosUsuario);
        }
        break;

    default: console.log("incorrecto");


}