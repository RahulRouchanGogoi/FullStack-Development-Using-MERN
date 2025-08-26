import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("white");

  return (
    <>
      <Clock colour={colour} />
      <div>
        <select onChange={(event)=>setColour(event.target.value)}>
          <option value={"white"}>White</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"red"}>Red</option>
        </select>
      </div>
    </>
  );
}

export default App;
