import React from 'react'
import { GrInstagram } from 'react-icons/gr';
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import './Footer.css'
// import {motion} from 'framer-motion'

const Footer = () => {
  const transition={duration:3,type:'spring'}
  return (
    <div className='footer'>
      <div className='f-left'>
        <snap className="f-left-head">Content</snap>
        <div className='content'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>skills</li>
            <li>Project</li>
            <li>achievement</li>
            <li>contact</li>
          </ul>
        </div>
        
      </div>
      <div className='f-right'>
          <span className='f-email'>pradeepkumar24rk@gmail.com</span>
          <div className='f-icon'>
            <a href='https://www.instagram.com/pradeep.kumar24rk/?next=%2F'> <GrInstagram size={30}/></a>
            <a href='https://www.linkedin.com/in/pradeepkumar-r-520520202/'><ImLinkedin size={30}/></a>
            <a href='https://github.com/pradeepkumar24rk'><BsGithub size={30}/></a>
          </div>
      </div>
    </div>
  )
}

export default Footer