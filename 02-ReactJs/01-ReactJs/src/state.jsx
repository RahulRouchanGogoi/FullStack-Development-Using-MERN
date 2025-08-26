import { useState } from "react";

const State=()=>

  
{
   
      const[fruit,setFruit]=useState("Apple");
      const[reverseCounter,setReverseCounter]=useState(100);
      const name="Rahul Rouchan Gogoi";
      
      const changeFruit=()=>{
        setFruit("Mango");
      }

    return(
        <div>
          <hr/>
            <h1>{fruit}</h1>
            <button onClick={changeFruit}>Change fruit name</button>
            <h1>Counter:{reverseCounter}</h1>
            <button onClick={()=>setReverseCounter(reverseCounter-1)}>Reverse Counter</button>
        </div>
    )
}

export default State;