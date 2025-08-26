import { useState } from "react";

const InputField=()=>{


    const[val,setVal]=useState("")
    return(
        <div>
            <h1>Get Input Field Value</h1>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter user Name"></input>
            <h2>{val}</h2>
            <button onClick={()=>setVal("")}>Reset user Name</button>
        </div>
    )
}

export default InputField;