//Crea un arreglo con 5 números y calcula la suma total.

let numeros=[20,5,7,8,10];

let suma= 0; 
for (let index = 0; index < numeros.length; index++) {
    suma+=numeros[index];
}

console.log(numeros);

console.log("La suma total es: "+suma)