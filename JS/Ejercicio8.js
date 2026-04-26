let notas= [1, 5, 8, 10, 6, 9, 7, 4, 10, 3];
let aprobados =[];
let desaprobados =[];
let suma = 0;
console.log(`Listado de notas:`);
for(let i=0; i<notas.length; i++){
    console.log(`${i+1}. ${notas[i]}`);
    if(notas[i]>=6){
        aprobados.push(notas[i]);
    } else if(notas[i]<6){
        desaprobados.push(notas[i]);
    }
    suma+=notas[i];
}
console.log(`Listado de notas aprobados: ${aprobados}`);
console.log(`Listado de notas desaprobados: ${desaprobados}`);
console.log(`Promedio de notas: ${suma/notas.length}`);
console.log(`Cantidad de aprobados: ${aprobados.length}`);