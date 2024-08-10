import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { GiByzantinTemple } from "react-icons/gi";
import { MdMosque } from "react-icons/md";
import { LiaMosqueSolid } from "react-icons/lia";
import DateTimePickerValue from '@/components/car-rental/DateTimePicker';
import dayjs from 'dayjs';
import { FaArrowRightLong } from "react-icons/fa6";

const Picker = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeTab, setActiveTab] = useState('Tab1');
    const [isShowDateTimePicker, setShowDateTimePicker] = useState(false);
    const [localData, setLocalData] = useState({ location: '', pickupDate: null, vehicle: '' });
    const [outstationData, setOutstationData] = useState({ location: '', pickupDate: null, vehicle: '' });
    const [errors, setErrors] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const toggleItem = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    const handleLocationSelect = (location) => {
        if (activeTab === 'Tab1') {
            setLocalData({ ...localData, location });
        } else {
            setOutstationData({ ...outstationData, location });
        }
        setActiveItem(null);  // Close the dropdown after selecting
    };

    const handleDateTimeSelect = (date) => {
        if (activeTab === 'Tab1') {
            setLocalData({ ...localData, pickupDate: date });
        } else {
            setOutstationData({ ...outstationData, pickupDate: date });
        }
    };

    const handleVehicleSelect = (vehicle) => {
        if (activeTab === 'Tab1') {
            setLocalData({ ...localData, vehicle });
        } else {
            setOutstationData({ ...outstationData, vehicle });
        }
        setActiveItem(null);  // Close the dropdown after selecting
    };

    const validateForm = () => {
        let newErrors = {};
        const data = activeTab === 'Tab1' ? localData : outstationData;

        if (!data.location) newErrors.location = 'Location is required';
        if (!data.pickupDate) newErrors.pickupDate = 'Pick Up Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSearch = () => {
        if (validateForm()) {
            if (activeTab === 'Tab1') {
                // console.log('Local Data:', localData);
            } else {
                // console.log('Outstation Data:', outstationData);
            }
        }
    };

    return (
        <div>
            <div className='flex items-center'>
                <div onClick={() => setActiveTab('Tab1')} className={`p-3 ${activeTab === 'Tab1' ? 'bg-primary/80 text-white' : 'bg-primary/20 text-primary/80'} rounded-tl-lg cursor-pointer`}>
                    <p className='text-para px-8'>Local</p>
                </div>
                <div onClick={() => setActiveTab('Tab2')} className={`p-3 ${activeTab === 'Tab2' ? 'bg-primary/80 text-white' : 'bg-primary/20 text-primary/80'} rounded-tr-lg cursor-pointer`}>
                    <p className='text-para px-8'>OutStation</p>
                </div>
            </div>
            {/* Main container of the tab functionality */}
            <div className='w-full bg-white rounded-b-md rounded-tr-md py-3'>
                <div className={`${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <div className='flex  items-center pr-4 '>
                        <div className='flex gap-8 p-4 items-center w-full h-20'>
                            <div onClick={() => toggleItem('location')} className={`${activeItem === 'location' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='font-semibold text-lg'>Location</p>
                                    <IoIosArrowUp className={`${activeItem === 'location' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                </div>
                                <div>
                                    <span className='font-light text-slate-600 text-para'>{localData.location || 'Select Location'}</span>
                                    {errors.location && <p className='text-red-500 text-xs'>{errors.location}</p>}
                                </div>
                            </div>
                            <div onClick={() => setShowDateTimePicker(!isShowDateTimePicker)}>
                                <div onClick={() => toggleItem('pickup')} className={`${activeItem === 'pickup' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='font-semibold text-lg'>Pick Up Date</p>
                                        <IoIosArrowUp className={`${activeItem === 'pickup' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                    </div>
                                    <div>
                                        <p className='font-light text-slate-600 text-para'>{localData.pickupDate ? dayjs(localData.pickupDate).format('DD-MMM-YYYY') : 'Select Date'}</p>
                                        {errors.pickupDate && <p className='text-red-500 text-xs'>{errors.pickupDate}</p>}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleItem('vehicle')} className={`${activeItem === 'vehicle' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='font-semibold text-lg'>Vehicle Selection</p>
                                    <IoIosArrowUp className={`${activeItem === 'vehicle' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                </div>
                                <div>
                                    <span className='font-light text-slate-600 text-para'>{localData.vehicle || 'Select Vehicle'}</span>
                                    {errors.vehicle && <p className='text-red-500 text-xs'>{errors.vehicle}</p>}
                                </div>
                            </div>
                        </div>
                        <div onClick={togglePopup}>
                            <button onClick={handleSearch} className='font-semibold flex hover:animate-pulse items-center gap-1 text-white text-sm bg-black px-5 py-3 rounded-full'>Book <span ><FaArrowRightLong /></span></button>
                        </div>
                    </div>
                </div>
                <div className={`${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                    <div className='flex  items-center pr-4 '>
                        <div className='flex gap-8 p-4 items-center w-full h-20'>
                            <div onClick={() => toggleItem('location')} className={`${activeItem === 'location' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='font-semibold text-lg'>Location</p>
                                    <IoIosArrowUp className={`${activeItem === 'location' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                </div>
                                <div>
                                    <span className='font-light text-slate-600 text-para'>{outstationData.location || 'Select Location'}</span>
                                    {errors.location && <p className='text-red-500 text-xs'>{errors.location}</p>}
                                </div>
                            </div>
                            <div onClick={() => setShowDateTimePicker(!isShowDateTimePicker)}>
                                <div onClick={() => toggleItem('pickup')} className={`${activeItem === 'pickup' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='font-semibold text-lg'>Pick Up Date</p>
                                        <IoIosArrowUp className={`${activeItem === 'pickup' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                    </div>
                                    <div>
                                        <p className='font-light text-slate-600 text-para'>{outstationData.pickupDate ? dayjs(outstationData.pickupDate).format('DD-MMM-YYYY') : 'Select Date'}</p>
                                        {errors.pickupDate && <p className='text-red-500 text-xs'>{errors.pickupDate}</p>}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleItem('vehicle')} className={`${activeItem === 'vehicle' ? 'border-2' : 'border-none'} p-2 rounded cursor-pointer`}>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='font-semibold text-lg'>Vehicle Selection</p>
                                    <IoIosArrowUp className={`${activeItem === 'vehicle' ? 'rotate-180' : 'rotate-0'} transition ease-in delay-150`} size={16} />
                                </div>
                                <div>
                                    <span className='font-light text-slate-600 text-para'>{outstationData.vehicle || 'Select Vehicle'}</span>
                                    {errors.vehicle && <p className='text-red-500 text-xs'>{errors.vehicle}</p>}
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSearch} className='font-semibold flex hover:animate-pulse items-center gap-1 text-white text-sm bg-black px-5 py-3 rounded-full'>Book <span ><FaArrowRightLong /></span></button>
                    </div>
                </div>
            </div>
            {/* Dropdown Menus */}
            <div className='mt-2'>
                <div className={`${activeItem === 'location' ? 'block' : 'hidden'} px-5 border bg-white rounded-lg py-2`}>
                    <div>
                        <p className='font-semibold text-sm text-primary border-b'>Popular Cities</p>
                        <div className='mt-2 flex flex-wrap'>
                            <div onClick={() => handleLocationSelect('Delhi')} className='flex flex-col items-center cursor-pointer capitalize hover:bg-primary/10 text-primary text-sm px-2 py-1 rounded-lg'>
                                <svg width="50px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M256 49.5c-20 0-48 3.5-64 10.5v18h-64v55h256V78h-64V60c-16-7-44-10.5-64-10.5zM208 90c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zm96 0c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zm-192 61v18H96v18h320v-18h-16v-18zm-32 52v18h352v-18zm16 36v72h112.7c8.1-52 86.5-52 94.6 0H416v-72zm0 90v30h96v18H96v119h112V329zm208 0v167h112V377h-96v-18h96v-30z" /></svg>
                                <span className='cursor-pointer capitalize text-primary text-sm px-2 py-1 rounded-lg'>Delhi</span>
                            </div>
                            <div onClick={() => handleLocationSelect('Dehradun')} className='flex flex-col items-center cursor-pointer capitalize hover:bg-primary/10 text-primary text-sm px-2 py-1 rounded-lg'>
                                <GiByzantinTemple className='text-black' size={40} />
                                <span className='cursor-pointer capitalize text-primary text-sm px-2 py-1 rounded-lg'>Dehradun</span>
                            </div>
                            <div onClick={() => handleLocationSelect('Mumbai')} className='flex flex-col items-center cursor-pointer capitalize hover:bg-primary/10 text-primary text-sm px-2 py-1 rounded-lg'>
                                <MdMosque className='text-black' size={40} />
                                <span className='cursor-pointer capitalize text-primary text-sm px-2 py-1 rounded-lg'>Mumbai</span>
                            </div>
                            <div onClick={() => handleLocationSelect('Chennai')} className='flex flex-col items-center cursor-pointer capitalize hover:bg-primary/10 text-primary text-sm px-2 py-1 rounded-lg'>
                                <LiaMosqueSolid className='text-black' size={40} />
                                <span className='cursor-pointer capitalize text-primary text-sm px-2 py-1 rounded-lg'>Chennai</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-sm text-primary border-b'>Other Cities</p>
                        <div className='mt-2 flex flex-wrap'>
                            <span onClick={() => handleLocationSelect('Bangalore')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Bangalore</span>
                            <span onClick={() => handleLocationSelect('Hyderabad')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Hyderabad</span>
                            <span onClick={() => handleLocationSelect('Kolkata')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Kolkata</span>
                            <span onClick={() => handleLocationSelect('Pune')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Pune</span>
                        </div>
                    </div>
                </div>
                <div className={`${activeItem === 'pickup' ? 'block' : 'hidden'} px-5 border bg-white rounded-lg py-2`}>
                    <DateTimePickerValue open={isShowDateTimePicker} setDate={handleDateTimeSelect} />
                </div>
                <div className={`${activeItem === 'vehicle' ? 'block' : 'hidden'} px-5 border bg-white rounded-lg py-2`}>
                    <div>
                        <p className='font-semibold text-sm text-primary border-b'>Vehicle Selection</p>
                        <div className='mt-2 flex flex-wrap'>
                            <span onClick={() => handleVehicleSelect('Sedan')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Sedan</span>
                            <span onClick={() => handleVehicleSelect('Maruti Suzuki')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Maruti Suzuki</span>
                            <span onClick={() => handleVehicleSelect('Mercedes')} className='cursor-pointer hover:font-semibold capitalize text-primary text-sm px-2 py-1 rounded-lg'>Mercedes</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* toggle pop up show  */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                    <div className="bg-white p-8 rounded-lg relative opacity-100 transition-opacity duration-300">
                        <span className="absolute top-0 right-0 cursor-pointer" onClick={togglePopup}>&times;</span>
                        <p>Popup Content Goes Here</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Picker;
