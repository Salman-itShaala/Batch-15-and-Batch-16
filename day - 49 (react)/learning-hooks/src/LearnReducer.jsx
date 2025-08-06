import React, { useReducer } from "react";

function reducerFn(state, action) {
  if (action == "increase") {
    // complex logic
    return state + 1;
  } else if (action == "decrease") {
    // complex logic
    return state - 1;
  } else if (action == "reset") {
    // complex logic
    return 0;
  }
}

function LearnReducer() {
  const [count, dispatch] = useReducer(reducerFn, 0);
  return (
    <>
      <h2>From Reducer component {count}</h2>
      <button onClick={() => dispatch("increase")}>Click me</button>
      <button onClick={() => dispatch("decrease")}>Decrese</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default LearnReducer;
