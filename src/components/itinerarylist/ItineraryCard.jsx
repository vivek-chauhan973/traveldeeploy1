import "../../app/globals.css";
import Image from 'next/image'
 const ItineraryCard=()=>{
    return(
        <>
            <div className="">
            <div className="py-5  mb-5 w-full md:flex gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
                            <div className="md:pl-5 flex items-center">
                                <Image className="h-[230px] mx-5 md:m-0 w-full md:p-0 md:w-[620px] md:h-full rounded-md overflow-hidden object-cover"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="ui/ux review check" />

                            </div>
                            <div className="mx-6 md:m-0 mt-2">
                                <div className="">


                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="block font-sans text-[18px] font-semibold antialiased text-black">
                                        Highlights of Kerala
                                        </h5>
                                        <p
                                            className="px-5 flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            5.0
                                        </p>
                                    </div>




                                    <div className="flex flex-wrap gap-5 my-4">
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <Image className="w-3"
                                                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <Image className="w-3" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <Image className="w-3" src="https://www.svgrepo.com/show/38705/location-pin.svg"
                                                alt="" />
                                        </span> 23 Cities</p>

                                    </div>
                                    






                                    <p className="block text-[12px] font-normal text-gray-800">
                                        Enter a freshly updated and thoughtfully furnished peaceful home
                                        surrounded by ancient trees, stone walls, and open meadows.
                                    </p>
                                </div>





                                <div className="flex gap-4 max-w-[350px] mt-3 mb-1">
                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Hotel</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                            alt="" />
                                        <p className="text-[10px] text-neutral-600">Meals</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Transport</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Flight</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <Image className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Visa</p>
                                    </div>

                                </div>



                            </div>


                            <div className=" md:w-[420px] m-auto md:m-0 md:border-l justify-center px-5 flex flex-col">
                                <div className="">

                                    <div className="text-right">
                                        <p className="text-[16px] leading-snug text-green-700 font-semibold">SUPER DEAL PRICE</p>
                                        <p className="text-[12px] mt-1">Starts From </p>
                                        <p className="text-[22px] font-medium">₹
                                            3,50,000
                                        </p>
                                        <p className="text-[10px] leading-snug">per person on twin sharing</p>
                                        {/* <p className="text-[14px] leading-snug font-medium underline text-blue-900">from ₹
                                            19,423/months</p> */}
                                    </div>
                                </div>
                                <div className="flex flex-cols">
                                    <button
                                        className="mt-3 block grow   select-none rounded-lg bg-orange-400 py-3.5 md:px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                                        type="button">
                                        View details
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}
export default ItineraryCard