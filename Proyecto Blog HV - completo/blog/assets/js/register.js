const formRegistro = document.getElementById("registroForm");

formRegistro.addEventListener("submit", function (e) {  
    //Evita que el formulario:Recargue la página y envíe datos al servidor
    e.preventDefault();                                 
    const user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fechaNac: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    console.log("Usuario capturado:", user);
    // Leer usuarios previos
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Agregar nuevo usuario
    users.push(user);
    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    // Redirigir al login
    window.location.href = "login.html";
});

