
function printDigits(num) {

    while (num > 0) {
        const unitDigit = num % 10;
        console.log(unitDigit);
        num = parseInt(num / 10); // 12
    }
}

// calculate the number of digits in given number


function calculateNumOfDigits(num) {

    let count = 0;

    while (num > 0) {
        num = parseInt(num / 10);
        count++;
    }

    return count;
}




// calculate the sum of digits of given number
// 1234 => 4 + 3 + 2 + 1
// 333 => 3 + 3 + 3







function checkPalindrome(num) {
    let noOfDigits = calculateNumOfDigits(num);
    alert(noOfDigits)
}

checkPalindrome(9999);






// check if given number is armstrong number or not

// a number that equals the sum of its digits each raised to
//  the power of the number of digits it contains.
// For example,
// 153 is an Armstrong number because 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153 