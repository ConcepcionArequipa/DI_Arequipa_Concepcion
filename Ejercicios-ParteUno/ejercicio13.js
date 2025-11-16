//Crea un arreglo de números y muestra cuál es el mayor

let numeros = [1,80,100,40,70,180];

let mayor= numeros[0]; // Tomamos el primer número como el mayor temporalmente

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor){
        mayor=numeros[i]; // Actualizamos el mayor
    }
}

console.log(numeros);

console.log("El numero mayor del arreglo es: "+mayor);