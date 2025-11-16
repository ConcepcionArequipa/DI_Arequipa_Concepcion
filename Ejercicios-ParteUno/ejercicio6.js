//Concepcion Arequipa
//Ejercicio 6

const PI = 3.14;

console.log("----- MENÚ DE FIGURAS -----");
console.log("1. Cuadrado");
console.log("2. Rectángulo");
console.log("3. Triángulo");
console.log("4. Círculo");

let opcion = parseInt(prompt("Seleccione una opción (1-4): "));

switch (opcion) {

    // ---------------- CUADRADO ----------------
    case 1:
        let lado = parseFloat(prompt("Ingrese el lado del cuadrado: "));
        let areaCuad = lado ** 2;
        let perCuad = lado * 4;

        console.log("Área del cuadrado: " + areaCuad);
        console.log("Perímetro del cuadrado: " + perCuad);
        break;

    // ---------------- RECTÁNGULO ----------------
    case 2:
        let baseRect = parseFloat(prompt("Ingrese la base del rectángulo: "));
        let alturaRect = parseFloat(prompt("Ingrese la altura del rectángulo: "));
        
        let areaRect = baseRect * alturaRect;
        let perRect = 2 * (baseRect + alturaRect);

        console.log("Área del rectángulo: " + areaRect);
        console.log("Perímetro del rectángulo: " + perRect);
        break;

    // ---------------- TRIÁNGULO ----------------
    case 3:
        let baseTri = parseFloat(prompt("Ingrese la base del triángulo: "));
        let alturaTri = parseFloat(prompt("Ingrese la altura del triángulo: "));
        
        let areaTri = (baseTri * alturaTri) / 2;
        console.log("Área del triángulo: " + areaTri);

        // Hipotenusa (suponiendo triángulo rectángulo)
        let hip = Math.sqrt((baseTri ** 2) + (alturaTri ** 2));
        console.log("Hipotenusa: " + hip);

        let perTri = baseTri + alturaTri + hip;
        console.log("Perímetro del triángulo: " + perTri);
        break;

    // ---------------- CÍRCULO ----------------
    case 4:
        let radio = parseFloat(prompt("Ingrese el radio del círculo: "));

        let areaCirc = PI * (radio ** 2);
        let periCirc = 2 * PI * radio;

        console.log("Área del círculo: " + areaCirc);
        console.log("Perímetro del círculo (circunferencia): " + periCirc);
        break;

    default:
        console.log("Opción inválida. Debe seleccionar entre 1 y 4.");
}
