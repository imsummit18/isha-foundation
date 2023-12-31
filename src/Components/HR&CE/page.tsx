import Image from 'next/image'
import React from 'react'

interface IProps {
    data?: any
}

const isUnique = (arr: any[], index: number, value: any) =>
    arr.findIndex(el => el?.description?.value?.document?.children[0]?.children[0]?.value === "Govt. Control Continues in Independent India") === index;

const TimelineItem = ({ el, index, timelines }: { el: any, index: number, timelines: any[] }) => (
    <div className='flex items-center gap-6 mb-12  relative'>
        <Image src={el?.thumbnail?.url} alt="Image" height={106} width={106} className='z-[10]' />
        <p key={index} className={isUnique(timelines, index, el?.description?.value?.document?.children[0]?.children[0]?.value) ? "font-bold text-lg" : "text-lg"}>
            {el?.description?.value?.document?.children[0]?.children[0]?.value}
        </p>
        {index < timelines.length - 1 && <div className=" z-[2] absolute h-full w-[8px] bg-[#94a3b8] left-[50px] top-[50px]"></div>}
    </div>
);

const HRCE: React.FC<IProps> = ({ data }) => {
    const timelines = data?.sectionContent[1].timelines;
    return (
        <div className='max-w-[1440px] w-full m-auto px-[120px] py-20 '>
            <div className='w-[60%]'>
                <p className='text-[48px] text-center font-bold'>{data?.sectionContent[0]?.titleText}</p>
                <div className='mt-5'>
                    {timelines?.map((el: any, index: any) => <TimelineItem key={index} el={el} index={index} timelines={timelines} />)}
                </div>
                <p className='italic text-lg text-center w-[80%] m-auto'> {data?.sectionContent[2]?.body?.value?.document?.children[0]?.children[0]?.value}</p>
            </div>
        </div >
    )
}

export default HRCE