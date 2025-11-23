//Pagina 65: Metodo splice
//Concepcion Arequipa

var colores=["rojo","azul","verde","amarillo","naranja","turquesa","rosado"];
//Metodo 1: Supresion, elimina un elemento segun su pocision y el numero a elementos a eliminar

console.log(colores.splice(2,2));
console.log(colores);

//Metodo 2: Insersion, la posicion donde se quiere agregar, el numero de elemntos a elminir, y el elemento a insertar o agregar

console.log(colores.splice(4,0,"Negro"));
console.log(colores);