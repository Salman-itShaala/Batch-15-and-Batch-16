// print sum of numbers from 1 to 10

let sum = 0; // output

for (let num = 1; num <= 10; num++) {
    if (num % 2 == 0) {
        sum = sum + num;
    }
}

console.log(sum);

// 2 + 4 + 6 + 8 + 10
