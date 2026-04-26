const hora= 8;
const minutos= 30;
const seg1= hora*3600;
const seg2= minutos*60;
console.log(`Son las ${hora}:${minutos}`);
console.log(`${hora} horas equivalen a ${seg1} segundos`);
console.log(`${minutos} minutos equivalen a ${seg2} segundos`);
console.log(`En total transcurrieron: ${seg1+seg2} Segundos`);