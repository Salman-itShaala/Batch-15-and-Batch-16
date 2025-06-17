const childArray = document.querySelectorAll(".child"); // [div, div, div]
const colorInput = document.getElementById("color-input");

let color = "red";
let isMouseClicked = false;


document.addEventListener("mousedown", toggleMouseClickedToTrue);


document.addEventListener("mouseup", toggleMouseClickedToFalse);


function toggleMouseClickedToTrue() {
    isMouseClicked = true; // 
}


function toggleMouseClickedToFalse() {
    isMouseClicked = false; // 
}


for (let i = 0; i < childArray.length; i++) {
    childArray[i].addEventListener("mouseover", changeBg)
}

function changeBg(event) {

    if (isMouseClicked) {
        event.target.style.backgroundColor = color;
    }

}

function eraser() {
    color = "white";
}

function changeColor() {
    color = colorInput.value;
}




colorInput.addEventListener("change", changeColor);