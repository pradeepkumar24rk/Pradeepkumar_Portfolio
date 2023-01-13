import React from 'react'
import './Skill.css'
import {motion} from 'framer-motion'

const Skill = () => {
    const transition={duration:3,type:'spring'}
  return (
    <div className='skill' id='Skill'>

        <div className='head'>
            <h1>Skills</h1>
        </div>


        <div className='s'>
            <motion.div
            initial={{left:'-20%'}}
            whileInView={{left:'0%'}}        
            transition={transition}
            className='s-left'>
                <li><h3>HTML</h3>
                    <span className='bar'><span className='html'></span></span>
                </li>
                <li><h3>CSS</h3>
                    <span className='bar'><span className='css'></span></span>
                </li>
                <li><h3>JAVASCRIPT</h3>
                    <span className='bar'><span className='js'></span></span>
                </li>
                <li><h3>REACT JS</h3>
                    <span className='bar'><span className='jsx'></span></span>
                </li>
            </motion.div>


            <motion.div
            initial={{right:'-20%'}}
            whileInView={{right:'0%'}}        
            transition={transition}
            className='s-right'>
                <li><h3>PHP</h3>
                    <span className='bar'><span className='php'></span></span>
                </li>
                <li><h3>MySQL</h3>
                    <span className='bar'><span className='mysql'></span></span>
                </li>
                <li><h3>JAVA</h3>
                    <span className='bar'><span className='java'></span></span>
                </li>
                <li><h3>UNITY</h3>
                    <span className='bar'><span className='unity'></span></span>
                </li>

            </motion.div>

        </div>

    </div>
  )
}

export default Skill