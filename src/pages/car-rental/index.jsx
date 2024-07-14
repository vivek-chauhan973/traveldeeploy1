import "../../app/globals.css"
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Picker from "./picker";
import Carousel from "@/components/car-rental/CarouselCard";
import Headertest from "@/components/Headertest";
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
                 {/* CarRentalHomeSkelton  */} 
                <Headertest />
                 
                <div className="container-wrapper">
                </div>
                <div className="mb-5">
                    <div className="overflow-hidden relative md:h-[83vh]">
                        <div className="container-wrapper">
                            <div className="absolute top-20">
                                <h1 className="font-semibold text-white w-2/3">India No.1 Bizare Expedition Car rental</h1>
                            </div>
                        </div>
                        <div className="container-wrapper xl:block hidden">
                            <div className="absolute top-2/4 -translate-y-2/4 w-2/4">
                                <Picker />                              
                            </div>
                        </div>
                        <div>
                            <Image className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                    </div>
                    <div className="py-5 container-wrapper pt-10 ">
                        <p className="md:font-semibold font-medium text-xl">Hello I am Heading</p>
                        <p className="text-para pt-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius nam, et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
                        </p>
                    </div>
                </div>
                {/* four Images */}
                <div className="container-wrapper grid md:grid grid-cols-2 gap-4   lg:grid-cols-4">
                    <div className="relative mb-2">
                        <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110"
                         src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="" />
                        <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                            <p className="text-[25px] font-bold">himacahl</p>
                        </div>
                    </div>
                    <div className="relative mb-2">
                        <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110"
                         src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="" />
                        <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                            <p className=" text-[25px]	 font-bold">Kerala</p>
                        </div>
                    </div>
                    <div className="relative mb-2">
                        <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                            <p className="text-[25px] font-bold">Uttarakhand</p>
                        </div>
                    </div>
                    <div className="relative mb-2">
                        <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="absolute  inset-x-0 bottom-0 bg-opacity-50 text-white text-center py-2">
                            <p className="text-[25px] font-bold">  Rajastan</p>
                        </div>
                    </div>

                </div>
                {/* complete images */}
                <div className="container-wrapper py-10 ">
                    <h1 className="text-center font-semibold">UTTARAKHAND TAXI SERVICE</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="md:font-semibold font-medium text-xl py-5">Popular Car</h1>
                        <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                    </div>
                    <div className="container-wrapper">
                        <Carousel />
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="md:font-semibold font-medium  text-xl py-5">Recent Car</h1>
                        <button className="border border-navyblack rounded hover:bg-navyblack hover:text-white text-para px-3 py-2">See All</button>
                    </div>
                    <div className="container-wrapper">
                        <Carousel />
                    </div>
                </div>
                <div className="container-wrapper">
                    <div className="py-5">
                        <p className="md:font-semibold font-medium text-xl">Hello I am Heading</p>
                        <p className="text-para pb-7 md:font-semibold font-medium">Find the Car Deals</p>
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
                    <p className="md:font-semibold font-medium text-lg py-10">Frequently Asked Questions</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        {faqData.map((faq, index) => (
                            <FAQSection key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
