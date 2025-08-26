import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Test Tailwind CSS</h1>
      <h2 className="bg-red-700 text-3xl border-green-600 border-8">Tailwind css setup test</h2>
    </>
  );
}

export default App;
