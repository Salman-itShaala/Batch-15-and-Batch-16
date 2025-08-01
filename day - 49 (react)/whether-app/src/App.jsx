import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [whetherData, setWhetherData] = useState(null);
  const [loading, setLoading] = useState(false);

  navigator.geolocation.getCurrentPosition(success, error);

  function success(obj) {
    console.log("from success fn ", obj.coords.latitude, obj.coords.longitude);
  }

  function error(e) {
    console.log(e);
  }

  useEffect(() => {
    // send req with city pune and update data to front end
    // pune --> current location  --> latitude and longitude --> city
    getWhetherData("pune");
  }, []);

  async function getWhetherData(city) {
    // environment variables
    setLoading(true);
    const SECRET = import.meta.env.VITE_APP_MY_SECRET_KEY;

    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${SECRET}&q=${city}`
    );

    const data = await res.json();

    console.log(data);

    setWhetherData(data);

    setCityInput("");
    setLoading(false);
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
        <button onClick={() => getWhetherData(cityInput)}>Search</button>
      </div>

      <div className="results-wrapper">
        <h2>Results</h2>

        <h3>
          city :
          {loading ? (
            <span className="loader"></span>
          ) : (
            <span>{whetherData?.location?.name}</span>
          )}
        </h3>
      </div>
    </>
  );
}

export default App;
