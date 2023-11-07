import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ item, delay }) => {
    return (
        <motion.article
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-gray-100 bg-gray-900 card w-[160px] h-[120px]">
            <motion.div className='flex flex-col w-full h-full event-card'>
                <span>{item.title}</span>
                <span>{item.description}</span>
            </motion.div>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </motion.article >
    )
}

export default EventCard
