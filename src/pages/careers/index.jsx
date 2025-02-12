import React, { useEffect, useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import Head from 'next/head';
import StaticBreadcrumbs from '@/components/StaticBreadcrumbs';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

const fetchJobsPage = async () => {
    const res = await fetch(`/api/static-page/static-page-type?name=jobs`);
    return await res.json();
};

const Careers = (pageprops) => {
    const { setServerSideProps } = useCarPopupContext();
    useEffect(() => {
        if (pageprops) {
            setServerSideProps(pageprops || {});
        }

    }, [pageprops]);
    const [careersData, setCareersData] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        fetchJobsPage().then(res => {
            console.log("res is here ====>", res?.data);
            setCareersData(res?.data)
        })
    }, [])

    console.log("careersData", careersData);

    return (
        <>
            <Head>
                {/* Meta Title/Description/Keywords */}
                <title>Careers | BizareXpedition™ - Join Our Passionate Travel Team</title>
                <meta
                    name="description"
                    content="Explore exciting career opportunities at BizareXpedition™. 
                    Join our dynamic team and contribute to crafting exceptional travel experiences. 
                    Discover job openings, growth opportunities, and our work culture."
                />
                <meta
                    name="keywords"
                    content="Careers, BizareXpedition™, job opportunities, travel industry jobs, work with us, travel careers, employment opportunities, join our team, career growth, hiring"
                />
                {/* Author and Robots */}
                <meta name="author" content="BizareXpedition" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Careers | BizareXpedition™ - Join Our Passionate Travel Team" />
                <meta property="og:description" content="Explore exciting career opportunities at BizareXpedition™. 
                    Join our dynamic team and contribute to crafting exceptional travel experiences. 
                    Discover job openings, growth opportunities, and our work culture." />
                <meta property="og:image" content="https://www.bizarexpedition.com/careers.jpg" />
                <meta property="og:url" content="https://www.bizarexpedition.com/careers" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Careers | BizareXpedition™ - Join Our Passionate Travel Team" />
                <meta name="twitter:description" content="Explore exciting career opportunities at BizareXpedition™. 
                    Join our dynamic team and contribute to crafting exceptional travel experiences. 
                    Discover job openings, growth opportunities, and our work culture." />
                <meta name="twitter:image" content="https://www.bizarexpedition.com/careers.jpg" />
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
                            <div className='w-full md:h-[400px] xl:h-[500px] flex relative'>
                                <div className='w-[30%] h-full bg-black flex items-center justify-end'>
                                </div>
                                <div className='relative w-[80%] h-full flex'>
                                    <Image src="/assets/staticimage/careers.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                                    <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                                    </div>
                                </div>
                                <div className='w-full h-full absolute'>
                                    <div className='w-[60%] h-full flex items-center justify-end px-16'>
                                        <div className='w-full flex flex-col justify-center items-center'>
                                            <h2 className="xl:text-[55px] md:text-[35px]  leading-tight uppercase font-bold text-[#D45426] text-center">
                                                Careers <br /> <span className='text-white'>Grow With Us</span>
                                            </h2>
                                            <p className="my-5 md:text-base text-sm  text-white text-center">
                                                At BizareXpedition, we are always looking for passionate and motivavated individuals to join our growing team.
                                                we believe in fostering a posiytive work environment that encourages creativity, collaboration, and the love for travel.
                                                If you are looking for a dynamic career you can make a difference, you have come to the right place.
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
                                    <h2 className="text-[29px] leading-tight uppercase text-lg font-bold text-[#D45426] text-center">
                                        Careers <br /> <span className='text-white'>Grow With Us</span>
                                    </h2>
                                    <p className="my-5 text-sm  text-white text-center">
                                        At BizareXpedition, we are always looking for passionate and motivavated individuals to join our growing team.
                                        we believe in fostering a posiytive work environment that encourages creativity, collaboration, and the love for travel.
                                        If you are looking for a dynamic career you can make a difference, you have come to the right place.
                                    </p>
                                    <Link href="/">
                                        <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                                            Explore Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className='relative w-full h-72'>
                                <Image src="/assets/staticimage/careers.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                            </div>
                        </div>
                        {/* herosection end */}
                        <div className="container-wrapper py-10">
                            <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                                <div className="">
                                    <div className="sticky top-40 z-10 bg-white shadow-md rounded-md md:p-7 p-5">
                                        <h4 className="text-md font-semibold mb-4 capitalize pl-3">Careers</h4>
                                        <div>
                                            {careersData?.topics?.map((item, index) => (
                                                <ScrollLink
                                                    key={index}
                                                    to={index}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-100}
                                                    duration={500}
                                                    onClick={() => setActiveIndex(index)}
                                                >
                                                    <p
                                                        className={`pl-3 md:text-md text-base font-medium mb-4 hover:cursor-pointer ${activeIndex === index
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
                                <div className="md:p-10 p-5 bg-white shadow-md rounded-md">
                                    <div id="ItinerarySubSection" className="mt-5 pb-5 border-b-2">
                                        <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: careersData?.contentSummary }}></p>
                                    </div>
                                    {careersData?.topics?.map((item, index) => (
                                        <div key={index} className="pt-7 " id={index}>
                                            <h3 className="md:text-lg text-md font-medium mb-2">
                                                {item?.title}
                                            </h3>
                                            <p className="text-base leading-relaxed about-margin" dangerouslySetInnerHTML={{ __html: item?.description }}></p>
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
            </main>
        </>
    )
}

export default Careers;