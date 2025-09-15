document.addEventListener("DOMContentLoaded", () => {
    const firstDownload = document.querySelector(".gallery .img-container a"); // primer botón de descarga
    const ratingSection = document.getElementById("ratingSection");
    const stars = document.querySelectorAll("#ratingSection .stars span");
    const ratingMessage = document.getElementById("ratingMessage");

    if (!firstDownload) return;

    // Función que muestra la valoración solo la primera vez
    function showRatingOnce() {
        ratingSection.style.display = "block"; // mostrar valoración
        // Quitar el listener para que no vuelva a ejecutarse
        firstDownload.removeEventListener("click", showRatingOnce);
    }

    // Cuando se descarga la primera foto
    firstDownload.addEventListener("click", () => {
        setTimeout(showRatingOnce, 300);
    });

    // Votar con estrellas
    stars.forEach(star => {
        star.addEventListener("click", () => {
            stars.forEach(s => s.classList.remove("active"));
            star.classList.add("active");
            ratingMessage.textContent = `Valoraste con ${star.dataset.value} estrella(s)`;
        });
    });
});
