// 1. convert given minutes to seconds

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
        alert("Sum is " + sum);
        break;
    case "-":
        let sub = num1 - num2;
        alert("Substration is " + sub);
        break;
    case "*":
        let mult = num1 * num2;
        alert("Multiplication is " + mult);
        break;
    case "/":
        let div = num1 / num2;
        alert("Division is " + div);
        break;
    default:
        alert("Invalid operation");
}
