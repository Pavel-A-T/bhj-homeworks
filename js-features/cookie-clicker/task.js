const element = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("click_speed");
let count = 0;
let date = Date.now();

element.onclick = function () {
    let time = Date.now() - date;
    date = Date.now();
    clicker.innerText = ++count;
    clickSpeed.innerText = (1 / (time / 1000 )).toFixed(3);
    element.style.width = count % 2 === 0 ? '200px' : '250px';
}