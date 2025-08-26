import { useState } from 'react'
import './App.css'
import LoopInJsx from './LoopInJsx'
import ReuseComponentInLoop from './ReuseComponentInLoop'

function App() {

  return (
    <>
      <LoopInJsx/>
      <ReuseComponentInLoop/>
    </>
  )
}

export default App
