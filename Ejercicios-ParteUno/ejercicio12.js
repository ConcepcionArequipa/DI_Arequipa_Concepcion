//Crea un arreglo con nombres de estudiantes. Pide al usuario uno y muestra si está en la lista.
//Concepcion Arequipa

let estudiantes=["Concepcion","Carlos","Pamela", "Camila"];

let nombreBuscado=prompt("Ingrese un nombre para agregar a la lista: ");

if (estudiantes.includes(nombreBuscado)) {
    console.log("Sí está en la lista: " + nombreBuscado);
}
else{
    console.log("No esta en la lista: " + nombreBuscado);
}