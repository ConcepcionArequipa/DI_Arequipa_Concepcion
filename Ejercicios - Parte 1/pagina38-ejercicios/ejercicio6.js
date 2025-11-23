//Contar cuantas vocales tiene una palabra

let palabra= prompt("Ingrese una palabra: ")
let index;

let numeroVocales=0;

for (index = 0; index < palabra.length; index++) {
    let letra=palabra[index].toLowerCase();
    if(letra=='a'||letra=='e'||letra=='i'||letra=='o'){
        numeroVocales++;
    }
}

console.log("La palabra "+palabra+" tiene "+numeroVocales+" vocales")