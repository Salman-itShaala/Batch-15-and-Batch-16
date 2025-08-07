import React, { useState } from "react";
import useSendReq from "./hooks/sendReq";

function LearnCustomHook() {
  const [data, sendReq, loading] = useSendReq("https://dummyjson.com/todos");

  return (
    <div>
      {num}

      <button onClick={sendReq}>Click me</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data?.todos.map((todo) => {
              return <li key={todo.id}>{todo.todo}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LearnCustomHook;
