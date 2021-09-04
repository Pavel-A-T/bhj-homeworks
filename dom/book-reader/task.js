let book = document.getElementById("book");
let items = document.getElementsByClassName("font-size");
let colors = document.getElementsByClassName("color");
const active = "font-size_active";

for (let color of colors) {
    color.onclick = () => {
        let attribute = color.getAttribute("data-text-color");
        if (attribute && !color.classList.contains("color_active")) {
            for (let item of colors) {
                if (item.getAttribute("data-text-color")) item.classList.remove("color_active");
            }
            color.classList.add("color_active");

            switch (attribute) {
                case 'whitesmoke' : {
                    book.classList.remove('text_color_black');
                    book.classList.remove('text_color_gray');
                    book.classList.add('text_color_whitesmoke');
                    break;
                }
                case 'black' : {
                    book.classList.remove('text_color_whitesmoke');
                    book.classList.remove('text_color_gray');
                    book.classList.add('text_color_black');
                    break;
                }
                default : {
                    book.classList.remove('text_color_black');
                    book.classList.remove('text_color_whitesmoke');
                    book.classList.add('text_color_gray');
                }
            }

        } else {
            let attribute = color.getAttribute("data-bg-color");
            if (attribute && !color.classList.contains("color_active")) {
                for (let item of colors) {
                    if (item.getAttribute("data-bg-color")) item.classList.remove("color_active");
                }
                color.classList.add("color_active");
                switch (attribute) {
                    case 'white' : {
                        book.classList.remove('bg_color_black');
                        book.classList.remove('bg_color_gray');
                        book.classList.add('bg_color_white');
                        break;
                    }
                    case 'black' : {
                        book.classList.remove('bg_color_white');
                        book.classList.remove('bg_color_gray');
                        book.classList.add('bg_color_black');
                        break;
                    }
                    default : {
                        book.classList.remove('bg_color_black');
                        book.classList.remove('bg_color_white');
                        book.classList.add('bg_color_gray');
                    }
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
            book.classList.add("book_fs-small");
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
            book.classList.add("book");
        }
        return false;
    }
}

function deleteClass() {
    let element = document.querySelector(".font-size_active");
    element.classList.remove("font-size_active");
}