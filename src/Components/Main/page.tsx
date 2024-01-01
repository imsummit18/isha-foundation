"use client";
import Image from 'next/image'
import BannerSlide from '@/Components/Banner/page'
import Description from '@/Components/Description/page'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DyingTemples from '@/Components/DyingTemples/page';
import FreeTemple from '@/Components/FreeTemple/page';
import HeartBreakingStories from '@/Components/HeartBreakingStories/page';
import VideosSadhGuru from '@/Components/Videos/page';
import Appeal from '@/Components/Appeal/page';
import Glory from '@/Components/Glory/page';
import Footer from '@/Components/Footer/page';
import HRCE from '@/Components/HR&CE/page';
import Card from '@/Components/Card/page';
import Media from '@/Components/Media/page';
import Navbar from '../Navbar/page';



export default function Main() {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('/api/isha');
                const el = await res.json();
                const landingPages = el?.data?.allLandingPages[0] || [];
                setData(landingPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    if (isLoading) {
        return <div className='absolute top-[35%] left-[40%]'>
            <img src={'/spinner.svg'} alt="" />
        </div>
    }


    return (
        <>
            {data?.body?.length > 0 &&
                <>
                    <Navbar />
                    <BannerSlide data={data?.body[0].sectionContent[0].bannerSlides} />
                    <Description data={data?.body[1]} />
                    <DyingTemples data={data?.body[2]} />
                    <FreeTemple />
                    <HeartBreakingStories data={data?.body[3]} />
                    <VideosSadhGuru data={data?.body[4]} />
                    <Appeal data={data?.body[5]} />
                    <HRCE data={data?.body[6]} />
                    <Glory data={data?.body[7]} />
                    <Media />
                    <Footer />
                </>
            }

        </>
    )
}
