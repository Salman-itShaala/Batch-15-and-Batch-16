function sendReq() {
    const res = fetch("https://dummyjson.com/todos");

    res
        .then(data => data.json())
        .then(actualData => { console.log(actualData) })
        .catch(error => console.log(error))

}

async function sendReqWithAsynAwait() {

    const res = await fetch("https://dummyjson.com/todos");

    const data = await res.json();

    console.log(data);
}