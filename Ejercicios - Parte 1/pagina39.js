//Contar cuantas veces aparece cada letra en una palabra

let palabra = prompt("Ingrese una palabra: ");
let contador = {};

for (let letra of palabra.toLowerCase()) {
    if (contador[letra]) {
        contador[letra]++;   // si ya existe, sumamos 1
    } else {
        contador[letra] = 1; // si no existe, la inicializamos
    }
}

console.log("Conteo de letras:", contador);
