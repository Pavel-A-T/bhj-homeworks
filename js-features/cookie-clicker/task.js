const element = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("click_speed");
let count = 0;
const date = Date.now();

element.onclick = function () {
    clicker.innerText = ++count;
    let time = Date.now() - date;
    clickSpeed.innerText = (time / (1000 * count)).toFixed(3);
    if (count % 2 != 0) element.style.width = "250px";
    else element.style.width = "200px";
}