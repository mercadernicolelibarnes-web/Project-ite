document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeToggle");
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeButton.textContent = document.body.classList.contains("dark-theme")
                ? "Light Theme"
                : "Dark Theme";
        });
    }

    const searchInput = document.getElementById("bookSearch");
    const cards = document.querySelectorAll(".book-card");
    const emptyState = document.getElementById("emptyState");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            cards.forEach((card) => {
                const matches = card.textContent.toLowerCase().includes(query);
                card.style.display = matches ? "" : "none";
                if (matches) visibleCount++;
            });

            if (emptyState) {
                emptyState.style.display = visibleCount === 0 ? "block" : "none";
            }
        });
    }
});
