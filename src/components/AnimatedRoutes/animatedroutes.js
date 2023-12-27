import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Intro from '../Intro/intro'
import About from '../About/about'
import Works from '../Works/works'
import Projects from '../Projects/projects'
import Contact from '../Contact/contact'

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Intro />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/work" element={<Works />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes