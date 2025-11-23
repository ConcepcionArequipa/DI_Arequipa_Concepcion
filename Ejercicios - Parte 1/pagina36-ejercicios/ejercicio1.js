//Pagina 36
//Ejercicio 1: Pide al usuario varios numeros, vaya sumandolos
//Pregunte despues de cada numero si desea continuar, si o no
//Use un do...while para repetir si responde si
//Al final muestre la suma total

let resultado=0;
let numero;
let continuar;
do {
    numero=Number(prompt("Ingrese un numero: "));
    continuar=prompt("Desea continuar? (si/no) : ");
    resultado+=numero;
} while (continuar=="si");

console.log("La suma total es: "+resultado);