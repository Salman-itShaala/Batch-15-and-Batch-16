import "./App.css";

function App() {
  return (
    <div>
      <h1>Hii there</h1>
      <div className="box-container">
        <CardComponent heading="This is heading 1" desc="This is very long descriptoin 1" img="img1" />
        <CardComponent heading="This is heading 2" desc="This is very long descriptoin 2" img="img2" />
        <CardComponent heading="This is heading 3" desc="This is very long descriptoin 3" img="img3" />
        <CardComponent heading="This is heading 4" desc="This is very long descriptoin 4" img="img4" />
      </div>
    </div>
  );
}

function CardComponent(props) {

  console.log(props)
  return (
    <div className="card">
      <p className="heading">{props.heading}</p>
      <p className="desc">{props.desc}</p>

      <p className="img">{props.img}</p>
    </div>
  );
}

export default App;
