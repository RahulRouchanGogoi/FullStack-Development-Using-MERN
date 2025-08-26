import { useReducer } from 'react'
import './App.css'

const emptyData={
  name:"",
  password:"",
  email:"",
  city:"",
  state:""
}

const reducer=(data,action)=>
{
console.log(data,action);
return {...data,[action.type]:action.val}

}

function App() {

  const[state,dispatch]=useReducer(reducer,emptyData)
  console.log(state);
  
 

  return (
    <>
      <h1>UseReducer Hook</h1>
      <input onChange={(event)=>dispatch({val:event.target.value, type:"name"})} type="text" placeholder='Enter name'/>
      <br/><br/>
       <input onChange={(event)=>dispatch({val:event.target.value, type:"password"})} type="text" placeholder='Enter password'/>
      <br/><br/>
       <input onChange={(event)=>dispatch({val:event.target.value, type:"email"})} type="text" placeholder='Enter email'/>
      <br/><br/>
       <input onChange={(event)=>dispatch({val:event.target.value, type:"city"})} type="text" placeholder='Enter city'/>
      <br/><br/>
       <input onChange={(event)=>dispatch({val:event.target.value, type:"state"})} type="text" placeholder='Enter state'/>
      <br/><br/>
      <ul>
        <li>
          Name:{state.name}
        </li>
        <li>
          Password:{state.password}
        </li>
        <li>
          Email:{state.email}
        </li>
        <li>
          City:{state.city}
        </li>
        <li>
          State:{state.state}
        </li>
      </ul>
      <button>Submit Details</button>
    </>
  )
}

export default App
