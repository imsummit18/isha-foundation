"use client"
import Image from 'next/image'
import React from 'react'
interface IProps {
    data?: any
}

const Description: React.FC<IProps> = ({ data }) => {
    const text = data?.sectionContent[0].body.value.document.children[0].children[0].value;
    const imageUrl = data?.sectionContent[1]?.image?.url;
    return (
        <div className='max-w-[1440px] w-full m-auto px-[120px] py-[50px]'>
            <div className='w-1/2'>
                <p style={{ whiteSpace: 'pre-line' }} className='text-base'>
                    {text}
                </p>

                {imageUrl && (
                    <div className='mt-10'>
                        <Image alt='Image' src={imageUrl} layout="responsive" width={500} height={300} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Description
