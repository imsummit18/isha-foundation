import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const mediaData = [
    {
        id: 1,
        title: "Free Temples From State Control, Include Plan in Election Manifesto",
        desc: "Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples"
    },
    {
        id: 2,
        title: " Mention in poll manifesto freeing of temples from govt grip",
        desc: " Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on"
    },
    {
        id: 3,
        title: "Free Temples From State Control, Include Plan in Election Manifesto",
        desc: "Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples"
    },
    {
        id: 4,
        title: " Mention in poll manifesto freeing of temples from govt grip",
        desc: " Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on"
    },
]
const Media = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = mediaData;
    const slideCount = slides?.length || 0;

    const changeSlide = (offset: number) => {
        setSlideIndex((slideIndex + offset + slideCount) % slideCount);
    };

    return (
        <div id="media" className='max-w-[1440px] w-full m-auto px-[20px] sm:px-[120px] py-5 sm:py-20' style={{ backgroundImage: `url(https://static.consciousplanet.org/static/assets/img/bg-2.jpg)` }}>

            <div className='w-full sm:w-[60%] '>
                <div className="mt-8 w-full items-center overflow-hidden ">
                    <div className=' h-[300px]  relative'>
                        {slides?.map((el: any, index: any) => (
                            <div key={index}
                                className={` bg-[white] rounded-[5px]  px-10 sm:px-20 py-8 transition-opacity duration-1000 absolute w-full opacity-0 ${slideIndex === index ? "opacity-100" : ""}`}
                            >
                                <p className='text-xl sm:text-2xl text-[#035096] font-bold mb-2'>{el?.title}</p>
                                <p className='text-sm mb-2 '>{el?.desc}</p>
                                <button className='cursor-pointer  absolute right-5 text-[#cf4824]'>Continue</button>
                            </div>
                        ))}
                        <div className="flex  justify-between ">
                            <button
                                className="bg-primary-500 text-[black] bg-[white] shadow-2xl shadow-[black] p-2 rounded-full absolute top-[40%] sm:top-[30%]  left-0"
                                onClick={() => changeSlide(-1)}
                            >
                                <FaChevronLeft size={24} />
                            </button>
                            <button
                                className="bg-primary-500 text-[black] bg-[white] shadow-2xl shadow-[black rounded-full p-2 absolute top-[40%] sm:top-[30%] right-0  "
                                onClick={() => changeSlide(1)}
                            >
                                <FaChevronRight size={24} />
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Media
