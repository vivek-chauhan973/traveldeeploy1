import { ClassNames } from "@emotion/react";
import "../../app/globals.css";
import Image from 'next/image'
export default function Detail () {
    return (

        // demo skeleton











        <div>

            {/* blog postskeleton start */}
            <div className="mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto">
                <div className="">
                    <div className="animate-pulse  space-y-3 md:space-x-3 ">

                        <div className=" h-3 md:w-72  w-60  bg-slate-100 rounded col-span-3"></div>
                        <div className="  h-2 md:w-[45%]  w-40 bg-slate-100 rounded col-span-3"></div>
                        <div className="  h-2 md:w-[45%]    w-44    bg-slate-100 rounded col-span-3"></div>
                        <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
                        <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
                    </div>

                    <div className="md:flex  mt-5 ">
                        <div className="bg-slate-100  md:h-96 h-56 w-full md:w-4/6 rounded-[17px] "></div>
                        <div className=" mt-4 ">
                            <div className=" md:ml-6 md:h-72  h-56 md:w-72 w-full bg-slate-100 rounded-[17px] col-span-2"></div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-6">
                <div className=" mt-6 container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-full w-full mx-auto">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        <div className=" rounded bg-slate-100 h-40 w-full "></div>
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-6">
                <div className=" container-wrapper   bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto" >

                    <div className=" grid md:grid grid-cols-1 gap-4   lg:grid-cols-4">
                        <div className=" md:h-60 h-40  md:w-60 w-full  bg-slate-100 rounded-[17px] "></div>
                        <div className="  md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
                        <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                        <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                    </div>

                </div>
            </div>


            {/* blog postskeleton end  */}

            <div className="bg-slate-100 mt-6">
                <div className="container-wrapper py-5 ">
                    <div className="">
                        <h1 className="py-3 font-semibold text-lg md:text-[28px]">Titles and Subtitles from a web newspaper</h1>
                        <h1 className=" mb-2 md:text-lg text-para font-normal line-clamp-2">Hello everyone! the first time  a student and actually attending university lessons from home, due to the pandemic and lockdown. My teacher just gave me this job, consisting to take all the titles and subtitles from an online italian journal that include the words in a certain time lapse (from 22th to 29th of Genuary and just the 1st and the 8th of April),</h1>
                    </div>

                    <div className="grid mb-2 grid-cols-1 lg:grid-cols-[3fr,1fr] gap-5">
                        <div className=" rounded bg-white">
                            <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        {/* sidebar content is here down */}
                        <div className="">
                            <div className="relative rounded-t-lg overflow-hidden">
                                <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                                <div className="border rounded-b-lg px-2 bg-white">
                                    <div className="flex mt-3 gap-3 mb-3">
                                        <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                        <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                        <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                                    </div>
                                    <div className=" line-clamp-3 my-2">
                                        <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                        <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner */}
                <div className="container-wrapper">
                    <Image className="w-full md:h-72 object-cover rounded-lg" src="https://images.unsplash.com/photo-1447746249824-4be4e1b76d66?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                {/* suggested card is here */}
                <div className="container-wrapper  md:pt-10 pt-4 ">
                    <p className="font-semibold md:text-[28px] md:mb-5 mb-2 text-lg">Related Post</p>
                </div>
                <div className="container-wrapper md:flex grid grid-rows-4 gap-2 pb-5 md:gap-5 ">
                    <div className="relative rounded-t-lg overflow-hidden">
                        <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2 bg-white">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                        </div>
                    </div>
                    {/* repeat */}
                    <div className="relative rounded-t-lg overflow-hidden">
                        <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2 bg-white">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                        </div>
                    </div>
                    {/* repeat */}
                    <div className="relative rounded-t-lg overflow-hidden">
                        <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2 bg-white">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                        </div>
                    </div>
                    {/* repeat */}
                    <div className="relative rounded-t-lg overflow-hidden">
                        <Image className="w-full  " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2 bg-white">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                        </div>
                    </div>
                    {/* repeat */}
                </div>
                {/* smaple card */}
                {/* <div className="py-10 container-wrapper flex">
                <div className="bg-white p-5 rounded-md overflow-hidden w-1/4 shadow-sm">
                    <div className="relative ">

                        <div className="  w-60 h-36 bg-red-600 -rotate-3"></div>
                        <Image className="absolute top-0 w-60 h-36" src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className=" rounded-b-lg px-2 bg-white">
                        <div className="flex mt-3 gap-3 mb-3">
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                            <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>

                        </div>
                        <div className=" line-clamp-3 my-2">
                            <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                        </div>
                        <div>
                            <p className="text-sm hover:underline text-indigo-800 cursor-pointer font-semibold">Read More > </p>
                        </div>
                        <div className="flex justify-end mt-5">
                            <span className="text-sm  text-slate-400">2 March 2024</span>
                        </div>

                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}