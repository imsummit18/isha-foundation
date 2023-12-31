
import Image from 'next/image';
import React from 'react';

interface IProps {
    data?: any;
}

const Appeal: React.FC<IProps> = ({ data }) => {

    return (
        <div className='max-w-[1440px] w-full m-auto px-[120px] py-20 bg-[#69310F] text-[white]'>
            <div className='w-[60%]'>
                <p className='text-center text-4xl font-semibold'>
                    {data?.sectionContent[0]?.titleText}
                </p>
                <div className='mt-8 flex flex-wrap  justify-center'>
                    {data.sectionContent[1]?.fileList.map((el: any, index: any) => (
                        <div className='flex items-center flex-col w-1/2 mb-8' key={index}>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-xl font-medium mb-4 text-center  w-[80%]ml-20'>
                                    {el?.fileTitle}
                                </p>
                                <a href={el.linkUrl} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={el.thumbnail.url}
                                        alt='Image'
                                        width={300}
                                        height={300}
                                        className='cursor-pointer'
                                    />
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appeal;
