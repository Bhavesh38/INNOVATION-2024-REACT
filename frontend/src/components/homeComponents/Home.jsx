import React from 'react'
import AboutTheEvent from './AboutTheEvent'
// import CircularStrip from './AboutTheEvent'
import "./Home.css";
import CountDown from './CountDown';
import ComingSoon from './ComingSoon';
import Events from './Events';
import Registeration from './Registeration';
import Footer from '../footer/Footer';
import Partners from './Partners';
import Media from './Media';

const Home = () => {
  return (
    <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>
      <ComingSoon />
      <AboutTheEvent />
      <CountDown />
      <Events />
      <Registeration />
      <Media />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
