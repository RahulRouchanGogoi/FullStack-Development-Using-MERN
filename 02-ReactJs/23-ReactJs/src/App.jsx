import { useState } from "react";
import "./App.css";
import College from "./College";
import {subjectContext} from "./CreateContext"
function App() {
  const[subject,setSubject]=useState("")
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <subjectContext.Provider value={subject}>
        <h1 >
        Context API
      </h1>
      <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Assamese">Assamese</option>
      </select>
      <button onClick={()=>setSubject("")}>Clear Subject</button>
      <College />
      </subjectContext.Provider>

    </div>
  );
}

export default App;
