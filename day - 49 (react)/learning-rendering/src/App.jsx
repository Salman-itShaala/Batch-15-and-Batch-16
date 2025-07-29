import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button is clicked");
  };

  let num = 44;

  return (
    <div>
      <button onClick={handleClick}>Click me</button>

      <button
        onClick={()=>{
          console.log("Button is clicked");
        }}
      >
        Button 2
      </button>
    </div>
  );
}

export default App;
