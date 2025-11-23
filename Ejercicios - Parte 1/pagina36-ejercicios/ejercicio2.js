//Validar que el usuario ingrese una contraseña correcta, la contraseña debe tener al menos 6 caracteres
//Pagina 36
//Concepcion Arequipa
let contrasenia;
do {
    contrasenia=prompt("Ingrese una contraseña: ");
    
} while (contrasenia.length<=5);

console.log("Contraseña correcta")