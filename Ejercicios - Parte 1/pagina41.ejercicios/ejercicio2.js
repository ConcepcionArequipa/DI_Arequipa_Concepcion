//Ejercicio 2
//Escribir los multiplos del numero ingresado

let numero = Number(prompt("Ingrese un número: "));

console.log("Los primeros 10 múltiplos de " + numero + " son:");

for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}
