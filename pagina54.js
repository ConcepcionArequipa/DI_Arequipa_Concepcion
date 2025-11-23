// Array Inicial
let tareas = ["Sacar la basura", "Hacer la compra", "Lavar platos", "Estudiar JavaScript"];

console.log("--- Array Inicial ---");
console.log(tareas);
// Output: [ 'Sacar la basura', 'Hacer la compra', 'Lavar platos', 'Estudiar JavaScript' ]

// 1. push() y pop()
console.log("\n--- 1. push() y pop() ---");
tareas.push("Regar las plantas"); // Añadir
console.log("Después de push('Regar las plantas'):", tareas);

tareas.pop(); // Eliminar el último
console.log("Después de pop():", tareas);
// Output: [ 'Sacar la basura', 'Hacer la compra', 'Lavar platos', 'Estudiar JavaScript' ]


// 2. sort() y reverse()
console.log("\n--- 2. sort() y reverse() ---");
tareas.sort(); // Ordenar alfabéticamente
console.log("Después de sort():", tareas);
// Output: [ 'Estudiar JavaScript', 'Hacer la compra', 'Lavar platos', 'Sacar la basura' ]

tareas.reverse(); // Invertir el orden
console.log("Después de reverse():", tareas);
// Output: [ 'Sacar la basura', 'Lavar platos', 'Hacer la compra', 'Estudiar JavaScript' ]


// 3. splice(índice, número de elementos a borrar, elementos a insertar)
console.log("\n--- 3. splice() ---");
// Encontrar el índice de 'Lavar platos' (en este momento es el índice 1)
let indiceLavarPlatos = tareas.indexOf("Lavar platos"); // Esto ayuda a hacerlo más seguro, el resultado es 1

// Cambiar 'Lavar platos' (1 elemento) por 'Llamar al médico' y 'Pasear al perro'
tareas.splice(indiceLavarPlatos, 1, "Llamar al médico", "Pasear al perro");
console.log("Después de splice():", tareas);
// Output: [ 'Sacar la basura', 'Llamar al médico', 'Pasear al perro', 'Hacer la compra', 'Estudiar JavaScript' ]


// 4. forEach(function)
console.log("\n--- 4. forEach() (Recorrido) ---");
tareas.forEach(function(tarea) {
    console.log("Pendiente: " + tarea);
});
