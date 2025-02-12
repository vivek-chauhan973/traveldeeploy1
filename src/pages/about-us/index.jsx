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

const fetchAboutUsPage = async () => {
  const res = await fetch(`/api/static-page/static-page-type?name=about-us`);
  return await res.json();
};
const About = (pageprops) => {
  const [aboutData, setAboutData] = useState();
  const { setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }

  }, [pageprops]);
  useEffect(() => {
    fetchAboutUsPage().then(res => {
      console.log("about page is here ---> ", res)
    })
  }, [])

  const [activeIndex, setActiveIndex] = useState("Ideology");

  const paymentPolicySections = [
    {
      id: "Ideology",
      title: "Brand Ideology",
      content: (
        <p className="mb-5 md:text-base text-para">
          At <span className='font-semibold'>BizareXpedition™</span>, we believe that travel should be an experience that transcends
          ordinary expectations. We do not just plan trips; we craft unforgettable journeys that
          embody the highest standards of service, comfort, and luxury. Our mission is simple: Quality
          first, always.
        </p>
      ),
    },
    {
      id: "Excellence",
      title: "We Deliver Excellence, Not Just Low Prices",
      content: (
        <p className="mb-5 md:text-base text-para">
          While we recognize that price plays a significant role in decision-making, we firmly believe
          that true value comes from the experiences we deliver. We offer premium travel services at
          competitive prices, ensuring that every penny spent contributes to an exceptional
          experience. Whether you are traveling for business or leisure, our priority is providing you
          with the finest service, unmatched by any competitor.
        </p>
      ),
    },
    {
      id: "Price",
      title: "Quality First, Price Second.",
      content: (
        <p className="mb-5 md:text-base text-para">
          At <span className='font-semibold'>BizareXpedition™</span>, we do not cut corners. Every aspect of your journey—whether it is
          the accommodations, transportation, personalized concierge service, or curated
          experiences-is meticulously designed to meet the highest standards. We understand that
          great memories are made from details, which is why we place quality at the heart of
          everything we do.
        </p>
      ),
    },
    {
      id: "Service",
      title: "Best Price for Unmatched Service",
      content: (
        <p className="mb-5 md:text-base text-para">
          Our commitment is to deliver more than just a trip; we deliver an experience that is second
          to none. We offer the best prices in terms of value, ensuring that you get the most out of
          your travel investment. With us, you do not have to choose between affordable pricing and
          exceptional quality-we provide both.
        </p>
      ),
    },
    {
      id: "Promise",
      title: "Our Promise",
      content: (
        <div>
          <p className="mb-5 md:text-base text-para">
            When you choose <span className='font-semibold'>BizareXpedition™</span>, you are not just booking a vacation or business trip;
            you are investing in a transformative experience that will leave you with memories to last a
            lifetime. We bring the world to your doorstep, with a promise to deliver not just a service,
            but a world-class experience every time.
          </p>
          <p className="text-gray-500 font-bold">---</p>
        </div>
      ),
    },
    {
      id: "Values",
      title: "Core Values",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li><span className="font-semibold">Excellence : </span>We strive to exceed expectations at every turn.</li>
          <li><span className="font-semibold">Integrity : </span>We operate with transparency and honesty in everything we do.</li>
          <li><span className="font-semibold">Customer-Centric : </span>Our customers needs are at the heart of our service.</li>
          <li><span className="font-semibold">Value-Driven : </span>We provide the best experiences at the most competitive prices.</li>
          <li><span className="font-semibold">Passion for Travel : </span>We are passionate about creating remarkable experiences that enrich our clients lives.</li>
        </ul>
      ),
    },
    {
      id: "Story",
      title: "Brand Story",
      content: (
        <div>
          <p className="mb-5 md:text-base text-para">
            <span className='font-semibold'>BizareXpedition™</span> was founded on a simple idea: to redefine travel with a focus on luxury,
            quality, and value. The founders saw a gap in the market for a travel company that could
            combine top-tier service with competitive pricing, making luxury accessible without
            compromising on the exceptional experiences that travellers deserve.
          </p>
          <p className="mb-5 md:text-base text-para">
            From the very beginning, the team at BizareXpedition™ set out to build a brand that would
            put <span className='font-semibold'>quality first</span>. Whether it is a private charter in the spiritual trip or a cozy stay at a
            boutique hotel in the heart of a vibrant city, our goal has always been to provide an
            unforgettable experience for every traveller.
          </p>
          <p className="mb-5 md:text-base text-para">
            Our commitment to <span className='font-semibold'>unmatched service</span> means that no matter the destination, we ensure
            that each detail of your journey is personalized to your needs. From business retreats to
            family vacations, we bring together the best resources to craft <span className='font-semibold'>experiences that reflect the
              values of luxury, attention to detail, and genuine care for our customers.</span>
          </p>
          <p className="mb-5 md:text-base text-para">
            We do not believe in choosing between price and quality—we deliver both. That is why our
            tagline, <span className="font-semibold italic">“BizareXpedition™ - A signature of Excellence”</span>, speaks to the very heart of what we
            offer : value, quality, and an experience that will leave you coming back for more.
          </p>
          <p className="mb-5 md:text-base text-para">
            Thus, “BizareXpedition™” was born-a travel company with a mission to redefine
            the way we perceive exploration. It was not just about visiting destinations; it was
            about commencing on unconventional quests, uncovering hidden gems, and
            embracing the oddities that make each place special.
          </p>
          <p className="mb-5 md:text-base text-para">
            The team at BizareXpedition™ curated trips that promised not only the thrill of
            adventure but also the joy of discovering the unusual. From mystical encounters in
            the spiritual heart of Uttarakhand to the wild and wondrous landscapes of Himachal
            Pradesh, from the enchanting valleys of Kashmir to the vibrant tapestry of Rajasthan,
            every journey with <span className="font-semibold">BizareXpedition™</span> was a story waiting to unfold.
          </p>
        </div>
      ),
    },
    {
      id: "Vision",
      title: "Vision Statement",
      content: (
        <div>
          <p className="mb-5 md:text-base text-para">
            To be the leading travel service provider known for delivering <span className="font-semibold">Exceptional Experiences</span> and
            <span className="font-semibold"> Uncompromising quality</span>, where every journey is a seamless fusion of <span className="font-semibold">Luxury, Value, and
              Personalized service</span>. We envision a world where travel is not just about the destination-it is
            about the unforgettable moments we create along the way.
          </p>
          <p className="text-gray-500 font-bold">---</p>
        </div>
      ),
    },
    {
      id: "Mission",
      title: "Mission Statement",
      content: (
        <p className="md:text-base text-para">
          At <span className='font-semibold'>BizareXpedition™</span>, our mission is to redefine travel by offering <span className='font-semibold'>Premium, bespoke
            journeys that prioritize quality, excellence, and value</span>. We are committed to providing our customers with unparalleled service, ensuring every trip is tailored to their individual needs
          and desires. By combining exceptional service with competitive pricing, we aim to make
          luxury travel accessible to all, delivering experiences that exceed expectations, foster lasting
          memories, and inspire new adventures
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        {/* Meta Title/Description/Keywords */}
        <title>About Us | BizareXpedition™ - A Signature of Excellence</title>
        <meta
          name="description"
          content="Discover the story behind BizareXpedition™, a travel brand dedicated to crafting unforgettable journeys 
          with unparalleled quality and value. Learn about our vision, mission, and commitment to redefining travel experiences."
        />
        <meta
          name="keywords"
          content="BizareXpedition™, about us, travel excellence, quality journeys, luxury travel, travel service, brand story"
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="About Us | BizareXpedition™ - A Signature of Excellence" />
        <meta property="og:description" content="Discover the story behind BizareXpedition™, a travel brand dedicated to crafting unforgettable journeys 
          with unparalleled quality and value. Learn about our vision, mission, and commitment to redefining travel experiences." />
        <meta property="og:image" content="https://www.bizarexpedition.com/about-us.jpg" />
        <meta property="og:url" content="https://www.bizarexpedition.com/about-us" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | BizareXpedition™ - A Signature of Excellence" />
        <meta name="twitter:description" content="Discover the story behind BizareXpedition™, a travel brand dedicated to crafting unforgettable journeys 
          with unparalleled quality and value. Learn about our vision, mission, and commitment to redefining travel experiences." />
        <meta name="twitter:image" content="https://www.bizarexpedition.com/about-us.jpg" />
         {/* Organization Schema */}
         <OrganizationSchema/>
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
                  <Image src="/assets/staticimage/about-us.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
                  <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
                  </div>
                </div>
                <div className='w-full h-full absolute'>
                  <div className='w-[60%] h-full flex items-center justify-end px-16'>
                    <div className='w-full flex flex-col justify-center items-center'>
                      <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                        About us <br /> <span className='text-white'>Excellence Defined</span>
                      </h2>
                      <p className="my-5 text-base text-white text-center">
                        At BizareXpedtion, we believe that travel should be an experience that transcends ordinary expectaions.
                        we do not just plan trips; we craft unforgeetable journeys that embody the highest standard of service, comfort, and luxury.
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
                    About us <br /> <span className='text-white'>Excellence Defined</span>
                  </h2>
                  <p className="my-5 text-sm  text-white text-center">
                    At BizareXpedtion, we believe that travel should be an experience that transcends ordinary expectaions.
                    we do not just plan trips; we craft unforgeetable journeys that embody the highest standard of service, comfort, and luxury.
                  </p>
                  <Link href="/">
                    <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold  py-1.5 px-3 rounded text-sm">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className='relative w-full h-72'>
                <Image src="/assets/staticimage/about-us.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
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

export default About;