const addNums = (a, b) => {
    return (a + b);
}


// console.log(addNums(2, 3));


// 1. we can remove parenthesis when there's only one parameter
// 2. you can also remove 
// curly backets when you have only one line in your function
// return

// const doubleNum = num => {
//     return (num * 2);
// }

const doubleNum = (num) => num * 2;

console.log(doubleNum(25))