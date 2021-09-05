let book = document.getElementById("book");
let items = document.getElementsByClassName("font-size");
let colors = document.getElementsByClassName("color");
let content = document.querySelector(".book__content");
const active = "font-size_active";

for (let color of colors) {
    color.onclick = () => {
        let attribute = color.getAttribute("data-text-color");
        if (attribute) {
            for (let item of colors) {
                if (item.getAttribute("data-text-color")) item.classList.remove("color_active");
            }
            color.classList.add("color_active");
            if (attribute === 'whitesmoke') {
                content.style.color = 'whitesmoke';
            } else if (attribute === 'black') {
                content.style.color = 'black';
            } else {
                content.style.color = 'gray';
            }
        } else {
            let attribute = color.getAttribute("data-bg-color");
            if (attribute) {
                for (let item of colors) {
                    if (item.getAttribute("data-bg-color")) item.classList.remove("color_active");
                }
                color.classList.add("color_active");
                if (attribute === 'white') {
                    content.style.background = 'white';
                } else if (attribute === 'black') {
                    content.style.background = 'black';
                } else {
                    content.style.background = 'gray';
                }

            }
        }
        return false;
    }
}

for (let item of items) {
    item.onclick = () => {
        if (item.getAttribute("data-size") === "small") {
            deleteClass();
            item.classList.add(active);
            book.classList.remove("book");
            book.classList.remove("font-size_big");
            book.classList.add("font-size_small");
        } else if (item.getAttribute("data-size") === "big") {
            deleteClass();
            item.classList.add(active);
            book.classList.remove("book");
            book.classList.remove("font-size_small");
            book.classList.add("font-size_big");
        } else {
            deleteClass();
            item.classList.add(active);
            book.classList.remove("font-size_big");
            book.classList.remove("font-size_small");
        }
        return false;
    }
}

function deleteClass() {
    let element = document.querySelector(".font-size_active");
    element.classList.remove("font-size_active");
}