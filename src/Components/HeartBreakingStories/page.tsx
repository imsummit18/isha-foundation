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

        <div className='max-w-[1440px] w-full m-auto px-[120px] py-20  text-[white]' style={{ backgroundImage: 'url(https://static.consciousplanet.org/static/assets/img/4498733907_858c1a0945_o%20copy%202@2x.jpg)' }} >
            <div className='w-[60%]'>
                <div className=' text-center'>
                    <p className='text-4xl font-bold mb-6 text-left '>{data?.sectionContent[0]?.titleText}</p>
                    <p className='text-[12px] font-medium'>{data?.sectionContent[0]?.titleSubtext}</p>
                </div>
                <div className='mt-5'>
                    {
                        data?.sectionContent[1].cards.slice(0, itemsToShow).map((item: any, index: any) => (
                            <>
                                <div key={index} className='bg-[white] text-[black] my-8 p-5 flex gap-5 min-h-[160px] h-fit relative'>
                                    <Image src={item?.image?.url} alt='Image' height={100} width={120} />
                                    <div className='pb-4'>
                                        <p className='text-2xl font-seimbold text-[black] mb-2'>{item?.title}</p>
                                        <p className='text-sm'>{item?.description?.value?.document?.children[0].children[0].value.substring(0, 150)}...</p>
                                        <button onClick={() => handleShowModal(item)} className='text-[#C05A1B] flex items-center gap-1  font-semibold absolute right-5 mt-1'>Read More<FaChevronRight size={16} /></button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                    <div className=''>
                        <p className='text-center font-semibold text-lg'>{Math.min(itemsToShow, data?.sectionContent[1].cards.length)}/{data?.sectionContent[1].cards.length}</p>

                        <button onClick={handleLoadMore} className='bg-[white] mt-5 w-fit  ml-[40%] text-[#69310F] rounded-[5px] px-8 py-2  font-semibold'>Load More</button>

                    </div>
                </div>
            </div>
            {
                showModal &&
                <Modal
                    isVideo={false}
                    className={"w-[600px] min-h-[600px] h-fit bg-[white] text-[black]"}
                    onClick={handleCloseModal}
                    data={modalData} />
            }

        </div>
    )
}

export default HeartBreakingStories
