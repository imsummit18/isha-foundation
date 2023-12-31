import React from 'react'
import { MdOutlinePhoneMissed } from 'react-icons/md'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Card = () => {
    return (
        <div className='bg-[white] text-center  rounded-[5px] p-6 shadow-2xl shadow-[black] w-[380px] h-fit'>
            <p className='text-3xl font-bold'>#FreeTNTemples</p>
            <button className='bg-[#febd2c] px-8 py-2 text-[black] my-3 '>Click Here to Support</button>
            <p className='text-2xl font-normal'>OR <br />Show your support with a <br /> missed call</p>
            <p className='text-[#61351a] text-2xl flex items-center justify-center font-semibold gap-2 my-2'>  <MdOutlinePhoneMissed /> 83000 83000</p>
            <p className='mt-4 font-bold text-base'>Tell your family & friends to show <br /> their support with a missed call</p>
            <div className='flex space-x-3 items-center justify-center  mt-4'>
                <IoLogoWhatsapp size={30} color="#25D366" />
                <AiFillTwitterCircle size={30} color="#1DA1F2" />
                <FaFacebook size={30} color="#316FF6" />
            </div>
        </div>
    )
}

export default Card