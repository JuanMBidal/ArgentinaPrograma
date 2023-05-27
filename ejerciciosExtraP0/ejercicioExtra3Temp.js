let temperaturasMediasMes = [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75];
let sumaTemperaturasMedias = 0;
for (let mes of temperaturasMediasMes) {
    sumaTemperaturasMedias += mes;
}
let promedioAnualF = sumaTemperaturasMedias / temperaturasMediasMes.length;
let promedioAnualC = (promedioAnualF - 32) * 5/9;
console.log(promedioAnualC);