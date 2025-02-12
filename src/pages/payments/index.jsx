import React, { useEffect, useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import StaticBreadcrumbs from '@/components/StaticBreadcrumbs';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
// const fetchPaymentPloicyPage = async () => {
//     const res = await fetch(`/api/static-page/static-page-type?name=payment-policy`);
//     return await res.json();
// };
const Payment = (pageprops) => {
    const { setServerSideProps } = useCarPopupContext();
    useEffect(() => {
        if (pageprops) {
            setServerSideProps(pageprops || {});
        }

    }, [pageprops]);
    const [activeIndex, setActiveIndex] = useState("Payments");

    const PrivacyPolicySections = [
        {
            id: "Payments",
            title: "Payments",
            content: (
                <p className="mb-5 mt-3 md:text-base text-para">
                    Ensuring a smooth and reliable booking experience is our top priority at <span className='font-semibold'> BizareXpedition. </span>
                    We offer multiple payment methods to make your transactions effortless, whether you are
                    planning an adventure trip, a pilgrimage tour, or booking accommodations. Our secure
                    payment process guarantees safety and convenience, so you can focus on your journey
                    without any worries.
                </p>
            ),
        },
        {
            id: "Methods",
            title: "Payment Methods We Accept:",
            content: (
                <ul className="list-disc ml-8 md:text-base text-para mb-5">
                    <li><span className="font-semibold">Credit/Debit Cards - </span> Visa, MasterCard, Rupay & More.</li>
                    <li><span className="font-semibold">UPI Payments - </span> Google Pay, PhonePe, Paytm, BHIM UPI</li>
                    <li><span className="font-semibold">Net Banking - </span> All Major Banks Supported</li>
                    <li><span className="font-semibold">Wallet Payments - </span> Paytm, Amazon Pay, and Others</li>
                    <li><span className="font-semibold">Bank Transfers - </span> NEFT, RTGS & IMPS</li>
                </ul>
            ),
        },
        {
            id: "Make",
            title: "How to Make a Payment?",
            content: (
                <ul className=" ml-8 md:text-base text-para mb-5">
                    <li className="list-decimal"><span className="font-semibold">Choose Your Package - </span> Select your desired tour or service.</li>
                    <li className="list-decimal"><span className="font-semibold">Get Payment Details  - </span> Our team will share the payment details with you via email or WhatsApp.</li>
                    <li className="list-decimal"><span className="font-semibold">Make Payment - </span> Choose your preferred method and complete the payment.</li>
                    <li className="list-decimal"><span className="font-semibold">Receive Confirmation - </span> Once the payment is successful, you will receive a confirmation receipt via email/SMS.</li>
                </ul>
            ),
        },
        {
            id: "Transfers",
            title: "Bank Details for Direct Transfers",
            content: (
                <div>
                    <ul className="ml-8 md:text-base text-para">
                        <li className="font-semibold list-decimal"><span className='font-semibold'>BizareXpedition - ICICI Bank Account</span></li>
                        <ul className="ml-8 md:text-base text-para">
                            <li><span className="font-semibold">Bank Account Name : </span> BizareXpedition Services Private Limited</li>
                            <li><span className="font-semibold">Account No. : </span> 777705503022</li>
                            <li><span className="font-semibold">Bank Name : </span> ICICI Bank</li>
                            <li><span className="font-semibold">IFSC Code : </span> ICIC0000239</li>
                            <li><span className="font-semibold">Swift Code : </span> ICICNBBXXX</li>
                            <li><span className="font-semibold">MICR Code : </span> 249229002</li>
                            <li><span className="font-semibold">GSTIN : </span> 05AAGCB9827P1Z1</li>
                            <li><span className="font-semibold">PAN : </span> AAGCB9827P</li>
                            <li><span className="font-semibold">Branch : </span> Haridwar Branch</li>
                        </ul>
                        <li className="font-semibold list-decimal mt-3"><span className='font-semibold'>BizareXpedition - YES Bank Account</span></li>
                        <ul className="ml-8 md:text-base text-para">
                            <li><span className="font-semibold">Bank Account Name : </span> BizareXpedition Services Private Limited</li>
                            <li><span className="font-semibold">Account No. : </span> 061063400000275</li>
                            <li><span className="font-semibold">Bank Name : </span> YES Bank</li>
                            <li><span className="font-semibold">IFSC Code : </span> YESB0000610</li>
                            <li><span className="font-semibold">MICR Code : </span> 249532002</li>
                            <li><span className="font-semibold">GSTIN : </span> 05AAGCB9827P1Z1</li>
                            <li><span className="font-semibold">PAN : </span> AAGCB9827P</li>
                            <li><span className="font-semibold">Branch : </span> Haridwar Branch</li>
                        </ul>
                    </ul>
                    <p className="md:text-base text-para mb-5 mt-3">
                        <span className="font-bold">Important Note : </span> After making the payment, kindly share the transaction receipt with us
                        via email at info@bizarexpedition.com or WhatsApp at +91-9897-581-113 for quick
                        processing.
                    </p>
                </div>
            ),
        },
        {
            id: "Secure",
            title: "Secure Transactions",
            content: (
                <div>
                    <p className="mb-3 mt-3 md:text-base text-para">
                        We use industry-standard encryption and secure payment gateways to ensure that all
                        transactions are safe and protected.
                    </p>
                    <p className="mb-5 md:text-base text-para font-semibold">
                        Book with Confidence – Safe, Secure & Fast Payments with BizareXpedition!
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <Head>
                {/* Meta Title/Description/Keywords */}
                <title>Secure Payment Options | BizareXpedition™️</title>
                <meta
                    name="description"
                    content="Make safe and hassle-free payments for your travel bookings with BizareXpedition. We accept credit/debit cards, UPI, net banking, and bank transfers. Secure transactions, multiple payment options, and instant booking confirmation."
                />
                <meta
                    name="keywords"
                    content="payments, secure payments, travel payments, online payment, BizareXpedition payments, UPI payments, net banking, bank transfer, safe transactions, tour booking payment"
                />
                {/* Author and Robots */}
                <meta name="author" content="BizareXpedition" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Secure Payment Options | BizareXpedition" />
                <meta property="og:description" content="Make safe and hassle-free payments for your travel bookings with BizareXpedition. We offer multiple payment options including UPI, net banking, and card payments." />
                <meta property="og:image" content="https://www.bizarexpedition.com/payments.jpg" />
                <meta property="og:url" content="https://www.bizarexpedition.com/payments" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Secure Payment Options | BizareXpedition" />
                <meta name="twitter:description" content="Make safe and hassle-free payments for your travel bookings with BizareXpedition. We offer multiple payment options including UPI, net banking, and card payments." />
                <meta name="twitter:image" content="https://www.bizarexpedition.com/payments.jpg" />
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
                                    <Image src="/assets/staticimage/payments.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                                    <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                                    </div>
                                </div>
                                <div className='w-full h-full absolute'>
                                    <div className='w-[60%] h-full flex items-center justify-end px-16'>
                                        <div className='w-full flex flex-col justify-center items-center'>
                                            <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                                                Payments<br /> <span className='text-white'>Secure & Convenient Payment Options</span>
                                            </h2>
                                            <p className="my-5 text-base text-white text-center">
                                                At BizareXpedition, we ensure a hassle-free and secure payment process for all our customers.
                                                Whether you are booking a customized tour, adventure package, or hotel stay, our multiple payment options make transactions quick and easy.
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
                                        Payments<br /> <span className='text-white'>Secure & Convenient Payment Options</span>
                                    </h2>
                                    <p className="my-5 text-sm  text-white text-center">
                                        At BizareXpedition, we ensure a hassle-free and secure payment process for all our customers.
                                        Whether you are booking a customized tour, adventure package, or hotel stay, our multiple payment options make transactions quick and easy.
                                    </p>
                                    <Link href="/">
                                        <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                                            Explore Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className='relative w-full h-72'>
                                <Image src="/assets/staticimage/payments.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                            </div>
                        </div>
                        {/* herosection end */}
                        <div className="container-wrapper py-10">
                            <div className="grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                                <div>
                                    <div className="sticky top-40 z-10 bg-white shadow-md rounded-md md:p-10 p-5">
                                        {PrivacyPolicySections.map((section) => (
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
                                    {PrivacyPolicySections.map((section) => (
                                        <div key={section.id} id={section.id} className="mb-6 border-b">
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

export default Payment;