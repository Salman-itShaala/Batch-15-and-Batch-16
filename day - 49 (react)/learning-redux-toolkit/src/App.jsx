import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./slices/counterSlice";

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
      <h1>Counter is {counter}</h1>
    </>
  );
}

function Comp2() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(increment())}
        className="border rounded-md px-4 py-2"
      >
        Click me
      </button>
    </>
  );
}

function Comp3() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1>I'm comp3 and counter is {counter}</h1>
    </>
  );
}

export default App;
