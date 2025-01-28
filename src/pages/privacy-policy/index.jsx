import React, { useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

// const fetchPrivacyPolicyPage = async () => {
//   const res = await fetch(`/api/static-page/static-page-type?name=privacy-policy`);
//   return await res.json();
// };
const PrivacyPolicy = () => {

  const [activeIndex, setActiveIndex] = useState("PrivacyPolicy");

  const PrivacyPolicySections = [
    {
      id: "PrivacyPolicy",
      title: "Privacy Policy",
      content: (
        <div>
          <p className='md:text-lg text-md font-semibold'>Introduction</p>
          <p className="mb-5 mt-3 md:text-base text-para">
            <span className='font-semibold'>BizareXpedition Services Pvt. Ltd.</span> (hereinafter referred to as "BizareXpedition," "we,"
            "us," or "our") values and respects the privacy of its customers (hereinafter referred to as
            "you" or "your"). This Privacy Policy outlines how we collect, use, disclose, and protect your
            personal information provided through our website, offices, and other communication
            channels.
          </p>
          <p className="mb-5 mt-3 md:text-base text-para">
            By using our website, booking a service, or engaging with us in any way, you agree to the
            collection and use of your information as described in this Privacy Policy. If you do not agree
            with our practices, please refrain from using our services.
          </p>
        </div>
      ),
    },
    {
      id: "Scope",
      title: "Scope",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          This Privacy Policy applies to all individuals who interact with BizareXpedition for the
          purpose of booking, purchasing, or inquiring about any of our travel-related services. It
          governs all touchpoints, including but not limited to our website, mobile applications, branch
          offices, and sales partners.
        </p>
      ),
    },
    {
      id: "Information",
      title: "Collection of Personal Information",
      content: (
        <div>
          <p className="mb-2 md:text-base text-para">We may collect the following personal information from you to provide and improve our services : </p>
          <ul className="list-disc ml-8 md:text-base text-para">
            <li><span className="font-semibold">General Information : </span>Name, address, email address, phone number, date of birth,
              and gender.</li>
            <li><span className="font-semibold">Identification Details : </span>Credit/debit card information (securely encrypted), banking details,
              or other payment information.</li>
            <li><span className="font-semibold">Payment Details : </span>Name, address, email address, phone number, date of birth,
              and gender.</li>
            <li><span className="font-semibold">Travel Information : </span>Preferences, medical conditions, dietary requirements, and other
              travel-related details for customized services.</li>
            <li><span className="font-semibold">Website Data : </span>IP address, browser type, location data, and browsing behavior for
              system administration and service improvement.</li>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">We may also collect sensitive personal data (such as medical certificates) when necessary to
            fulfill your specific travel needs.</p>
        </div>
      ),
    },
    {
      id: "dataCollection",
      title: "Purpose of Data Collection",
      content: (
        <div>
          <p className="mb-2 md:text-base text-para">We collect and use your information for the following purposes : </p>
          <ul className="ml-8 md:text-base text-para">
            <li className="font-semibold list-decimal">Booking and Fulfillment :</li>
            <ul className="ml-8 md:text-base text-para">
              <li>To process bookings and issue confirmations.</li>
              <li> To provide information related to your travel plans and itineraries.</li>
            </ul>
            <li className="font-semibold list-decimal">Communication : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>To update you on transaction status and send tour-related alerts.</li>
              <li>To notify you of changes or cancellations in services.</li>
            </ul>
            <li className="font-semibold list-decimal">Customer Support : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>To handle queries, complaints, and feedback.</li>
            </ul>
            <li className="font-semibold list-decimal">Marketing and Promotions : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>To send newsletters, offers, and promotional material tailored to your
                interests.</li>
            </ul>
            <li className="font-semibold list-decimal">Legal Compliance : </li>
            <ul className="ml-8 md:text-base text-para mb-5">
              <li>To comply with legal obligations or resolve disputes.</li>
            </ul>
          </ul>
        </div>
      ),
    },
    {
      id: "Cookies",
      title: "Use of Cookies",
      content: (
        <div>
          <p className="mb-2 md:text-base text-para">Our website uses cookies to enhance your browsing experience. Cookies are small files
            stored on your device that enable us to : </p>
          <ul className="list-disc ml-8 md:text-base text-para">
            <li>Remember your preferences and login details.</li>
            <li>Track website usage and improve functionality.</li>
            <li>Display advertisements tailored to your interests.</li>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">You can disable cookies through your browser settings; however, this may limit the
            functionality of our website.</p>
        </div>
      ),
    },
    {
      id: "Sharing",
      title: "Sharing of Personal Information",
      content: (
        <div>
          <p className="mb-2 md:text-base text-para">Your personal information may be shared with : </p>
          <ul className="ml-8 md:text-base text-para">
            <li className="font-semibold list-decimal">Service Providers : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>Hotels, airlines, transport providers, and destination management companies
                involved in fulfilling your travel arrangements.</li>
            </ul>
            <li className="font-semibold list-decimal">Business Partners : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>Banks, insurance companies, or other third parties for related services like
                travel insurance, visa processing, or international SIM cards.</li>
            </ul>
            <li className="font-semibold list-decimal">Legal Authorities : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>When required by law, court orders, or government regulations.</li>
            </ul>
            <li className="font-semibold list-decimal">Corporate Affiliates : </li>
            <ul className="ml-8 md:text-base text-para">
              <li>Our subsidiaries, parent company, or group entities under secure conditions.</li>
            </ul>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">We ensure that all third parties adhere to confidentiality and data protection practices aligned
            with this policy.</p>
        </div>
      ),
    },
    {
      id: "Security",
      title: "Data Security",
      content: (
        <div>
          <p className="mb-2 md:text-base text-para">We prioritize the security of your personal information and implement stringent measures,
            including : </p>
          <ul className="list-disc ml-8 md:text-base text-para">
            <li><span className="font-semibold">Encryption : </span>Using SSL (Secure Socket Layer) technology to encrypt sensitive data.</li>
            <li><span className="font-semibold">Restricted Access : </span> Limiting access to personal information only to authorized
              personnel.</li>
            <li><span className="font-semibold">Secure Servers : </span>Storing information on servers equipped with advanced security
              protocols.</li>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">However, no system is completely foolproof. By using our website and services, you
            acknowledge the risks associated with data transmission over the internet.</p>
        </div>
      ),
    },
    {
      id: "Websites",
      title: "Third-Party Websites",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          Our website may contain links to external websites. BizareXpedition is not responsible for
          the privacy practices or content of third-party websites. We encourage you to review the
          privacy policies of these websites before providing any personal information.
        </p>
      ),
    },
    {
      id: "Consent",
      title: "Marketing Consent",
      content: (
        <div>
          <p className="mb-5 mt-3 md:text-base text-para">
            We may use your personal data to send you marketing communications such as : </p>
          <ul className="list-disc ml-8 md:text-base text-para">
            <li>Exclusive offers, discounts, and promotions.</li>
            <li>Newsletters and travel-related updates.</li>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">You can opt-out of marketing communications at any time by contacting us at
            <Link href="mailto: info@bizarexpedition.com" target='_blank' className='text-blue-600 underline underline-offset-2'> info@bizarexpedition.com </Link>
            or using the unsubscribe link provided in our emails.</p>
        </div>
      ),
    },
    {
      id: "photographsTestimonials",
      title: "Photographs and Testimonials",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          By participating in our tours, you consent to the use of photographs or videos captured during
          the trip for promotional purposes. If you do not wish to participate, please notify us in
          advance.
        </p>
      ),
    },
    {
      id: "Retention",
      title: "Data Retention",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          We retain your personal information only for as long as necessary to fulfill the purposes
          outlined in this policy or comply with legal obligations.
        </p>
      ),
    },
    {
      id: "Rights",
      title: "Your Rights",
      content: (
        <div>
          <p className="mb-2 mt-3 md:text-base text-para">You have the following rights regarding your personal data : </p>
          <ul className="ml-8 md:text-base text-para">
            <li className="list-decimal"><span className="font-semibold">Access : </span>Request a copy of the information we hold about you.</li>
            <li className="list-decimal"><span className="font-semibold">Correction : </span>Update or correct inaccuracies in your data.</li>
            <li className="list-decimal"><span className="font-semibold">Erasure : </span>Request deletion of your personal data (subject to legal limitations).</li>
            <li className="list-decimal"><span className="font-semibold">Objection : </span>Opt-out of data processing for marketing purposes.</li>
          </ul>
          <p className="mb-5 mt-3 md:text-base text-para">To exercise these rights, contact us at {" "}
            <Link href="mailto: info@bizarexpedition.com" target='_blank' className='text-blue-600 underline underline-offset-2'>  info@bizarexpedition.com </Link>
          </p>
        </div>
      ),
    },
    {
      id: "Changes",
      title: "Changes to Privacy Policy",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          BizareXpedition reserves the right to modify this Privacy Policy at any time. Changes will be
          posted on our website, and continued use of our services implies acceptance of the updated
          policy.
        </p>
      ),
    },
    {
      id: "Contact",
      title: "Contact Us",
      content: (
        <div>
          <p className="mb-2 mt-3 md:text-base text-para">For any questions or concerns regarding this Privacy Policy, please reach out to us at : </p>
          <ul className="ml-8 md:text-base text-para">
            <li className="list-decimal"><span className="font-semibold">Email : </span>
            <Link href="mailto: info@bizarexpedition.com" target='_blank' className='text-blue-600 underline underline-offset-2'>  info@bizarexpedition.com </Link>
            </li>
            <li className="list-decimal"><span className="font-semibold">Phone : </span>+91-98731-52953</li>
            <li className="list-decimal mb-5"><span className="font-semibold">Office Address : </span>13A/4, THDC Near Shivalik Mart, Near, near Ram Mandir, Ranipur,
            Haridwar, Uttarakhand 24940713A/4, THDC Near Shivalik Mart, Near, near Ram Mandir, Ranipur,
            Haridwar, Uttarakhand 249407</li>
          </ul>
        </div>
      ),
    },
  ];

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
              <img src="/assets/staticimage/privacyPolicy1.jpg" alt="" className='relative w-full h-full' />
              <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
              </div>
            </div>
            <div className='w-full h-full absolute'>
              <div className='w-[60%] h-full flex items-center justify-end px-16'>
                <div className='w-full flex flex-col justify-center items-center'>
                  <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                    Privacy Policy <br /> <span className='text-white'>Your privacy matters to us</span>
                  </h2>
                  <p className="my-5 text-base text-white text-center">
                    At BizareXpedtion, we are commited to protecting your privacy and ensuring a safe online experience.
                    This Privacy Policy outlines how we collect, use, and safe-guard your personel information when you visit
                    our website or use our services.
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
                Privacy Policy <br /> <span className='text-white'>Your privacy matters to us</span>
              </h2>
              <p className="my-5 text-sm  text-white text-center">
                At BizareXpedtion, we are commited to protecting your privacy and ensuring a safe online experience.
                This Privacy Policy outlines how we collect, use, and safe-guard your personel information when you visit
                our website or use our services.
              </p>
              <Link href="#">
                <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
          <div className='relative w-full h-72'>
            <img src="/assets/staticimage/privacyPolicy1.jpg" alt="" className='relative w-full h-full' />
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
  )
}

export default PrivacyPolicy;





