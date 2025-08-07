import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import LearnReducer from "./LearnReducer";
import LearMemo from "./LearMemo";
import LearnCustomHook from "./LearnCustomHook";
import useSendReq from "./hooks/sendReq";

function App() {
  return (
    <>
      <h1>Hii there</h1>
      {/* <button onClick={sendReq}>Click me</button> */}
      <LearnCustomHook />
    </>
  );
}

function Input() {
  const inputRef = useRef(null);

  function focusInput() {
    console.log(inputRef.current.value);
  }

  return (
    <div className="input-wrapper">
      <input type="text" ref={inputRef} placeholder="Enter something" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
