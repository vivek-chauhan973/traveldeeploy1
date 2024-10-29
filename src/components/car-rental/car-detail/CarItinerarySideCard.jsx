import "../../../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



const CarItinerarySideCard = ({ carSidePackages}) => {
//    console.log("carSidePackages",carSidePackages);
   

    return (
        <>
            <div className="relative  flex-shrink-0 max-w-[18rem] mt-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border xl:ml-[80px] ml-[20px] xl:block hidden ">
                <div
                    className="relative mx-4 mt-4 overflow-hidden text-white  rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <Image
                        src={carSidePackages?.[0]?.uploads?.[0] || "https://Images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
                        alt="ui/ux review check"
                        width={500}
                        height={500}
                    />
                    <div
                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                    </div>

                </div>
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between mb-3">
                        <h5
                            className=" text-lg font-semibold leading-snug ">
                            {carSidePackages?.[0]?.name}
                        </h5>
                        <p
                            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-primary">
                                <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"></path>
                            </svg>
                            {carSidePackages?.[0]?.packageRating}
                        </p>
                    </div>

                    <div>
                        <p
                            dangerouslySetInnerHTML={{ __html: carSidePackages?.[0]?.about }} 
                            className='text-para line-clamp-2'>   
                        </p>
                    </div>
                    <div className="flex justify-end mt-3">
                        <div className="text-right">
                            <p className="text-[14px] leading-5 text-green-600 font-semibold">
                                Best Deal Price
                            </p>
                            <p className="text-xs leading-4 ">Starts From <span className="text-lg text-black font-medium">₹
                                {(carSidePackages?.[0]?.price)?.toLocaleString()}
                            </span></p>
                            <p className="text-para leading-7 font-medium underline text-blue">from ₹ 19,423/months</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <Link
                        href={"/car-rental/" + carSidePackages?.[0]?.location.url + "/" + carSidePackages?.[0]?.pageUrl}
                        className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
                        type="button"
                    >
                        View details
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CarItinerarySideCard;