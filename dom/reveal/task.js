const reveals = document.querySelectorAll(".reveal");

document.addEventListener('scroll', () => {
    for (let reveal of reveals) {
        if (reveal) {
            let top = reveal.getBoundingClientRect().top;
            const viewPort = window.innerHeight;
            if (top < viewPort) reveal.classList.add("reveal_active");
            else reveal.classList.remove("reveal_active");
        }
    }
});
