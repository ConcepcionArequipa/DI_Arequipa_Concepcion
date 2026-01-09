const tabla = document.querySelector("#tablaProyectos tbody");
const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

document.getElementById("proyectosCount").textContent = proyectos.length + " registrados";

if (proyectos.length === 0) {
    tabla.innerHTML = `
        <tr><td colspan="4" style="text-align:center; color:gray;">No hay proyectos registrados</td></tr>
    `;
} else {
    tabla.innerHTML = proyectos.map((p, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${p.titulo}</td>
            <td>${p.descripcion}</td>
            <td><img src="${p.imagen}" width="80"></td>
        </tr>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    // Validar sesión
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        window.location.href = "login.html"; 
        return;
    }
});

// Delegación para header dinámico
// Captura del botón cerrar sesión (HTML dinámico)
document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logoutBtn") {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html"; // relativa
    }
});
