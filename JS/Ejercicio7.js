let nombres = ["Luca", "Joaquin", "Pedro", "Ana", "Luis", "Ezequiel"];
for(let i=0; i<nombres.length; i++){
    console.log(`El nombre nro ${i+1} es: ${nombres[i]}`);
}
let maslargo= nombres[0];
for(let i=0; i<nombres.length; i++){
    if(nombres[i].length>maslargo.length){
        maslargo=nombres[i];
    }
}
console.log(`El nombre mas largo es de la lista es: ${maslargo}`);