import Link from "next/link"

const navData = [
    {
        id: 1,
        title: "Dying Temple",
    },
    {
        id: 2,
        title: "Free Temple",
    },
    {
        id: 3,
        title: "Heartbreaking Stories",
    },
    {
        id: 4,
        title: "HR&CE",
    },
    {
        id: 4,
        title: "Past Glory",
    },
    {
        id: 4,
        title: "Get In Touch",
    },
    {
        id: 5,
        title: "Media",
    },
]

const Navbar = () => {
    return (
        <div className="max-w-[1440px] w-full  m-auto bg-customBrown  flex items-center justify-between px-20 py-4 fixed top-0 left-0 right-0 ">
            <div className=" flex  items-center space-x-4 text-sm  ">
                {
                    navData.map((el) => (
                        <div key={el.id} className="flex cursor-pointer text-white font-normal font-semibold ">
                            <Link href="/">{el.title}</Link>
                        </div>
                    ))
                }

            </div>
            <div className=" flex  space-x-1 text-white border-[2px] cursor-pointer   font-normal rounded-3xl  px-3 py-1 ">
                <p className="border-r-[1px] border-white pr-2 mr-1 text-[#febd2c]">English</p>
                <p>Tamil</p>
            </div>
        </div>
    )
}

export default Navbar