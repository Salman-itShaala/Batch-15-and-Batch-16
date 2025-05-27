// Arrays

// how will you differentiate between
//  array and object --> Array.isArray()

//              0          1        2           3
let cities = ["pune", "sangali", "satara", "Kolhapur"];

console.log("array before ", cities);

cities.splice(1, 0, "mumbai");

console.log("array after deletion", cities)
















/*

console.log(typeof cities); // typeof array is always object

console.log(cities[0]); // pune
console.log(cities[1]); // sangali
console.log(cities[3]); // Kolhapur
console.log(cities[5]); // undefined
console.log(cities[-1]); // undefined

// count the elements in array .length
console.log(cities.length);


*/