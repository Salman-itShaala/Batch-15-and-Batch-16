import { useState } from "react";
import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState("");

  console.log(import.meta.env.VITE_APP_MY_SECRET_KEY);
  console.log(import.meta.env.VITE_APP_USERNAME);

  async function getWhetherData() {
    // environment variables
    //

    const res = await fetch(
      `https://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=${cityInput}`
    );
  }

  return (
    <>
      <h1>Whether app</h1>
      <div className="city-input-wrapper">
        <input
          type="text"
          placeholder="Enter a city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button onClick={getWhetherData}>Search</button>
      </div>

      <div className="results-wrapper">
        <h2>Results</h2>
      </div>
    </>
  );
}

export default App;
