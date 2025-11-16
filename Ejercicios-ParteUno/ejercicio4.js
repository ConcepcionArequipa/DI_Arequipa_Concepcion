//Del ejercicio anterior, si la nota es menor que 7 indicar que el estudiante reprueba.
let ingles = parseFloat(prompt("Ingrese la nota de Inglés:"));
let matematica = parseFloat(prompt("Ingrese la nota de Matemáticas:"));
let lengua = parseFloat(prompt("Ingrese la nota de Lengua:"));

let promedio = (ingles + matematica + lengua) / 3;

console.log("El promedio es: " + promedio);

if (promedio >= 7) {
    console.log("Felicidades ha aprobado");
} 
else(
    console.log("Ha reprobado")
)