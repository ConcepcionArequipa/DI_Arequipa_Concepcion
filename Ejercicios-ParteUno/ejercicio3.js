//3.Sacar el promedio de las asignaturas de: inglés, matemática y lengua, 
// el usuario ingresará los valores mediante teclado, 
// Indicar si el estudiante aprueba siempre que la nota sea mayor o igual a 7.

let ingles = parseFloat(prompt("Ingrese la nota de Inglés:"));
let matematica = parseFloat(prompt("Ingrese la nota de Matemáticas:"));
let lengua = parseFloat(prompt("Ingrese la nota de Lengua:"));

let promedio = (ingles + matematica + lengua) / 3;

console.log("El promedio es: " + promedio);

if (promedio >= 7) {
    console.log("Felicidades ha aprobado");
} 
