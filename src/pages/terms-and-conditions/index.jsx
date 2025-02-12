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

// const fetchTermsAndConditionPage = async () => {
//   const res = await fetch(`/api/static-page/static-page-type?name=terms-and-conditions`);
//   return await res.json();
// };

const TermsAndCondition = (pageprops) => {
  const { setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }

  }, [pageprops]);
  const [activeIndex, setActiveIndex] = useState("Introduction");

  const PrivacyPolicySections = [
    {
      id: "Introduction",
      title: "Terms and Conditions",
      content: (
        <div>
          <p className="mb-5 mt-3 md:text-base text-para">
            Welcome to <span className='font-semibold'>BizareXpedition Services Pvt. Ltd.!</span>  We are committed to delivering
            exceptional travel experiences. Before booking any tour, holiday package, or service with
            us-whether through our website or directly at our offices-please carefully read and accept these
            <span className='font-semibold'> Terms and Conditions</span>.
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            By confirming your booking with BizareXpedition, you agree to abide by these <span className='font-semibold'> Terms and Conditions</span>. If you do not agree with any part of these terms, you are requested not to
            proceed with the booking
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            These terms apply to all group tours, customized holidays, corporate packages, and
            independent services provided by <span className='font-semibold'> BizareXpedition Services Pvt. Ltd</span>.
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            BizareXpedition reserves the right to amend, revise, or waive any part of these <span className='font-semibold'> Terms and Conditions</span> without prior notice.
          </p>
        </div>
      ),
    },
    {
      id: "Definitions",
      title: "Definitions",
      content: (
        <div>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>BizareXpedition Services Pvt. Ltd</span>., hereafter referred to as &quot;the Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>Guest(s)</span> refers to clients, customers, tourists, or travellers booking or participating in
            tours or services provided by BizareXpedition
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>Force Majeure</span> includes events beyond the Companys control, such as natural disasters,
            pandemics, government restrictions, political unrest, or other unforeseeable circumstances.
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>Customized Holidays</span> refer to travel itineraries tailored to the specific needs of individual
            travellers or groups.
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>Tour Price</span> refers to the total cost of the services provided, including inclusions as
            specified at the time of booking.
          </p>
        </div>
      ),
    },
    {
      id: "Booking",
      title: "Booking Policy",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Booking Confirmation :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>A booking is considered confirmed upon receipt of a <span className='font-semibold'>25% advance payment.</span></li>
            <li>The remaining <span className='font-semibold'>75% payment</span> is required <span className='font-semibold'>one day prior to the departure date.</span></li>
          </ul>
          <li className="font-semibold list-decimal">Guest Responsibilities : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>Guests must provide accurate information at the time of booking.</li>
            <li>Any incorrect or incomplete details may result in cancellation or additional charges.</li>
          </ul>
          <li className="font-semibold list-decimal">Payment Options : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>Online payments : UPI, net banking, and debit/credit cards.</li>
          </ul>
          <li className="font-semibold list-decimal">Payment Security : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>All transactions are securely encrypted and processed through trusted gateways.</li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Cancellation",
      title: "Cancellation and Refund Policy",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Cancellation by Guests :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>Cancellation requests must be submitted in writing via email or through our customer
              support.</li>
            <li>Refunds will be processed based on the cancellation date and applicable charges : </li>
            <ul className="list-disc ml-8 md:text-base text-para">
              <li>More than 46 days before departure : <span className="font-semibold">10% deduction.</span></li>
              <li>31-45 days before departure : <span className="font-semibold">25% deduction.</span></li>
              <li>15-30 days before departure : <span className="font-semibold">50% deduction.</span></li>
              <li>Less than 14 days or no-show : <span className="font-semibold">No refund.</span></li>
            </ul>
          </ul>
          <li className="font-semibold list-decimal"> Force Majeure : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>In case of unforeseen events (e.g., weather, government restrictions), certain activities
              may be cancelled or rescheduled. No refunds will be issued for such cancellations;
              however, alternative arrangements will be made where possible.</li>
          </ul>
          <li className="font-semibold list-decimal">Processing Refunds : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>Refunds, if applicable, will be processed within <span className='font-semibold'>10-15 working days</span> after
              cancellation confirmation.</li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Requirements",
      title: "Travel Requirements",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Documentation :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>Guests must carry valid identification (e.g., Aadhar card, passport, visa if applicable).</li>
            <li>International travellers must ensure that passports are valid for at least six months
              from the travel date.</li>
          </ul>
          <li className="font-semibold list-decimal">Health and Safety : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>Guests are responsible for their physical and mental fitness to travel. Any pre-existing
              medical conditions should be disclosed at the time of booking.</li>
          </ul>
          <li className="font-semibold list-decimal">Insurance : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>Travel insurance is strongly recommended for all guests to cover medical
              emergencies, trip cancellations, or unforeseen expenses.</li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Operations",
      title: "Tour Operations",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Itinerary Changes :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>The Company reserves the right to modify itineraries due to operational reasons,
              weather conditions, or other unforeseen circumstances.</li>
          </ul>
          <li className="font-semibold list-decimal">Missed Services : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>No refunds will be provided for missed services due to guest delays or failure to
              adhere to the schedule.</li>
          </ul>
          <li className="font-semibold list-decimal">Group Tours : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>Guests are expected to adhere to the itinerary and cooperate with the tour manager
              and other participants.</li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Liabilities",
      title: "Liabilities and Limitations",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Company Responsibilities :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>BizareXpedition acts as a facilitator, coordinating services with third-party providers
              such as airlines, hotels, and transport companies. While we strive for excellence, we
              are not liable for operational issues beyond our control.
            </li>
          </ul>
          <li className="font-semibold list-decimal">Guest Responsibilities : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>Guests must exercise caution and ensure the safety of their belongings. The Company
              will not be liable for loss, theft, or damage to personal property.
            </li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Privacy",
      title: "Privacy Policy",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Data Collection :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>Personal information, including contact details and identification, will be collected for
              booking and operational purposes.</li>
          </ul>
          <li className="font-semibold list-decimal">Data Usage : </li>
          <ul className="ml-8 md:text-base text-para">
            <li>Information may be shared with third-party service providers (e.g., airlines, hotels) as required to fulfill bookings.</li>
          </ul>
          <li className="font-semibold list-decimal">Confidentiality : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>BizareXpedition will not sell or share guest data with unauthorized entities.</li>
          </ul>
        </ul>
      ),
    },
    {
      id: "Resolution",
      title: "Dispute Resolution",
      content: (
        <ul className="ml-8 md:text-base text-para">
          <li className="font-semibold list-decimal">Jurisdiction  :</li>
          <ul className="ml-8 md:text-base text-para">
            <li>All disputes will be subject to the jurisdiction of the courts in <span className="font-semibold">Haridwar,
              Uttarakhand.</span></li>
          </ul>
          <li className="font-semibold list-decimal">Complaint Handling : </li>
          <ul className="ml-8 md:text-base text-para mb-5">
            <li>Guests are encouraged to report any grievances during the trip to our customer
              support team for immediate resolution.</li>
          </ul>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        {/* Meta Title/Description/Keywords */}
        <title>Terms and Conditions | BizareXpedition™ - Transparency in Travel</title>
        <meta
          name="description"
          content="Familiarize yourself with the terms and conditions of BizareXpedition™, 
            detailing our services, user responsibilities, and policies for a seamless travel experience."
        />
        <meta
          name="keywords"
          content="Terms and conditions, BizareXpedition™, travel policies, service terms, user agreement, travel guidelines"
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Terms and Conditions | BizareXpedition™ - Transparency in Travel" />
        <meta property="og:description" content="Familiarize yourself with the terms and conditions of BizareXpedition™, 
          detailing our services, user responsibilities, and policies for a seamless travel experience." />
        <meta property="og:image" content="https://www.bizarexpedition.com/terms-and-conditions.jpg" />
        <meta property="og:url" content="https://www.bizarexpedition.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | BizareXpedition™ - Transparency in Travel" />
        <meta name="twitter:description" content="Familiarize yourself with the terms and conditions of BizareXpedition™, 
          detailing our services, user responsibilities, and policies for a seamless travel experience." />
        <meta name="twitter:image" content="https://www.bizarexpedition.com/terms-and-conditions.jpg" />
        {/* Organization Schema */}
        <OrganizationSchema />
      </Head>
      <main>
        <div>
          <DesktopHeader />
          <StaticBreadcrumbs />
          <div>
            {/* medium devices */}
            <div className='md:block hidden'>
              <div className='w-full md:h-[400px] xl:h-[500px] flex relative'>
                <div className='w-[30%] h-full bg-black flex items-center justify-end'>
                </div>
                <div className='relative w-[80%] h-full flex'>
                  <Image src="/assets/staticimage/terms-and-conditions.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
                  <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                  </div>
                </div>
                <div className='w-full h-full absolute'>
                  <div className='w-[60%] h-full flex items-center justify-end px-16'>
                    <div className='w-full flex flex-col justify-center items-center'>
                      <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                        Terms and Conditions <br /> <span className='text-white'>Need tpo know before you go</span>
                      </h2>
                      <p className="my-5 text-base text-white text-center">
                        Welcome to BizareXpedtion! By using our website and services, you agree to comply with the following terms and conditions.
                        Please read them carefullly before proceeding.
                      </p>
                      <Link href="#">
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
                    Terms and Conditions <br /> <span className='text-white'>Need tpo know before you go</span>
                  </h2>
                  <p className="my-5 text-sm  text-white text-center">
                    Welcome to BizareXpedtion! By using our website and services, you agree to comply with the following terms and conditions.
                    Please read them carefullly before proceeding.
                  </p>
                  <Link href="#">
                    <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className='relative w-full h-72'>
                <Image src="/assets/staticimage/terms-and-conditions.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
              </div>
            </div>
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
                          className={`pl-3 text-md font-medium mb-4 hover:cursor-pointer ${activeIndex === section.id
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

export default TermsAndCondition;