//Ejercicio 7 
//Validar que el usuario ingrese solo numeros positivos y reales (10 numeros)

let sumaTotal=0;
let numero;
    
for (let index = 1; index <=10; index++) {
    do {
        numero = Number(prompt("Ingrese un número positivo-real:"));
    } while (isNaN(numero) || numero < 0); 
    sumaTotal+=numero;
}

console.log("La suma total es: "+sumaTotal)
