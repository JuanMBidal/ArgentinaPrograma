let var1 = 15;
let var2 = 7;
let var3 = 6;
let var4 = 8;

let sumaDeVar1y2 = var1 + var2;
let restaDeVar4y3 = var4 - var3;
let resultadoFinal = sumaDeVar1y2 * restaDeVar4y3;


let esPar = resultadoFinal%2===0;

console.log("Mis variables iniciales fueron: %d, %d, %d y %d. La respuesta a verificar si el resultado final es par es:", var1, var2, var3, var4, esPar);