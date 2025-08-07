import { useState } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <>
      <h1>Hello there</h1>
      <FirstComponent>
        <TestComponent />
      </FirstComponent>
      <TestComponent2 />
    </>
  );
}

function TestComponent() {
  return (
    <>
      <h1>Hii there</h1>
      {num}
    </>
  );
}

function TestComponent2() {
  return (
    <>
      <h1>Hii there</h1>
    </>
  );
}

export default App;
