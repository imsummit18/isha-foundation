import Link from "next/link"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from 'react-scroll';

const navData = [
    {
        id: 1,
        title: "Dying Temple",
        path: "dyingtemple"
    },
    {
        id: 2,
        title: "Free Temple",
        path: "freetemple"
    },
    {
        id: 3,
        title: "Heartbreaking Stories",
        path: "heartbreakingStories"
    },
    {
        id: 4,
        title: "HR&CE",
        path: "hrce"
    },
    {
        id: 5,
        title: "Past Glory",
        path: "glory"
    },
    {
        id: 6,
        title: "Get In Touch",
        path: ""
    },
    {
        id: 7,
        title: "Media",
        path: "media"
    },
]

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const handleShowMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <>

            <div className="sm:max-w-[1440px] w-full z-10 m-auto bg-customBrown  flex items-center justify-between px-10 sm:px-20 py-4 fixed top-0 left-0 right-0 ">
                <div className="hidden sm:flex  items-center space-x-4 text-sm  ">
                    {
                        navData.map((el) => (
                            <div key={el.id} className="flex cursor-pointer text-white font-normal font-semibold ">

                                <ScrollLink
                                    to={el?.path.toString()}
                                    smooth={true}
                                    duration={1000}
                                    spy={true}
                                    offset={-68}
                                    activeClass="text-[#fac654]"
                                >
                                    {el.title}
                                </ScrollLink>
                            </div>
                        ))
                    }

                </div>
                <div className="sm:hidden" onClick={handleShowMobileNav}>
                    <RxHamburgerMenu size={24} color={"white"} />
                </div>

                <div className="z-[2] flex  space-x-1 text-white border-[2px] cursor-pointer   font-normal rounded-3xl  px-3 py-1 ">
                    <p className="border-r-[1px] border-white pr-2 mr-1 text-[#febd2c]">English</p>
                    <p>Tamil</p>
                </div>
            </div>

        </>
    )
}

export default Navbar