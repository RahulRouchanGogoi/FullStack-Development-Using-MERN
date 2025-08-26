import { useState } from "react";
import "./App.css";
import useCustomHook from "./useCustomHook";

function App() {
  const [value, toggleValue] = useCustomHook(true);

  const [data, setData] = useCustomHook(true);

  return (
    <>
      {value ? <h1>Custom Hooks in Reactjs</h1> : null}
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>

      <hr />

      {data ? <h1>Second Heading</h1> : null}
      <button onClick={setData}>Toggle Heading</button>
      <button onClick={() => setData(true)}>Show Heading</button>
      <button onClick={() => setData(false)}>Hide Heading</button>
    </>
  );
}

export default App;
