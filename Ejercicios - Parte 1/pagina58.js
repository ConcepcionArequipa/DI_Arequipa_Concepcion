//Pagina 58: Pila en JS
//Ejemplo:

// La pila (Stack)
let libros = [];

// Función para ver el elemento superior sin sacarlo (PEEK)
function peek(pila) {
    if (pila.length === 0) {
        return "La pila está vacía.";
    }
    // Retorna el último elemento
    return pila[pila.length - 1]; 
}

console.log("Pila inicial:", libros);
// Output: Pila inicial: []

// Agregando elementos (PUSH)
libros.push("Libro A: Harry Potter");
libros.push("Libro B: El Señor de los Anillos");
libros.push("Libro C: Cien años de soledad"); 

console.log("\nDespués de PUSH:", libros);
// Output: Después de PUSH: [ 'Libro A...', 'Libro B...', 'Libro C...' ]

// Obteniendo el tamaño (SIZE)
console.log("SIZE (Número de libros):", libros.length);
// Output: SIZE (Número de libros): 3

// Viendo el libro en la cima (PEEK)
let libroEnCima = peek(libros);
console.log("\nPEEK (Libro en la cima):", libroEnCima);
// Output: PEEK (Libro en la cima): Libro C: Cien años de soledad

// Mostrando el contenido (PRINT)
console.log("\nPRINT (Contenido de la pila):");
console.log(libros.join(" | "));
// Output: PRINT (Contenido de la pila): Libro A... | Libro B... | Libro C...

// Retirando el libro de la cima (POP)
let libroTerminado = libros.pop();
console.log("\nPOP (Libro terminado y retirado):", libroTerminado);
// Output: POP (Libro terminado y retirado): Libro C: Cien años de soledad

console.log("Pila después de POP:", libros);
// Output: Pila después de POP: [ 'Libro A: Harry Potter', 'Libro B: El Señor de los Anillos' ]

console.log("SIZE (Tamaño actual):", libros.length);
// Output: SIZE (Tamaño actual): 2