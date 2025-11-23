//Imprimir un triangulo de asteriscos con for

let n = 5;

for (let i = 1; i <= n; i++) {   // controla las filas
    let fila = "";
    
    for (let j = 1; j <= i; j++) {   // controla cuántos * hay en cada fila
        fila += "* ";
    }

    console.log(fila);
}
