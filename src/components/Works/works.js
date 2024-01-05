import React from 'react'
import '../Works/works.css'
import logo from '../../assets/logo.png'
import {motion} from 'framer-motion'

const Works = () => {
  return (
    <motion.div
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}}
    >
      <section id='works'>
          <h2 className='worksTitle'>Experience</h2>
          <span className='workDesc'>This is a summary of all the profession work I have done throughout my SWE career </span>
          <div className='worksImgs'>
              <img src= {logo} alt = ""className='worksImg'></img>
              <img src= {logo} alt = ""className='worksImg'></img>
              <img src= {logo} alt = ""className='worksImg'></img>
              <img src= {logo} alt = ""className='worksImg'></img>
              <img src= {logo} alt = ""className='worksImg'></img>
              <img src= {logo} alt = ""className='worksImg'></img>
          </div>
          <button className='workBtn'>See More</button>
      </section>
    </motion.div>
  )
}

export default Works