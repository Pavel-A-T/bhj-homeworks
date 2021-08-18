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
            if (deadCount === 5) {
                alert('Победа');
                deadCount = 0;
                lostCount = 0;
                location.reload();
            }
        } else {
            lostCount++;
            lost.innerText = lostCount;
            if (lostCount === 10) {
                alert('Вы проиграли!');
                deadCount = 0;
                lostCount = 0;
                location.reload();
            }
        }
    };
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}
