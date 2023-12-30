import Image from 'next/image'
import React from 'react'

interface IProps {
    data?: any
}


const DyingTemples: React.FC<IProps> = ({ data }) => {
    console.log("The data", data)
    const title = data.sectionContent[0].titleText
    const card = data.sectionContent[1].card

    return (
        <div className='max-w-[1440px] w-full m-auto px-[120px] bg-[#69310F] ' >
            <div className='text-[white] py-20 w-[60%]'>
                <p className='text-3xl font-semibold ml-[180px]'>{title}</p>
                <div>

                    {
                        card.map((el: any) => {
                            console.log("The el", el)
                            return (
                                <>
                                    <div className='flex items-center justify-between  gap-8 my-10  ' >
                                        <div className=''>
                                            <Image src={el?.thumbnail.url} alt='' width={300} height={250} />
                                        </div>
                                        <div className='w-[70%]'>
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
