import React from 'react'
import AboutTheEvent from './AboutTheEvent'
import CircularStrip from './AboutTheEvent'
import "./Home.css";
import CountDown from './CountDown';
import Events from './Events';

const Home = () => {
  return (
    <div className='fixed top-0 w-full h-screen mt-20 overflow-auto'>
      <AboutTheEvent />
      <CountDown />
      <Events />
    </div>
  )
}

export default Home
