const js = document.querySelector(".dropdown__value");
const links = document.querySelectorAll(".dropdown__link");
const dropDown = document.querySelector(".dropdown__list");

js.onclick = () => {
    if (dropDown.classList.contains("dropdown__list_active")) {
        dropDown.classList.remove("dropdown__list_active");
        return;
    }
    dropDown.classList.add("dropdown__list_active");
}

for (link of links) {
    let button = link.closest(".dropdown__item").querySelector(".dropdown__link");
    button.onclick = () => {
        dropDown.classList.remove("dropdown__list_active");
        js.textContent = button.textContent;
        return false;
    }
}

