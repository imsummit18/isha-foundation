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
        <div className='max-w-[1440px] w-full m-auto z-2'>
            {
                data?.map((el: any, index: any) => {
                    const [firstPart, secondPart] = el?.subtext?.value?.document?.children[0].children[0].value.split('#');

                    return (
                        <div key={index} className='w-full flex items-center  bg-cover pl-[120px] pt-10  ' style={{ backgroundImage: `url(${el?.image?.url})` }}>
                            <div className='flex items-center w-1/2  py-[90px] '>
                                <div>
                                    <p className='text-[54px] text-[white] font-semibold'>{el?.title}</p>
                                    <p className='my-5 text-2xl text-white font-medium leading-[2]'>
                                        {firstPart}<br />
                                        <span className='text-[#fac654] text-4xl font-bold'>#{secondPart}</span>
                                    </p>
                                    <button className='bg-[#febd2c] text-[black] text-xl cursor-pointer  float-left rounded-[3px] border-none px-14 py-3 font-medium'>{el?.button[0].buttonText}</button>
                                </div>
                                <div onClick={handleShowModal} className='cursor-pointer '>
                                    <Image src={el?.icon?.url} alt='play-button' width={150} height={150} className='' />
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
                    className={""}
                    onClick={handleShowModal}
                    data={<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/DBPfKpZfTfs"
                        title=" Video "
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>} />
            }
        </div>
    )
}

export default BannerSlide