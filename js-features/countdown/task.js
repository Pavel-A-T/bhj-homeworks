function time() {
    const element = document.getElementById("timer");
    if (element) {
        let timeString = "00:00:"
        let time = Number(element.innerText);
        if (!Number.isNaN(time)) {
            let id = setInterval(() => {
                if (time > 9) {
                    element.innerText = timeString + time;
                } else {
                    element.innerText = timeString + 0 + time;
                }
                time--;
                if (time === -1) {
                    setTimeout(() => {
                        clearInterval(id);
                        alert("Вы победили в конкурсе!");
                        }, 500);
                }
            }, 1000);
        }
    }
}

time();