const input = document.getElementById("my-input");

const parent = document.getElementById("box");

function addPara() {
    // Create a element
    const para = document.createElement("p");

    para.innerHTML = input.value;

    // adding element


    parent.appendChild(para);
}




function deletePara() {
    const para1 = document.getElementById("para-1");

    para1.remove();
}