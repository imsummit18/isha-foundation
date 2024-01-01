import Image from 'next/image';
import React, { useEffect } from 'react'
import { MdClose } from 'react-icons/md';
interface IProps {
    data?: any,
    onClick?: () => void,
    className: any
    isVideo?: boolean
}

const Modal: React.FC<IProps> = ({ data, onClick, className, isVideo }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className={
            'fixed top-0 left-0 right-0 bottom-0 z-[12] bg-[black]  bg-opacity-40 h-screen'
        }>
            <div className='absolute right-10 top-20'>
                {
                    isVideo && <MdClose onClick={onClick} size={25} color={"white"} style={{ fontWeight: "bold", cursor: "pointer" }} />
                }
            </div>

            {
                !isVideo ?
                    <div className={` sm:px-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-xl sm:mx-3  h-[250px] sm:h-screen w-fit sm:w-[400px] ${className} `}>
                        <Image className=" rounded-xl rounded-b-none" src={data?.image?.url} alt='Image' height={100} width={120} layout='responsive' />
                        <div className='p-4'>
                            <h2 className='text-4xl font-semibold my-3'>{data?.title}</h2>
                            <p className='text-base font-normal'>{data?.description?.value?.document?.children[0].children[0].value}</p>
                        </div>
                        <div className='absolute right-5 top-5 bg-[white] rounded-full p-1'>
                            <MdClose onClick={onClick} size={25} color={"black"} style={{ fontWeight: "bold", cursor: "pointer" }} />
                        </div>
                    </div> :
                    <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-xl mx-3  h-[250px] w-[400px] ${className} `}> {data}</div>
            }
        </div>
    )
}

export default Modal
