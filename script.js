document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("moveButton");
    const modal = document.getElementById("letterModal");
    const closeModal = document.getElementById("closeModal");

    // Mueve el botón a una posición aleatoria
    button.addEventListener("mouseover", () => {
        const container = document.querySelector(".container");
        const maxWidth = container.offsetWidth - button.offsetWidth;
        const maxHeight = container.offsetHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });

    // Abre la carta cuando se hace clic en el botón
    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Cierra la carta
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cierra la carta al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
