const sentence = "salman";

// Split a string into substrings using the 
// specified separator and return them as an array.

const arr = sentence.split(""); // ['s', 'a', 'l', 'm', 'a', 'n']

// Reverses the elements in an array in place.
const reverseArr = arr.reverse();

// Adds all the elements of an array into a string,
//  separated by the specified separator string.
const reverseString = reverseArr.join("");

console.log(reverseString);