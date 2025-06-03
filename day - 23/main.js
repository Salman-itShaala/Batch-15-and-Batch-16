// Step 2: Dom manipulations

const selectedH1 = document.getElementById("my-h1"); // element --> null


// content

function changeContent() {
    const userInput = prompt("Enter something");

    selectedH1.innerHTML = userInput;
}

// call

