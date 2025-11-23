//Concepcion Arequipa
//Mostrar un menu n veces, hasta que el usuario ingrese la opcion salir
//El usuario elige una opcion del 1 al 7
//Con switch se llama a la operacion correspondiente
//Si elige  Dividir, se verifica si el divisor es 0
//Si el usuario elige salir, el programa termina
let numeroUno;
let numeroDos;
let opcion;
while (opcion!=7) {

console.log("--- MENU DE OPERACIONES ----");
console.log("1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Modulo\n6.Potencia\n7.Salir");
opcion=parseInt(prompt("Ingrese la opcion: "))

switch (opcion) {
    case 1:
        console.log("---- SUMA ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        console.log(numeroUno+ " + " + numeroDos + " = "+ (numeroUno+numeroDos))
        break;

    case 2:
        console.log("---- RESTA ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        console.log(numeroUno+ " - " + numeroDos + " = "+ (numeroUno-numeroDos))
        break;
    
    case 3:
        console.log("---- MULTIPLICACION ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        console.log(numeroUno+ " x " + numeroDos + " = "+ (numeroUno*numeroDos))
        break;

    case 4:
        console.log("---- DIVISION ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        if (numeroDos==0) {
            console.log("Error matematico: El divisor no puede ser cero")
        }
        else{
            console.log(numeroUno+ " / " + numeroDos + " = "+ (numeroUno/numeroDos))
        }
        break;

    case 5:
        console.log("---- MODULO ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        console.log(numeroUno+ " % " + numeroDos + " = "+ (numeroUno%numeroDos))
        break;

    case 6:
        console.log("---- POTENCIA ----");
        numeroUno= Number(prompt("Ingrese el primer numero: "));
        numeroDos= Number(prompt("Ingrese el segundo numero: "));
        console.log(numeroUno+ " ^ " + numeroDos + " = "+ (numeroUno**numeroDos))
        break;

    case 7:
        console.log("Saliendo del programa....")   
        break 
    default:
        console.log("Opcion invalida")
        break;
}
    
}