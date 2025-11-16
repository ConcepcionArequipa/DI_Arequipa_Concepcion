//Crea un arreglo con varios números y muestra los elementos en orden inverso.
let numeros=[1,30,69,57,40,89]

console.log("El arreglo es: " , numeros)
console.log("----- Orden inverso ------")
for (let index = numeros.length - 1; index >=0; index--) {
    console.log(numeros[index])
}