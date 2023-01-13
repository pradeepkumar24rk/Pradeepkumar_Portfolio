import React from 'react'
import img from '../../img/about.JPG'
import './About.css'
import {motion} from 'framer-motion'

const About = () => {
  const transition={duration:3,type:'spring'}
  return (
    <div className='about' id='About'>
        <motion.div 
        initial={{left:'-50%'}}
        whileInView={{left:'15%'}}        
        transition={{duration:5,type:'spring'}}
        className='a-left'>
            <img src={img} alt="" srcset="" />
        </motion.div>
        <div className='a-right'>
          <motion.div
          initial={{right:'-10%'}}
          whileInView={{right:'0%'}}        
          transition={transition}
           className='a-r'>

            <span>About Me</span>
            <span>Developer <span style={{color:'var(--blue)'}}>& Designer</span> </span>
            <span>
            Hi! My name is Pradeepkumar and I am a 3rd year student at the M. Kumarasamy College of Engineering, set to graduate next year.
             I am eager to begin my career and am looking for
              opportunities to learn and grow as a 
              professional in the field of 
              Full Stack Development. During my time at university, I have worked on several projects in<b> React JS, PHP, MySQL, and Express JS</b>, and have gained valuable experience through internships at <b>Mkcsdigital and InterDeccaan</b>. In my free time, I enjoy playing cricket and staying current on the latest developments in Full Stack Development.
            </span>
          </motion.div>
          <div className='blur a-blurl' 
                        style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default About