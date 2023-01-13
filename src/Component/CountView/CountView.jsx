import React,{useEffect} from 'react'
import countapi from 'countapi-js';
import './CountView.css'

const CountView = () => {
    // useEffect(()=>{
    //     function callbackName(response) {
    //         document.getElementById('visits').innerText = response.value;
    //     }
    // })
    countapi.visits('global').then((result) => {
        console.log(result.value);
      });
  return (
    <div className='CountView'>
        <h1>This page viewed</h1>
        <span className='view'>
            45+
        </span>
    </div>
  )
}

export default CountView