import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(["Rahul", "Disha", "Bablu"]);
  const [dataDetails, setDataDetails] = useState([
    { name: "Rahul", age: "24" },
    { name: "Abinash", age: "23" },
    { name: "Tinku", age: "25" },
    { name: "Himan", age: "22" },
  ]);

  const changeLastUser = (name) => {
    data[data.length - 1] = name;
    setData([...data]);
  };


  const handleAge=(age)=>
  {
    dataDetails[dataDetails.length-1].age=age;
    setDataDetails([...dataDetails])
  }

  return (
    <>
      <h1>Update array in state</h1>
      <input
        onChange={(event) => {
          changeLastUser(event.target.value);
        }}
        type="text"
        placeholder="Update last name"
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr/>
      <h1>Array of objects</h1>
      {
        dataDetails.map((items,index)=>
        (
          <h3 key={index}>{items.name},{items.age}</h3>
        ))
      }
      <input onChange={(event)=>handleAge(event.target.value)} type="text" placeholder="Modify last user age"/>

    </>
  );
}

export default App;
