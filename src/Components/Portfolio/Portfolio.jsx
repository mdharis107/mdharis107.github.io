import React from 'react';
import { useRef } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function Portfolio() {
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    // const aboutRef = useRef(null)

    return (
        <div>
            <Navbar aboutRef={aboutRef} skillsRef={skillsRef} />
            <About aboutRef={aboutRef} />
            <Skills/>
            <Projects/>
            <Contact/>
            
        </div>
    );
}

export default Portfolio;