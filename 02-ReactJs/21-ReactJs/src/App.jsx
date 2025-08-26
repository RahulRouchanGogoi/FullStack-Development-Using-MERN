import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseActionStateHook from './UseActionStateHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseActionStateHook/>
    </>
  )
}

export default App
