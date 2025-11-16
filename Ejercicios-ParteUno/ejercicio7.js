//Generar la tabla de multiplicar del número que el usuario ingrese por teclado.
//Concepcion Arequipa
let numero = prompt("Ingrese un numero: ")

console.log("----- TABLA DE MULTIPLICAR DEL " + numero)

for (let index = 0; index <=12; index++) {
    console.log(numero + " * " + index + " = " + (numero*index))
}