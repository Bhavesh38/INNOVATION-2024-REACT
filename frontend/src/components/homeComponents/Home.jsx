import React from 'react'
import AboutTheEvent from './AboutTheEvent'
import CircularStrip from './AboutTheEvent'
import "./Home.css";
import CountDown from './CountDown';
import ComingSoon from './ComingSoon';
import Events from './Events';
import Registeration from './Registeration';

const Home = () => {
  return (
    <div className='fixed top-0 w-full h-screen mt-20 overflow-auto'>
      <ComingSoon />
      <AboutTheEvent />
      <CountDown />
      <Events />
      <Registeration />
    </div>
  )
}

export default Home
