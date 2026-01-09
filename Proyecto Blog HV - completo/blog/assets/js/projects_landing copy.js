document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("projectsGrid");
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    if (proyectos.length === 0) {
        grid.innerHTML = `
            <p style="text-align:center;color:gray;">
                Aún no hay proyectos registrados
            </p> `;
        return;
    }

    grid.innerHTML = proyectos.map(p => `
        <article class="card">
            <img src="${p.imagen}" alt="${p.titulo}">
            <h3>${p.titulo}</h3>
            <p style="color:var(--muted);font-size:14px">
                ${p.descripcion}
            </p>
            <div class="tags" style="margin-top:12px">
                <span class="tag">Repositorio</span>
                <span class="tag">Demo</span>
            </div>
        </article>
    `).join("");

});
