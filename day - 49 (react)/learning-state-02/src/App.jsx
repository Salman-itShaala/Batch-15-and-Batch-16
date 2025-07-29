import { useState } from "react";
import "./App.css";
import Faq from "./components/Faq";
import Tabs from "./components/Tabs";

function App() {
  const [title, setTitle] = useState("");

  function changeTitle() {
    // "" --> falsy
    if (!title) {
      alert("Title can not be empty");
      return;
    }
    document.title = title;

    setTitle("");
  }

  return (
    <>
      <input
        type="text"
        id="num"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={changeTitle}>Update title</button>
    </>
  );
}

export default App;
