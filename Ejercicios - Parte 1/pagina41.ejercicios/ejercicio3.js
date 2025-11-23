//Ejercicio 3:
//Imprimir un cuadrado de astericos con for

let n = 8;

for (let i = 0; i < n; i++) {         // Filas
    let fila = "";
    for (let j = 0; j < n; j++) {     // Columnas
        fila += "* ";
    }
    console.log(fila);                // Imprime una fila completa
}

