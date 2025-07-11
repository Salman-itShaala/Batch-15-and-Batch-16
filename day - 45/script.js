// api --> https://dummyjson.com/users

// fetch

function getUsers() {

    const res = fetch("https://dummyjson.com/users");

    res
        .then(data => data.json())
        .then(data2 => {
            console.log(data2); // {users : [], skip : , total : }

            const users = data2.users;

            // div --> 

            for (let user of users) {
                const para = document.createElement("p");

                para.innerHTML = user.firstName;

                document.body.appendChild(para);
            }

        })
        .catch((error) => console.log(error));

}


function getTodos() {
    const res = fetch("https://dummyjson.com/todos");

    res
        .then(data => data.json())
        .then(data2 => {
            // add this data to fe
            const todos = data2.todos;

            todos.forEach(todo => {
                const para = document.createElement("p");

                para.innerHTML = todo.todo;

                document.body.appendChild(para);
            });
        })
        .catch(error => console.log(error))


}