let edades = [25, 45, 50, 70, 2, 10, 30, 60];
let suma = 0;
for(let i = 0; i<edades.length; i++){
    console.log(`La edad nro ${i+1} es: ${edades[i]} años`);
    suma+=edades[i];
}
const promedio= suma/edades.length;
console.log(`El promedio de las edades es: ${promedio.toFixed(2)} años`);