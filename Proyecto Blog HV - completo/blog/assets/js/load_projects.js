document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#tablaProyectos tbody");
    const countText = document.getElementById("proyectosCount");

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    // Actualizar contador
    countText.textContent = `${proyectos.length} registrados`;

    // Limpiar tabla
    tbody.innerHTML = "";

    proyectos.forEach((p, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.titulo}</td>
            <td>${p.descripcion}</td>
            <td><img src="${p.imagen}" width="70"></td>
        `;
        tbody.appendChild(tr);
    });
});
