import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState(0); // num is state variable

  console.log("Hii");

  function handleClick() {
    setNum(num + 1); // 1
  }

  return (
    <div className="container">
      <div className="box">
        <p>Value of number is {num}</p>
        <button onClick={handleClick}>Increase</button>
        <button>Decrese</button>
        <button>reset</button>
      </div>
    </div>
  );
}

export default App;
