import "../app/globals.css";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { VscCompass } from "react-icons/vsc";
import { BsCakeFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../../public/logo.png"
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Headertest () {
    return (
        <>
            <div className=" sticky top-0 z-[99] mb-2">
                <div className=" justify-end flex px-10   bg-black text-white">
                    <ul className="flex gap-x-10 text-para">
                        {/* <li className=" capitalize flex items-center gap-1 cursor-pointer text-primary hover:text-primary"><span><FaHome /></span>Home</li> */}
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><VscCompass /></span>Destinations</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><BsCakeFill /></span>Holiday</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaCarAlt /></span>Car Hire</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoDiamondOutline /></span>Speciality Tour</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaHandshake /></span>Deals</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoIosContacts /></span>Contact us</li>
                    </ul>
                </div>
                <div className=" border-b-4 border-amber-500 shadow-md bg-white">

                    <div className=" container-wrapper py-2 flex items-center justify-between ">
                        <div>
                            <Image className=" w-52" src={logo} alt="" />
                        </div>
                        <div className="flex bg-white justify-between border-slate-300  rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden p-[5px] items-center">
                            <IoIosSearch size={25} />
                            <input className="border-none  focus:outline-none placeholder:text-sm placeholder-black w-full px-1 text-xs" placeholder="Search Your Next Destination" type="text" name="" id="" />
                            <button className="text-white bg-navyblack text-xs rounded-badge px-4 py-1">Search</button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-5 py-3 ">
                                {/* <img src="/assets/logo.png" alt="Logo" className="w-[150px] md:w-[240px] lg:w-[280px]" /> */}
                                {/* <div className="hidden md:flex gap-3">
                                    <button className="flex items-center gap-2 border-white border text-white px-2 py-1 rounded-lg"><span><FaUser /></span> Sign up </button>
                                </div> */}
                                <div className="flex items-center gap-3 ">
                                    <BiSolidPhoneCall className="" size={20} />
                                    <span className=" cursor-pointer hover:underline text-base">+57 572 5442 54 </span>
                                </div>
                                <div className="group relative">
                                    <button className="flex items-center gap-2 text-base px-2 py-1  rounded-lg"><span><RiLoginCircleFill size={20} /></span> <span className="text-base">Login</span>  </button>
                                    {/* <button className="bg-white black py-1 px-2 rounded text-base">Hover Me</button> */}
                                    <div className="hidden group-hover:block absolute bg-gray-200 p-4 rounded  shadow-md">
                                        <p>This is the content shown on hover.</p>
                                    </div>
                                </div>
                                <div className="md:hidden text-white">
                                    <FaBars />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <div className=" justify-end flex px-10 my-1 shadow-md bg-black text-white">
                    <ul className="flex gap-x-10 text-para"> */}
                {/* <li className=" capitalize flex items-center gap-1 cursor-pointer text-primary hover:text-primary"><span><FaHome /></span>Home</li> */}
                {/* <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><VscCompass /></span>Destinations</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><BsCakeFill /></span>Holiday</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaCarAlt /></span>Car Hire</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoDiamondOutline /></span>Speciality Tour</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><FaHandshake /></span>Deals</li>
                        <li className=" capitalize flex items-center gap-1 cursor-pointer hover:text-primary"><span><IoIosContacts /></span>Contact us</li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}