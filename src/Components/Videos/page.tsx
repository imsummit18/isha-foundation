import Image from 'next/image'
import React, { useState } from 'react'
import { ImPlay2 } from 'react-icons/im';
import Modal from '../Modal/page';

interface IProps {
    data?: any
}
const VideosSadhGuru: React.FC<IProps> = ({ data }) => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [showModal, setShowModal] = useState(false)

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4)
    }
    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className='max-w-[1440px] w-full m-auto px-[120px] py-20' style={{ backgroundImage: 'url(	https://static.consciousplanet.org/static/assets/img/bg-graphics.jpg)' }}  >
            <div className='w-[60%]'>
                <p className='text-center font-bold text-4xl'>{data?.sectionContent[0]?.titleText}</p>
                <div className=' flex flex-wrap '>
                    {
                        data?.sectionContent[1].card.slice(0, itemsToShow).map((el: any, index: any) => {
                            return (
                                <div key={index} className=' bg-[white]  rounded-xl flex  flex-col w-[40%]  my-5 mt-10 last:mb-0  justify-between mr-14 h-fit' >
                                    <div className='relative'>
                                        <Image src={el?.thumbnail.url} alt='' width={300} height={250} className='rounded-b-none' />
                                        <div className='absolute top-[40%] left-[35%] cursor-pointer' onClick={handleShowModal}>
                                            <ImPlay2 size={50} color="white" style={{ fontWeight: "bold" }} />
                                        </div>
                                    </div>
                                    <div className='bg-[white] w-fit text-base text-normal p-2' >
                                        <p className=' mb-2'>{el?.shortText}</p>
                                        <p className=''>{el?.description?.shortText}</p>

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
                                                src={el?.linkUrl}
                                                title=" Video "
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                                            </iframe>} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mt-4'>
                    <p className='text-center font-semibold text-lg'>{Math.min(itemsToShow, data?.sectionContent[1].card.length)}/{data?.sectionContent[1].card.length}</p>
                    <button onClick={handleLoadMore} className='bg-[#69310F] mt-5 w-fit  ml-[40%] text-[white] rounded-[5px] px-8 py-2  font-semibold'>Load More</button>

                </div>
            </div>


        </div>
    )
}

export default VideosSadhGuru
