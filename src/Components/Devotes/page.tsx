"use client";
import React, { useState } from 'react'
import Tweet from '../Tweet/page';

const Devotee = () => {


    return (

        <div className="mt-8 w-full items-center max-h-[400px] overflow-y-auto">
            <p className='text-center text-3xl mb-5 sm:mb-10 sm:text-4xl font-bold'>What Devotee Says</p>
            <div className='flex flex-col items-center justify-center'>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </div>



    )
}

export default Devotee
