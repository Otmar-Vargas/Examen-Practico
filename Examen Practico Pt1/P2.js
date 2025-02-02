/*
Vargas Murillo Otmar Fidel
Natividad Aguilera Andrick Joksan
*/

let cadena = "Perro";
let inversa = "";
for(let i=cadena.length-1; i>=0; i--){
    inversa = inversa.concat(cadena[i]);
}
console.log("Palabra original: "+cadena);
console.log("Palabra inversa: "+inversa); 