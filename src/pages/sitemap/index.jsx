import React, { useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const Sitemap = () => {

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
        <div className="relative w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
          <Image
            className=" top-0 left-0 w-full h-full object-cover object-center"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
            alt=""
            width={100}
            height={100}
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
        </div>
        <div className='container-wrapper pt-5'>
          <h4 className="md:text-2xl text-md font-medium mb-2 capitalize">Site Map</h4>
          <p className="text-para line-clamp-5">
            A great About Us page comes across as human. It puts a face to a name,
            showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
            sense of connection with the brand. It makes them feel like they know you and that you have something in common.
            A great About Us page comes across as human. It puts a face to a name,
            showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
            sense of connection with the brand. It makes them feel like they know you and that you have something in common.
            A great About Us page comes across as human. It puts a face to a name,
            showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
            sense of connection with the brand. It makes them feel like they know you and that you have something in common.
          </p>
        </div>
        <div className="container-wrapper py-10">
          <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
            <div className="">
              <div className="sticky top-40 z-10 bg-white shadow-xl rounded-xl md:p-7 p-5">
                <h4 className="text-md font-semibold mb-4 capitalize pl-3">Site Map</h4>
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

export default Sitemap;