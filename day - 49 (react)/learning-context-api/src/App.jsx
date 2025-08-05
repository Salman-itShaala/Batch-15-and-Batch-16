import { createContext, useState } from "react";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";

// create contenxt using following function provided by react
// it will return you Context component which you can use
export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <CounterContext.Provider value={[count, setCount]}>
        <Component1 />
        <Component2 />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
