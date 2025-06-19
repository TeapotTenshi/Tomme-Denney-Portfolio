document.querySelectorAll(".project-title").forEach(title => {
    title.addEventListener("click", () => {
        const card = title.closest(".project-card");
        card.classList.toggle("expanded");
    });
});
