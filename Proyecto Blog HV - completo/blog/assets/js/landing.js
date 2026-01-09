const contenedor = document.getElementById("listaProyectos");
const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

if (proyectos.length === 0) {
    contenedor.innerHTML = "<p>No hay proyectos creados.</p>";
} else {
    proyectos.forEach(p => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${p.imagen || 'assets/images/default.png'}" alt="${p.titulo}">
            
            <h3>${p.titulo}</h3>

            <p style="color:var(--muted);font-size:14px">
                ${p.descripcion}
            </p>

            <div class="tags" style="margin-top:12px">
                <span class="tag">Proyecto</span>
                <span class="tag">${p.fecha}</span>
            </div>
        `;

        contenedor.appendChild(card);
    });
}
