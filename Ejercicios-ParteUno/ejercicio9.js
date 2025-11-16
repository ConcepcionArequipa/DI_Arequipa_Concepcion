//Cree una función verificarPar, que pida al usuario un número y muestra si es par o impar.
//Concepcion Arequipa
function verificarPar() {
    let numero = Number(prompt("Ingrese un número: "));

    if (numero % 2 === 0) {
        console.log("Es un número par");
    } else {
        console.log("Es un número impar");
    }
}

// Llamar a la función
verificarPar();


