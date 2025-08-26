import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInput from './UserInput'
import { useRef } from 'react'

function App() {

  const userRef=useRef(null)

  const focusInput=()=>
  {
    userRef.current.value=100;
    userRef.current.focus();
    userRef.current.style.color="red";
  }

  return (
    <>
     <UserInput ref={userRef}/>
     <button onClick={focusInput}>Enter</button>
    </>
  )
}

export default App
