const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");
const rotate = document.getElementById("rotate");

left.addEventListener("pointerdown", () => {
    left.style.backgroundImage = 'url("./assets/left-11.png")';
})

left.addEventListener("pointerup", () => {
    left.style.backgroundImage = 'url("./assets/left-0.png")';
})

right.addEventListener("pointerdown", () => {
    right.style.backgroundImage = 'url("./assets/right-11.png")';
})

right.addEventListener("pointerup", () => {
    right.style.backgroundImage = 'url("./assets/right-0.png")';
})

down.addEventListener("pointerdown", () => {
    down.style.backgroundImage = 'url("./assets/down-11.png")';
})

down.addEventListener("pointerup", () => {
    down.style.backgroundImage = 'url("./assets/down-0.png")';
})

rotate.addEventListener("pointerdown", () => {
    rotate.style.backgroundImage = 'url("./assets/rotate-11.png")';
})

rotate.addEventListener("pointerup", () => {
    rotate.style.backgroundImage = 'url("./assets/rotate-0.png")';
})