import React from 'react'
import { MdOutlinePhoneMissed } from 'react-icons/md'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link';
const cardData = [
    {
        id: 1,
        icon: <IoLogoWhatsapp size={30} color="#25D366" />,
        link: 'https://web.whatsapp.com/'
    },
    {
        id: 2,
        icon: <AiFillTwitterCircle size={30} color="#1DA1F2" />,
        link: 'https://twitter.com/i/flow/login'
    },
    {
        id: 3,
        icon: <FaFacebook size={30} color="#316FF6" />,
        link: 'https://www.facebook.com/'
    }
]

const Card = () => {
    return (
        <div className='bg-[white] text-center  rounded-[5px] p-6 shadow-2xl shadow-[black] w-[400px] h-fit'>
            <p className='text-3xl font-bold'>#FreeTNTemples</p>
            <button className='bg-[#febd2c] px-8 py-2 text-[black] my-4 '>Click Here to Support</button>
            <p className='text-2xl font-normal my-3'>OR <br />Show your support with a <br /> missed call</p>
            <p className='text-[#61351a] text-2xl flex items-center justify-center font-semibold gap-2 my-4'>  <MdOutlinePhoneMissed /> 83000 83000</p>
            <p className='mt-4 font-bold text-base'>Tell your family & friends to show <br /> their support with a missed call</p>
            <div className='flex space-x-3 items-center justify-center  mt-6'>

                {
                    cardData.map((el, index) => (
                        <div key={index}>
                            <Link href={el.link} passHref target="_blank">
                                    {el.icon}
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Card