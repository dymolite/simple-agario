const inpNum = document.getElementById("inpNum");
const box = document.getElementById("box");
const createBtn = document.getElementById("createBtn");
const sphere = document.getElementById("sphere");
const boxWidth = box.clientWidth;
const boxHeight = box.clientHeight;
let sphereWidth = sphere.clientHeight;
let step = 1;
let faster = 3;
let isShifted = false;
createBtn.addEventListener("click", createRandomCircle);
function createRandomCircle() {
    if (inpNum.value != "") {
        if (inpNum.value > 0) {
            for (let i = 0; i < parseInt(inpNum.value); i++) {
                let newDiv = document.createElement('div');
                newDiv.classList.add('random-circles');
                newDiv.style.left = Math.round(Math.random() * (boxWidth - newDiv.style.width)) + "px";
                newDiv.style.top = Math.round(Math.random() * (boxHeight - newDiv.style.height)) + "px";
                box.appendChild(newDiv);
                let randomCircle = document.querySelectorAll(".random-circles");
                for (let i = 0; i < randomCircle.length; i++) {
                    console.log(parseInt(randomCircle[i].style.left));
                    if (parseInt(sphere.style.left)+parseInt(sphere.clientWidth) == parseInt(randomCircle[i].style.left )- parseInt(randomCircle[i].clientWidth)) {
                        if (parseInt(sphere.style.top) + parseInt(sphere.clientHeight) == parseInt(randomCircle[i].style.top) - parseInt(randomCircle[i].clientHeight)) {
                            sphere.style.width += randomCircle[i].style.width;
                            randomCircle[i].style.display = "none";
                        }
                    }
                }
            }
        } else {
            alert("write right number")
        }
    } else {
        alert("Create circles!");
    }
}

document.body.addEventListener("keydown", e => {
    if (e.key == "ArrowRight") {
        moveRight();
    } else if (e.key == "ArrowLeft"){
        moveLeft();
    } else if (e.key == "ArrowUp"){
        moveUp();
    } else if (e.key == "ArrowDown"){
        moveDown();
    } else if (e.key == "Shift"){
        isShifted = true;
    } 
})
document.body.addEventListener("keyup", e => {
    if (e.shiftKey) {
        isShifted = false;
    }
})


function moveRight() {
    let left = sphere.style.left ? parseInt(sphere.style.left):0;
    if (left + (step*(isShifted ? faster : 1)) <= boxWidth - sphereWidth) {
        sphere.style.left = left + (step*(isShifted ? faster : 1)) + "px";
        console.log(sphere.style.left);
    } else {
        sphere.style.left = boxWidth - sphereWidth + "px";
    }
}

function moveLeft() {
    let left = sphere.style.left ? parseInt(sphere.style.left):0;
    if (parseInt(sphere.style.left)-(step*(isShifted ? faster : 1)) >= 0 ) {
        sphere.style.left = left - (step*(isShifted ? faster : 1)) + "px";
    } else {
        sphere.style.left = 0 + "px";
    }
}

function moveDown() {
    let down = sphere.style.top ? parseInt(sphere.style.top):0;
    if (down + (step*(isShifted ? faster : 1)) <= boxHeight - sphereWidth) {
        sphere.style.top = down + (step*(isShifted ? faster : 1)) + "px";
    } else {
        sphere.style.top = boxHeight - sphereWidth + "px";
    }
}

function moveUp() {
    let down = sphere.style.top ? parseInt(sphere.style.top):0;
    if (parseInt(sphere.style.top)-(step*(isShifted ? faster : 1)) > 0) {
        sphere.style.top = down - (step*(isShifted ? faster : 1)) + "px";
    } else {
        sphere.style.top = 0 + "px";
    }
}


