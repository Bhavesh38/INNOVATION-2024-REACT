// import React from 'react'

// const CountDown = () => {
//     return (
//         <div >
//             <div className='mt-28 mr-28'>CountDown</div>
//         </div>
//     )
// }

// export default CountDown

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Countdown = () => {
    const targetDate = new Date("2023-12-31T23:59:59").getTime(); // Set your target date and time
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTime = getTimeRemaining(targetDate);
            setTimeRemaining(updatedTime);

            // If the countdown is complete, you can stop the interval or perform a specific action
            if (updatedTime.total <= 0) {
                clearInterval(interval);
                // Perform any action you want when the countdown is complete
            }
        }, 1000);

        // Animate the countdown using Framer Motion
        controls.start({ scale: 1.2, transition: { duration: 1 } });

        return () => {
            clearInterval(interval);
        };
    }, [targetDate, controls]);

    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div animate={controls}>
                <div className="grid grid-cols-5 gap-4">
                    <div className="text-center">
                        <div className="text-6xl font-semibold">{timeRemaining.days}</div>
                        <div className="text-xl">Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-semibold">{timeRemaining.hours}</div>
                        <div className="text-xl">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-semibold">{timeRemaining.minutes}</div>
                        <div className="text-xl">Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-semibold">{timeRemaining.seconds}</div>
                        <div className="text-xl">Seconds</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

function getTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const time = targetDate - now;

    if (time <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function App() {
    return (
        <div className='w-full my-8 h-[200px] object-contain flex justify-center items-center bg-[#111]'
        // style={{ background: "url('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kb8vIWPzpTxS0R-E-qg2yw.png')" }}
        >
            <Countdown />
        </div>
    );
}

export default App;

