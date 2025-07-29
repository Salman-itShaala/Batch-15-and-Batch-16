function Sports() {

  const todos = [
    {
      id: 1,
      todo: "Do something nice for someone you care about",
      completed: false,
      userId: 152,
    },
    {
      id: 2,
      todo: "Memorize a poem",
      completed: true,
      userId: 13,
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      completed: true,
      userId: 68,
    },
    {
      id: 4,
      todo: "Watch a documentary",
      completed: false,
      userId: 84,
    },
    {
      id: 2,
      todo: "Memorize a poem",
      completed: true,
      userId: 13,
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      completed: true,
      userId: 68,
    },
    {
      id: 4,
      todo: "Watch a documentary",
      completed: false,
      userId: 84,
    },
  ];

  return (
    <div className="container">
      {todos.map(todo =>{
        return <Card todoTitle={todo.todo} isComleted={todo.completed} userId={todo.userId}/>
      })}
    </div>
  );
}

function Card({ todoTitle, userId, isComleted }) {
  return (
    <div className="card">
      <h2>{todoTitle}</h2>
      {isComleted ? <p>This task is completed</p> : <p>This task is not complete</p>}
      <p>{userId}</p>
    </div>
  );
}

export default Sports;
