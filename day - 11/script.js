// Data types in js

// 1. number eg. 1,2,3,4, 4.1233, 3.143, 1.2, 0

console.log(typeof 1);

console.log(typeof 10.11);

let age = 29;

console.log(typeof age);

// 2. bigint

let mathsMarks = 98n;

console.log(typeof mathsMarks);

// 3. boolean --> true, false

let canVote = false;

console.log(typeof true);

console.log(typeof canVote);

// 4. string --> single quotes, double quotes, backticks (string template)

let firstName = "salman";

let lastName = "shaikh";

let city = `pune`;

console.log(typeof city);

// 5. undefined , undefined is value as well as a data type

let college;

console.log(college); // undefined

// 6. null,  null is value as well as a data type

let address = null;

console.log(typeof null); // null

// 7. symbol --> to generate unique values

let uniqueValue = Symbol("description");

console.log(typeof uniqueValue);

// 8. object (non-primitive)

let person = {
  name: "Salman",
  age: 55,
};

console.log(typeof person); // number
