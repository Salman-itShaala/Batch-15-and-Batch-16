// Comparison operators --> to compare values
// --> it will always return you a boolean value ie. true or false


// <  (less than)   a < b

const num1 = 10;
const num2 = 90;

console.log(num1 < num2); // 10 < 90 --> true
console.log(num2 < num1); // 90 < 10 --> false

// > (greater than)

console.log(num1 > num2); // 10 > 90 --> false
console.log(num2 > num1); // 90 > 10 --> true 

// <= (less than or equal to )
console.log(num1 <= num1); // true
console.log(num1 <= num2); // true

// >= greater than or equal to 

console.log(num1 >= num2); // 10 >= 90 --> false
console.log(num2 >= num2); // 90 >= 90 --> true

// string comparision --> Lexicographic order


// alphabetical order --> Lexicographic order
console.log("A" < "a");

// NaN, undefined, null

// Equality operators

// double equal to operator

// ==

console.log(11 == 10); // false
console.log(10 == 10); // true

// number --> 16 digits --> 2^53
console.log(98765432109876557 == 98765432109876556); // true

// we'll convert these into bigint  
console.log(98765432109876557n == 98765432109876556n); // false


const a = 10;

const b = 10;

console.log(a == b); // true

const s1 = Symbol("salman");

const s2 = Symbol("salman");

// though the RHS of s1 and s2 seems equal but they are not  equel
// because symbol will always give you unique values
console.log(s1 == s2); // false



console.log(10 == 10);

console.log("ten" == 10); // false

console.log("TEN" == 10); // false

console.log("abcd" == 10); // false

console.log("10" == 10); // true


// strict equality / triple equal to opertor

console.log("10" === 10); // false




let num = 10;

console.log(num++)// num = num + 1