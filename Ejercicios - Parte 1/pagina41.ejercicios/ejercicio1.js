//Escribir un script para determinar si el numero introducido por el usuario es un palindromo
let numero = Number(prompt("Ingrese un número:"));
let original = numero;  // guardamos el número original
let inverso = 0;

do {
    let resto = numero % 10;        // Tomamos el último dígito
    inverso = inverso * 10 + resto; // Lo añadimos al inverso
    numero = Math.floor(numero / 10); // Quitamos el último dígito
}while (numero > 0);

if (original === inverso) {
    console.log(original + " es un número palíndromo");
} else {
    console.log(original + " no es un número palíndromo");
}
