//Concepcion Arequipa
//Pagina 30

console.log("--- MENU DE FRUTAS DISPONIBLES -----")
console.log("Naranjas\nManzanas\nFresas")

let tipoFruta= prompt("Ingrese el tipo de fruta a comprar: ")
switch (tipoFruta) {
    case "Naranjas":
        console.log("Las naranjas cuestan $5");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $10");
        break;
    case "Fresas":
        console.log("Las fresas cuestan $15");
        break;
        
    default:
        console.log("Lo siento no tenemos ese tipo de fruta: "+tipoFruta);
        break;
}

