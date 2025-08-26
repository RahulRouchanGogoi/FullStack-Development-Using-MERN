import { useContext } from "react";
import { subjectContext } from "./CreateContext";

const Subject=()=>
{
    const subject=useContext(subjectContext)
    return(
        <div style={{backgroundColor:"red",padding:"10px"}}>
            <h1 >Subject is:{subjectContext}</h1>
        </div>
    )
}
export default Subject;