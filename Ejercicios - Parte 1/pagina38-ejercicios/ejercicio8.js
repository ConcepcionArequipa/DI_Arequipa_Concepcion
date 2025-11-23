//Ejercicio 8: Crear una cadena invertida (recorrer el texto al reves)

let cadena= prompt("Ingrese una palabra: ");
let cadenaInvertida="";
for (let index = cadena.length-1; index  >=0; index--) {
    cadenaInvertida+=cadena[index] 
}

console.log("La cadena invertida es : "+cadenaInvertida)