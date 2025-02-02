/*
Vargas Murillo Otmar Fidel
Natividad Aguilera Andrick Joksan
*/

let limite = 0;
let arreglo = [1,2,3,4,5,6,7,8,9];
limite = prompt("¿Que numero sera el limite inferior?");
console.log("El arreglo es: "+arreglo);
console.log("Los numeros mayores a "+limite+" son: ");
for(let i = 0; i<arreglo.length; i++){
    if(arreglo[i] > limite){
        console.log(arreglo[i]);
    }
}