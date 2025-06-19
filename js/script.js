document.querySelectorAll(".project-title").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".project-card");
        const expanded = card.classList.toggle("expanded");
        button.setAttribute("aria-expanded", expanded);
    });
});
