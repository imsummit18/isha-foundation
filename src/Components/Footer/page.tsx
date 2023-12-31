import React from 'react'

const Footer = () => {
    return (
            <div className='  bg-[black] flex flex-col sm:flex-row sm:justify-between items-center max-w-[1440px] w-full m-auto px-5 sm:px-[120px] py-4 sm:py-8 text-[white]'>
                <p className='text-sm sm:text-base'>Copyright ©2023 Thenkailaya Bakthi Peravai</p>
                <div className='flex sm:flex-row flex-col items-center  mt-5 sm:mt-0 gap-4 sm:gap-0  space-x-5'>
                    <p>Privacy </p>
                    <p>Terms and Condition</p>
                </div>
        </div>
    )
}

export default Footer
