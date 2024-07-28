


import "../../app/globals.css"
import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import Book from "@/components/Bokings/Book";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { TbCalendarCancel } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";




const Bookings = () => {

    const [plus, setplus] = useState(false)
    const [travel, setTravel] = useState(false)

    const btnChange = () => {
        setplus(!plus)
    }
    const btnChange2 = () => {
        setTravel(!travel)
    }

    // trial
    const [mybooking, setMybooking] = useState(false)
    const [account, setAccount] = useState(false)
    const [selectedfile, setSelectedFile] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);

        }
    }




    const handleAccount = () => {
        setAccount(!account)
    }


    const handleBook = () => {
        setMybooking(!mybooking);
    }


    return (
        <>

            
            <div className="container-wrapper md:pt-20 md:px-2 md:relative py-3 px-3  md:gap-3 bg-gray-400   md:flex ">
                {/* user area section */}
                <div className=" md:w-72 md:h-3/5  w-full border md:mt-7 mt-14 rounded-lg  bg-white " >


                    <div className="md:h-36 md:w-36 h-28 w-28 top-2 ml-5 absolute md:top-3   md:ml-14   rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                        <label htmlFor="file-upload">
                            <CiCamera className="h-8 w-8 relative left-10 md:left-14 top-9 p-1 text-white inline-flex items-center justify-center rounded-full bg-gray-500 " />

                        </label>
                        <input id="file-upload" type="file" className="hidden" onChange={handleFile} />
                        {selectedfile && <p>Selected file: {selectedfile.name}</p>}

                    </div>





                    <div className=" mt-20 ml-5 ">
                        <h1 className="md:font-medium  fonrt-semibold text-gray-300 md:text-lg  text-md">Chauhan jee</h1>

                        <div className="flex justify-between mt-2 px-1">
                            <h1 className=" text-md">abc@gmial.com..</h1>
                            <span className=" text-blue-700 underline">verify</span>
                        </div>

                        <h1 className="mt-2 text-md pb-7" >+123456783456</h1>
                    </div>
                    <hr className="w-full" />

                    <div className=" md:mt-7 md:py-3 md:ml-5  md:block hidden" >
                        <div className="flex">
                            <span> < FaUser size={30} onClick={handleAccount} /></span>
                            <span className=" ml-3" >My Account</span>
                        </div>
                        <div className=" flex mt-5 cursor-pointer" onClick={handleBook} >
                            <span><SlCalender size={25} /></span>
                            <span className="ml-3">My Booking</span>
                        </div>
                    </div>
                    {/* <Book /> */}

                </div>

                <div>
                    {/* slider profile 1 */}
                    {/* <div>
                        <div className="   bg-[#ffff] w-[700px] shadow-sm rounded-lg p-5  ">
                            <div className=" flex    justify-between ">
                                <h1 className="font-bold text-[20px]">My Profile</h1>
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#F3F3F3] text-black " onClick={btnChange}>

                                    {plus ? <FiMinus /> : <FaPlus />}

                                </span>

                            </div>
                            <div className={`text-para ${plus ? "" : "hidden "}`} >
                                <div className="flex justify-between mt-10">
                                    <h1 className=" text-md font-semibold">Personal Information</h1>
                                    <div className=" flex gap-2">
                                        <span className=" text-blue-700 underline">
                                            <CiEdit size={25} />
                                        </span>
                                        <span className="text-md">Edit</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 py-5 text-para text-[#595959]">
                                    <h1>Gender</h1>
                                    <h1>Birt Date</h1>
                                    <h1>Nationality</h1>
                                </div>
                                <hr />
                                <div className="flex py-12  gap-3 ">
                                    <span className=" text-yellow-500"><IoDocumentsOutline size={25} /></span>
                                    <span className="text-md">Kyc Documents</span>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="mt-6">
                        <div className="   bg-[#ffff] w-[700px] shadow-sm rounded-lg p-5  ">
                            <div className=" flex    justify-between ">
                                <h1 className="font-bold text-[20px]">My Profile</h1>
                                <span className="inline-flex cursor-pointer items-center justify-center h-8 w-8 rounded-full bg-[#F3F3F3] text-black " onClick={btnChange2}>

                                    {travel ? <FiMinus /> : <FaPlus />}

                                </span>

                            </div>
                            <div className={`text-para ${travel ? "" : "hidden "}`} >

                                Abcd.............
                            </div>
                        </div>
                    </div>  */}


                    {/* my booking data */}


                    {mybooking ? <Book /> : (

                        // <div className=" mt-6">
                        //     <div className="  justify-center  bg-[#ffff] md:w-[700px] w-full shadow-sm rounded-lg p-5  ">
                        //         <div className=" flex    justify-between ">
                        //             <h1 className="font-bold text-para md:text-[20px]">My Profile</h1>
                        //             <span className="inline-flex cursor-pointer items-center justify-center h-8 w-8 rounded-full bg-[#F3F3F3] text-black " onClick={btnChange2}>

                        //                 {travel ? <FiMinus /> : <FaPlus />}

                        //             </span>

                        //         </div>
                        //         <div className={`text-para ${travel ? "" : "hidden "}`} >

                        //             Abcd.............
                        //         </div>
                        //     </div>
                        // </div>

                        <div className="mt-6 py-3 ">
                            <div className="  justify-center  bg-[#ffff] md:w-[700px] w-full shadow-sm rounded-lg p-5  ">
                                <div className=" flex    justify-between ">
                                    <h1 className="font-bold text-[20px]">My Profile</h1>
                                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#F3F3F3] text-black " onClick={btnChange}>

                                        {plus ? <FiMinus /> : <FaPlus />}

                                    </span>

                                </div>
                                <div className={`text-para ${plus ? "" : "hidden "}`} >
                                    <div className="flex justify-between mt-10">
                                        <h1 className=" text-md font-semibold">Personal Information</h1>
                                        <div className=" flex gap-2">
                                            <span className=" text-blue-700 underline">
                                                <CiEdit size={25} />
                                            </span>
                                            <span className="text-md">Edit</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-5 text-para text-[#595959]">
                                        <h1>Gender</h1>
                                        <h1>Birt Date</h1>
                                        <h1>Nationality</h1>
                                    </div>
                                    <hr />
                                    <div className="flex py-12  gap-3 ">
                                        <span className=" text-yellow-500"><IoDocumentsOutline size={25} /></span>
                                        <span className="text-md">Kyc Documents</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                    <Book />

                </div>
            </div>
        </>

    )
}

export default Bookings


