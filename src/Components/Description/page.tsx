"use client"
import Image from 'next/image'
import { ImPlay2 } from "react-icons/im";
import React, { useState } from 'react'
import Modal from '../Modal/page';
import Card from '../Card/page';
interface IProps {
    data?: any
}

const Description: React.FC<IProps> = ({ data }) => {

    const [showModal, setShowModal] = useState(false)
    const text = data?.sectionContent[0].body.value.document.children[0].children[0].value;
    const imageUrl = data?.sectionContent[1]?.image?.url;

    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div>
            <div id="description" className=' relative  max-w-[1440px]  w-full m-auto px-5 sm:px-[120px]  py-8 sm:py-[50px] flex space-x-10 items-center' style={{ backgroundImage: 'url(	https://static.consciousplanet.org/static/assets/img/bg-graphics.jpg)' }}>
                <div className='w-full sm:w-[60%]'>
                    <p style={{ whiteSpace: 'pre-line' }} className='text-base'>
                        {text}
                    </p>

                    {imageUrl && (
                        <div className='mt-10 relative z-[2]'>
                            <Image alt='Image' src={imageUrl} layout="responsive" width={500} height={300} />
                            <div className='absolute top-[45%] left-[45%] cursor-pointer' onClick={handleShowModal}>
                                <ImPlay2 size={80} color="white" />
                            </div>
                        </div>
                    )}

                </div>
                <div className='hidden sm:block '>
                    <Card />
                </div>



            </div>
            {
                showModal &&
                <Modal
                    isVideo={true}
                    className={"w-[350px] -ml-[2px] sm:ml-0 sm:w-[600px] sm:h-[400px]"}
                    onClick={handleShowModal}
                    data={<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/KHkxs7Cnwp4"
                        title=" Video "
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>} />
            }
        </div>
    )
}

export default Description
