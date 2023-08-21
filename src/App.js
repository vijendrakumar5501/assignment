
import React from 'react'
import { AiOutlineInstagram, AiOutlineArrowDown, AiFillApple } from 'react-icons/ai'
import { FaGooglePlay, FaTwitter,FaDollarSign } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi'

import "./App.css"
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div className='app'>
     

        <div className='center'>
          
          <Navbar/>

          <div className='icon'>
          <FaDollarSign style = {{transform: 'rotate(20deg)',color:'green',fontSize:'2.8rem',marginLeft:'45px',marginTop:'20px',cursor:'pointer' }} />
            
           <span className='arrow'>

            <AiOutlineArrowDown />
           </span>


           <div className='bleft'>
            <span className='apple'>
            <AiFillApple /> <span>app store</span>
            </span>
            <span className='play'>
            <FaGooglePlay /> <span>Google play</span>
            </span>
          
           </div>
           <span className='bright'>Every Mercor engineer receives free access to the best AI tooling, including GPT-4. We shortlist candidates based on their ability to use AI tools productively.
           We'reMercor files the necessary paperwork to be compliant across multiple borders.</span>

          <div className='bcorner'>
          <span>
            <BiMessageDots />

           </span>
          <span>
            <FaTwitter />

           </span>
           <span>

            < AiOutlineInstagram />
            </span>
           
          </div>
          </div>

        </div>



      </div>

   

  )
}



export default App