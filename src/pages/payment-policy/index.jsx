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

// const fetchPaymentPloicyPage = async () => {
//     const res = await fetch(`/api/static-page/static-page-type?name=payment-policy`);
//     return await res.json();
// };

const PaymentPloicy = (pageprops) => {
    const { setServerSideProps } = useCarPopupContext();
    useEffect(() => {
        if (pageprops) {
            setServerSideProps(pageprops || {});
        }

    }, [pageprops]);
    const [activeIndex, setActiveIndex] = useState("PaymentPolicy");

    const paymentPolicySections = [
        {
            id: "PaymentPolicy",
            title: "Payment Policy",
            content: (
                <p className="mb-5 mt-3 md:text-base text-para">
                    At BizareXpedition, we strive to make your payment process smooth, secure, and hassle-free.
                    Please review our payment guidelines below to ensure a seamless experience:
                </p>
            ),
        },
        {
            id: "Terms",
            title: "1. Payment Terms",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li><span className="font-semibold">25% Payment : </span>Due at the time of booking confirmation to secure your reservation.</li>
                    <li><span className="font-semibold">75% Payment : </span>Due one day prior to the departure date.</li>
                </ul>
            ),
        },
        {
            id: "Options",
            title: "2. Payment Options",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li><span className="font-semibold">Online Payments : </span>Debit/credit cards, UPI, and net banking are accepted for secure
                        and convenient transactions.</li>
                </ul>
            ),
        },
        {
            id: "Confirmation",
            title: "3. Payment Confirmation",
            content: (
                <div>
                    <p className="mb-2 md:text-base text-para">Once your payment is successful :</p>
                    <ul className="list-disc ml-8 md:text-base text-para">
                        <li>You will receive an email confirxmation containing your booking details.</li>
                        <li>Please retain this confirmation for your records.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "Security",
            title: "4. Payment Security",
            content: (
                <div>
                    <p className="mb-2 md:text-base text-para">We prioritize the safety of your financial information : </p>
                    <ul className="list-disc ml-8 md:text-base text-para">
                        <li>All transactions are encrypted and processed through secure gateways.</li>
                        <li>Your personal and financial data is handled with the utmost confidentiality.</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "Note",
            title: "5. Important Note",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para">
                    <li>In the event of unforeseen circumstances such as adverse weather conditions or
                        government restrictions, certain activities may need to be cancelled.</li>
                    <li>Our team will make every effort to arrange an alternate feasible activity. However, <span className='font-semibold'>no
                        refunds will be provided</span> for such cancellations.</li>
                </ul>
            ),
        },
    ];

    return (
        <>
            <Head>
                {/* Meta Title/Description/Keywords */}
                <title>Payment Policy | BizareXpedition™ - Secure and Simple Transactions</title>
                <meta
                    name="description"
                    content="Review the payment terms, options, and security measures at BizareXpedition™. 
                    Ensuring a smooth, hassle-free booking process for all your journeys."
                />
                <meta
                    name="keywords"
                    content="Payment policy, BizareXpedition™, payment terms, secure transactions, online payment, booking guidelines"
                />
                {/* Author and Robots */}
                <meta name="author" content="BizareXpedition" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Payment Policy | BizareXpedition™ - Secure and Simple Transactions" />
                <meta property="og:description" content="Review the payment terms, options, and security measures at BizareXpedition™. 
                    Ensuring a smooth, hassle-free booking process for all your journeys" />
                <meta property="og:image" content="https://www.bizarexpedition.com/payment-policy.jpg" />
                <meta property="og:url" content="https://www.bizarexpedition.com/payment-policy" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Payment Policy | BizareXpedition™ - Secure and Simple Transactions                             " />
                <meta name="twitter:description" content="Review the payment terms, options, and security measures at BizareXpedition™. 
                    Ensuring a smooth, hassle-free booking process for all your journeys" />
                <meta name="twitter:image" content="https://www.bizarexpedition.com/payment-policy.jpg" />
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
                                    <Image src="/assets/staticimage/payment-policy.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                                    <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                                    </div>
                                </div>
                                <div className='w-full h-full absolute'>
                                    <div className='w-[60%] h-full flex items-center justify-end px-16'>
                                        <div className='w-full flex flex-col justify-center items-center'>
                                            <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                                                Payment Policy <br /> <span className='text-white'>How To Process Payments</span>
                                            </h2>
                                            <p className="my-5 text-base text-white text-center">
                                                At BizareXpedition, We strive to make your booking experience as seamless and convenient as possible.
                                                Below, you will find important details about our payment process.
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
                                        Payment Ploicy <br /> <span className='text-white'>How To Process Payments</span>
                                    </h2>
                                    <p className="my-5 text-sm text-white text-center">
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
                                <Image src="/assets/staticimage/payment-policy.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                            </div>
                        </div>
                        {/* herosection end */}
                        <div className="container-wrapper py-10">
                            <div className="grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                                <div>
                                    <div className="sticky top-40 z-10 bg-white shadow-md rounded-md md:p-10 p-5">
                                        {paymentPolicySections.map((section) => (
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
                                    {paymentPolicySections.map((section) => (
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

    )
}

export default PaymentPloicy;