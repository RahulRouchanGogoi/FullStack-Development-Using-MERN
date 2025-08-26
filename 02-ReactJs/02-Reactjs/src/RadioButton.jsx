import { useState } from "react";

const RadioButton=()=>
{

    const[gender,setGender]=useState("Female");
    return(
        <div>
            <hr/>
            <h1>Radio Button</h1>
            <h3>Select Gender</h3>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} value={"Male"} name="gender" id="male"/> {/* name is same because we can select one at a time*/}
            <label htmlFor="male">Male</label>
            <br/>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=="Female"} value={"Female"} name="gender" id="female"/>
            <label htmlFor="female">Female</label>
            <h3>Gender:{gender}</h3>
        </div>
    )
}

export default RadioButton;