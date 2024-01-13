import React from 'react';
import './reg.css'
import Card from './registerationComponents/Card';
import { reg_data } from '../../assets/registerationData';

const Registeration = () => {
    return (
        <div className='my-8 bg-transparent bg-gray-700 bg-opacity-80 min-h-fit'>
            <h2 className='w-full my-4 text-4xl font-bold text-center text-gray-100'>Registration</h2>
            <div className="w-32 h-1 mx-auto mb-4 -mt-2 text-gray-100 bg-gray-100 rounded" ></div>
            <div className='grid w-full grid-cols-1 gap-4 text-center  md:grid-cols-3 min-h-fit'>
                {
                    reg_data.map((item, index) => (
                        <Card key={index} item={item} index={index} />
                    ))
                }
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default Registeration;
