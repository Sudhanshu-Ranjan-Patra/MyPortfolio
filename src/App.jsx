import React,{ useState , useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'


function App() {

  // Create refs for each section
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  // Function to handle scrolling
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div>

      <Navbar
        scrollToHome = {() => scrollToRef(home)}
        scrollToAbout = {() => scrollToRef(about)}
        scrollToProjects = {() => scrollToRef(projects)}
        scrollToSkill = {() => scrollToRef(skills)}
        scrollToContact = {() => scrollToRef(contact)}
      />
      <Home ref={home}/>
      <About ref={about}/>
      <Projects ref={projects}/>
      <Skill ref={skills}/>
      <Contact 
        ref={contact}
        scrollToHome={() => scrollToRef(home)}
        scrollToAbout={() => scrollToRef(about)}
        scrollToProjects={() => scrollToRef(projects)}
        scrollToSkill={() => scrollToRef(skills)}
      />
    </div>
  )
}

export default App
