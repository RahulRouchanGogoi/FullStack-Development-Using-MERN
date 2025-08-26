import { useTransition } from "react";
import lodingGif from "./assets/loading.gif";
const UseTransition=()=>
{
    const[pending,startTransition]=useTransition();

    const transition=()=>
    {
        startTransition(async()=>
        {
            await new Promise(res=>setTimeout(res,2000))
        })
    }
    return(
        <div>
            <h1>UseTransition hook in ReactJs</h1>
            {
                pending?<img style={{height:"100px",width:"100px"}} src={lodingGif}/>:null
            }
            <br/>
            <button disabled={pending} onClick={transition}>Submit</button>
        </div>
    )
}
export default UseTransition;