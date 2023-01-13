import React from 'react'
import './Navbar.css'
// import img1 from '../../img/63-home-outline.gif'
import {Link} from 'react-scroll'
// import IconWithTooltip from 'icon-with-tooltip';

const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">PRA<span>DEEP</span></div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>

                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/gmzxduhd.json"
                                trigger="hover"
                                colors="primary:white,secondary:white"
                                stroke="90"
                                style={{width:40,height:40}}
                                >
                            </lord-icon>
                        </li>
                    </Link>
                    
                    <Link spy={true} to='About' smooth={true}>
                        <li><lord-icon
                                src="https://cdn.lordicon.com/eszyyflr.json"
                                trigger="hover"
                                colors="primary:#ffffff,secondary:#7166ee"
                                stroke="95"
                                style={{width:40,height:40}}>
                            </lord-icon>
                        </li>
                    </Link>

                    <Link spy={true} to='Skill' smooth={true}>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/qhgmphtg.json"
                                trigger="hover"
                                colors="primary:#ffffff,secondary:#7166ee"
                                stroke="95"
                                style={{width:40,height:40}}>
                            </lord-icon>
                        </li>
                    </Link>
                    
                    <Link spy={true} to='Project' smooth={true}>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/nocovwne.json"
                                trigger="hover"
                                colors="primary:#ffffff,secondary:#7166ee"
                                stroke="95"
                                style={{width:40,height:40}}>
                            </lord-icon>
                        </li>
                    </Link>

                </ul>

            </div>
            <Link spy={true} to='Contact' smooth={true}>
                <button className='button n-button'>contact us</button>
            </Link>
        </div>

    </div>
  )
}

export default Navbar