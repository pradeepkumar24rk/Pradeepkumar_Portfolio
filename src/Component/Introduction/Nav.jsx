import React from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
const Nav = () => {
  return (
    <div className='Nav' id='Home'>
        <div className="nav-left">
            <div className="nav-name">PRA<span>DEEP</span></div>
            {/* <span>toggle</span> */}
        </div>
        <div className='nav-right'>
        <div className="nav-list">
            <ul>
            <Link spy={true} to='Home' smooth={true}><li>Home</li></Link>
            <Link spy={true} to='About' smooth={true}> <li>About</li></Link>
            <Link spy={true} to='Skills' smooth={true}>  <li>Skill</li></Link>
            <Link spy={true} to='Achievement' smooth={true}>  <li>Achievement</li></Link>
            <Link spy={true} to='Project' smooth={true}>  <li>Project</li></Link>
            <Link spy={true} to='Contact' smooth={true}>  <li>Contact</li></Link>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Nav