import "../../app/globals.css";
import { FaUserAlt } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
// import Header from "@/components/Header";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import Image from 'next/image'


export default function Promo() {
    
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    // console.log("here is my title",title)
    return (
        < div className=" h-[100%]">
            {/* <Header /> */}
            <div className="container-wrapper">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                    <div className=" col-span-3 gap-5 p-3">
                        <div className="w-full border grid grid-cols-3 justify-between rounded-lg  shadow-md">
                            <div className="p-4 px-4">
                                <Image className="w-full h-40 rounded-lg object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                                {/* <div className="grid grid-cols-4 gap-2 py-2">
                                        <Image className="w-full h-10 object-cover rounded" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <Image className="w-full h-10 object-cover rounded" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <Image className="w-full h-10 object-cover rounded" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        <Image className="w-full h-10 object-cover rounded" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div> */}
                            </div>
                            <div className=" col-span-2 flex justify-between">
                                <div className="p-4">
                                    <p className="text-lg font-semibold">Villa Donna | Apartment Units</p>
                                    <p className="text-sm font-semibold text-indigo-800">Panjim <span className="text-slate-600">| 1.3 Km drive to Calangute Beach</span> </p>
                                    <button className="px-2 my-2 py-1 border rounded text-sm">Couple Friedly</button>
                                    <div className="text-sm">
                                        <div className="flex items-center gap-2">
                                            <FaCheck />
                                            <span>BreakFast Included</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCheck />
                                            <span>BreakFast Included</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l w-44 px-4 flex items-center">
                                    <div className=" text-right ">
                                        <p className=" line-through text-sm">₹ 20,000</p>
                                        <p className="text-xl font-semibold">₹ 15,000</p>
                                        <p className="text-slate-400 text-sm py-1">+ ₹ 1,222 taxes & fees Per Night</p>
                                        <button className="bg-amber-500 text-white my-2 px-5 py-2 rounded">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-4">
                                <nav className="relative z-0 inline-flex shadow-sm">
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">9</a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">10</a>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
                                </nav>
                            </div>

                        </div>
                    </div>
                    {/* pagination */}




                    <div className="">
                        <div className="rounded shadow-md bg-white px-5">
                            <div className="pb-5">
                                <p className="text-lg font-semibold">filter</p>
                            </div>
                            <div>
                                <p className="font-semibold text-base underline">Car Type</p>
                                <form className="ml-2 text-para">
                                    <input className="custom-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> I have a bike</label><br />
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                    <label for="vehicle2"> I have a car</label><br />
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                    <label for="vehicle3"> I have a boat</label><br /><br />

                                </form>

                            </div>
                            <div className="pb-5">
                                <p className="font-semibold text-base underline">Capacity</p>
                                <form className="ml-2 text-para">
                                    <input className="custom-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> 3 to 5 Passenger</label><br />
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                    <label for="vehicle2"> 6 More</label><br />
                                </form>
                            </div>
                            <div className="">
                                <p className="font-semibold text-base underline">Price Range</p>
                                <form className="ml-2 text-para">
                                    <input type="range" id="vol" name="vol" min="0" max="50" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* faq section */}

            <div className="container-wrapper">
                <div className="w-2/4 m-auto  ">
                    {question.map((item,i)=>(
                        <div key={i} className="my-3 " >
                            <div onClick={() => toggleAccordion(i)} className="cursor-pointer flex justify-between px-5 py-3 items-center bg-black text-white rounded">
                                <p className="">{item.name}</p>
                                <div>
                                    <FaArrowDown className={`${activeIndex === i  ? "transform rotate-180" : ""}`}  />
                                </div>
                            </div>
                            {activeIndex === i && 
                                <div className="px-5 py-3  border-b">
                                    <p className="text-para">{item.content}</p>
                                </div>
                            }

                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}


const question = [
    {
        id:1,
        name: "Hello i am heading",
        content: "hello i am content skj ask jfaks dfkasdfh kasdflaksdfkjshadfa kajshdf ksadf kjsahdfk jjasdfk hsdfjkhasdf kajshdkjfhasd kjashdfksafd jkhshfdkjsahf"
    },
    {
        id:2,
        name: "Hello i am heading",
        content: "hello i am content skj ask jfaks dfkasdfh kasdflaksdfkjshadfa kajshdf ksadf kjsahdfk jjasdfk hsdfjkhasdf kajshdkjfhasd kjashdfksafd jkhshfdkjsahf"
    },
    {
        id:3,
        name: "Hello i am heading",
        content: "hello i am content skj ask jfaks dfkasdfh kasdflaksdfkjshadfa kajshdf ksadf kjsahdfk jjasdfk hsdfjkhasdf kajshdkjfhasd kjashdfksafd jkhshfdkjsahf"
    },
    {
        id:4,
        name: "Hello i am heading",
        content: "hello i am content skj ask jfaks dfkasdfh kasdflaksdfkjshadfa kajshdf ksadf kjsahdfk jjasdfk hsdfjkhasdf kajshdkjfhasd kjashdfksafd jkhshfdkjsahf"
    },
    {
        id:5,
        name: "Hello i am heading",
        content: "hello i am content skj ask jfaks dfkasdfh kasdflaksdfkjshadfa kajshdf ksadf kjsahdfk jjasdfk hsdfjkhasdf kajshdkjfhasd kjashdfksafd jkhshfdkjsahf"
    },

]

