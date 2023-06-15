const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresar un numero entero: ');
let esPar = numero%2 === 0;
let esPositivo = numero > 0;

if(esPar && esPositivo) {
    console.log("El numero es positivo y par");
} else if (esPositivo && !esPar) {
    console.log("El numero es positivo e impar");
} else if (numero == 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
}