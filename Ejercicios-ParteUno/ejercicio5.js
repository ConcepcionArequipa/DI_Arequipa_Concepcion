//Ejercicio 5
//Concepcion Arequipa
let ingles = parseFloat(prompt("Ingrese la nota de Inglés:"));
let matematica = parseFloat(prompt("Ingrese la nota de Matemáticas:"));
let lengua = parseFloat(prompt("Ingrese la nota de Lengua:"));

let promedio = (ingles + matematica + lengua) / 3;

console.log("El promedio es: " + promedio.toFixed(2));

if (promedio === 10) {
    console.log("Satisfactorio (beca)");
    console.log("Felicidades, ha aprobado");
} 
else if (promedio >= 8 && promedio <= 9) {
    console.log("Muy buena");
    console.log("Felicidades, ha aprobado");
}
else if (promedio >= 7 && promedio <=7.99) {
    console.log("Buena");
    console.log("Felicidades, ha aprobado");
}
else {
    console.log("Regular");
    console.log("Ha reprobado");
}
