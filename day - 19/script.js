// alert --> to display some message to user
// confirm --> boolean ie. true or false
// prompt --> string / null

// alert("Hello there");


// take two numbers from user using prompt and display there sum

let num1 = +prompt("Enter number 1"); // "2"
let num2 = +prompt("Enter number 2"); // "3"

let operation = prompt("Enter operation ie. +, -, *, /");

switch (operation) {
    case "+":
        let sum = num1 + num2;
        alert(sum);
        break;
    case "-":
        let sub = num1 - num2;
        alert(sub);
        break;
    case "*":
        let mult = num1 * num2;
        alert(mult);
        break;
    case "/":
        let div = num1 / num2;
        alert(div);
        break;
    default:
        alert("Invalid operation");
}
