import React from 'react'
import './about.css'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}}
    >
      <section id='about'> 
        <h2 className='aboutTitle'>About Me</h2>  
        <span className='aboutDesc'>I am currently a final year student at Seoul National University studying Computer Science & Engineering. I have an interest in developing responsive cloud-based SaaS services and developing custom AI/ML solutions. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </span>
      </section>

    </motion.div>
  )
}

export default About