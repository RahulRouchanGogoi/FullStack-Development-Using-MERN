import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function UserList() {
  const [getData, setUserData] = useState([]);
  const[loading,setLoading]=useState(false)

  useEffect(()=>
  {
    setLoading(true)
    userData()
  },[])

  const url="http://localhost:3000/users";

  async function userData()
  {
    
    let response=await fetch(url);
    response=await response.json();
    setUserData(response)
    setLoading(false)
  }


  const deleteUser=async (id)=>
  {
    console.log(id);
    let response=await fetch(url+"/"+id,{method:"delete"});
    response=await response.json();
    if(response)
    {
      alert("Record deleted")
      userData();
    }
    
  }

  return (
    <>
    <div className="main-div">
     <h1>Make Routes and pages for Add User,Delete User and User List UI </h1>
      <ul className="user-details">
        <li id="user-details-bold">Name</li>
        <li id="user-details-bold">Age</li>
        <li id="user-details-bold">Email</li>
        <li id="user-details-bold">Action</li>
      </ul>
      {
        !loading?
        getData && getData.map((item,id)=>
        (
          <ul key={item.id} className="user-details">
            <li >{item.name}</li>
             <li >{item.age}</li>
              <li >{item.email}</li>
              <li><button onClick={()=>deleteUser(item.id)}>Delete</button></li>
          </ul>
        ))
        :
        <h1>Data Loading...</h1>
      }
      </div>
    </>
  );
}

export default UserList;
