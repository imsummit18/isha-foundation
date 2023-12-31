import Image from 'next/image'
import React from 'react'

interface IProps {
    data?: any
}


const DyingTemples: React.FC<IProps> = ({ data }) => {
    const title = data.sectionContent[0].titleText
    const card = data.sectionContent[1].card

    return (
        <div className='max-w-[1440px] w-full m-auto  px-[40px] sm:px-[120px] ' style={{ backgroundImage: 'url(https://static.consciousplanet.org/static/assets/img/4498733907_858c1a0945_o%20copy%202@2x.jpg)' }} >
            <div className='text-[white]  w-full py-10 sm:py-20 sm:w-[60%]'>
                <p className=' text-xl text-center sm:text-4xl font-semibold sm:ml-[150px] sm:mb-10'>{title}</p>
                <div>

                    {
                        card.map((el: any) => {
                            return (
                                <>
                                    <div className='flex  flex-col sm:flex-row items-center sm:items-start  justify-center sm:justify-between  gap-4  sm:gap-8 my-4 sm:my-0 last:mb-0  ' >
                                        <div className='w-[200px] h-[140px] sm:h-[250px] sm:w-[300px]' >
                                            <Image src={el?.thumbnail.url} alt='' width={300} height={250} layout='responsive' />
                                        </div>
                                        <div className='w-full sm:w-[70%]  text-center sm:text-left'>
                                            <p className="text-4xl font-bold mb-2">{el?.title}</p>
                                            <p className='text-2xl font-semibold mb-2'>{el?.shortText}</p>
                                            <p className='text-base'>{el?.description?.value?.document?.children[0].children[0].value}</p>

                                        </div></div> </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DyingTemples
