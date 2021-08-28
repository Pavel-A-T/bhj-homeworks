const element = document.getElementById("modal_main");
element.classList.add("modal_active");
let button = document.getElementsByClassName("show-success");
const success = document.getElementById("modal_success");

for (let item of element.getElementsByClassName("modal__close")) {
    item.onclick = () => {
        element.classList.remove("modal_active");
        if (item === button.item(0)) {
            success.classList.add("modal_active");
        }
        return false;
    };
}

let item = success.getElementsByClassName("modal__close").item(0);
item.onclick = () => {
    success.classList.remove("modal_active");
    return false;
}