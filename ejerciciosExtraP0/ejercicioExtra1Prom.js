let numeros = [1, 2, 3, 4, 5, 6];
let suma = 0;
for (let numero of numeros) {
    suma += numero;
}
let promedio = suma / numeros.length;
console.log(promedio);