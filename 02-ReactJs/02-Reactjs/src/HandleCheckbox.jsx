import { useState } from "react";

const HandleCheckbox=()=>
{

    const[skills,setSkills]=useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked)
        {
            setSkills([...skills,event.target.value])
        }
        else
        {
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>
            <hr/>
            <h1>Handle Checkbox</h1>
            <h2>Select your skills</h2>
            <input onChange={handleSkills} type="checkbox" id="java" value="Java"/>
            <label htmlFor="java">Java</label>
            <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="react" value="React"/>
            <label htmlFor="react">React</label>
             <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="html" value="Html5"/>
            <label htmlFor="html">HTML5</label>
             <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="sql" value="Sql"/>
            <label htmlFor="sql">SQL</label>
             <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="css" value="Css"/>
            <label htmlFor="css">CSS</label>

            <h3>Skills:{skills.toString()}</h3>
        </div>
    )
}
export default HandleCheckbox;