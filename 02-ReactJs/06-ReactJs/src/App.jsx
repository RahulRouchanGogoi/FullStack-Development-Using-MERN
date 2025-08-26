import { useEffect, useState } from "react"; // React hooks
import reactLogo from "./assets/react.svg";  // Not used here, just imported
import viteLogo from "/vite.svg";            // Not used either
import "./App.css";                          // CSS for styling
import UseEffectUsingProps from "./UseEffectUsingProps";

function App() {
  // Declare two state variables
  const [count, setCount] = useState(0);  // Counter for the first button
  const [data, setData] = useState(0);    // Counter for the second button
  const [countProps,setCountProps]=useState(0);

  // This function is called on **every render**, including re-renders
  function callOnce() {
    console.log("Function called once!");  // But actually logs on every render!
  }

  // This function will only be called once using useEffect
  function callInsideUseEffect() {
    console.log("Function called only once even after state update!");
  }

  // ✅ useEffect with empty dependency array runs **only once** when the component mounts
  useEffect(() => {
    callInsideUseEffect(); // Logs once after first render
  }, []);

  // ❌ This call is placed **outside** useEffect, so it runs on **every render**
  callOnce(); // Logs every time 'count' or 'data' changes

  // Function to log the value of `count` whenever it updates
  function counterState() {
    console.log("Updates on counter state update:", count);
  }

  // ✅ useEffect that depends on `count` — runs only when `count` changes
  useEffect(() => {
    counterState(); // Logs updated count each time the count state changes
  }, [count]);

  return (
    <>
      <div>
        <h1>useEffect Hook</h1>

        {/* Button to increment `count` */}
        <button onClick={() => setCount(count + 1)}>
          Counter: {count}
        </button>

        {/* Button to increment `data` */}
        <button onClick={() => setData(data + 1)}>
          Data: {data}
        </button>

        <hr/>
        <h1>UseEffect using Props</h1>
        <UseEffectUsingProps count={countProps}/>
        <button onClick={()=>setCountProps(countProps+1)}>Props Counter</button>
        
      </div>
    </>
  );
}

export default App;
