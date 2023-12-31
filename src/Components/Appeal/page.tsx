
import Image from 'next/image';
import React from 'react';

interface IProps {
    data?: any;
}

const Appeal: React.FC<IProps> = ({ data }) => {

    return (
        <div className='max-w-[1440px] w-full m-auto px-5 sm:px-[120px] py-10 sm:py-20 bg-[#69310F] text-[white]' style={{ backgroundImage: 'url(https://static.consciousplanet.org/static/assets/img/4498733907_858c1a0945_o%20copy%202@2x.jpg)' }} >
            <div className='w-full sm:w-[60%]'>
                <p className='text-center text-3xl sm:text-4xl font-semibold'>
                    {data?.sectionContent[0]?.titleText}
                </p>
                <div className='mt-8 flex  flex-col sm:flex-row sm:flex-wrap  justify-center'>
                    {data.sectionContent[1]?.fileList.map((el: any, index: any) => (
                        <div className='flex items-center flex-col w-full  sm:w-1/2 mb-8' key={index}>
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
