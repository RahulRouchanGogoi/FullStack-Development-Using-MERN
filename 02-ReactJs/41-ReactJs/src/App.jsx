import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const getColours = JSON.parse(localStorage.getItem("colour"));
  const [R, setR] = useState(getColours && getColours.R ? getColours.R : 0);

  const [G, setG] = useState(getColours && getColours.G ? getColours.G : 0);

  const [B, setB] = useState(getColours && getColours.B ? getColours.B : 0);

   const [savedColours, setSavedColours] = useState(getColours);


  const changeRed = (event) => {
    let changeRed = event.target.value;
    setR(changeRed);
  };

  const changeGreen = (event) => {
    let changeGreen = event.target.value;
    setG(changeGreen);
  };

  const changeBlue = (event) => {
    let changeBlue = event.target.value;
    setB(changeBlue);
  };

  const save = () => {
    const colourObj = { R, G, B };
    localStorage.setItem("colour", JSON.stringify(colourObj));
    setSavedColours(colourObj);
  };

  return (
    <>
      <div>
        <h1>Mini Project in ReactJs(Colour Mixture)</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgb(" + R + "," + G + "," + B + ")",
          height: "200px",
          width: "1000px",
          margin: "100px",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      ></div>
      <div>
        <label>Red</label>
        <input value={R} onChange={changeRed} type="range" min={0} max={255} />
        <br />
        <br />
        <label>Green</label>
        <input
          value={G}
          onChange={changeGreen}
          type="range"
          min={0}
          max={255}
        />
        <br />
        <br />
        <label>Blue</label>
        <input value={B} onChange={changeBlue} type="range" min={0} max={255} />
        <br />
        <br />
        <button onClick={save}>Save Colour Combination</button>
        <h4>
          Saved Colour combination in local storage:
          {getColours
            ? `R: ${getColours.R}, G: ${getColours.G}, B: ${getColours.B}`
            : "None"}
        </h4>
      </div>
    </>
  );
}

export default App;
