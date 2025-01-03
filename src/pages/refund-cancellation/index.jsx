import React, { useEffect, useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
const fetchRefundCancellationPage = async () => {
    const res = await fetch(`/api/static-page/static-page-type?name=refunds-and-cancellations`);
    return await res.json();
  };
const RefundCancellation = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [data,setData]=useState([])
    useEffect(()=>{
        fetchRefundCancellationPage().then(res=>setData(res?.data))
    },[])
    return (
        <div>
            <DesktopHeader />
            <Breadcrumbs />
            <div>
                {/* herosection start */}
                {/* medium devices */}
                <div className='md:block hidden'>
                    <div className='w-full md:h-[400px] xl:h-[500px] flex relative'>
                        <div className='w-[30%] h-full bg-black flex items-center justify-end'>
                        </div>
                        <div className='relative w-[80%] h-full flex'>
                            <img src="/assets/staticimage/refundCancellation.jpg" alt="" className='relative w-full h-full' />
                            <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                            </div>
                        </div>
                        <div className='w-full h-full absolute'>
                            <div className='w-[60%] h-full flex items-center justify-end px-16'>
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <h2 className="xl:text-[55px] md:text-[35px] text-[26px] leading-tight uppercase text-lg font-bold text-[#D45426] text-center">
                                        Refunds and Cancellations <br /> <span className='text-white'>understanding Your Refund Rights</span>
                                    </h2>
                                    <p className="my-5 md:text-base text-sm  text-white text-center">
                                        At BizareXpedition, We understand that plans can change. Below are the terms and conditions regarding
                                        cancellations and refuns for booking made through our website and Agents.
                                    </p>
                                    <Link href="#">
                                        <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2.5 py-1.5 md:px-4 px-3 rounded text-sm">
                                            Explore Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* small devices */}
                <div className='md:hidden'>
                    <div className='w-full flex items-center justify-center bg-black p-5'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h2 className="text-[29px] leading-tight uppercase text-lg font-bold text-[#D45426] text-center">
                                Refunds and Cancellations <br /> <span className='text-white'>How To Process Payments</span>
                            </h2>
                            <p className="my-5 md:text-base text-sm  text-white text-center">
                                At BizareXpedition, We strive to make your booking experience as seamless and convenient as possible.
                                Below, you will find important details about our payment process.                            </p>
                            <Link href="#">
                                <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2.5 py-1.5 md:px-4 px-3 rounded text-sm">
                                    Explore Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative w-full h-72'>
                        <img src="/assets/staticimage/contactUs.jpg" alt="" className='relative w-full h-full' />
                    </div>
                </div>
                {/* herosection end */}
                <div className="container-wrapper py-10">
                    <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                        <div className="">
                            <div className="sticky top-40 z-10 bg-white w-full xl:w-80 shadow-xl rounded-xl md:p-7 p-5">
                                <h4 className="text-md font-semibold mb-4 capitalize pl-3">Refunds and Cancellations</h4>
                                <div>
                                    {data?.topics?.map((item, index) => (
                                        <ScrollLink
                                            key={`${index+1}id`}
                                            to={`${index+1}id`}
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <p
                                                className={`pl-3 text-md font-medium mb-4 hover:cursor-pointer ${activeIndex === index
                                                    ? "border-l-4 border-l-primary text-black"
                                                    : " text-gray-400"
                                                    }`}
                                            >
                                                {item.title}
                                            </p>
                                        </ScrollLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:p-10 p-5 bg-white shadow-xl rounded-xl">
                            <div id="ItinerarySubSection" className="mt-5 pb-5 border-b-2">
                                <p className="text-base leading-relaxed">
                                    We are all looking for productivity hacks to help us get
                                    organized and reduce stress, and with an app for trip planning
                                    you can get business travel booked in no time. Whether you are
                                    after a streamlined way to track expenses, stick to a budget,
                                    pack more efficiently, or plan your route, business travel apps
                                    tackle all the above.
                                </p>
                            </div>
                            {data?.topics?.map((item, index) => (
                                <div key={`${index+1}id`} className="pt-7 " id={`${index+1}id`}>
                                    <h3 className="md:text-2xl text-xl font-medium mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed">
                                        <div  dangerouslySetInnerHTML={{ __html: item.description }}/>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* footer is here */}
                <div className='mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default RefundCancellation;