import React from 'react'
import './Intro.css'
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { ImLinkedin } from 'react-icons/im';
import img from '../../img/pradeep.png'
// import vector1 from '../../img/Vector1.png'
// import Typical from 'react-typical'
import Typewriter from "typewriter-effect";
// import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion'
import resume from '../../img/Pradeepkumar Rajaram - Resume.pdf'

const Intro = () => {
    const transition={duration:2,type:'spring'}
  return (
    <div className='intro'>
        {/* <Navbar/> */}
        <motion.div
            initial={{left:'-20%'}}
            whileInView={{left:'0%'}}
            transition={transition}
            className='i-left'>

            <div className='i-name'>
                <span>Hi! I am</span>
                <span><Typewriter
                options={{
                    strings: ['PRADEEPKUMAR R'],
                    autoStart: true,
                    loop: true,
                }}
                /></span>
                {/* <span>Pradeepkumar</span> */}
                <span>FullStack Developer
                    with medium level of
                    experience in web development
                    and 3D designing(unity) 
                </span>
            </div>
            <a className='button i-button' href={resume} download >Hire me</a>
            <div className='i-icon'>
                <a href='https://www.instagram.com/pradeep.kumar24rk/?next=%2F'> <GrInstagram size={40}/></a>
                <a href='https://www.linkedin.com/in/pradeepkumar-r-520520202/'><ImLinkedin size={40}/></a>
                <a href='https://github.com/pradeepkumar24rk'><BsGithub size={40}/></a>
            </div>
            <div className='blur i-blurl' 
                        style={{background:"rgb(188, 219, 247)"}}></div>
                
        </motion.div>


        <motion.div
        initial={{bottom:'-20%'}}
        whileInView={{bottom:'0%'}}
        transition={transition} 
        className='i-right'>
            {/* <img src={vector1} alt="" srcset="" /> */}
            <img src={img} alt="" srcset="" />
        </motion.div>
    </div>
  )
}

export default Intro