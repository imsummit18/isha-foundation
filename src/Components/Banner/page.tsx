"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/page';

interface IProps {
    data?: any
}

const BannerSlide: React.FC<IProps> = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div  id="banner" className='max-w-[1440px] w-full m-auto z-2'>
            {
                data?.map((el: any, index: any) => {
                    const [firstPart, secondPart] = el?.subtext?.value?.document?.children[0].children[0].value.split('#');

                    return (
                        <div key={index} className='w-full flex items-center bg-cover  px-5 sm:pl-[120px] pt-14 sm:pt-10  ' style={{ backgroundImage: `url(${el?.image?.url})` }}>
                            <div className='flex flex-col-reverse  sm:flex-row items-center w-full sm:w-1/2  py-[90px] '>
                                <div className='text-center sm:text-left mt-10 sm:mt-0'>
                                    <p className='text-4xl sm:text-[54px] text-[white] font-semibold leading-[1.1]'>{el?.title}</p>
                                    <p className='my-8 sm:my-5 text-2xl text-white font-medium leading-[2]'>
                                        {firstPart}<br />
                                        <span className='text-[#fac654] text-4xl font-bold'>#{secondPart}</span>
                                    </p>
                                    <button className='bg-[#febd2c] ml-10 sm:ml-0 text-[black] text-xl cursor-pointer  float-left rounded-[3px] border-none px-9 sm:px-14 py-3 font-medium'>{el?.button[0].buttonText}</button>
                                </div>
                                <div onClick={handleShowModal} className='cursor-pointer '>
                                    <Image src={el?.icon?.url} alt='play-button' width={150} height={150} layout='responsive' className='' />
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            {
                showModal &&
                <Modal
                    isVideo={true}
                    className={"-ml-[2px] sm:ml-0   "}
                    onClick={handleShowModal}
                    data={<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/DBPfKpZfTfs"
                        title=" Video "
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>} />
            }
        </div>
    )
}

export default BannerSlide