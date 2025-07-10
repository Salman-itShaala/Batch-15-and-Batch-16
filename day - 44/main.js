function sendReq(address) {
    const p = new Promise((resolve, reject) => {
        // heavy logic --> address req --> 2 s
        // 
        setTimeout(() => {
            resolve("resolved");
        }, 5000);
    })

    return p;
}

console.log("A");

const p1 = sendReq("www.google.com");


console.log("B");

p1
    .then((data) => {
        return new Promise((resolve) => { resolve("abcd") });
    })
    .then((data) => { console.log(data) })
    .catch((error) => console.log(error))
    .finally(() => console.log("Hii"))


console.log("C");