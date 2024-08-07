import "../../app/globals.css";
import { FaUserAlt, FaRegSnowflake } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaLocationDot, FaCheck } from "react-icons/fa6";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import ItineraryFaq from "../../../src/components/itinerarylist/ItineraryFaq"
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const MAX = 20000;
const MIN = 0;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
];




export default function CarPromo(){

    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [bikeChecked, setBikeChecked] = useState(false);
    const [carChecked, setCarChecked] = useState(false);
    const [boatChecked, setBoatChecked] = useState(false);
    const [minChecked, setMinChecked] = useState(false);
    const [moreChecked, setMoreChecked] = useState(false);


    const handleApplyFilters = () => {
        const filters = {
            // priceRange : priceRange,
            // bikeChecked : bikeChecked,
            // carChecked : carChecked,
            // boatChecked : boatChecked,
            // minChecked : minChecked,
            // moreChecked : moreChecked,

            // we can write also in more precisely--
            priceRange,
            bikeChecked,
            carChecked,
            boatChecked,
            minChecked,
            moreChecked,
        };
        setPriceRange([0, 10000]);
        setBikeChecked(false);
        setCarChecked(false);
        setBoatChecked(false);
        setMinChecked(false);
        setMoreChecked(false);
        
        handleCloseModal(); //for close the popup window
        alert(`Filters are applied`) //Filters alert
        
    };

    const handleClearAll = () => {
        setPriceRange([0, 10000]);
        setBikeChecked(false);
        setCarChecked(false);
        setBoatChecked(false);
        setMinChecked(false);
        setMoreChecked(false);

    };
  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    

    return(
        <>
        {/* CarPromoSkeleton */}
            < div className="bg-slate-50 h-ful l">
                <DesktopHeader/> 
                {/* Filter Popuop here */}
                <div className=" xl:hidden  w-full flex justify-end items-center pr-5">
                    <button className="border rounded-sm border-gray-400 text-base px-3 py-0.5"
                        onClick={handleOpenModal} >
                        Filter
                    </button> 
                    <Modal open={isModalOpen} onClose={handleCloseModal}>
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
                            <div className="relative bg-white p-7 rounded-lg w-full max-w-md h-full max-h-[73vh] overflow-y-auto">
                                <button onClick={handleCloseModal} 
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                    <CloseIcon />
                                </button>
                                {/* Filter content*/}
                                <div>
                                    <p className="text-lg font-semibold mb-5">Filter</p>
                                    <div className="flex justify-between pb-1">
                                        <p className="text-[15px] font-medium">Prices Range</p>
                                        <p className="text-[12px] underline text-blue-800 cursor-pointer"
                                        onClick={handleClearAll} >Clear All</p>
                                    </div>

                                    <div>
                                        <div>
                                            <Box>
                                                <Slider
                                                    className='w-full'
                                                    marks={marks}
                                                    step={100}
                                                    value={priceRange}
                                                    valueLabelDisplay="auto"
                                                    min={MIN}
                                                    max={MAX}
                                                    onChange={(_, newValue) => setPriceRange(newValue)}
                                                    sx={{ color: "#2A2C41" }}
                                                />
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                                    <p className='text-[14px]'>{priceRange[0]} - {priceRange[1]} prices</p>
                                                </Box>
                                            </Box>
                                        </div>
                                    </div>
                                    <div className="border-b mt-2"></div>
                                    {/* car type */}
                                    <div className="pr-5 py-2">
                                        <p className="text-[15px] font-medium my-1">Car Type</p>
                                        <div>
                                            <div className="flex items-center gap-2  pb-2 ">
                                                <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack" 
                                                type="checkbox"  id="bike" name="bike" value="bike"
                                                checked={bikeChecked} onChange={() => setBikeChecked(!bikeChecked)}/>
                                                <label htmlFor="bike" className="cursor-pointer label-text text-[14px]">
                                                I have a bike</label>
                                            </div> 
                                            <div className="flex items-center gap-2 pb-2  ">
                                                <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack" 
                                                type="checkbox" id="car" name="car" value="car"
                                                checked={carChecked} onChange={() => setCarChecked(!carChecked)}/>
                                                <label htmlFor="car" className="cursor-pointer label-text text-[14px]">
                                                I have a car</label>
                                            </div>
                                            <div className="flex items-center gap-2  pb-2">
                                                <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack" 
                                                type="checkbox" id="boat" name="boat" value="boat"
                                                checked={boatChecked} onChange={() => setBoatChecked(!boatChecked)}/>
                                                <label htmlFor="boat" className="cursor-pointer label-text text-[14px]">
                                                I have a boat</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b"></div>
                                    {/* capacity */}

                                    <div className="pr-5 py-2">
                                            <p className="text-[15px] font-medium my-1 ">Capacity</p>
                                        <div>
                                            <div className="flex items-center gap-2  pb-2">
                                                <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack"
                                                type="checkbox" id="min" name="min" value="min"
                                                checked={minChecked} onChange={() => setMinChecked(!minChecked)}
                                                />
                                                <label htmlFor="min" className="cursor-pointer label-text text-[14px]">
                                                3 to 5 Passenger</label>
                                            </div>
                                            <div className="flex items-center gap-2  pb-2">
                                                <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack" 
                                                type="checkbox"  id="more" name="more" value="more" 
                                                checked={moreChecked} onChange={() => setMoreChecked(!moreChecked)}
                                                />
                                                <label htmlFor="more" className="cursor-pointer label-text text-[14px]">
                                                6 More</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <button className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md "
                                        onClick={handleApplyFilters} >
                                        Apply Filters</button>
                                    </div>
                                </div> 
                                {/*filter content end */}                          
                            </div>
                        </div>
                    </Modal>                          
                </div>
                {/* Filter Popuop end */}
                <div className="container-wrapper">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="shadow-md rounded bg-white col-span-4 lg:col-span-3 gap-5 lg:mt-2 mt-3 "> {/* xl:max-h-[300px] */}
                            <div className=" grid md:grid-cols-4 p-3 rounded gap-1">
                                <div className=" col-span-3 md:border-r">
                                    <div className="flex sm:flex-row flex-col gap-5">
                                        <div className="pl-3">
                                            <Image className="w-52 h-40 object-contain" 
                                            src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png" 
                                            alt="" 
                                            width={208}
                                            height={108}/>                                           
                                        </div>
                                        <div className="pl-3">
                                            <div className="pb-1 md:pb-3">
                                                <p className="font-semibold text-lg">Volkswagen Polo</p>
                                                <p className="text-sm">Or similiar Economy</p>
                                            </div>
                                            <div className="flex sm:block gap-3 items-center">
                                                <div className="flex  gap-3 text-sm text-center">
                                                    <p className="bg-primary text-[10px] md:text-para text-white px-1 py-1 rounded">save 10%</p>
                                                    <p className="bg-cyan-50 border text-[10px] md:text-para border-cyan-500 text-cyan-600 px-1 py-1 rounded"> Parial Prepayment</p>
                                                </div>
                                                <div className="flex gap-3 items-center py-3">
                                                    <div className="flex gap-1 items-center">
                                                        <FaUserAlt/>
                                                        <p className="font-semibold text-sm">0</p>
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <FaRegSnowflake/>
                                                        <p className="font-semibold text-sm">0</p>
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <GiGearStickPattern/>
                                                        <p className="font-semibold text-sm">0</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr  className="mb-4 hidden md:block"/>
                                    <div>
                                        <div className="hidden md:grid grid-cols-2 ">
                                            <div className="pl-3">
                                                <div className="flex items-center gap-2 pb-3">
                                                    <BsFillFuelPumpFill size={22}/>
                                                    <div>
                                                        <p className="font-semibold text-para">Fuel policy</p>
                                                        <p className="text-para">Same to Same</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaLocationDot size={22}/>
                                                    <div>
                                                        <p className="font-semibold text-para">Pick-up location</p>
                                                        <p className="text-para">Free shutter services</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <FaCheck className="text-cyan-500"/>
                                                    <p className="text-para">Lorem, ipsum dolor.</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaCheck className="text-cyan-500"/>
                                                    <p className="text-para">Lorem, ipsum dolor.</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaCheck className="text-cyan-500"/>
                                                    <p className="text-para">Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <hr className="block md:hidden my-4" />
                                </div>
                                <div className=" md:place-self-center ">
                                    <div className="md:block flex  justify-between  md:text-center mb-3 md:ml-0 ml-3">
                                        <div>
                                            <p>Economy Booking</p>
                                            <div>
                                                <p className="text-lg font-semibold">Rs. 51,100</p>
                                                <p className="text-xs">Total</p>
                                            </div>
                                            <button className="px-3 py-2 rounded font-semibold text-para bg-gradient-to-r from-primary via-limeyellow  to-test text-white">
                                                View Details
                                            </button>
                                        </div>
                                        <div className="md:pt-10 pl-5 md:block hidden">
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-cyan-500"/>
                                                <p className="text-para">Lorem, ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        {/* Filter */}
                        <div className="xl:block hidden shadow-md rounded bg-white  p-5 col-span-4 lg:col-span-1 mt-3 lg:mt-2">
                            <p className="text-lg font-semibold text-center mb-5">Filter</p>
                            <div className="flex justify-between md:pb-2 pb-1">
                                <p className="md:text-[16px] text-[15px] font-medium">Prices Range</p>
                                <p className="text-[12px] underline text-blue-800 cursor-pointer"
                                onClick={handleClearAll} >Clear All</p>
                            </div>

                            <div>
                                <div>
                                    <Box>
                                        <Slider
                                            className='w-full'
                                            marks={marks}
                                            step={100}
                                            value={priceRange}
                                            valueLabelDisplay="auto"
                                            min={MIN}
                                            max={MAX}
                                            onChange={(_, newValue) => setPriceRange(newValue)}
                                            sx={{ color: "#2A2C41" }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                            <p className='md:text-para text-[14px]'>{priceRange[0]} - {priceRange[1]} prices</p>
                                        </Box>
                                    </Box>
                                </div>
                            </div>
                            <div className="border-b mt-2"></div>
                            {/* car type */}
                            <div className="pr-5 py-2">
                                <p className="md:text-[16px] text-[15px] font-medium md:my-2 my-1">Car Type</p>
                                <div>
                                    <div className="flex items-center gap-2  pb-2 ">
                                        <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" 
                                        type="checkbox"  id="bike" name="bike" value="bike"
                                        checked={bikeChecked} onChange={() => setBikeChecked(!bikeChecked)}/>
                                        <label htmlFor="bike" className="cursor-pointer label-text text-[14px]">
                                        I have a bike</label>
                                    </div> 
                                    <div className="flex items-center gap-2 pb-2  ">
                                        <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" 
                                        type="checkbox" id="car" name="car" value="car"
                                        checked={carChecked} onChange={() => setCarChecked(!carChecked)}/>
                                        <label htmlFor="car" className="cursor-pointer label-text text-[14px]">
                                        I have a car</label>
                                    </div>
                                    <div className="flex items-center gap-2  pb-2">
                                        <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" 
                                        type="checkbox" id="boat" name="boat" value="boat"
                                        checked={boatChecked} onChange={() => setBoatChecked(!boatChecked)}/>
                                        <label htmlFor="boat" className="cursor-pointer label-text text-[14px]">
                                        I have a boat</label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b"></div>
                            {/* capacity */}

                            <div className="pr-5 py-2">
                                    <p className="md:text-[16px] text-[15px] font-medium md:my-2 my-1 ">Capacity</p>
                                <div>
                                    <div className="flex items-center gap-2  pb-2">
                                        <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
                                        type="checkbox" id="min" name="min" value="min"
                                        checked={minChecked} onChange={() => setMinChecked(!minChecked)}
                                        />
                                        <label htmlFor="min" className="cursor-pointer label-text text-[14px]">
                                        3 to 5 Passenger</label>
                                    </div>
                                    <div className="flex items-center gap-2  pb-2">
                                        <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" 
                                        type="checkbox"  id="more" name="more" value="more" 
                                        checked={moreChecked} onChange={() => setMoreChecked(!moreChecked)}
                                        />
                                        <label htmlFor="more" className="cursor-pointer label-text text-[14px]">
                                        6 More</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md "
                                onClick={handleApplyFilters} >
                                Apply Filters</button>
                            </div>
                        </div> 
                        {/*filter end */}

                        {/* Itenary FAQ */}
                        <div className="mt-3 mb-5 bg-white shadow-md rounded col-span-4 p-5">
                            <ItineraryFaq/>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
