import { useContext } from "react";
import { CounterContext } from "./App";

function Component1() {
  const [count, setCount] = useContext(CounterContext);

  return (
    <div className="bg-amber-300 p-8 mb-8">
      <button
        className="border px-4 py-2 mt-3"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default Component1;
