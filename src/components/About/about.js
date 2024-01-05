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
        <h2 className='aboutTitle'>About</h2>  
        <div className='aboutDesc'>
          Hi, my name is <span className='yellowText'>James</span> Kyoung Ho Kim, a software engineer based in <span className='yellowText'>Hong Kong</span> and <span className='yellowText'>South Korea</span>.
          As of now, I am at <span className='yellowText'>Seoul National University</span>, studying Computer Science & Engineering and Business Administration. 
          
          <br/><br/>

          Currently, I am looking for a full-time software engineering role that starts in January 2025,
          and to prepare for this role, I have worked at 
          &nbsp;<a href="https://aws.amazon.com/?nc2=h_lg">Amazon Web Services</a>, 
          &nbsp;<a href="https://phigolfstore.com/">PHIGOLF</a>,
          &nbsp;<a href="https://qraftec.com/">QRAFTAI</a>,  
          &nbsp;<a href="https://www.bgcg.com/">BGC Partners</a>  
          &nbsp;to gain hands on experience.

          <br/><br/>

          At Amazon Web Services, I designed <span className='yellowText'>AWS</span> Architecture Schemas using S3, EC2, Rekognition, and Sagemaker to create demos for data and solution migrations.
          At BGC Partners & QRAFT AI, I utilized <span className='yellowText'>PostgreSQL</span> and <span className='yellowText'>DynamoDB</span> to restructure financial data for internal DBs and tools. 
        
          <br/><br/>

          Moreover, I am familiar with <span className='yellowText'>Tensorflow</span> and <span className='yellowText'>Keras</span>, and have applied these concepts to various machine-learning projects.



        </div>
      </section>

    </motion.div>
  )
}

export default About