// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import '../app/globals.css';

// const fetchCountries = async () => {
//   try {
//     const res = await fetch('api/public/countries', { method: 'GET' });
//     const data = await res.json();
//     return data.countries;
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// };

// const fetchStates = async () => {
//   try {
//     const res = await fetch('api/public/states');
//     const data = await res.json();
//     return data.states;
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// };

// export default function Page() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedCountries = await fetchCountries();
//       const fetchedStates = await fetchStates();
//       setCountries(fetchedCountries);
//       setStates(fetchedStates);
//     };

//     fetchData();
//   }, []);
// // console.log("state url 823729364932",states.pageUrl)
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Homepage!</h1>

//       {[
//         { href: 'account/login', label: 'Login' },
//         { href: 'account/signup', label: 'Signup' },
//         { href: 'packages/promopage/promo', label: 'Package List page' },
//         { href: 'packages/details', label: 'Package Detail page' },
//         { href: 'home/home', label: 'Home page' },
//       ].map((link, index) => (
//         <div key={index} className="mb-2">
//           <Link href={link.href} className="text-blue-500 hover:underline">
//             {link.label}
//           </Link>
//         </div>
//       ))}

//       <hr />

//       {countries && countries.map((country) => (
//         <div key={country.id} className="mb-2">
//           <Link href={'world/' + country.name}>
//             {country.name}
//           </Link>
//         </div>
//       ))}

//       {states && states.map((state) => (
//         <div key={state.id} className="mb-2">
//           <Link href={'india/' + state.pageUrl}>
//             {state.name}
//           </Link>
//         </div>
//       ))}

//     </div>
//   );
// }

import Image from "next/image";
import '../app/globals.css'
// import Card1 from "@/components/Home/Cards/Card1";
import Card2 from "@/components/Home/Cards/Card2";
// import Card3 from "@/components/Home/Cards/Card3";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
import Cardwork from "@/components/Home/Cards/cardwork";
import ArrowSection from "@/components/Home/Cards/ArrowSection";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import State from "@/components/Home/Cards/State";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";
import Promises from "@/components/Home/Cards/Promises";
import CarArrowSection from "@/components/Home/Cards/CarArrowSection";
import StateCard from "@/components/Home/Cards/StateCard";

// import Booking from "@/components/profile/bookings";
const fetchAllSingleSction = async () => {
  const res = await fetch("/api/home/homefooter");
  return await res.json();
}
const fetchAllMultiSction = async () => {
  const res = await fetch("/api/homefooter");
  return await res.json();
}


const fetchState = async () => {
  const response = await fetch("/api/public/states");
  return await response.json();
};

export default function Home() {
  const [states, setStates] = useState([]);
  const [homePackages, SetHomePackages] = useState([]);
  const [homeSinglePackages, setSingleHomePackages] = useState([]);
  const [packages, setPackages] = useState([]);
  const [cityPackages, setCityPackages] = useState([])
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);
  const boxShadowStyle = {
    boxShadow: "inset 0px -50px 20px  rgba(0, 0, 0, 0.8)",
  };
  useEffect(() => {
    // fetchState().then((res) => setStates(res?.states || []));
    fetchAllMultiSction().then(res => {
      console.log("res--of all packages -----> ", res?.data);
      SetHomePackages(res?.data)
    })
    fetchAllSingleSction().then(res => { console.log("res--of single all packages -----> ", res); setSingleHomePackages(res?.data) })
  }, []);

  useEffect(() => {
    const data = homePackages?.filter(item => item.category === "category1");
    // console.log("data of home packages", data?.[0]?.options)
    setStates(data?.[0]?.options || []);
    const data1 = homePackages?.filter(item => item.category === "category5");
    // console.log("data of packages", data1)
    setPackages(data1?.[0]?.options || []);
    const data2 = homePackages?.filter(item => item.category === "category2");
    // console.log("data of packages", data1)
    setCityPackages(data2?.[0]?.options || [])

  }, [homePackages]);
  useEffect(() => {
    const data = homeSinglePackages?.filter(item => item.category === "category1");
    // console.log("data of home packages", data?.[0]?.options)
    setCategory1(data);
    const data1 = homeSinglePackages?.filter(item => item.category === "category5");
    // console.log("data of packages", data1)
    setCategory2(data1);
    const data2 = homeSinglePackages?.filter(item => item.category === "category2");
    // console.log("data of packages", data1)
    setCategory3(data2)

  }, [homeSinglePackages]);

  console.log("States", category1?.[0]?.options?.[0]);
  // console.log("packages", packages);
  // console.log("cityPackages", cityPackages);


  return (
    <>
      <DesktopHeader />
      <HeroSection />
      {/* <Loading/> */}
      {/* <Bookings/> */}
      {/* <Tostify/> */}
      {/* <AdminReview/> */}

      <div className="container-wrapper  md:py-11 py-5">
        <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-16 text-wrap md:items-center ">
          <div className=" md:shrink-0">
            <p className=" text-amber-600   font-semibold mt-2">
              {category1?.[0]?.subtitle}
            </p>
            <h1 className=" md:text-[25px] text-xl  font-medium">{category1?.[0]?.title}</h1>
            <h1 className="md:text-[16px] text-para line-clamp-3">
              {category1?.[0]?.description}
            </h1>
            <button className="mt-3 shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
              Know more
            </button>
          </div>
          <div className=" md:ml-28 ">
            <Image
              width={400}
              height={200}
              className="object-cover rounded-[17px]"
              src={category1?.[0]?.options?.[0]?.posterPath ? category1?.[0]?.options?.[0]?.posterPath : "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Four carousel all state card*/}
      {/* <div className="container-wrapper grid md:grid grid-cols-2 gap-4 mt-2  lg:grid-cols-4">
        {states?.map((item, i) => (
          <div key={i} className="relative mb-2 group">
            <Image
              className="md:h-64 h-44 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform group-hover:scale-110"
              src={item?.posterPath}
              alt=""
              width={300} //256 in phone
              height={288} // 160
            />
            <div
              style={boxShadowStyle}
              className="absolute top-0 left-0 md:h-64 h-44 md:w-[300px] xl:w-[271px] w-full pb-5 text-white md:text-xl text-lg font-semibold flex justify-center items-end rounded-[17px] transition-transform duration-300 transform group-hover:scale-110"
            >
              {item?.selectedItem}
            </div>
          </div>
        ))}
      </div> */}
      {/* Four carousel all state card*/}
      <div>
        <StateCard states={states} />
      </div>

      {/* second image and text */}
      <div className="container-wrapper  md:py-11 py-5">
        <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-16 text-wrap md:items-center ">
          <div className=" md:shrink-0">
            <p className=" text-amber-600 font-semibold mt-2">
              {category3?.[0]?.subtitle}
            </p>
            <h1 className=" md:text-[25px] text-xl  font-medium">{category3?.[0]?.title}</h1>
            <h1 className="md:text-[16px] text-para line-clamp-3">
              {category3?.[0]?.description}
            </h1>
            <button className="mt-3 shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
              Know more
            </button>
          </div>
          <div className=" md:ml-28 ">
            <Image
              width={400}
              height={200}
              className="object-cover rounded-[17px]"
              src={category3?.[0]?.options?.[0]?.posterPath ? category3?.[0]?.options?.[0]?.posterPath : "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* third first image and text */}
      <div className="container-wrapper md:pb-10 pb-5">
        <div className=" md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">
          <div className="">
            <Image
              width={450}
              height={450}
              className="object-cover rounded-[17px]"
              src={category2?.[0]?.options?.[0]?.uploads?.[0]}
              alt=""
            />
          </div>
          <div className="">
            <p className=" text-amber-600  font-semibold mt-2">{category2?.[0]?.subtitle}</p>
            <h1 className="md:text-[25px] text-xl font-medium">
              {category2?.[0]?.title}
            </h1>
            <h1 className="md:text-[16px] text-para line-clamp-3 ">
              {category2?.[0]?.description}
            </h1>
            <div className=" mt-4  flex md:justify-between gap-3  ">
              <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Banner Images */}
      <div className="md:pb-10 pb-5">
        <Cardwork />
      </div>

      {/* horizontal card */}
      <div className="">
        {cityPackages.length > 0 &&
          <div className="container-wrapper text-center pb-2">
            <p className='md:text-[25px] text-xl font-medium mb-1'>
              Your Next Remarkable Adventure Awaits
            </p>
          </div>
        }
        {/* very small horizontal card */}
        <div className="container-wrapper justify-center  flex flex-wrap">
          {cityPackages?.map((item, i) => (
            <HorizontalCard key={i} item={item} />
          ))}
        </div>
      </div>

      <div>
        <Card4 packages={packages} />
      </div>
      {/* Card Kuoni copy */}
      <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
        <div className=" md:mt-4 mt-4">
          <ArrowSection />
        </div>
      </div>
      {/* state code start  */}
      <div>
        <State />
      </div>
      {/* Our Promise */}
      <div>
        <Promises />
      </div>
      {/* Country card  */}
      <div>
        <Card2 />
      </div>
      <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
        <div className=" md:mt-4 mt-4">
          <CarArrowSection />
        </div>
      </div>
      <div className="w-full h-96 flex justify-center items-center text-2xl">
        Travel Guide
      </div>
      <div className="w-full h-96 flex justify-center items-center text-2xl border-t">
        Blog
      </div>
      <div>
        <ReviewsCard />
      </div>
      {/* 
            <div className="py-14  bg-slate-200 mb:6 md:mb-10">
                <div className="container-wrapper md:text-[25px] text-xl font-medium text-center pb-10">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md  text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="grid grid-cols-3 container-wrapper gap-x-3 gap-y-10 "> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet </p>
                        </div>
                    </div> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden h-6 w-6">
                            <Image className=" object-cover w-5 h-5 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet .</p>
                        </div>
                    </div> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accomondation</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
      {/* multiple card */}
      {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div> */}
      <Footer />
    </>
  );
}

