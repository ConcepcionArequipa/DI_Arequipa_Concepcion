
const formRegistro= document.getElementById("registroForm")

formRegistro.addEventListener("submit",function (e) {
    e.preventDefault();

    const user= {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fechaNac: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value


    };

    //Verificar si se esta guardando los datos

    console.log("Usuario capturado: ", user);

    //Leer usuario previos

    const users= JSON.parse(localStorage.getItem("users")) || [];

    //Agregar un nuevo usuario

    users.push(user);

    //Guardar en el localStorage
    localStorage.setItem("users",JSON.stringify(users));

    alert("Registroso exitoso. Ahora puedes iniciar sesion");

    //Redirigir al login

    window.location.href= "login.html";
    
})