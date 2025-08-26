import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseFromStatus from './UseFormStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseFromStatus/>
    </>
  )
}

export default App
