//Mostrar la tabla de multiplicar que el usuario elija

let numero= Number(prompt("Ingrese el numero para la tabla de multiplicar: "))
console.log("La tabla de multiplicar del "+numero)
for (let index = 1; index <= 12; index++) {
    console.log(numero+" x "+index+" = "+numero*index)
}