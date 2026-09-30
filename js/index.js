document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-btn");

    toggles.forEach((button) => {
        const contentId = button.getAttribute("aria-controls");
        const content = contentId ? document.getElementById(contentId) : null;

        if (!content) return;

        const setExpanded = (expanded) => {
            button.setAttribute("aria-expanded", String(expanded));
            button.classList.toggle("collapsed", !expanded);
            content.classList.toggle("collapsed", !expanded);
        };

        button.addEventListener("click", () => {
            const expanded = button.getAttribute("aria-expanded") === "true";
            setExpanded(!expanded);
        });
    });
});
