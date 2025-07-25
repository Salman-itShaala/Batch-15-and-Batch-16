import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter is updating");

  return (
    <div className="component">
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
