import React from 'react'
import '../Contact/contact.css'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <section id='contactPage'>
      <motion.div
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}}
      >
        <h2 className='contactPageTitle'> Contact Me</h2>
          <span className='contactDesc'>Whether for a project or just to say hi, don't hesitate to send me an email!</span>
          <form className='contactForm'>
              <input type='text' className='name' placeholder='Your Name'></input>
              <input type='email' className='email' placeholder='Your Email'></input>
              <textarea className='msg'name='message' rows='5'placeholder='Your Message'></textarea>
              <button type='submit' value='Send'className='submitBtn' >Submit</button>
          </form>
      </motion.div>
      
    </section>
  )
}

export default Contact