import { useState } from "react";

const Dropdown=()=>
{
    const[yourstate,setYourstate]=useState("Assam")
    return(
        <div>
            <hr/>
            <h1>Select city from the Drop Down Menu</h1>
            <select onChange={(event)=>setYourstate(event.target.value)} defaultValue={"Assam"}>
                <option value={"Assam"}>Assam</option>
                <option  value={"Pune"}>Pune</option>
                <option value={"Mumbai"}>Mumbai</option>
                <option value={"Bangalore"}>Bangalore</option>
                <option value={"Hyderabad"}>Hyderabad</option>
               
            </select>
             <h3>Selected State:{yourstate}</h3>
        </div>
    )
}

export default Dropdown;