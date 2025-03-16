const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");
const rotate = document.getElementById("rotate");

left.addEventListener("click", () => {
    left.style.backgroundImage = 'url("./assets/left-1.png")';
})

left.addEventListener("mouseup", () => {
    left.style.backgroundImage = 'url("./assets/left-0.png")';
})

right.addEventListener("mousedown", () => {
    right.style.backgroundImage = 'url("./assets/right-1.png")';
})

right.addEventListener("mouseup", () => {
    right.style.backgroundImage = 'url("./assets/right-0.png")';
})

down.addEventListener("mousedown", () => {
    down.style.backgroundImage = 'url("./assets/down-1.png")';
})

down.addEventListener("mouseup", () => {
    down.style.backgroundImage = 'url("./assets/down-0.png")';
})

rotate.addEventListener("mousedown", () => {
    rotate.style.backgroundImage = 'url("./assets/rotate-1.png")';
})

rotate.addEventListener("mouseup", () => {
    rotate.style.backgroundImage = 'url("./assets/rotate-0.png")';
})