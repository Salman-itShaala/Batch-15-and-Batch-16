function a() {
    console.log("A")
    b();
}

function b() {
    console.log("B")
    a();
}


a();