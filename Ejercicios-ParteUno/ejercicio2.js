//Calcular el área de un cuadrado, 
// un rectángulo, triángulo y círculo solicitando los valores al usuario.

// Para entrada de datos con la funcion prompt()

const PI = 3.14
console.log("----- Cuadrado ------- ")
let ladoCuadrado= prompt("Ingrese el valor del lado del cuadrado: ")
console.log("El area del cuadrado es: " + ladoCuadrado**2)

console.log("----- Rectangulo ------- ")
let baseRectangulo= prompt("Ingrese la base del rectangulo: ")
let alturaRectangulo= prompt("Ingrese la altura del rectangulo: ")
console.log("El area del rectangulo es: " + baseRectangulo*alturaRectangulo)

console.log("----- Triangulo ------- ")
let baseTriangulo= prompt("Ingrese la base del triangulo: ")
let alturaTriangulo= prompt("Ingrese la altura del triangulo: ")
console.log("El area del triangulo es: " + (baseTriangulo*alturaTriangulo)/2 )

console.log("----- Circulo ------- ")
let radioCirculo= prompt("Ingrese el radio del circulo: ")
console.log("El area del circulo es: " + PI*(radioCirculo**2))

