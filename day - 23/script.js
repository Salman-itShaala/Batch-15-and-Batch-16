// Step 1 : how to select elements

// 1. using id - 95%

const selectedH1 = document.getElementById("my-h1"); // element

// 2. using class

const para = document.getElementsByClassName("para"); // HTMLCollection -- Array

// 3. Tag

const paraCollection = document.getElementsByTagName("p"); // HTMLCollection -- Array

// 4. querySelector

const para1 = document.querySelector("#my-h1"); // Element

// 5. querySelectorAll

const paras = document.querySelectorAll(".para"); // Nodelist --> Array like obj

console.log(paras);