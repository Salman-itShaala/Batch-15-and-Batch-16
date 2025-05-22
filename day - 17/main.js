for (let num = 1; num <= 10; num = num + 1) {
    console.log("Salman" + num);
}


// print all the odd from 1 to 50

// let number = 11;

// if (number % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


for (let num = 1; num <= 50; num = num + 1) {
    if (num % 2 == 1) {
        console.log("Number is Odd " + num);
    }
}


// print 10's table

for (let num = 10; num <= 100; num = num + 10) {
    console.log(num);
}

for (let num = 1; num <= 10; num++) {
    console.log(`10 x ${num} = ${num * 10}`);
}

for (let num = 1; num <= 100; num++) {
    if (num % 10 == 0) {
        console.log(num);
    }
}


// how to break from outer loop using break inside inner loop

for (let num = 1; num <= 5; num++) {

    for (let num2 = 1; num2 <= 5; num2++) {
        console.log("Hii");
    }

}

