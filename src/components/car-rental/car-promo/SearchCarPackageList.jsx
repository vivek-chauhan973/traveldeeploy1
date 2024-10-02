import Link from "next/link";
import Pagination from "react-js-pagination";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SearchCarPagePackageList = () => {

    return (
        <div>
            <div className="relative py-5 mb-5 w-full md:flex md:h-[220px] gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
                <div className="md:pl-5 flex items-center">
                    <Image
                        width={500}
                        height={500}
                        className="h-[220px] mx-5 md:m-0 w-full md:p-0 md:w-[440px] md:h-full rounded-md overflow-hidden object-cover"
                        src='/logo.png'
                        alt="ui/ux review check"
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback also fails
                            e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                        }}
                    />
                </div>
                <div className="absolute top-3">
                    <div className="rounded-r-sm px-2 bg-black"> {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
                        <p className="py-1 text-sm text-white">
                            Save 10%
                        </p>
                    </div>
                </div>
                <div className="mx-6 md:m-0 mt-2">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <h5 className="block font-sans text-[18px] capitalize font-semibold antialiased text-black">
                                Title
                            </h5>
                            <p className="px-5 hidden md:flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-4 w-4 md:h-5 md:w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                4.5
                            </p>
                        </div>
                        <p className="text-sm">Vehicle Type : Innova Crysta</p>
                        <div className="flex flex-wrap gap-5 mt-2 mb-4">
                            <p className="text-[11px] flex gap-1 items-center">
                                <span>
                                    <Image
                                        width={100}
                                        height={100}
                                        className="w-3"
                                        src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                        alt=""
                                    />
                                </span>
                                {/* {packageData?.days > 1 && (
                                    <>{packageData?.days - 1} Night{packageData?.days - 1 > 1 ? "s" : ""} / </>
                                )}
                                {packageData?.days} Day{packageData?.days > 1 ? "s" : ""} */}
                                Nights / Days
                            </p>

                            <p className="text-[11px] flex gap-1 items-center">
                                <FontAwesomeIcon icon={faUser} className="w-3 h-3"/> {" "} 4
                            </p>
                        </div>

                        <div className="line-clamp-2 w-60">
                            <p
                                // dangerouslySetInnerHTML={{ __html: packageData.about }}
                                className="block text-[12px] font-normal text-gray-800"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Corporis facilis pariatur et veniam magnam labore quibusdam libero veritatis error doloremque!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Corporis facilis pariatur et veniam magnam labore quibusdam libero veritatis error doloremque!
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 md:gap-4 justify-between md:justify-normal max-w-[350px] mb-3">
                        {/* <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/13776/building.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Hotel</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Meals</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/447874/transport.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Transport</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/438545/flight.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Flight</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/533057/camera-alt-1.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Image width={100} height={100}
                                        className="w-4"
                                        src="https://www.svgrepo.com/show/394547/visa.svg"
                                        alt=""
                                    />
                                    <p className="text-[10px] text-neutral-600">Visa</p>
                                </div> */}

                        {/* {packageData?.icons?.iconData?.map((item, i) => <div key={i} className="flex flex-col items-center">
                            <Image width={150} height={150}
                                className="w-8"
                                src={item?.icon || "https://www.svgrepo.com/show/13776/building.svg"}
                                alt={item?.name || "png"}
                            />
                            <p className="text-[10px] text-neutral-600">{item?.name}</p>
                        </div>)} */}

                    </div>
                </div>

                <div className="md:w-[420px] m-auto md:m-0 md:border-l justify-center px-5 flex flex-col">
                    <div>
                        <div className="text-right">
                            <p className="text-[16px] leading-snug text-green-700 font-semibold uppercase">
                                Best Deal Price
                            </p>
                            <div className="flex justify-end items-baseline gap-2 md:block">
                                {/* <p className="text-[12px] mt-1">Starts From</p> */}
                                <p className="text-[22px] font-medium">
                                    ₹ 20,000
                                    {/* {packageData?.price.toLocaleString()} */}
                                </p>
                            </div>
                            <p className="text-para font-medium leading-snug">
                                Ex - HR | RS | Delhi
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols">
                        <Link
                            // href={"/package/" + packageData.pageUrl}
                            href=""
                            className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
                            type="button"
                        >
                            View details
                        </Link>

                    </div>
                </div>
            </div>
            
            <div className="flex justify-end my-5 list-none">
                <Pagination
                    // activePage={currentPage}
                    // itemsCountPerPage={itemsPerPage}
                    // totalItemsCount={packages?.length}
                    // onChange={handlePageChange}
                    // itemClass="pagination-item"
                    // linkClass="pagination-link"
                    // prevPageText="Previous"
                    // nextPageText="Next"
                    // firstPageText="1"
                    // lastPageText={`...${totalPages}`}
                    // innerClass="pagination"
                />
            </div>

        </div>
    );
};

export default SearchCarPagePackageList;
