import React from 'react';
import { motion } from "framer-motion"
import EventCard from './aboutTheEvents/EventCard';
import { EventsCardContent } from '../../assets/assestscript';

const AnimatedBorder = ({ children }) => {
    return (
        <div className="flex items-center justify-center text-center ">
            <motion.div
                className="px-4 py-3 bg-[#000] border-4 rounded-full"
                initial={{ borderColor: '#000' }}
                animate={{
                    borderColor: ['#03e9f4', '#fff', '#03e9f4', '#03e9f4'], // You can add more colors here for variation
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    },
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};


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
                {/* <button className="w-40 h-12 bg-gray-900 cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out mx-auto mt-2">
                    <span className="font-medium text-[#fff]">CLICK HERE!</span>
                </button> */}
                <button className="inline-flex items-center px-4 py-2 mx-auto mt-4 font-mono text-xl font-semibold text-gray-100 transition duration-300 ease-in-out delay-150 border-2 border-gray-100 rounded-full cursor-pointer hover:text-gray-500 hover:bg-gray-100 hover:-translate-y-1 hover:scale-75 focus:bg-transparent max-w-fit">
                    CLICK HERE!
                </button>

                {/* <button className='rounded-full mx-auto mt-4 font-medium text-gray-100 bg-gray-600  hover:shadow-[100px] shadow-[#03e9f4] border-sm w-fit hover:bg-[#03e9f4] hover:text-gray-50' type='button'>
                    <AnimatedBorder>CLICK HERE</AnimatedBorder>
                </button> */}
            </div>

        </motion.div>
    )
}

export default AboutTheEvent
