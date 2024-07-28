import "../app/globals.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState,useEffect } from "react";
import { useAppContext } from "./admin/context/Package/AddGuest";

// Today changes here in main file

const MAX = 99100;
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
// tour duration
function valuetext(value) {
    return `${value}°C`;
}
const fetchCatagory=async ()=>{
    const response = await fetch('/api/package-setting/category/get-categories');
    const data=await response.json();
    return data;
}

export default function SearchPageFilter({ onApplyFilter }) {
    const {setCatagoryId}=useAppContext()
    const { setMinPrice, setMaxPrice } = useAppContext();
    const [priceRange, setPriceRange] = useState([0, 9900]);
    const [tourDuration, setTourDuration] = useState([20, 37]);
    const [departureCity, setDepartureCity] = useState([]);
    const [packageCategory, setPackageCategory] = useState([]);

    // const handleApplyFilter = () => {
    //     onApplyFilter(priceRange);
    // };

    // const handleSubmit = () => {
    //     onApplyFilter({ priceRange, value });
    //   };

    //   // tour duration value
    //   const [value, setValue] = React.useState([20, 37]);

    //   const handleChange = (event: any, newValue: any) => {
    //       setValue(newValue);
    //   };
    useEffect(()=>{
        fetchCatagory().then(res=>setPackageCategory(res?.data||[]))
    },[])

    const handleCheckboxChange = (event, stateSetter) => {
        const value = event.target.value;
        stateSetter((prev) => {
            if (prev.includes(value)) {
                return prev.filter(item => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleSubmit = () => {
        const filters = {
            priceRange,
            tourDuration,
            departureCity,
            packageCategory,
        };
       
        onApplyFilter(filters);
    };
useEffect(()=>{
    if (priceRange[0] > priceRange[1]) {
        setMaxPrice(priceRange[0])
        setMinPrice(priceRange[1])
    }
    else {
        setMaxPrice(priceRange[1])
        setMinPrice(priceRange[0])
    }
},[priceRange])
    const handleClearAll = () => {
        setPriceRange([0, 9900]);
        setTourDuration([20, 37]);
        setDepartureCity([]);
        setPackageCategory([]);
        // onClearFilters();
        document.querySelectorAll("input[type=checkbox]").forEach(el => el.checked = false);
    };


    // console.log("package data",packageCategory)


    return (
        <>
            <div>
                <div className="bg-white rounded-md sticky top-2 ">
                    <div className="md:p-5 p-2  ">
                        <div className="flex justify-between md:pb-2 pb-1">
                            <p className="md:text-[16px] text-[14px] font-medium">Package Prices</p>
                            <p className="text-[12px] underline text-blue-800 cursor-pointer" onClick={handleClearAll}>Clear All</p>
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
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p className='md:text-para text-[12px]'>{priceRange[0]} - {priceRange[1]} Packages</p>
                                    </Box>
                                </Box>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="border-t md:p-3 p-2 py-0">
                            <div>
                                <p className="md:text-[16px] text-[14px] font-medium my-2">Tour Duration</p>
                            </div>
                            <Box sx={{ width: '100%' }}>
                                <Slider
                                    getAriaLabel={() => 'Tour duration range'}
                                    value={tourDuration}
                                    onChange={(_, newValue) => setTourDuration(newValue)}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    sx={{ color: "#2A2C41" }}
                                />
                            </Box>
                            <div>
                                <div className="flex justify-between md:mb-2 mb-2">
                                    <p className="md:text-[14px] text-[12px]">Min <span>{tourDuration[0]} days</span></p>
                                    <p className="md:text-[14px] text-[12px]">Max <span>{tourDuration[1]} days</span></p>
                                </div>
                            </div>

                        </div>
                        <div className="border-b md:mt-0 mt-1"></div>
                        <div className="px-5 md:py-2 py-1">
                            <p className="md:text-[16px] text-[14px] font-medium md:my-2 my-1">Departure City</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                    id="city1" name="bangalore" value="Banglore" onChange={(e) => handleCheckboxChange(e, setDepartureCity)} />
                                <label htmlFor="city1" className="cursor-pointer label-text md:text-[14px] text-[12px]"> Banglore</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                    id="city2" name="delhi" value="Delhi" onChange={(e) => handleCheckboxChange(e, setDepartureCity)} />
                                <label htmlFor="city2" className="cursor-pointer label-text md:text-[14px] text-[12px]">Delhi</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                    id="city3" name="noida" value="Noida" onChange={(e) => handleCheckboxChange(e, setDepartureCity)} />
                                <label htmlFor="city3" className="cursor-pointer label-text md:text-[14px] text-[12px]"> Noida</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 px-5 pb-2 py-2">
                                <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                    id="city4" name="indore" value="Indore" onChange={(e) => handleCheckboxChange(e, setDepartureCity)} />
                                <label htmlFor="city4" className="cursor-pointer label-text md:text-[14px] text-[12px]"> Indore</label>
                            </div>
                        </div>
                        <div className="border-b md:mt-5 mt-2"></div>
                        <div className="pr-5 py-2">
                            <p className="md:text-[16px] text-[14px] font-medium md:my-2 my-1 px-5">Package Category</p>
                            <div>
                               {packageCategory?.map( item=><div key={item._id} className="flex items-center gap-2 px-5 pb-2 py-2 ">
                                    <input className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack" type="checkbox"
                                        id="category1" name={item?.category} value={item?._id} onChange={(e) => setCatagoryId(e.target.value)} />
                                    <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
                                        {item?.category}</label>
                                </div>)}
                                
                            </div>  
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md mb-2 block">Apply Filters</button>
                    </div>
                </div>
            </div>
        </>
    )
}