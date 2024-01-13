import React from 'react';
import Slider from "react-slick";
import { chiefGuests } from '../../assets/about';
import ChiefGuestCard from './ChiefGuestCard';

const ChiefGuest = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=' bg-[#000] min-h-32 my-4'>
            <div className='w-full text-5xl text-center'>2k23 Chief Guests</div>
            <div className=''>
                <Slider {...settings} className='mx-4'>
                    {
                        chiefGuests.map((item, index) => (
                            <ChiefGuestCard key={index} item={item} />
                        ))
                    }
                </Slider >
            </div>
        </div >
    )
}

export default ChiefGuest
