import React, { useCallback, useEffect, useMemo, useState } from "react";

function LearMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const subtotal = useMemo(() => {
    console.log("Calculating sub total ie. expensive operation");
    return (count * (count + 1)) / 2;
  }, [count]);

  console.log(subtotal);

  const someFn = useCallback(() => {
    console.log(count2);
  }, [count2]);

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}

export default LearMemo;
