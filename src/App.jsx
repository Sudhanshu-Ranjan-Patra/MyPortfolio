import React,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
    </>
  )
}

export default App
