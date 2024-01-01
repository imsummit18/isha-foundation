"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface IProps {
    data?: any;
}

const Glory: React.FC<IProps> = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = data?.sectionContent[1].bannerSlides;
    const slideCount = slides?.length || 0;

    const changeSlide = (offset: number) => {
        setSlideIndex((slideIndex + offset + slideCount) % slideCount);
    };

    return (
        <div id="glory" className='max-w-[1440px] w-full m-auto px-5 pt-10 sm:px-[120px] sm:pt-20 ' style={{ backgroundImage: `url(https://static.consciousplanet.org/static/assets/img/bg-img.jpg)` }} >
            <div className='w-full sm:w-[50%] text-[white] '  >
                <div className='text-center'>
                    <p className='text-4xl font-semibold'>{data.sectionContent[0].titleText}</p>
                    <p className='mt-3 '>{data.sectionContent[0].titleSubtext}</p>
                </div>
                <div className="mt-8 w-full overflow-hidden ">
                    <div className='  h-[300px] sm:h-[500px]  relative'>
                        {slides?.map((el: any, index: any) => (
                            <div
                                key={index} className={`  transition-opacity duration-1000 absolute w-full opacity-0 ${slideIndex === index ? "opacity-100" : ""}`}
                            >
                                <Image src={el?.image?.url} alt="slider-image" width={300} height={300} layout="responsive" />
                            </div>
                        ))}
                        <div className="flex  justify-between  ">
                            <button
                                className="bg-primary-500 text-[black] bg-[white] p-2 rounded-full absolute top-[30%] sm:top-[35%] left-2 "
                                onClick={() => changeSlide(-1)}
                            >
                                <FaChevronLeft size={24} />
                            </button>
                            <button
                                className="bg-primary-500 text-[black] bg-[white] rounded-full p-2 absolute  top-[30%] sm:top-[35%]   right-2  "
                                onClick={() => changeSlide(1)}
                            >
                                <FaChevronRight size={24} />
                            </button>
                        </div>
                        <div className=' flex space-x-2 items-center absolute bottom-12  justify-center  mt-8 ml-[50%]   transform -translate-x-1/2'>
                            {slides?.map((_: any, index: any) => (
                                <div key={index} className={`bg-[white] h-[10px] w-[10px] rounded-full ${slideIndex === index ? "opacity-100" : "opacity-[0.4]"}`}></div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Glory;