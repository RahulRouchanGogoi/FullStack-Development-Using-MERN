import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
