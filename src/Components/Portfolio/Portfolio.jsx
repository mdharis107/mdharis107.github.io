import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';

function Portfolio() {
  const { colorMode, toggleColorMode } = useColorMode();

    const homeRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    const aboutRef = useRef(null)

    return (
        <div>
            <Navbar aboutRef={aboutRef} colorMode={colorMode} toggleColorMode={toggleColorMode} homeRef={homeRef} skillsRef={skillsRef} />
            <Home colorMode={colorMode} toggleColorMode={toggleColorMode} homeRef={homeRef} />
            <About aboutRef={aboutRef} colorMode={colorMode} toggleColorMode={toggleColorMode}  />
            <Skills skillsRef={skillsRef} colorMode={colorMode}/>
            <Projects/>
            <Contact/>
            
        </div>
    );
}

export default Portfolio;