import React from 'react'
import { MdClose } from 'react-icons/md';
interface IProps {
    data?: any,
    onClick?: () => void
}

const Modal: React.FC<IProps> = ({ data, onClick }) => {
    return (
        <div className={
            'fixed top-0 left-0 right-0 bottom-0 z-0 bg-[black] w-screen  bg-opacity-60 h-screen'
        }>
            <div className='absolute right-10 top-20'>
                <MdClose onClick={onClick} size={25} color={"white"} style={{ fontWeight: "bold", cursor: "pointer" }} />
            </div>
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-xl mx-3  h-[250px] w-[400px] `}
            >

                {data}
            </div>
        </div>
    )
}

export default Modal
