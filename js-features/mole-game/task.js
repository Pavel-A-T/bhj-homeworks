let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById("hole" + i);
    hole.onclick = function () {
        if (getHole(i).className === "hole hole_has-mole") {
            deadCount++;
            dead.innerText = deadCount;
            if (deadCount === 10) {
                gameOver('Победа');
            }
        } else {
            lostCount++;
            lost.innerText = lostCount;
            if (lostCount === 5) {
                gameOver('Вы проиграли!');
            }
        }
    };
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function gameOver(text) {
    alert(text);
    deadCount = 0;
    lostCount = 0;
    location.reload();
}
