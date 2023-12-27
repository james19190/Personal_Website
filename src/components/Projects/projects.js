import React from 'react'
import logo from '../../assets/logo.png'
import '../Projects/projects.css'
import {motion} from 'framer-motion'


const Projects = () => {
  return (

        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <section id='projects'>
                <h2 className='skillTitle'>Projects</h2>  
                <span className='skillDesc'>These are a list of my personal projects  </span>
                <div className='skillBars'>

                    <div className='skillBar'>
                        <img src={logo} alt='skill1' className='skillBarImg'></img>
                        <div className='skillBarText'> 
                            <h2>Dev Ops</h2>
                            <p>this is a demo text</p>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <img src={logo} alt='skill2' className='skillBarImg'></img>
                        <div className='skillBarText'> 
                            <h2>Database Management</h2>
                            <p>this is a demo text</p>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <img src={logo} alt='skill3' className='skillBarImg'></img>
                        <div className='skillBarText'> 
                            <h2>AI/ML Development</h2>
                            <p>this is a demo text</p>
                        </div>
                    </div>

                </div>
            </section>
        </motion.div>
        
  )
}

export default Projects