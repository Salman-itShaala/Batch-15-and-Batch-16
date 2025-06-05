const h1 = document.getElementById("number");

let count = 0;

function decrease() {
    count--;
    h1.innerHTML = count
}

function increase() {
    count++;
    h1.innerHTML = count
}
