import React from 'react'
import img1 from '../../img/tictac.gif'
import { BsGithub } from 'react-icons/bs';
import './Project.css'

const Project = () => {
  return (
    <div className='project' id='Project'>
        <div className='head'>
            <h1>Projects</h1>
        </div>
        <div className='p'>
            <div className='card'>
                <img src={img1} alt="tictac" width={300} />
                <h1>TicTac</h1>
                <div className='plat'>
                    <p className='platform'>React</p>
                    <p className='platform'>React</p>

                </div>
                <p><a href='https://www.youtube.com/watch?v=ke5xJ30bZnU'><BsGithub/>Github</a></p>
            </div>
            <div className='card'>
                <img src={img1} alt="tictac" width={300} />
                <h1>TicTac</h1>
                <div className='plat'>
                    <p className='platform'>React</p>
                    <p className='platform'>React</p>

                </div>
                <p><a href='https://www.youtube.com/watch?v=ke5xJ30bZnU'><BsGithub/>Github</a></p>
            </div>
            <div className='card'>
                <img src={img1} alt="tictac" width={300} />
                <h1>TicTac</h1>
                <div className='plat'>
                    <p className='platform'>React</p>
                    <p className='platform'>React</p>

                </div>
                <p><a href='https://www.youtube.com/watch?v=ke5xJ30bZnU'><BsGithub/>Github</a></p>
            </div>

            <div className='card'>
                <img src={img1} alt="tictac" width={300} />
                <h1>TicTac</h1>
                <div className='plat'>
                    <p className='platform'>React</p>
                    <p className='platform'>React</p>

                </div>
                <p><a href='https://www.youtube.com/watch?v=ke5xJ30bZnU'><BsGithub/>Github</a></p>
            </div>
        </div>
    </div>
  )
}

export default Project