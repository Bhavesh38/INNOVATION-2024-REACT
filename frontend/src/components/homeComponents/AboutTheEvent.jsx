import React from 'react';
import { motion } from "framer-motion"
import EventCard from './aboutTheEvents/EventCard';
import { EventsCardContent } from '../../assets/assestscript';

const AboutTheEvent = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="p-2"
            style={{ background: 'url("https://t4.ftcdn.net/jpg/06/06/47/79/240_F_606477975_QwEsjm2AV2Q5vpi5s7UB1WDFe7iR5azF.jpg")' }}
        >
            <h3 className='text-2xl font-bold text-center'>About The Event</h3>
            <p className='w-1/2 mx-auto'>Institute of Engineering & Management, Kolkata in association with University of Engineering & Management is organising its Annual Techno-Management Fest-Innovación 2023 from 10th - 12th March, 2023.</p>
            <div className='flex items-center justify-between w-3/4 gap-4 px-8 py-4 mx-auto'>
                {
                    EventsCardContent.map((item, index) => {
                        return <EventCard key={index} item={item} delay={index} />
                    })
                }

            </div>
            <div className='flex flex-col justify-center w-full p-4'>
                <h3 className='text-2xl font-bold text-center'>APPLY HERE TO BE OUR CAMPUS AMBASSADOR</h3>
                <button className='p-2 mx-auto font-bold bg-gray-800 shadow-lg shadow-gray-50 border-sm text-gray-50 w-fit' type='button'>CLICK HERE</button>
            </div>

        </motion.div>
    )
}

export default AboutTheEvent
