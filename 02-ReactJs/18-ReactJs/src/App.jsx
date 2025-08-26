import { useState } from 'react'
import './App.css'
import Child1 from './AddUser'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'



function App() {
   const [user, setUser] = useState(null);

  return (
    <>
    <h1>Lifting State up</h1>
      <AddUser setUser={setUser}/>
      <DisplayUser user={user}/>
    </>
  )
}

export default App
