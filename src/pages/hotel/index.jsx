import "../../app/globals.css"
import { useState } from "react";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import Picker from "./picker";
import Carousel from "@/components/car-rental/CarouselCard";
import { MdLocationPin } from "react-icons/md";
import HotelCarousel from "@/components/hotelCarousel";
import Image from 'next/image'




const CarHireSection = ({ title, services }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-5">
            <div
                className="flex justify-between cursor-pointer items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="capitalize font-semibold cursor-pointer">{title}</p>
                {isOpen ? (
                    <MdKeyboardArrowUp size={25} className="font-semibold" />
                ) : (
                    <MdKeyboardArrowDown size={25} className="font-semibold" />
                )}
            </div>
            {isOpen && (
                <ul className="py-1 pl-2">
                    {services.map((service, index) => (
                        <li key={index} className="capitalize text-sm hover:underline cursor-pointer text-gray-600">{service}</li>
                    ))}
                </ul>
            )}
            <hr />
        </div>
    );
};

const FAQSection = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-5 mb-10">
            <div
                className="flex justify-between cursor-pointer items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="capitalize cursor-pointer">{question}</p>
                {isOpen ? (
                    <MdKeyboardArrowUp size={25} className="font-semibold" />
                ) : (
                    <MdKeyboardArrowDown size={25} className="font-semibold" />
                )}
            </div>
            {isOpen && (
                <div>
                    <p className="text-para py-1">{answer}</p>
                </div>
            )}
            <hr />
        </div>
    );
};

export default function App() {
    const carHireData = [
        { title: "New Delhi Car Hire", services: ["Greater Noida Car Hire", "Noida Car Hire", "Gurgaon Car Hire"] },
        { title: "Mumbai Car Hire", services: ["Navi Mumbai Car Hire", "Thane Car Hire"] },
        { title: "Bangalore Car Hire", services: ["Whitefield Car Hire", "Indiranagar Car Hire"] },
        // Add more states and services as needed
    ];

    const faqData = [
        { question: "How to hire a car in New Delhi?", answer: "You can hire a car by contacting our support or booking online through our website." },
        { question: "What documents are required?", answer: "You need a valid driving license, ID proof, and address proof to hire a car." },
        { question: "What are the payment options?", answer: "We accept credit cards, debit cards, and UPI payments." },
        // Add more FAQs as needed
    ];

    

    return (
        <>
            <div>
        
                <div className="container-wrapper">
                </div>
                <div className="">
                    <div className="overflow-hidden relative h-[65vh] ">
                        <div className="container-wrapper">
                            <div className="absolute top-20">
                                <h1 className="font-semibold text-white w-2/3">India No.1 Bizare Expedition Car rental</h1>
                            </div>
                        </div>
                        <div className="container-wrapper">
                            <div className="absolute top-2/4 -translate-y-2/4 w-2/4">
                                {/* <Picker /> */}
                                
                            </div>
                        </div>
                        <div>
                            <Image className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                    </div>
                    <div className="py-5 container-wrapper pt-10">
                        <p className="font-semibold text-xl">Hello I am Heading</p>
                        <p className="text-para pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius nam, et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
                        </p>
                    </div>
                </div>
                <div className="container-wrapper py-10 ">
                    <h1 className="text-center font-semibold">UTTARAKHAND TAXI SERVICE</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-2xl py-5">Popular Car</h1>
                        <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                    </div>
                    <div className="container-wrapper">
                        <HotelCarousel/>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-2xl py-5">Recent Car</h1>
                        <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                    </div>
                    <div className="container-wrapper">
                        <HotelCarousel/>
                    </div>
                </div>
                <div className="container-wrapper">
                    <div className="py-5">
                        <p className="font-semibold text-xl">Hello I am Heading</p>
                        <p className="text-para pb-7 font-semibold">Find the Car Deals</p>
                        <p className="text-para pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
                        </p>
                    </div>
                    <div className="py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {carHireData.map((carHire, index) => (
                                <CarHireSection key={index} title={carHire.title} services={carHire.services} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container-wrapper">
                    <p className="font-semibold text-xl py-10">Frequently Asked Questions</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        {faqData.map((faq, index) => (
                            <FAQSection key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
            {/* trial of card */}


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
        </>
    );
}
