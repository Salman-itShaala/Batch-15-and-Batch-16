// Given an array of numbers, return a new array where each number is squared.

const numbers = [2, 3, 4, 5];

const squaredNums = numbers.map((num) => {
    return num * num;
})

console.log(squaredNums);


// Convert an array of strings to uppercase.

const words = ["hello", "world", "javascript"];


const uppercaseWords = words.map((word) => {
    return word.toUpperCase();
})



// Given an array of objects with price and quantity,
// return an array with total prices(price * quantity).

const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 5 },
    { price: 8, quantity: 3 }
];

// const totalPrices = [20, 25, 24];


const totalPrices = items.map((item) => {
    return item.price * item.quantity
})


// Given an array of objects representing students, 
// return only the students who passed (marks >= 40).


const students = [
    { name: "John", marks: 35 },
    { name: "Alice", marks: 50 },
    { name: "Bob", marks: 40 },
    { name: "Emma", marks: 30 }
];