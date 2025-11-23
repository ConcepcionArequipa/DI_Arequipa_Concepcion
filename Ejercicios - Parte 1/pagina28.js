//Concepcion Arequipa
//Pagina 28: Escribe un programa que pida la edad de una persona y determine:
//Si es menor de edad (menos de 18)
//Si es adulto (entre 18 y 64)
//Si es adulto mayor (65 o mas)

let edad=parseInt(prompt("Ingrese su edad: ")) //parseInt convierte la cadena de texto que recibe prompt a un Int

if (edad<18) {
    console.log("Eres menor de edad")
}
else{
    if (edad<65) {
        console.log("Eres un adulto")
    }
    else{
        console.log("Eres un adulto mayor")
    }
}
