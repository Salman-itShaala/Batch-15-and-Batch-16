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


async function getTodos() {
    const res = await fetch("https://dummyjson.com/todos");

    const data = await res.json();

    const todos = data.todos;

    todos.forEach(todo => {
        const para = document.createElement("p");

        para.innerHTML = todo.todo;

        document.body.appendChild(para);
    })
}