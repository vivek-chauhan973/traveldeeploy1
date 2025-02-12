import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import StaticBreadcrumbs from "@/components/StaticBreadcrumbs";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const RefundCancellation = (pageprops) => {
    const { setServerSideProps } = useCarPopupContext();
    useEffect(() => {
        if (pageprops) {
            setServerSideProps(pageprops || {});
        }

    }, [pageprops]);
    const [activeIndex, setActiveIndex] = useState("policy");

    const refundSections = [
        {
            id: "policy",
            title: "Cancellation & Refund Policy",
            content: (
                <p className="mb-5 mt-3 md:text-base text-para">
                    At BizarreXpedition Services Pvt. Ltd., we strive to provide a seamless and enriching travel experience. However, we understand that unforeseen circumstances may arise, leading to cancellations. The following policy outlines the terms and conditions for cancellations and refunds.
                </p>
            ),
        },
        {
            id: "cancellation",
            title: "1. Cancellation by Guests",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li>All cancellation requests must be submitted in writing via email or through our customer support team.</li>
                    <li>Refunds will be processed based on the date of cancellation and the applicable deductions as follows:</li>
                    <ul className="list-circle ml-8">
                        <li><span className="font-semibold">More than 46 days before departure: </span> 10% of the booking amount will be deducted.</li>
                        <li><span className="font-semibold">31-45 days before departure: </span> 25% of the booking amount will be deducted.</li>
                        <li><span className="font-semibold">15-30 days before departure: </span> 50% of the booking amount will be deducted.</li>
                        <li><span className="font-semibold">Less than 14 days before departure or no-show: </span> No refund will be issued.</li>
                    </ul>
                </ul>
            ),
        },
        {
            id: "forceMajeure",
            title: "2. Force Majeure",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li>In the event of unforeseen circumstances, including but not limited to natural disasters, weather conditions, government restrictions, or other extraordinary events:</li>
                    <ul className="list-circle ml-8">
                        <li>Certain activities or arrangements may be cancelled or rescheduled.</li>
                        <li>Refunds will not be issued for such cancellations.</li>
                        <li>Wherever possible, alternative arrangements will be made to minimize inconvenience.</li>
                    </ul>
                </ul>
            ),
        },
        {
            id: "processing",
            title: "3. Processing Refunds",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li>Refunds, if applicable, will be processed within <span className="font-semibold">10-15 working days</span> after receiving written cancellation confirmation.</li>
                    <li>Refunds will be made to the original payment method used during booking.</li>
                </ul>
            ),
        },
    ];

    return (
        <>
            <Head>
                {/* Meta Title/Description/Keywords */}
                <title>Cancellation and Refund Policy | BizareXpedition™ - Hassle-Free Processes</title>
                <meta
                    name="description"
                    content="Learn about our cancellation and refund policies for a transparent booking experience. 
                            Understand our procedures, timelines, and applicable charges."
                />
                <meta
                    name="keywords"
                    content="Cancellation policy, refund policy, BizareXpedition™, travel cancellation, refund process, booking policies"
                />
                {/* Author and Robots */}
                <meta name="author" content="BizareXpedition" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Cancellation and Refund Policy | BizareXpedition™ - Hassle-Free Processes" />
                <meta property="og:description" content="Learn about our cancellation and refund policies for a transparent booking experience. 
                    Understand our procedures, timelines, and applicable charges." />
                <meta property="og:image" content="https://www.bizarexpedition.com/refund-cancellation.jpg" />
                <meta property="og:url" content="https://www.bizarexpedition.com/refund-cancellation" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cancellation and Refund Policy | BizareXpedition™ - Hassle-Free Processes" />
                <meta name="twitter:description" content="Learn about our cancellation and refund policies for a transparent booking experience. 
                    Understand our procedures, timelines, and applicable charges." />
                <meta name="twitter:image" content="https://www.bizarexpedition.com/refund-cancellation.jpg" />
                {/* Organization Schema */}
                <OrganizationSchema />
            </Head>
            <main>
                <div>
                    <DesktopHeader />
                    <StaticBreadcrumbs />
                    <div>
                        {/* herosection start */}
                        {/* medium devices */}
                        <div className='md:block hidden'>
                            <div className='w-full md:h-[450px] xl:h-[500px] flex relative'>
                                <div className='w-[30%] h-full bg-black flex items-center justify-end'>
                                </div>
                                <div className='relative w-[80%] h-full flex'>
                                    <Image src="/assets/staticimage/refund-cancellation.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
                                    <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                                    </div>
                                </div>
                                <div className='w-full h-full absolute'>
                                    <div className='lg:w-[65%] md:w-[70%] h-full flex items-center justify-end px-16'>
                                        <div className='w-full flex flex-col justify-center items-center'>
                                            <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                                                Cancellation and Refund <br /> <span className='text-white'>understanding Your Refund Rights</span>
                                            </h2>
                                            <p className="my-5 text-base text-white text-center">
                                                At BizareXpedition, We understand that plans can change. Below are the terms and conditions regarding
                                                cancellations and refuns for booking made through our website and Agents.
                                            </p>
                                            <Link href="/">
                                                <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 px-4 rounded text-sm">
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
                                    <h2 className="text-[29px] leading-tight uppercase font-bold text-[#D45426] text-center">
                                        Refunds and Cancellations <br /> <span className='text-white'>How To Process Payments</span>
                                    </h2>
                                    <p className="my-5 text-sm  text-white text-center">
                                        At BizareXpedition, We strive to make your booking experience as seamless and convenient as possible.
                                        Below, you will find important details about our payment process.                            </p>
                                    <Link href="/">
                                        <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                                            Explore Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className='relative w-full h-72'>
                                <Image src="/assets/staticimage/refund-cancellation.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
                            </div>
                        </div>
                        {/* herosection end */}
                        {/* Content Section */}
                        <div className="container-wrapper py-10">
                            <div className="grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                                <div>
                                    <div className="sticky top-40 z-10 bg-white shadow-md rounded-md md:p-10 p-5">
                                        {refundSections.map((section) => (
                                            <ScrollLink
                                                key={section.id}
                                                to={section.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                onClick={() => setActiveIndex(section.id)}
                                            >
                                                <p
                                                    className={`pl-3 md:text-md text-base font-medium mb-4 hover:cursor-pointer ${activeIndex === section.id
                                                        ? "border-l-4 border-l-primary text-black"
                                                        : "text-gray-400"
                                                        }`}
                                                >
                                                    {section.title}
                                                </p>
                                            </ScrollLink>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:p-10 p-5 shadow-md rounded-md">
                                    {refundSections.map((section) => (
                                        <div key={section.id} id={section.id} className="mb-6">
                                            <h2 className="md:text-lg text-md font-semibold mb-2">{section.title}</h2>
                                            {section.content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        </>

    );
};

export default RefundCancellation;
