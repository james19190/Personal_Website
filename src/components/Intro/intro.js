import React from 'react'
import '../Intro/intro.css'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <section id = "intro">
      <motion.div 
        className='introContent' 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}}
      >

        <span className='hello'>Hello,</span>
        <span className='introText'> I'm <span className='introName'>James</span></span>
        <span className='swe'> Software Engineer</span>
        <span className='gap'> </span> 
        <p className='introPara'> I am a full-stack software developer with a focus on developing cloud-based SAAS servcies and AI/ML solutions  </p>
        {/* <Link><button className='btn'>Learn More</button></Link>                 */}
      
      
      </motion.div>
    </section> 
  )
}



export default Intro