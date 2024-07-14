import React, { useEffect, useState } from 'react';
import Layout from '@/components/admin/Layout';
import { IoIosSearch } from 'react-icons/io';
import { BsPatchCheckFill } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Image from 'next/image'

const Itinerary = () => {
    const [packageOrderList, setPackageOrderList] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOrderListVisible, setIsOrderListVisible] = useState(false);
    const [isMediumDevice, setIsMediumDevice] = useState(false);


    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        setIsMediumDevice(mediaQuery.matches);
        setIsOrderListVisible(mediaQuery.matches);

        const handleResize = () => {
            setIsMediumDevice(mediaQuery.matches);
            setIsOrderListVisible(mediaQuery.matches);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchItineraryData = async () => {
            try {
                const response = await fetch('/api/booking/bookings');
                const data = await response.json();
                setPackageOrderList(data.bookings || []);
                if (data.bookings.length > 0) {
                    setSelectedOrder(data.bookings[0]);
                }
            } catch (error) {
                console.error("Error fetching itinerary data:", error);
            }
        };

        fetchItineraryData();
    }, []);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        if (!window.matchMedia('(min-width: 768px)').matches) {
            setIsOrderListVisible(false);
        }
    };

    const handleToggleOrderList = () => {
        setIsOrderListVisible(!isOrderListVisible);
    };

    const filteredPackageOrderList = packageOrderList.filter(order =>
        order._id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AppProvider>
        <Layout>
            <div className="overflow-hidden">
                <label className="relative block mb-5">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <IoIosSearch className="text-slate-400" size={16} />
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-8 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
                        placeholder="Search for package _id..."
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </label>
                <div className="flex gap-5">
                    <div className={`transition-transform duration-300 ease-in-out ${isOrderListVisible ? 'block' : 'hidden'}  `}>
                        <div>
                            <p className='font-semibold text-md pb-2 mb-2 border-b-2'>Order List</p>
                        </div>
                        <div className='border-2 backdrop-blur-xl bg-white/50 border-slate-300 h-[65vh] overflow-hidden overflow-y-auto rounded-lg shadow-md px-2'>
                            <div className='p-2'>
                                {filteredPackageOrderList.map((order, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white mb-4 cursor-pointer hover:scale-105 rounded-lg shadow-md p-3 overflow-hidden text-black flex justify-between items-center relative ${selectedOrder && selectedOrder._id === order._id ? 'scale-105 transition ease-in-out duration-300 before:block before:absolute before:w-1 before:h-full before:left-0 before:bg-primary' : ''}`}
                                        onClick={() => handleOrderClick(order)}
                                    >
                                        <div>
                                            <p className='text-xs text-primary font-light'>{order._id}</p>
                                            <p className='text-[15px] font-semibold'>Lucknow Tour Package</p>
                                            <p className='text-[14px]'>Aman Kharwar</p>
                                            <p className='text-[12px] text-slate-600'>time 9:10 am</p>
                                        </div>
                                        <div>
                                            <span className='text-[18px] font-semibold'>{parseInt("455456").toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1   md:min-w-[320px] max-w-full'>
                        <div className=''>
                            <div className='pb-4'>
                                <LiaBarsSolid className='text-slate-400 hover:text-slate-500 cursor-pointer ' size={26} onClick={handleToggleOrderList} />
                            </div>
                            <div className=' overflow-hidden overflow-x-scroll backdrop-blur-xl bg-white/50 border-l-2 border-teal-700 text-black rounded-lg shadow-lg p-4'>
                                {selectedOrder && (
                                    <div>
                                        <div className='flex flex-wrap items-center justify-center gap-4'>
                                            <BsPatchCheckFill className='animate-pulse text-green-600' size={28} />
                                            <p className='text-[20px]'>Payment Done</p>
                                        </div>
                                        <div className='flex items-center flex-wrap justify-center gap-5'>
                                            <div className='p-4 min-w-36'>
                                                <Image className='w-52 rounded-md' src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="" />
                                            </div>
                                            <div className='bg-slate-100 p-2 rounded-lg  '>
                                                <p className='leading-7 font-semibold text-sm'>Name: <span className='font-light'>{selectedOrder.customer}</span></p>
                                                <p className='leading-7 font-semibold text-sm'>Phone Number: <span className='font-light'>7524521451</span></p>
                                                <p className='leading-7 font-semibold text-sm'>Email: <span className='font-light'>aman2223@gmail.com</span></p>
                                                <p className='leading-7 font-semibold text-sm'>Address: <span className='font-light'>gaur city mall, greater, uttar pradesh</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='border-b mb-2 flex items-center gap-3 justify-center'>
                                                <span className='text-lg font-semibold '>Package</span>
                                                <a className='text-sm font-semibold text-violet-600 hover:text-violet-700' href="">Link</a>
                                            </div>
                                            <div className=' flex flex-wrap justify-center gap-5 items-center mb-2'>
                                                <div className=' min-w-60'>
                                                    <div className='flex'>
                                                        <p className='w-28 font-semibold text-sm'>Package :</p>
                                                        <span className='font-thin'>Lucknow Tour Package</span>
                                                    </div>
                                                    <div className="flex">
                                                        <p className='w-28 font-semibold text-sm'>Start & City :</p>
                                                        <span className='font-thin'>Mumbai</span>
                                                    </div>
                                                    <div className="flex">
                                                        <p className='w-28 font-semibold text-sm'>Price :</p>
                                                        <span className='font-thin'>23,233</span>
                                                    </div>
                                                    <div className="flex">
                                                        <p className='w-28 font-semibold text-sm'>Touring Date :</p>
                                                        <span className='font-thin'>26 Jan 2023</span>
                                                    </div>
                                                </div>
                                                <div className='grid grid-cols-2 gap-2 min-w-56'>
                                                    <div className='bg-slate-100 p-2 rounded-lg'>
                                                        <div className='flex justify-center border-b-2 border-primary'>
                                                            <span className='font-semibold'>Guests</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.adult ? 'block' : 'hidden'}`}>
                                                            <p className='w-20 font-semibold text-sm'>Adults :</p>
                                                            <span className='font-thin'>{selectedOrder.adult}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.child ? 'block' : 'hidden'}`}>
                                                            <p className='w-20 font-semibold text-sm'>Child :</p>
                                                            <span className='font-thin'>{selectedOrder.child}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.infant ? 'block' : 'hidden'}`}>
                                                            <p className='w-20 font-semibold text-sm'>Infant :</p>
                                                            <span className='font-thin'>{selectedOrder.infant}</span>
                                                        </div>
                                                    </div>
                                                    <div className='bg-slate-100 p-2 rounded-lg'>
                                                        <div className='flex justify-center border-b-2 border-primary'>
                                                            <span className='font-semibold'>Rooms</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.singleRoom ? 'block' : 'hidden'}`}>
                                                            <p className='w-28 font-semibold text-sm'>Single Room :</p>
                                                            <span className='font-thin'>{selectedOrder.singleRoom}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.doubleRoom ? 'block' : 'hidden'}`}>
                                                            <p className='w-28 font-semibold text-sm'>Double Room :</p>
                                                            <span className='font-thin'>{selectedOrder.doubleRoom}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.twinRoom ? 'block' : 'hidden'}`}>
                                                            <p className='w-28 font-semibold text-sm'>Twin Room :</p>
                                                            <span className='font-thin'>{selectedOrder.twinRoom}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.tripleRoom ? 'block' : 'hidden'}`}>
                                                            <p className='w-28 font-semibold text-sm'>Triple Room :</p>
                                                            <span className='font-thin'>{selectedOrder.tripleRoom}</span>
                                                        </div>
                                                        <div className={`flex ${selectedOrder.quardRoom ? 'block' : 'hidden'}`}>
                                                            <p className='w-28 font-semibold text-sm'>Quard Room :</p>
                                                            <span className='font-thin'>{selectedOrder.quardRoom}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border border-dashed' />
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className='text-cyan-400 text-2xl font-semibold'>$ 2,632</span>
                                                    <p className='text-xs bg-red-500 px-2 text-white rounded-badge'>Pay 25 % :</p>
                                                </div>
                                                <div>
                                                    <span className='w-28 text-sm'>Gst 5% included</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='py-1 px-3 text-lg rounded bg-primary text-white'>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </AppProvider>
    );
}

export default Itinerary;
