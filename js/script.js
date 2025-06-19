document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
        const card = title.closest('.project-card');
        card.classList.toggle('expanded');
    });

    // Optional: toggle expand with keyboard Enter or Space
    title.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            title.click();
        }
    });
});
