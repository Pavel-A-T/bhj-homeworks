const url = "https://netology-slow-rest.herokuapp.com";
const img = document.getElementById("loader");
const activeImg = "loader_active";
let items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
        img.classList.remove(activeImg);
        let valutes = JSON.parse(xhr.response).response["Valute"];

        for (let i in valutes) {
            createDiv(valutes[i].CharCode, "item__code");
            createDiv(valutes[i].Value, "item__value");
            createDiv(valutes[i].Name, "item__currency");
        }
    }
}

function createDiv(textContent, className) {
    let div = document.createElement("div");
    div.classList.add(className);
    div.textContent = textContent;
    items.appendChild(div);
}

