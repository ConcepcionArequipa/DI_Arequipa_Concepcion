//2. Crear un programa que imprima la sucesion de Fibonacci, desde el numero 0 hasta el 1597, horizontalmente(7 lineas de codigo)
let a = 0, b = 1;
let cadena = a + ", " + b;
while (b < 1597) {
    let c = a + b;
    cadena += ", " + c;
    a = b;
    b = c;
}
console.log(cadena);

