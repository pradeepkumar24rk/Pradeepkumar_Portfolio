import React from 'react'
import './Skills.css'
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import react from '../../img/react.png'
import java from '../../img/java.png'
import php from '../../img/php.png'
import mysql from '../../img/mysql.png'
import threejs from '../../img/threejs.png'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div className='Skills' id='Skills'>
        <div className='s-head'>
            <h1>Skills</h1>
        </div>
        <div className='cards'>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card HTML'>
                <div className='s-cards-inner'>
                <img src={html} alt="tictac" width={100} />
                </div>
                
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
            className='s-card CSS' >
                <img src={css} alt="tictac" width={100} />
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card JS'>
               
                <img src={js} alt="tictac" width={100} />
                
                
                
            </motion.div>

            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card REACT'>
                <img src={react} alt="tictac" width={100} />
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card JAVA'>
                <img src={java} alt="tictac" width={70} />
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card PHP'>
                <img src={php} alt="tictac" width={200} />
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card REACT'>
                <img src={mysql} alt="tictac" width={100} />
                
            </motion.div>
            <motion.div
            initial={{bottom:'-20%',opacity:'-1'}}
            whileInView={{bottom:'0%',opacity:'1'}}        
            transition={{duration:3,type:'spring'}}
             className='s-card THREEJS'>
                <img src={threejs} alt="tictac" width={110} />
                
            </motion.div>
            
        </div>
    </div>
  )
}

export default Skills