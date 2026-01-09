document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("projectsGrid");
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    if (proyectos.length === 0) {
        grid.innerHTML = `
            <p class="text-center text-gray-500">
                Aún no hay proyectos registrados
            </p> `;
        return;
    }

    grid.innerHTML = proyectos.map(p => `
        <article class="bg-[#ffffff] p-[18px] rounded-[12px] overflow-hidden shadow-[0_6px_18px_rgba(16,24,32,0.12)]">
            <img src="${p.imagen}" alt="${p.titulo}" class="w-full h-[130px] rounded-[8px] object-cover">
            <h3 class="mt-[12px] mb-[6px] mx-0 text-[25px]">${p.titulo}</h3>
            <p class="text-[#768b99d2] text-[17px]">
                ${p.descripcion}
            </p>
            <div class="mt-[12px] display-flex gap-[8px]">
                <span class="bg-[#eef7f7] py-[6px] px-[8px] rounded-[8px] text-[14px] text-[#0aa3a3]">Repositorio</span>
                <span class="bg-[#eef7f7] py-[6px] px-[8px] rounded-[8px] text-[14px] text-[#0aa3a3]">Demo</span>
            </div>
        </article>
    `).join("");

});
