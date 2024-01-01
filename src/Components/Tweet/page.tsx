import React from 'react'

const Tweet = () => {
    return (
        <div className='bg-[white] mb-2 w-[380px] overflow-x-auto sm:overflow-hidden sm:w-[480px] rounded-lg p-4 my-5 cursor-pointer'>
            <p className="font-medium leading-6 text-base text-[black]">
                <span className='h-4 w-8 rounded-[50%] bg-[black] text-[white] mr-1 p-2'>S</span><span className="text-gray-500">@imsummit18</span>
            </p>
            <p className="flex-shrink font-medium text-base text-[black] width-auto my-3">
                Completely agree with
                @sadhguruJV
                . Leave it for devotees. Sad to see so many places of worship without a single pooja taking place. Very little done for  maintenance,security etc.
            </p>
            <p className='text-[#1DA1F2] text-base font-medium' >#FREETNTEMPLES</p>

            <div className="flex">
                <div className="w-full">
                    <div className="flex items-center">
                        <div className="flex-1 text-center">
                            <a
                                href="#"
                                className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                            >
                                <svg
                                    className="h-6 text-center w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 m-2 py-2 text-center">
                            <a
                                href="#"
                                className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center w-6 h-7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 m-2 py-2 text-center">
                            <button
                                className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 group hover:bg-blue-800 hover:text-blue-300"
                            >
                                <div>
                                    <svg
                                        className="flex text-center w-6 h-7"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <span className="ml-2">30</span>
                            </button>
                        </div>

                        <div className="flex-1 m-2 py-2 text-center">
                            <a
                                href="#"
                                className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center w-6 h-7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 m-2 py-2 text-center">
                            <a
                                href="#"
                                className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center w-6 h-7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 m-2 py-2 text-center">
                            <button
                                className="bg-transparent cursor-pointer flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 curs group hover:bg-red-100 hover:text-red-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet