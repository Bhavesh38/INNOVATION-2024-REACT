import React from 'react'

const images = [
    {
        url: 'https://iem-innovacion.com/Home%20Page/assets/media/supporters/4.png'
    },
    {
        url: 'https://iem-innovacion.com/Home%20Page/assets/media/supporters/7.png'
    },
    {
        url: 'https://iem-innovacion.com/Home%20Page/assets/media/supporters/8.png'
    },
    {
        url: 'https://iem-innovacion.com/Home%20Page/assets/media/supporters/icommunication.jpeg'
    },
    {
        url: 'https://iem-innovacion.com/Home%20Page/assets/media/supporters/9.png'
    },

]
const Media = () => {
    return (
        <div className='w-full p-2 bg-[#111111] bg-opacity-70 '>
            <h2 className='w-full my-4 text-3xl italic font-bold text-center'>MEDIA</h2>
            <div className="w-20 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
            <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 grid-col-1'>
                {
                    images.map((image, index) => (
                        <div key={index} className=''>
                            <img src={image.url} alt="" className='object-contain w-60 h-60' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Media
