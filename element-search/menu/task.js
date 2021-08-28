let mains = document.querySelectorAll(".menu_main");
for (let main of mains) {
    let subs = main.querySelectorAll(".menu_sub");
    for (let sub of subs) {
        const link = sub.closest(".menu__item").querySelector(".menu__link");
        link.onclick = () => {
            if (sub.classList.contains("menu_active")) {
                sub.classList.remove("menu_active");
                return false;
            }
            let actives = document.querySelectorAll(".menu_active");
            for (let item of actives) {
                item.classList.remove("menu_active");
            }
            sub.classList.add("menu_active");
            return false;
        }
    }
}

