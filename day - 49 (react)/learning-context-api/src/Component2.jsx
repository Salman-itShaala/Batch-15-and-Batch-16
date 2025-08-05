import { useContext } from "react";
import { CounterContext } from "./App";

function Component2() {
  const [count, setCount] = useContext(CounterContext);

  return (
    <div className="bg-sky-400 p-8">
      <h1>Counter is {count}</h1>
    </div>
  );
}

export default Component2;
