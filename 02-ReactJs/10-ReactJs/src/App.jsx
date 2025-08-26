import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button>Normal Button</button>
    <br/>
    <br/>
    <Button>Bootstrap Button</Button>
    <br/>
    <br/>
    <Alert variant='danger'>Hello, Bootstrap install</Alert>

    <br/>
    <Button variant='warning'>Bootstrap Button</Button>
      
    </>
  )
}

export default App
