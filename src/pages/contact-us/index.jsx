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

const Contact = (pageprops) => {
  const { setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }

  }, [pageprops]);
  const [activeIndex, setActiveIndex] = useState("contact");

  const contactSections = [
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          We are here to help! Whether you have questions, need assistance, or want to book your next
          unforgettable journey, feel free to get in touch with us. Our team is always ready to assist you.
        </p>
      )
    },
    {
      id: "Address",
      title: "Office Address",
      content: (
        <p className="md:text-base text-para">
          <span className="font-semibold">BizarreXpedition™ Services Pvt. Ltd.</span>
          <br /> 13A/4, THDC Near Shivalik Mart,
          <br /> Near Ram Mandir, Ranipur, Haridwar
          <br /> Uttarakhand, India - 249407
        </p>
      ),
    },
    {
      id: "Numbers",
      title: "Phone Numbers",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li>
            <span className="font-semibold">Customer Support : </span>
            <Link href="mailto: info@bizarexpedition.com" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-98731-52953
            </Link>
          </li>
          <li>
            <span className="font-semibold">Booking Assistance : </span>
            <Link href="mailto: info@bizarexpedition.com" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-7252-885-525
            </Link>
          </li>
          <li>
            <span className="font-semibold">General Inquiries : </span>
            <Link href="mailto: info@bizarexpedition.com" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-9897-581-113
            </Link>
          </li>
        </ul>
      ),
    },
    {
      id: "Email",
      title: "Email",
      content: (
        <p>
          <span className="font-semibold md:text-base text-para">General Inquiries : </span>
          <Link href="mailto: info@bizarexpedition.com" target="_blank" className="text-blue-600 md:text-base text-para underline nderline-offset-2">
            info@bizarrexpedition.com
          </Link>
        </p>
      ),
    },
    {
      id: "WhatsApp",
      title: "WhatsApp",
      content: (
        <p>
          <span className="font-semibold md:text-base text-para">Chat with us directly on WhatsApp : </span>
          <Link href="https://api.whatsapp.com/send/?phone=919897581113" target="_blank" className="text-blue-600 md:text-base text-para">
            +91-9897-581-113
          </Link>
        </p>
      ),
    },
    {
      id: "SocialMedia",
      title: "Follow Us on Social Media",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li><span className="font-semibold">Instagram : </span>
            <Link href="https://www.instagram.com/bizarexpedition" target="_blank" className="text-blue-600">@bizarrexpedition</Link>
          </li>
          <li><span className="font-semibold">Facebook : </span>
            <Link href="https://www.facebook.com/bizareX" target="_blank" className="text-blue-600">BizareX</Link>
          </li>
          <li><span className="font-semibold">Twitter : </span>
            <Link href="https://twitter.com/bizarexpedition" target="_blank" className="text-blue-600">@BizareXpedition</Link>
          </li>
          <li><span className="font-semibold">LinkedIn : </span>
            <Link href="https://www.linkedin.com/company/13630320/" target="_blank" className="text-blue-600">BizareXpedition</Link>
          </li>
          <li><span className="font-semibold">YouTube : </span>
            <Link href="https://youtube.com" target="_blank" className="text-blue-600">@BizarexpeditionInn</Link>
          </li>
        </ul>
      ),
    },
    {
      id: "OfficeHours",
      title: "Office Hours",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li><span className="font-semibold">Monday to Saturday : </span> 9:00 AM – 7:00 PM</li>
          <li><span className="font-semibold">Sunday : </span> Closed</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        {/* Meta Title/Description/Keywords */}
        <title>Contact Us | BizareXpedition™ - We are Here to Help!</title>
        <meta
          name="description"
          content="Need assistance? Reach out to BizareXpedition™ via phone, email, or
                    social media. Our team is here to make your journey unforgettable."
        />
        <meta
          name="keywords"
          content="Contact us, BizareXpedition™, customer support, travel assistance, help desk, reach out, travel queries"
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Us | BizareXpedition™ - We are Here to Help!" />
        <meta property="og:description" content="Need assistance? Reach out to BizareXpedition™ via phone, email, or
            social media. Our team is here to make your journey unforgettable." />
        <meta property="og:image" content="https://www.bizarexpedition.com/contact-us.jpg" />
        <meta property="og:url" content="https://www.bizarexpedition.com/contact-us" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | BizareXpedition™ - We are Here to Help!" />
        <meta name="twitter:description" content="Need assistance? Reach out to BizareXpedition™ via phone, email, or
            social media. Our team is here to make your journey unforgettable." />
        <meta name="twitter:image" content="https://www.bizarexpedition.com/contact-us.jpg" />
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
                  <Image src="/assets/staticimage/contact-us.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
                  <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                  </div>
                </div>
                <div className='w-full h-full absolute'>
                  <div className='w-[60%] h-full flex items-center justify-end px-16'>
                    <div className='w-full flex flex-col justify-center items-center'>
                      <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                        Contact us <br /> <span className='text-white'>We are here to help</span>
                      </h2>
                      <p className="my-5 text-base text-white text-center">
                        we are here to help! Whether you have a question about your booking, need assistance with your travel plans, or just want to know
                        more about our services, feel free to get in touch with us.
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
                    Contact us <br /> <span className='text-white'>We are here to help</span>
                  </h2>
                  <p className="my-5 text-sm text-white text-center">
                    we are here to help! Whether you have a question about your booking, need assistance with your travel plans, or just want to know
                    more about our services, feel free to get in touch with us.
                  </p>
                  <Link href="/">
                    <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1.5 px-3 rounded text-sm">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className='relative w-full h-72'>
                <Image src="/assets/staticimage/contact-us.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
              </div>
            </div>
            {/* herosection end */}
            {/* Content Section */}
            <div className="container-wrapper py-10">
              <div className="grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
                <div>
                  <div className="sticky top-40 z-10 bg-white shadow-md rounded-md md:p-10 p-5">
                    {contactSections.map((section) => (
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
                  {contactSections.map((section) => (
                    <div key={section.id} id={section.id} className="mb-6">
                      <h2 className="md:text-lg text-md font-semibold mb-1">{section.title}</h2>
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

export default Contact;
