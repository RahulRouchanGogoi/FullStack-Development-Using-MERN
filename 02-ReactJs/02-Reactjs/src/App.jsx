import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './InputField'
import ControlledComponent from './ControlledComponent'
import HandleCheckbox from './HandleCheckbox'
import RadioButton from './RadioButton'
import Dropdown from './Dropdown'

function App() {


  return (
    <>
      <div>
        <InputField/>
        <ControlledComponent/>
        <HandleCheckbox/>
        <RadioButton/>
        <Dropdown/>
      
      </div>
    </>
  )
}

export default App
