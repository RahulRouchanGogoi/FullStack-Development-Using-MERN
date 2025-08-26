import { useState } from "react";

const AddUser = () => {
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[email,setEmail]=useState('');

  async function createUser()
  {
    console.log(name);
    console.log(age);
    console.log(email);
    const url="http://localhost:3000/users";
    let response=await fetch(url,{method:"post",body:JSON.stringify({name,age,email})});
    response=await response.json();
    if(response){
      alert("New user added")
    }

    
        
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Add New User</h1>
      <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter your name"/>
      <br/>
      <input onChange={(event)=>setAge(event.target.value)} type="text" placeholder="Enter your age"/>
      <br/>
      <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter your email"/>
      <br/>
      <button onClick={createUser}>Add User</button>
    </div>
  );
};
export default AddUser;
