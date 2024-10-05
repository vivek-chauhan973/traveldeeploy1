import React, { useState } from 'react';
import Image from 'next/image'
import "../../app/globals.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Arrow from "../../../public/assests/arrow.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowForwardIos
        className={className}
        style={{ ...style, display: "block",color:"white",backgroundColor:"gray",padding:"7px",borderRadius:"5px" ,width:"40px",height:"50px",marginTop:"-30px", }}
        onClick={onClick}
      />
    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowBackIosNew
        className={`${className}`}
        style={{ ...style, display: "block",color:"white",backgroundColor:"gray",padding:"7px",borderRadius:"5px" ,width:"40px",height:"50px",marginTop:"-30px",zIndex:"1" }}
        onClick={onClick}
      />
    );
  }

//   const [showText, setShowText]=useState(true);
// const handleClick=()=>{
//     setShowText(!showText)
// }


export default function BackupIndex(){

    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };



return(
<>
    {/* <Header/> */}
    <div className="relative">

        <div className=" ">
            <div className="container-wrapper">
                <div className=" rounded overflow-hidden">
                    <Image className="w-full h-[420px] object-cover"
                        src="https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251_1280.jpg"
                        alt="" />
                </div>
                <div className="py-5">
                    <p className="font-semibold text-xl">Hello I am Heading</p>
                    <p className="text-para pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius nam, et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
                    </p>
                </div>
            </div>
            <div className="container-wrapper py-10">
                <p className="text-center text-[22px] font-semibold">UTTARAKHAND Hotel SERVICE</p>
                {/* car in a row */}
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-2xl pt-12 pb-4">Popular Hotel</h1>
                    <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                </div>
                <div className="slider-container px-5 container-wrapper ">
                    <Slider {...settings} className="">
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        
                    </Slider>
                </div>
                {/* car in a row */}
                <div className="flex justify-between items-center pt-12 pb-4">
                    <h1 className="font-semibold text-2xl ">Recent Hotel</h1>
                    <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                </div>
                <div className="slider-container px-5 container-wrapper ">
                    <Slider {...settings} className="">
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        <div className="w-72  cursor-pointer">
                            <div>
                                <figure className="">
                                    <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Shoes" />
                                </figure>
                                <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                                    <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                                    <div className="line-clamp-3 my-2">
                                        <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                                    </div>
                                <div>
                                    <div className=" flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <MdLocationPin size={15}/>
                                            <span className="text-sm font-semibold">Haridwar</span>
                                        </div>
                                        <div>
                                            <p className="text-md font-semibold">rs20,000</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* repeat */}
                        
                    </Slider>
                </div>
                {/* in container */}
            </div>
            {/* custom link car rental */}
            <div className="container-wrapper">
                <div className="py-5">
                    <p className="font-semibold text-xl">Hello I am Heading</p>
                    <p className="text-para pb-7 font-semibold">Find the Car Deals</p>
                    <p className="text-para pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
                    </p>
                </div>
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* grid */}
                        <div className="px-5">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize font-semibold cursor-pointer">New Delhi Car Hire</p>
                                {/* <MdKeyboardArrowUp size={50} className="font-semibold" onClick={handleClick}/> */}
                            </div>
                            {/* {showText && (
                                  <ul className="py-1 pl-2">
                                  <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                  <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                  <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                  <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                              </ul>
                            )} */}
                          
                            <hr />
                        </div>
                        {/* grid */}
                        {/* grid */}
                        <div className="px-5">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize font-semibold cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <ul className="py-1 pl-2">
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                            </ul>
                            <hr />
                        </div>
                        {/* grid */}
                        {/* grid */}
                        <div className="px-5">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize font-semibold cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <ul className="py-1 pl-2">
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                            </ul>
                            <hr />
                        </div>
                        {/* grid */}
                        {/* grid */}
                        <div className="px-5">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize font-semibold cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <ul className="py-1 pl-2">
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                                <li className=" capitalize text-sm hover:underline cursor-pointer text-gray-600">Greater Noida Car Hire</li>
                            </ul>
                            <hr />
                        </div>
                        {/* grid */}
                    </div>
                </div>
            </div>

            {/* Faq section */}
            {/* Faq section */}
            {/* Faq section */}
            {/* Faq section */}
            {/* Faq section */}
            {/* Faq section */}


            <div className="container-wrapper">
                <p className="font-semibold text-xl py-10">Frequently Asked question</p>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* faq repeat */}
                        <div className="px-5 mb-10">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize  cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <div>
                                <p className="text-para py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempora hic obcaecati possimus cupiditate optio exercitationem sit, quasi laudantium odio id debitis veritatis voluptas maiores repudiandae ea quisquam itaque harum.</p>
                            </div>
                            <hr />
                        </div>
                    {/* faq repeat */}
                    {/* faq repeat */}
                        <div className="px-5 mb-10">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize  cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <div>
                                <p className="text-para py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempora hic obcaecati possimus cupiditate optio exercitationem sit, quasi laudantium odio id debitis veritatis voluptas maiores repudiandae ea quisquam itaque harum.</p>
                            </div>
                            <hr />
                        </div>
                    {/* faq repeat */}
                    {/* faq repeat */}
                        <div className="px-5 mb-10">
                            <div className="flex justify-between cursor-pointer items-center">
                                <p className=" capitalize  cursor-pointer">New Delhi Car Hire</p>
                                <MdKeyboardArrowUp size={25} className="font-semibold"/>
                            </div>
                            <div>
                                <p className="text-para py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempora hic obcaecati possimus cupiditate optio exercitationem sit, quasi laudantium odio id debitis veritatis voluptas maiores repudiandae ea quisquam itaque harum.</p>
                            </div>
                            <hr />
                        </div>
                    {/* faq repeat */}
                
                </div>

            </div>




        </div>
        {/* <Image  className=" opacity-10 absolute top-0 -z-10 w-full h-full" src="https://images.unsplash.com/photo-1579818276653-bc3240840cf6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    </div>
</>
)
}