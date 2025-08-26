import { useState } from 'react'
import './App.css'
import UnControlledComponent from './UncontrolledComponent'
import UnControlledComponentUseRef from './UncontrolledComponentUseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UnControlledComponent/>
     <UnControlledComponentUseRef/>
    </>
  )
}

export default App
