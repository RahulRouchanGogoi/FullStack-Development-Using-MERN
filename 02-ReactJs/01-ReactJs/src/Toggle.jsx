import { useState } from "react";
import ComponentToggle from "./ComponentToggle";

const Toggle = () => {
  const [display, setDisplay] = useState(true);
  const [componentDisplay, setComponent] = useState(true);
  return (
    <div>
        <hr/>
      <h1>Toggle in React</h1>
      {display ? <h2>Hi! I am Rahul Rouchan Gogoi</h2> : null}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <h1>Component Toggle</h1>
      {componentDisplay ? <ComponentToggle /> : null}
      <button onClick={() => setComponent(!componentDisplay)}>
        Component Toggle
      </button>
    </div>
  );
};

export default Toggle;
