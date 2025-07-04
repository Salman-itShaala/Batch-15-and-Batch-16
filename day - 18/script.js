// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }

// while loop

let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}

let num2 = 1;

do {
    console.log(num2);
    num2++;
} while (false);


loop1:
for (let num6 = 1; num6 <= 10; num6++) {
    console.log("hello " + num6);
    loop2:
    for (let num7 = 1; num7 <= 10; num7++) {
        if (num7 === 5)
            break loop1;
        {
            console.log("hii " + num7);
        }
    }
}