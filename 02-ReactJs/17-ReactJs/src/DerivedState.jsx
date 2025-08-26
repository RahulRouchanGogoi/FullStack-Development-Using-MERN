import { useState } from "react"

const DerivedState=()=>
{
    const[users,setUsers]=useState([]);
    const[user,setUser]=useState('');

    const handleAddUsers=()=>
    {
        setUsers([...users,user])
    }
   
    const length=users.length;//Derived state
    const lastUser=users[users.length-1];//Derived state
    const uniqueUsers=[...new Set(users)].length;//Derived state
    return(
        <div>
            <h1>Derived state in React</h1>
            <h2>Total user:{length}</h2>
            <h2>Unique number of user:{uniqueUsers}</h2>
            <h2>Last User:{lastUser}</h2>
            <input  type="text" onChange={(event)=>{setUser(event.target.value)}} placeholder="Enter user name"/>
            <br/>
            <br/>
            <button onClick={handleAddUsers}>Add user</button>
            {users.map((item,index)=>
            (
                <h4 key={index}>{item}</h4>
            ))}
        </div>
    )
}
export default DerivedState;