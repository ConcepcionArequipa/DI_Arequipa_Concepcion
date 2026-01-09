document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(el => {
        const file = el.getAttribute("data-include");
        
        fetch(file)
            .then(response => response.text())
            .then(html => {
                el.innerHTML = html;
            })
            .catch(err => {
                el.innerHTML = `<p style="color:red">Error cargando ${file}</p>`;
            });
    });
});
