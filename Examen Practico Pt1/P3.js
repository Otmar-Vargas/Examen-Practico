/*
Vargas Murillo Otmar Fidel
Natividad Aguilera Andrick Joksan
*/

let cadena2 = "Perro";
let cadena = "Reconocer";
let condicion = false;

console.log("La palabra es: "+cadena);
cadena = cadena.toLowerCase();
for(let i = 0; i<cadena.length/2; i++){
    if(cadena[i] != cadena[cadena.length-(1+i)]){
        condicion = false;
        console.log(cadena[i]);
        console.log(cadena[cadena.length-(1+i)]);
        break;
    } else {
        condicion = true;
        console.log(cadena[i]);
        console.log(cadena[cadena.length-(1+i)]);
    }
}
if(condicion == true){
    console.log("La palabra es un palindromo");
} else {
    console.log("La palabra no es un palindromo");
}