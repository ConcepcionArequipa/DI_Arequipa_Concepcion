//Concepcion Arequipa
//Pagina 31
//Crear un menu que muestre las operaciones entre dos numeros: Suma,resta,multiplicacion,division,modulo, potencia
let numeroUno;
let numeroDos;
console.log("--- MENU DE OPERACIONES ----");
console.log("1.Suma\n2.Resta\n3.Multiplicacion\n4.Division\n5.Modulo\n6.Potencia\n7.Salir");
let opcion=parseInt(prompt("Ingrese la opcion: "))

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
        console.log(numeroUno+ " / " + numeroDos + " = "+ (numeroUno/numeroDos))
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
