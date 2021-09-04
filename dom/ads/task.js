let rotator = document.querySelectorAll(".rotator__case");

function rotate() {
    for (let i = 0; i < rotator.length; i++) {
        if (rotator.item(i).classList.contains("rotator__case_active")) {
            let speed = rotator.item(i).getAttribute("data-speed");
            let color = rotator.item(i).getAttribute("data-color");
            let index = 0;
            rotator.item(i).style.color = color;
            setTimeout(() => {
                rotator.item(i).classList.remove("rotator__case_active");
                if (i + 1 < rotator.length) index = (i + 1);
                rotator.item(index).classList.add("rotator__case_active");
                rotate();
            }, speed);
        }
    }
}

rotate();