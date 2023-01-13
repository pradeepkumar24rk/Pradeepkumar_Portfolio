import React from 'react'
import './Achievement.css'
import {motion} from 'framer-motion'

const Achievement = () => {
  return (
    <div className='Achievement' id='Achievement'>
        <div className='achieve-head'>
            <h1>Achievement</h1>
        </div>

        <div className='achieve-cards'>

            <motion.div
            initial={{bottom:'-50%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
            className="card">
                <div class="align">
                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>
                </div>

                <h1>Internship</h1>
                <p>
                Interdeccaan and Mkcsdigital's 30-day internship programmes are officially over. There, I use web development to work on a project (HTML, JS, CSS, REACT, PHP, MySQL).
                </p>
            </motion.div>

            <motion.div 
            initial={{bottom:'-50%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
            className="card">
                <div class="align">
                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>
                </div>

                <h1>MSME PROJECT</h1>
                <p>
                In the MSME project selection competition, my team and I were both chosen. There, we were putting our plan into action. The government's financial support for this project.
                </p>
            </motion.div>

            <motion.div
            initial={{bottom:'-50%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className="card">
                <div class="align">
                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>
                </div>

                <h1>CTS PRO DIGI</h1>
                <p>
                My team and I were both chosen in round 1 (concept selection) of the CTS PRO DIGI challenge, and we are presently developing the prototype with a CTS mentor.
                </p>
            </motion.div>
            
            <motion.div
            initial={{bottom:'-50%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
            className="card">
                <div class="align">
                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>
                </div>

                <h1>courses</h1>
                <p>
                I finished two nptel courses called "C and Java Programming" and received an Elite + Silver grade. I completed the Infosys Springboard React Js course.
                </p>
            </motion.div>
             
        </div>
    </div>
  )
}

export default Achievement