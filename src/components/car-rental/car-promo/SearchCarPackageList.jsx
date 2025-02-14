import Link from "next/link";
import Pagination from "react-js-pagination";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";

const SearchCarPagePackageList = ({ carPackageList,setCarPackageList }) => {
    // console.log("carPackageList", carPackageList);
    const {CarFilteredPackages}=useAppContext();

    useEffect(()=>{
        if(CarFilteredPackages?.length>0){
            setCarPackageList(CarFilteredPackages)
        }
       
    },[CarFilteredPackages])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const windowHeight = window.innerHeight;
    const middleOfWindow = windowHeight / 2;
    window.scrollTo({ top: middleOfWindow, behavior: "smooth" });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carPackageList?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = carPackageList?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

    if(CarFilteredPackages?.[0]==="not found"){
        return <p className=" text-center mt-20 font-semibold">No Car Packages found</p>
    }
// console.log("carPackageList------------> ",carPackageList);
    return (
        <div>
            {currentItems?.length > 0 && currentItems?.map((items, i) => {
                return (
                    <div key={i} className="relative py-5 mb-5 w-full md:flex md:h-[220px] gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
                        <div className="md:pl-5 flex items-center md:w-[35%]">
                            <Image
                                width={500}
                                height={500}
                                className="h-[220px] mx-5 md:m-0 w-full md:p-0 md:h-full rounded-md overflow-hidden object-cover"
                                src={items?.uploads?.[0]}
                                alt="ui/ux review check"
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent infinite loop if fallback also fails
                                    e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                                }}
                            />
                        </div>
                        {items?.highSave > 0 &&
                            <div className="absolute top-3">
                                <div className="rounded-r-sm px-2 bg-black"> {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
                                    <p className="py-1 text-sm text-white">
                                        Save {items?.highSave}%
                                    </p>
                                </div>
                            </div>
                        }
                        <div className="mx-6 md:m-0 mt-2 md:w-[35%] mb-3">
                            <div>
                                <div className="flex items-center justify-between mb-1.5 md:max-h-14">
                                    <h5 className="block font-sans text-[18px] leading-6 capitalize font-semibold antialiased text-black">
                                        {items?.name}
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
                                        {items?.packageRating}
                                    </p>
                                </div>
                                <p className="text-para">Vehicle Type : {items?.selectedVicle?.vehicleType}</p>
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
                                        {items?.days > 1 && (
                                            <>{items?.days - 1} Night{items?.days - 1 > 1 ? "s" : ""} / </>
                                        )}
                                        {items?.days} Day{items?.days > 1 ? "s" : ""}
                                    </p>
                                    <p className="text-[11px] flex gap-1 items-center">
                                        <FontAwesomeIcon icon={faUser} className="w-3 h-3" /> {" "}
                                        {items?.selectedVicle?.seatingCapacity}
                                    </p>
                                    <p className="text-[11px] flex gap-1 items-center">
                                        <FontAwesomeIcon icon={faSuitcase} className="w-3 h-3" /> {" "}
                                        {items?.selectedVicle?.bags}
                                    </p>
                                </div>
                                <div className="md:line-clamp-4 line-clamp-2">
                                    <p
                                        dangerouslySetInnerHTML={{ __html: items?.about }}
                                        className="block text-[12px] font-normal text-gray-800"
                                    >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] m-auto md:m-0 md:border-l justify-center px-5 flex flex-col">
                            <div>
                                <div className="text-center">
                                    <p className="text-[16px] leading-snug text-green-700 font-semibold uppercase">
                                        Best Deal Price
                                    </p>
                                    <div className="flex justify-center items-baseline gap-2 md:block">
                                        {/* <p className="text-[12px] mt-1">Starts From</p> */}
                                        <p className="text-[22px] font-medium">
                                            {items?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                        </p>
                                    </div>
                                    <p className="text-para font-medium leading-snug">
                                        Ex - {items?.startcity}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-cols">
                                <Link
                                    href={"/car-rental/" + items?.location?.url + "/" + items?.pageUrl}
                                    className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
                                    type="button"
                                >
                                    View details
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="flex justify-end my-5 list-none">
                <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={carPackageList?.length}
                onChange={handlePageChange}
                itemClass="pagination-item"
                linkClass="pagination-link"
                prevPageText="Previous"
                nextPageText="Next"
                firstPageText="1"
                lastPageText={`...${totalPages}`}
                innerClass="pagination"
                />
            </div>

        </div>
    );
};

export default SearchCarPagePackageList;
