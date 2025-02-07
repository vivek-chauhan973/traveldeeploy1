{/* blog postskeleton start */ }
//  <div className="mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto">
//   <div className="">
//     <div className="animate-pulse  space-y-3 md:space-x-3 ">
//       <div className=" h-3 md:w-72  w-60  bg-slate-100 rounded col-span-3"></div>
//       <div className="  h-2 md:w-[45%]  w-40 bg-slate-100 rounded col-span-3"></div>
//       <div className="  h-2 md:w-[45%]    w-44    bg-slate-100 rounded col-span-3"></div>
//       <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
//       <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
//     </div>
//     <div className="md:flex  mt-5 ">
//       <div className="bg-slate-100  md:h-96 h-56 w-full md:w-4/6 rounded-[17px] "></div>
//       <div className=" mt-4 ">
//         <div className=" md:ml-6 md:h-72  h-56 md:w-72 w-full bg-slate-100 rounded-[17px] col-span-2"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="mt-6">
//     <div className=" mt-6 container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-full w-full mx-auto">
//         <div className="animate-pulse h-full space-y-4 md:space-x-4">
//             <div className=" rounded bg-slate-100 h-40 w-full "></div>
//             <div className="flex-1 space-y-6 py-2 mb-5 ">
//             </div>
//         </div>
//     </div>
// </div> 
//  <div className="mt-6">
//     <div className=" container-wrapper   bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto" >
//         <div className=" grid md:grid grid-cols-1 gap-4   lg:grid-cols-4">
//             <div className=" md:h-60 h-40  md:w-60 w-full  bg-slate-100 rounded-[17px] "></div>
//             <div className="  md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
//             <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
//             <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
//         </div>
//     </div>
// </div> 


import React, { useEffect } from "react";
import "../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from "next/image";
import Footer from "@/components/Footer";
import SuggestedBlog from "@/components/Blog/Blog-Deatil/SuggestedBlog";
import { Link as ScrollLink } from "react-scroll";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";

const Detail = (pageprops) => {
   const { setServerSideProps} = useCarPopupContext();       
        useEffect(() => {
          if(pageprops){
            setServerSideProps(pageprops || {});
          }
          
        }, [pageprops]);
  return (
    <div>
      <DesktopHeader />
      <Breadcrumbs />
      {/* Blog Hero Section */}
      <div className="bg-slate-100 md:py-16 py-8">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="relative w-full h-60 overflow-hidden md:hidden block mb-5">
              <Image
                className="top-0 left-0 w-full h-full object-cover object-center rounded-lg"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
                alt=""
                width={100}
                height={100}
                onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
                }
              />
            </div>
            <div className="p-5 flex flex-col justify-between items-start w-full h-80 md:h-96 lg:h-[24rem] overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex justify-between w-full text-xs text-gray-500">
                <h5>15/12/24</h5>
                <h5>15 mins read</h5>
              </div>
              <h1 className="xl:text-[37px] text-xl leading-tight text-para font-semibold">
                Apps for trip planning: top 8 corporate travel tools to
                streamline your business
              </h1>
              <p className="md:text-para text-sm line-clamp-3">
                Find business travel planning stressful? Click here for the best
                apps for trip planning and take all the hard work out of it.
              </p>
              <div className="flex xl:gap-5 gap-3 flex-wrap">
                <button className=" md:px-5 px-3 py-1 rounded-full shadow-md bg-[#C8E4F8] text-blue-500 text-xs">
                  Business travel tips
                </button>
                <button className=" md:px-5 px-3 py-1 rounded-full shadow-md bg-[#C8E4F8] text-blue-500 text-xs">
                  Business travellers
                </button>
                <button className=" md:px-5 px-3 py-1 rounded-full shadow-md bg-[#C8E4F8] text-blue-500 text-xs">
                  Business travel management
                </button>
                <button className=" md:px-5 px-3 py-1 rounded-full shadow-md bg-[#C8E4F8] text-blue-500 text-xs">
                  Business travel tips
                </button>
              </div>
            </div>
            <div className="relative w-full h-80 md:h-96 lg:h-[24rem] overflow-hidden py-10 md:block hidden">
              <Image
                className=" top-0 left-0 w-full h-full object-cover object-center rounded-r-lg"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
                alt=""
                width={100}
                height={100}
                onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* Blog Detail section start*/}
      <div className="container-wrapper py-10">
        <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr]">
          <div className="pt-5 pr-5 ">
            <div className="sticky top-40 z-10">
              <div className="">
                <ScrollLink
                  to="1st"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    What is a business travel app?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="2nd"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    How long does it take the average person to plan a trip?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="3rd"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    Business travel tips: how do you plan a trip like a
                    professional?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="4th"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    How can a corporate travel app simplify the planning
                    process?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="5th"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <h2 className="font-semibold text-lg my-4 hover:cursor-pointer hover:text-primary">
                    Top 8 corporate travel tools
                  </h2>
                </ScrollLink>
                <ol className="text-para font-medium ml-10">
                  <li className="hover:cursor-pointer hover:text-primary">
                    Hopper: Best for predicting the lowest prices
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Splitwise: Best way to manage shared expenses
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    TripIt: Best for multi-destination itineraries
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Wanderlog: Best company trip planning app for road trips
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Wheely: Best for arriving in style
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Sygic: Best for bleisure travellers
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Packing Pro: Best for strict luggage requirements
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Booking.com for Business: Best for full-service business
                    travel platform
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="pl-5">
            <div id="ItinerarySubSection" className="mt-5">
              <p className="text-base leading-relaxed">
                We are all looking for productivity hacks to help us get
                organized and reduce stress, and with an app for trip planning
                you can get business travel booked in no time. Whether you are
                after a streamlined way to track expenses, stick to a budget,
                pack more efficiently, or plan your route, business travel apps
                tackle all the above.
              </p>
              <p className="text-base leading-relaxed">
                With so many corporate travel apps on the market, it can be
                difficult to know which are worth using. Never fear we have
                rounded up the top eight apps and a few bonus business travel
                tips to help you get started.
              </p>
            </div>
            <div className="pt-7" id="1st">
              <h3 className="text-[30px] font-medium mb-2">
                What is a business travel app?
              </h3>
              <p className="text-base leading-relaxed">
                What do we mean by corporate travel app, exactly, and what can
                these business travel apps do? Whether accessed via a desktop or
                downloaded to your smartphone or tablet, travel apps lighten the
                load of trip planning. Use general travel apps to find and book
                flights, hotels, and car rentals, or plan your itinerary. With
                business-specific apps, you can also track expenses and find
                meeting facilities.
              </p>
            </div>
            <div className="pt-7" id="2nd">
              <h3 className="text-[30px] font-medium mb-2">
                How long does it take the average person to plan a trip?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated they had be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="3rd">
              <h3 className="text-[30px] font-medium mb-2">
                Business travel tips: how do you plan a trip like a
                professional?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated theyd be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="4th">
              <h3 className="text-[30px] font-medium mb-2">
                How can a corporate travel app simplify the planning process?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated theyd be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="5th">
              <h3 className="text-[30px] font-medium mb-2">
                Top 8 corporate travel tools
              </h3>
              <p className="text-base leading-relaxed">
                With these apps, youll be able to put all our business travel
                tips into action for fuss-free planning.
              </p>
              <ol className="ml-10 py-5">
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Hopper: Best for predicting the lowest prices
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Splitwise: Best way to manage shared expenses
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    TripIt: Best for multi-destination itineraries
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Wanderlog: Best company trip planning app for road trips
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Wheely: Best for arriving in style
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Sygic: Best for bleisure travellers
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Packing Pro: Best for strict luggage requirements
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Booking.com for Business: Best for full-service business
                    travel platform
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/*  Suggested Blog here*/}
      <div>
        <SuggestedBlog />
      </div>
      {/* Blog Detail section end*/}
      <Footer />
    </div>
  );
};

export default Detail;
