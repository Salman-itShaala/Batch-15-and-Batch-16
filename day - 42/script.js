const arr = [12, 44, 64, 66, 7, 21, 23, 54, 5];

arr.forEach((num) => {
    console.log(num + 2);
});

const newArray2 = arr.filter((num) => {
    return num > 20;
});

const newArray = arr.map((num) => {
    return num + 5;
})


// array destructuring --> to access / retrive elements from array

const names = ["a", "b", "c", "d"];

// const firstName = names[0];
// const secondName = names[1];
// const thirdName = names[2];

const [firstName, secondName, thirdName] = names;


// spread operator


const cities = ["pune", "mumbai", "kolhapur", "satara", "nashik"];

// new array = ["pune", "mumbai", "kolhapur", "satara", "nashik", "delhi", "hyderabad"]

const newCities = [...cities, "delhi", "hyderabad"];

console.log(newCities);

console.log(cities);


// to merge arrays

const maharaShtraCities = ["pune", "mumbai", "kolhapur"];

const gujratCities = ["ahmadabad", "surat", "vadodara"];

// const allCities =  ["pune", "mumbai", "kolhapur", "ahmadabad", "surat", "vadodara"]

const allCities = [...maharaShtraCities, ...gujratCities];

console.log(allCities);