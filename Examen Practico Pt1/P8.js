/*
Vargas Murillo Otmar Fidel
Natividad Aguilera Andrick Joksan
*/

let arreglo = ["Azul", "Verde", "Rojo", "Amarillo", "Marron", "Morado", "Rosa", "Naranja"];
let cadena = prompt("¿Que color desea buscar?");
let confirmacion = true;
for(let i = 0; i<arreglo.length;i++){
    if(cadena.toLowerCase()==arreglo[i].toLowerCase()){
        console.log("La cadena "+cadena+" si se encuentra en el arreglo.");
        confirmacion = true;
    }
}
if(confirmacion != true){
    console.log("La cadena "+cadena+" no se encuentra en el arreglo.");
}

