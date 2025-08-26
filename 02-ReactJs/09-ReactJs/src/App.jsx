import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'
import StyledComponents from './StyledComponents'

function App() {


  return (
    <>
      <h1 className='heading'>Style using CSS Modeule</h1>
      <UserProfile/>
      <StyledComponents/>
    </>
  )
}

export default App
