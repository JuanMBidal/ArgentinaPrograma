const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero correspondiente a un mes: ');

let meses = ["","enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

if (numero == 2) {
    console.log("La cantidad de dias del mes de %s es 28",meses[numero]);
} else if (numero == 4 || numero==6 || numero==9 || numero==11){
    console.log("La cantidad de dias del mes de %s es 30",meses[numero]);
} else if (numero <= 0 || numero > 12 ) {
    console.log("Numero incorrecto");
} else {
    console.log("La cantidad de dias del mes de %s es 31",meses[numero]);
}