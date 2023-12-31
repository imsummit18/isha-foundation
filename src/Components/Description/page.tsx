"use client"
import Image from 'next/image'
import { ImPlay2 } from "react-icons/im";
import React, { useState } from 'react'
import Modal from '../Modal/page';
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
        <div className='max-w-[1440px] w-full m-auto px-[120px] py-[50px]'>
            <div className='w-[60%]'>
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
            {
                showModal &&
                <Modal
                    isVideo={true}
                    className={"w-[600px] h-[400px]"}
                    onClick={handleShowModal}
                    data={<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/KHkxs7Cnwp4"
                        title=" Video "
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>} />
            }
        </div>
    )
}

export default Description
