//Pedir 5 numeros al usuario y mostrar su promedio

let numeroUno= Number(prompt("Ingrese el primer numero: "));
let numeroDos= Number(prompt("Ingrese el segundo numero: "));
let numeroTres= Number(prompt("Ingrese el tercer numero: "));
let numeroCuatro= Number(prompt("Ingrese el cuarto numero: "));
let numeroCinco= Number(prompt("Ingrese el quinto numero: "));

let promedio= (numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco)/5;

console.log("El promedio es: ",promedio)