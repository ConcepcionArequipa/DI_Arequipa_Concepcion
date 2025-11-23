//Pagina 46: Funciones
function suma(x,y) {
    return x+y;
}

function alertBox(texto) {
    window.alert(texto);
}

function addFive(x) {
    let y=x+5
    return y;
}

//Llamada de las funciones
let a=3;
let b=11;
let resultado=suma(a,7);
alertBox("Esto es un ejemplo");
let c=addFive(b)

console.log("Resultado suma:", resultado);
console.log("Resultado addFive:", c);