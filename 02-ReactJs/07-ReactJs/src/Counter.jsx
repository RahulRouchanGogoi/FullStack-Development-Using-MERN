import { useEffect, useState } from "react";

const Counter=()=>
{

    const[count,setCount]=useState(0);
    function callOnMounting()
    {
        console.log("Mounting phase only!")
    }

    function callOnUpdate()
    {
        console.log("Updating phase only!")
    }


    useEffect(()=>
    {
        callOnMounting();
    },[])

    useEffect(()=>
    {
        callOnUpdate();
    },[count])
    

    useEffect(()=>{
        return()=>
        {
            console.log("Unmounting phase only");
        }
    })

    return(
        <div>
          <h1>Life cycle process using useEffect</h1>
          <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
        </div>
    )
}
export default Counter;