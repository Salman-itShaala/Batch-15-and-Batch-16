function armstrong(a) {
    let sum = 0;
    let temp = a;
    while (a > 0) {
        let re = a % 10;
        sum = sum + re * re * re;
        a = parseInt(a / 10); // 15.3
    }

    console.log(sum);

    if (sum == temp) {
        console.log("given no is armstrong no")
    }
    else {
        console.log("given no is not armstrong no")
    }
}

armstrong(153);


