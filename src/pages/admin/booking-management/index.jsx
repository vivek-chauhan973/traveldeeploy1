import Layout from "@/components/admin/Layout";
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import Image from 'next/image';
const FetchBookingData = async () => {
    const response = await fetch("/api/booking");
    const data = await response.json();
    return data.bookings;
};

const Index = () => {
    const [data, setData] = useState([]); // Specify the type of data if possible

    useEffect(() => {
        const fetchData = async () => {
            const bookingData = await FetchBookingData();
            setData(bookingData);
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs only once after initial render

    return (
            <Layout>
                <div className="w-full pb-5 sm:flex justify-between items-center ">
                    <div className="font-semibold text-2xl">Booking Management</div>
                    <div className="flex gap-5 text-[18px]">
                        <p>Total Earning: <span className="text-amber-600 font-semibold">₹28,878</span></p>
                        <p>Today Earning: <span className="text-amber-600 font-semibold">₹1,878</span></p>
                    </div>
                </div>
                <div className="my-10 items-center sm:flex justify-between">
                    <div className="flex gap-2">
                        <p>Total (1)</p>
                        <p>Pending (1)</p>
                        <p>Completed (1)</p>
                    </div>
                    <div>
                        <input className="py-1 px-4 rounded-badge" type="text" placeholder="Enter Customer Name" />
                    </div>
                </div>

                {data && data.length > 0 ? (
                    <div>
                        {data.map((item, id) => (
                            <div key={id} className="rounded-md border shadow-sm bg-slate-50 my-5">
                                <div className="p-2">
                                    <div className="flex items-center gap-5">
                                        <p className="rounded-md font-semibold py-2">Touring Package</p>
                                        <a href="" className="text-indigo-800 underline">Link</a>
                                    </div>
                                    <hr className="border-b-1 border-black" />
                                    <div className="flex gap-5 py-4 text-[15px] px-5 lg:justify-between justify-normal flex-wrap">
                                        <div className="block m-auto sm:m-0 text-center sm:text-left sm:flex gap-5 break-words">
                                            <div>
                                                <div className="h-24 w-24 m-auto sm:m-0 rounded-full overflow-hidden">
                                                    <Image className="w-full h-full object-cover"
                                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="" />
                                                </div>
                                                <h2 className="font-semibold text-[16px] pt-2">@Username</h2>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[16px] pb-2">@Info</div>
                                                {/* <h2 className="capitalize">{item.info.name}</h2> */}
                                                {/* <h2 className="capitalize">{item.info.number}</h2> */}
                                                {/* <h2 className="lowercase">{item.info.email}</h2> */}
                                                {/* <h2 className="capitalize">{item.info.address}</h2> */}
                                            </div>
                                        </div>

                                        <div className="border-l pl-5">
                                            <div className="font-semibold text-[16px] pb-2">Package</div>
                                           
                                        </div>
                                        <div className="border-l pl-5">
                                            <h2 className="font-semibold text-[16px] pb-2">No. of People: <span
                                                className="font-semibold">5</span></h2>
                                            <h2>Adults: <span className="font-semibold">{item.adult}</span></h2>
                                            <div>
                                                <h2>Child: {item.child}</h2>
                                                <div className="flex flex-col hidden">
                                                    {/* <span className="font-semibold pl-10">{item.no_of_customer.child_dob.child_1}</span>
                                                    <span className="font-semibold pl-10">{item.no_of_customer.child_dob.child_2}</span> */}
                                                </div>
                                            </div>
                                            <h2>Infant: <span className="font-semibold">{item.infant}</span></h2>
                                        </div>
                                        <div className="border-l pl-5">
                                            <h2 className="font-semibold pb-2 text-amber-600 text-[16px]">Payment</h2>
                                            {/* <h2 className="">Full Payment: <span className="font-semibold">{item.payment.total}</span></h2>
                                            <h2>Half Payment: <span className="font-semibold">{item.payment.advance}</span></h2> */}
                                            <button
                                                className="border w-full my-2 px-3 py-2 rounded-md text-white bg-amber-600">Completed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </Layout>
    );
};

export default Index;
