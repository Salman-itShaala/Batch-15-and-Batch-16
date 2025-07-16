const sendReq = async () =>{
    try {
        // post req 

        // JSON.strigify({})

        const jsonData = JSON.stringify({
            todo : "Do something",
            completed : false,
            userId : 2
        })

        
        const options = {
            method : "POST",
            headers : { 'Content-Type': 'application/json' },
            body : jsonData
        }

        const res = await fetch("https://dummyjson.com/todos/add", options);

        console.log(res);

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

