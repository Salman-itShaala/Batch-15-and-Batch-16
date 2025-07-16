// Array destructuring --> order is very imp --> keys are not imp


const arr = ["a", "b", "c"];

const [firstEl, secondEl, thirdEl ] = ["a", "b", "c"];



// Object destructuring --> order is not imp --> keys are imp

const person = {
    userName : "Salman",
    age : 45,
    city : "Pune",
    college : "XYZ college of engg. Pune"
}

// const userName = person.userName;
// const age = person.age;
// const city = person.city;
// const college = person.college;


const {city, userName, college, age} = person;


console.log(city)   





// spread operator ---> ...

// to merge arrays/ to add elements to array and get new array from it


const arr1 = [1,2,3];

const arr2 = [4,5,6];

// [1,2,3,4,5,6]

const arr3 = [...arr1, 99];

console.log(arr3)   




const mobile = {
    name : "Iphone 15 pro",
    price : 100000,
    varient : "256gb",
}

console.log(mobile.abcd?.abcd);




// {name , price, varient , discount} 

const newObj = {...mobile, discount : "20%"}


console.log(mobile);

console.log(newObj);






// nullish colescing operator

let mobileNo;

let contactInfo = mobileNo ?? "No contact info"; 

console.log(contactInfo);












// normal export --> multiple

// export const userName = "Punit Superstar";

// default export --> only one


// const age = 55;

// export default age;