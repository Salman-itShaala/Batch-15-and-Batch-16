let address = {
    city: "pune",
    state: "Maharashtra",
    pincode: 400411,
}

// access => this is called as (.) dot notation
console.log(address.city);

// bracket notation
console.log(address["pincode"]);

// to update existing key value pair
address.city = "Shivajinagar";

// to add new key value pair
address.houseNum = 123;

// to delete key value pair from obj
delete address.state;


let person = {
    name: "Salman",
    address: {
        city: "pune"
    }
}


// string

let userName = "salman";

console.log(userName.length); // 6

//  to access chars of give string
console.log(userName[0]);
console.log(userName[1]);
console.log(userName[2]);
console.log(userName[3]);
console.log(userName[4]);
console.log(userName[5]);


// to convert string into uppercase chars
const upperCaseName = userName.toUpperCase();

console.log(upperCaseName);

let country = "INDIA";

// to convert string into lowercase chars
console.log(country.toLowerCase());


let sentence = "I love India";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e") {
        console.log("e is present at index", i)
    }
}


// reverse given string
let newString = "salman"; // alaahStI // .length == 8


let arr = ["s", "a", "l", "m", "a", "n"];



console.log(arr.reverse());

// ['n', 'a', 'm', 'l', 'a', 's']
