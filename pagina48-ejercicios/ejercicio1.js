//Ejercicio 1:
//Crear una funcion que retorne el factorial de un numero

let numero = Number(prompt("Ingrese un número: "));

function calcularFactorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

// Llamar a la función
let resultado = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + resultado);
