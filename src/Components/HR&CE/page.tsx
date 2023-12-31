import Image from 'next/image'
import React from 'react'

interface IProps {
    data?: any
}

const isUnique = (arr: any[], index: number, value: any) =>
    arr.findIndex(el => el?.description?.value?.document?.children[0]?.children[0]?.value === "Govt. Control Continues in Independent India") === index;

// const TimelineItem = ({ el, index, timelines }: { el: any, index: number, timelines: any[] }) => (
//     <div className='flex items-center sm:gap-6 sm:mb-12  relative h-fit '>
//         <Image src={el?.thumbnail?.url} alt="Image" height={106} width={106} className='z-[3]' />
//         <p key={index} className={isUnique(timelines, index, el?.description?.value?.document?.children[0]?.children[0]?.value) ? "font-bold text-sm sm:text-lg" : "text-sm sm:text-lg"}>
//             {el?.description?.value?.document?.children[0]?.children[0]?.value}
//         </p>
//         {index < timelines.length - 1 && <div className=" z-[2] absolute h-full w-[8px] bg-[#94a3b8] left-[50px] top-[50px]"></div>}
//     </div>
// );


const TimelineItem = ({ el, index, timelines }: { el: any, index: number, timelines: any[] }) => (
    <div className=' flex items-center gap-4 sm:gap-6 mb-6 sm:mb-12  relative h-fit '>
        <Image src={el?.thumbnail?.url} alt="Image" height={80} width={80} className='z-[3] sm:h-[106px] sm:w-[106px] ' />
        <p key={index} className={isUnique(timelines, index, el?.description?.value?.document?.children[0]?.children[0]?.value) ? "font-bold text-xs sm:text-sm lg:text-lg" : "text-xs sm:text-sm lg:text-lg"}>
            {el?.description?.value?.document?.children[0]?.children[0]?.value}
        </p>
        {index < timelines.length - 1 && <div className=" z-[2] absolute h-full w-[4px] sm:w-[8px] bg-[#94a3b8] left-[25px] sm:left-[50px] top-[40px] sm:top-[50px]"></div>}
    </div>
);
const HRCE: React.FC<IProps> = ({ data }) => {
    const timelines = data?.sectionContent[1].timelines;
    return (
        <div id="hrce" className='max-w-[1440px] w-full m-auto px-5 sm:px-[120px] py-10 sm:py-20 '>
            <div className='w-full sm:w-[60%]'>
                <p className=' text-3xl sm:text-[48px] text-center font-bold leading-[1.5]'>{data?.sectionContent[0]?.titleText}</p>
                <div className='mt-5'>
                    {timelines?.map((el: any, index: any) => <TimelineItem key={index} el={el} index={index} timelines={timelines} />)}
                </div>
                <p className='italic text-lg text-center w-[80%] m-auto mb-10 sm:mb-0'> {data?.sectionContent[2]?.body?.value?.document?.children[0]?.children[0]?.value}</p>
            </div>
        </div >
    )
}

export default HRCE