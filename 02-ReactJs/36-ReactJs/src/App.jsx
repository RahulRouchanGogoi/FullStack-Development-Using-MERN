import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [nameErr, setNameErr] = useState()

   const [password, setPassword] = useState("")
  const [passErr, setPassErr] = useState()


  const handleName=(event)=>
  {
    console.log(event.target.value)
    if(event.target.value.length>5)
    {
      setNameErr("Please enter valid name! Only 5 characters allowed")
    }else
    {
      setNameErr()
    }
  }

    const handlePassword=(event)=>
  {
    console.log(event.target.value)
    let regex=/^[A-Z0-9]+$/i;
    if(regex.test(event.target.value))
    {
      setPassErr()
      
    }else
    {
      setPassErr("No special characters allowed")
    }
  }

  return (
    <>
      <h1>Simple from validation in ReactJs</h1>
      <input className={nameErr?"error":""} onChange={handleName} type='text' placeholder='Enter Name'/>
      <span>{nameErr}</span>
      <br/>
      <input className={passErr?"error":""} onChange={handlePassword} type='text' placeholder='Enter Password'/>
       <span>{passErr}</span>
      <br/>
      <button disabled={nameErr || passErr}>Login</button>
    </>
  )
}

export default App
