let progress = document.getElementById("progress");
let btnSend = document.getElementById("send");
let selectBtn = document.querySelector(".input__wrapper-button");
const url = "https://netology-slow-rest.herokuapp.com/upload.php";

selectBtn.onclick = () => {
    progress.setAttribute("value", 0);
}

btnSend.onclick = () => {
    let fileDesc = document.querySelector(".input__wrapper-desc");
    if (fileDesc.textContent) {
        upload(fileDesc.textContent);
    }
    return false;
}

function upload(file) {
    let xhr = new XMLHttpRequest();
    // обработчик для отправки
    xhr.upload.onprogress = function(event) {
        progress.setAttribute("value", event.loaded/event.total);
    }

    xhr.open("POST", url, true);
    xhr.send(file);
}