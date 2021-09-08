let tips = document.querySelectorAll(".has-tooltip");


for (let tip of tips) {
    let textTip = tip.getAttribute("title");
    tip.onclick = () => {
        //let element = document.createElement("div");
        //element.classList.add("tooltip");
        //element.textContent = textTip;
        //tip.insertAdjacentHTML("afterend", `<div class='tooltip tooltip-active'>${textTip}<div>`);
        return false;
    }
}