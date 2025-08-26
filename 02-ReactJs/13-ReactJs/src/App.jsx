import { useState } from 'react'
import './App.css'
import User from './User'

function App() {

  const displayName=(name)=>
  {
    alert(name);
  }
  
  const getUser=()=>
  {
    alert("Get user called")
  }

  return (
    <>
      <User displayName={displayName} name={"Rahul Rouchan Gogoi"} getUser={getUser}/>
      <User displayName={displayName} name={"Disha Kalita"} getUser={getUser}/>
    </>
  )
}

export default App
