"use client";
import Image from 'next/image'
import Navbar from '../Components/Navbar/page'
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

const fetchBannerData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/data')
    return response.data.allLandingPages[0]
  } catch (err: any) {
    console.log("Error while fetching banner data", err);
    throw new Error("Error while fetching banner data", err)
  }
}
export default function Home() {
  const [data, setData] = useState<any | null>([]);
  const [isLoading, setIsLoading] = useState(true)
  console.log("The a data is", data)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBannerData();
      setData(result);
      setIsLoading(false)
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>

  }
  return (
    <>
      <div className=' '>
        <Navbar />
        <BannerSlide data={data?.body[0].sectionContent[0].bannerSlides} />
        <Description data={data?.body[1]} />
        <DyingTemples data={data?.body[2]} />
        <FreeTemple />
        <HeartBreakingStories data={data?.body[3]} />
        <VideosSadhGuru data={data?.body[4]} />
        <Appeal data={data?.body[5]} />
        <Glory data={data?.body[7]} />
        <HRCE data={""}/>
        <Footer />
      </div>
    </>
  )
}
