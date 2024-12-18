import React, { useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const PrivacyPolicy = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const paragraphs = [
    {
      id: "1st",
      text: "What is a business travel app?",
      desc: `What do we mean by corporate travel app, exactly, and what can
             these business travel apps do? Whether accessed via a desktop or
             downloaded to your smartphone or tablet, travel apps lighten the
             load of trip planning. Use general travel apps to find and book
             flights, hotels, and car rentals, or plan your itinerary. With
             business-specific apps, you can also track expenses and find
             meeting facilities.`
    },
    {
      id: "2nd",
      text: "How long does it take the average person to plan a trip?",
      desc: `The study found that trip plannings not only time-consuming, but
             stressful. Over a fifth (22%) of adults surveyed found the
             planning process to be frustrating. Separate research
             commissioned by Hotels.com confirmed this with over 25% of those
             surveyed stating they found trip planning to be one of lifes
             biggest stressors. And roughly 40% stated they had be willing to
             pay more to avoid the planning and research. These are just a
             few reasons to use apps for trip planning to cut down on the
             stress.`
    },
    {
      id: "3rd",
      text: "Business travel tips: how do you plan a trip like a professional?",
      desc: `The study found that trip plannings not only time-consuming, but
             stressful. Over a fifth (22%) of adults surveyed found the
             planning process to be frustrating. Separate research
             commissioned by Hotels.com confirmed this with over 25% of those
             surveyed stating they found trip planning to be one of lifes
             biggest stressors. And roughly 40% stated theyd be willing to
             pay more to avoid the planning and research. These are just a
             few reasons to use apps for trip planning to cut down on the
             stress.`
    },
    {
      id: "4th",
      text: "How can a corporate travel app simplify the planning process?",
      desc: `The study found that trip plannings not only time-consuming, but
             stressful. Over a fifth (22%) of adults surveyed found the
             planning process to be frustrating. Separate research
             commissioned by Hotels.com confirmed this with over 25% of those
             surveyed stating they found trip planning to be one of lifes
             biggest stressors. And roughly 40% stated theyd be willing to
             pay more to avoid the planning and research. These are just a
             few reasons to use apps for trip planning to cut down on the
             stress.`
    },
    {
      id: "5th",
      text: "Corporate travel tools: you'll be able to put all our business travel.",
      desc: `With these apps, youll be able to put all our business travel
             tips into action for fuss-free planning. youll be able to put all our business travel corporate travel.`
    },
  ];

  return (
    <div>
      <DesktopHeader />
      <Breadcrumbs />
      <div>
        <div className='w-full h-[550px] bg-black flex gap-3 justify-around items-center px-5'>
          <div className='w-[650px] h-[400px] text-white flex flex-col justify-between items-start py-10 px-5'>
            <h4 className="md:text-[30px] text-md font-medium mb-2 capitalize">Privacy Policy</h4>
            <p className='text-[64px]'><span className='text-primary'>PAINT THE WORLD ORANGE</span> WITH SIXT</p>
            <p className='text-md'>
              Veena World’s privacy policy goes over the information we collect from customers and explains your choices surrounding
              how we use information about you.
            </p>
          </div>
          <div className='w-[480px] h-[480px]'>
            <img 
            className='w-full h-full rounded-md'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiX0OEfszfFZTjChd66ocwlhpcLvALqCLJKA&s" 
            alt="" 
            />
          </div>
        </div>
        <div className="container-wrapper py-10">
          <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
            <div className="">
              <div className="sticky top-40 z-10 bg-white shadow-xl rounded-xl md:p-7 p-5">
                <h4 className="text-md font-semibold mb-4 capitalize pl-3">Privacy Policy</h4>
                <div>
                  {paragraphs.map((item, index) => (
                    <ScrollLink
                      key={item.id}
                      to={item.id}
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
                        {item.text}
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
              {paragraphs.map((item, index) => (
                <div key={item.id} className="pt-7 " id={item.id}>
                  <h3 className="md:text-2xl text-xl font-medium mb-2">
                    {item.text}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* footer is here */}
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicy;