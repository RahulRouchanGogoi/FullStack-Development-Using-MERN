import { useState } from "react";
import "./App.css";
import State from "./state";
import Toggle from "./Toggle";
import MultipleConditionCheck from "./MultipleConditionCheck";
import Props from "./Props";
import PropsUsingArray from "./PropsUsingArray";
import PropsOnClick from "./PropsOnClick";
import PassingJsxWithProps from "./PassingJsxWithProps";

function App() {
  const [count, setCount] = useState(0);
  const name = "Rahul Rouchan Gogoi";

  let userObject = {
    name: "Rahul Rouchan Gogoi",
    age: "24",
    email: "rahulrouchangogoi@gmail.com",
  };

  let userObject2 = {
    name: "Disha Kalita",
    age: "24",
    email: "dishakalita@gmail.com",
  };


  let collegeNames=["Jorhat Engineering College","St. Basil's Academy","Concept Junior College"];

  const[student,setStudent]=useState("")


  return (
    <>
      <h1>Hello! I am Rahul Rouchan Gogoi</h1>
      <p>This is my journey to learn react!</p>
      <p>Counter:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase counter</button>
      <State />
      <Toggle />
      <MultipleConditionCheck />
      <Props  age={24} user={userObject} />
      <Props name={name} age={24} user={userObject2} />
      <PropsUsingArray college={collegeNames}/>
      {student && <PropsOnClick name={student}/>} {/*short-circuit evaluation*/}
      <button onClick={()=>setStudent("Rahul Rouchan Gogoi")}>Display student Name</button>

      <PassingJsxWithProps><h1>Hello Rahul</h1></PassingJsxWithProps>
      <PassingJsxWithProps><h1>Hello Disha</h1><h2 style={{color:"red"}}>Login</h2></PassingJsxWithProps>
    </>
  );
}

export default App;
