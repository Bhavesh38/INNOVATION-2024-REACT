import React from "react";
import { motion } from "framer-motion";

const RayBorder = () => {
    const rayVariants = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        animate: {
            x: "100%",
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
            },
        },
    };

    return (
        <div className="relative p-8">
            <motion.div
                className="absolute top-0 bottom-0 left-0 right-0 border-t-2 border-b-2 border-l-2 border-r-2 border-white"
                variants={rayVariants}
                initial="initial"
                animate="animate"
            />
            <div className="relative z-10 p-4 text-center bg-gray-100">
                <h1 className="text-2xl font-bold">Stationary Text</h1>
                <p>This text does not move.</p>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="flex items-center justify-center h-[250px] mb-20">
            <RayBorder />
        </div>
    );
}

export default App;
