import "../../../app/globals.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState} from "react";
const MAX = 200000;
const MIN = 5000;
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

// tour duration

function valuetext(value) {
    return `${value}°C`;
}
const CarPromoSearchPageFilter=()=> {
    const [priceRange, setPriceRange] = useState([5000, 20000]);
    const [departureCity, setDepartureCity] = useState([]);
    const [packageCategory, setPackageCategory] = useState([]);
    const [filter, setFilter] = useState(false);
    return (
        <>
            <div>
                <div className="bg-white rounded-md sticky top-2">
                    <div className="md:p-5 p-2">
                        <div className="flex justify-between md:pb-2 pb-1">
                            <h3 className="md:text-[16px] text-[14px] font-medium">Package Prices</h3>
                            <p className="text-[12px] underline text-blue-800 cursor-pointer" >Clear All</p>
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
                                        // onChange={(_, newValue) => setPriceRange(newValue)}
                                        sx={{ color: "#2A2C41" }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p className='md:text-para text-[12px]'>₹{priceRange[0]?.toLocaleString()} - ₹{priceRange[1]?.toLocaleString()} Prices</p>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className="md:text-para text-sm font-light">
                            <div className="flex gap-3 my-3">
                                <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full ">
                                    ₹5,000 - ₹6,000
                                </button>
                                <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full ">
                                    ₹6,000 - ₹10,000
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full ">
                                    ₹10,000 - ₹12,000
                                </button>
                                <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full ">
                                    ₹12,000 & above
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-t md:px-5 py-3 p-2">
                            <div>
                                <h3 className="md:text-[16px] text-[14px] font-medium my-2">Tour Duration</h3>
                            </div>
                            <Box sx={{ width: '100%' }}>
                                <Slider
                                    getAriaLabel={() => 'Tour duration range'}
                                   
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    sx={{ color: "#2A2C41" }}
                                    min={0}
                                    max={10}
                                />
                            </Box>
                            <div>
                                <div className="flex justify-between md:mb-2 mb-2">
                                    <p className="md:text-[14px] text-[12px]">Min <span> 0 days</span></p>
                                    <p className="md:text-[14px] text-[12px]">Max <span> 10 days</span></p>
                                </div>
                            </div>
                            <div className="md:text-para text-sm font-light">
                                <div className="flex gap-3 my-3">
                                    <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full">
                                        1 - 3 days
                                    </button>
                                    <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full">
                                        3 - 15 days
                                    </button>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full">
                                        15 - 27 days
                                    </button>
                                    <button className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full">
                                        27 - 50 dyas
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b md:mt-2 mt-1"></div>
                        <div className="pr-5 py-2">
                            <h3 className="md:text-[16px] text-[14px] font-medium md:my-2 my-1 px-5">Package Category</h3>
                            <div>
                                {packageCategory?.map(item => <div key={item._id} className="flex capitalize items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                        id="category1" name={item?.category} value={item?._id} onChange={(e) => setCatagoryId(e.target.value)} />
                                    <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
                                        {item?.category}</label>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-2 xl:hidden">
                        <button  className="bg-black text-white px-4 py-1.5 text-xs rounded-md mb-3">Apply Filters</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarPromoSearchPageFilter
