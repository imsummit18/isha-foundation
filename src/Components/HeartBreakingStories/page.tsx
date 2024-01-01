"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import Modal from '../Modal/page';

interface IProps {
    data?: any
}
const HeartBreakingStories: React.FC<IProps> = ({ data }) => {
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [itemsToShow, setItemsToShow] = useState(4)
    const handleShowModal = (item: any) => {
        setModalData(item)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4)
    }
    return (

        <div id="heartbreakingStories" className='max-w-[1440px] w-full m-auto px-5 sm:px-[120px] py-10  sm:py-20  text-[white]' style={{ backgroundImage: 'url(https://static.consciousplanet.org/static/assets/img/4498733907_858c1a0945_o%20copy%202@2x.jpg)' }} >
            <div className='w-full sm:w-[60%]'>
                <div className=' text-center'>
                    <p className='text-3xl sm:text-4xl font-bold mb-6 text-left  text-center sm:text-left'>{data?.sectionContent[0]?.titleText}</p>
                    <p className='hidden sm:block text-[12px] font-medium'>{data?.sectionContent[0]?.titleSubtext}</p>
                </div>
                <div className='  mt-5'>
                    {
                        data?.sectionContent[1].cards.slice(0, itemsToShow).map((item: any, index: any) => (
                            <>
                                <div key={index} className='hidden sm:flex bg-[white] text-[black] my-8 p-5  gap-5 min-h-[160px] h-fit relative'>
                                    <div className='h-[100px] w-[200px]'>
                                        <img src={item?.image?.url} alt="" className='h-[100px] w-[200px]' />
                                    </div>
                                    <div className='pb-4'>
                                        <p className='text-2xl font-seimbold text-[black] mb-2'>{item?.title}</p>
                                        <p className='text-sm'>{item?.description?.value?.document?.children[0].children[0].value.substring(0, 150)}...</p>
                                        <button onClick={() => handleShowModal(item)} className='text-[#C05A1B] flex items-center gap-1  font-semibold absolute right-5 mt-1'>Read More<FaChevronRight size={16} /></button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                    {
                        data?.sectionContent[1].cards.slice(0, itemsToShow).map((item: any, index: any) => (
                            <>
                                <div key={index} className=' w-fit sm:hidden bg-[white] text-[black] my-8 p-5  gap-5 min-h-[160px] h-fit relative'>
                                    <div className='flex space-x-2  items-center mb-3'>
                                        <img src={item?.image?.url} alt="" className='w-[100px] h-[100px]' />
                                        <p className='text-2xl font-seimbold text-[black] mb-2'>{item?.title}</p>
                                    </div>
                                    <div className='pb-4'>
                                        <p className='text-sm'>{item?.description?.value?.document?.children[0].children[0].value.substring(0, 150)}...</p>
                                        <button onClick={() => handleShowModal(item)} className='text-[#C05A1B] flex items-center gap-1  font-semibold absolute right-5 mt-1'>Read More<FaChevronRight size={16} /></button>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                    <div className=''>
                        <p className='text-center font-semibold text-lg'>{Math.min(itemsToShow, data?.sectionContent[1].cards.length)}/{data?.sectionContent[1].cards.length}</p>

                        <button onClick={handleLoadMore} className='bg-[white] mt-5 w-fit   ml-[30%] sm:ml-[40%] text-[#69310F] rounded-[5px] px-8 py-2  font-semibold'>Load More</button>

                    </div>
                </div>
            </div>
            {
                showModal &&
                <Modal
                    isVideo={false}
                    className={"w-screen  sm:w-[600px] h-[400px] sm:min-h-[600px] h-fit bg-[white] text-[black]"}
                    onClick={handleCloseModal}
                    data={modalData} />
            }

        </div>
    )
}

export default HeartBreakingStories
