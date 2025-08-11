import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increaseByValue,
  increment,
  reset,
} from "./slices/counterSlice";

function App() {
  return (
    <div className="h-screen w-screen bg-neutral-800 text-white flex flex-col gap-4 justify-center items-center">
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

function Comp1() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1 className="border p-4 mb-4">Counter is {counter}</h1>
    </>
  );
}

function Comp2() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => dispatch(increment())}
        className="border rounded-md px-4 py-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border rounded-md px-4 py-2"
      >
        -
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="border rounded-md px-4 py-2"
      >
        Reset
      </button>
      <button
        onClick={() => dispatch(increaseByValue(5))}
        className="border rounded-md px-4 py-2"
      >
        Increase by 5
      </button>
    </div>
  );
}

function Comp3() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1 className="border p-4 mb-4">I'm comp3 and counter is {counter}</h1>
    </>
  );
}

export default App;
