//Concepcion Arequipa
//Pagina 29: Pide al usuario una nota del 1 al 10 y muestra
//1-4: Insuficiente, 5-6: Regular, 7-8: Bueno , 9-10: Excelente
//Cualquiero otro valor: Nota invalida

let nota=parseInt(prompt("Ingresa una nota del 1 al 10"))

if (nota> 0 && nota<5) {
    console.log("Insuficiente")
}
else if(nota>4 &&nota<7){
    console.log("Regular")
}
else if(nota>6 &&nota<9){
    console.log("Bueno")
}
else if(nota >= 9 && nota <= 10){
    console.log("Excelente")
}
else{
    console.log("Nota invalida")
}
