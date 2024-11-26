import Link from "next/link";
import Pagination from "react-js-pagination";
import Image from 'next/image'
import { useRouter } from "next/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";

const BlogPromoPackageList = ({blogs}) => {
const router=useRouter();

// console.log(".............................................",router?.query?.post);
    return (
        <div>
            <div className="flex flex-wrap gap-6">
                {blogs?.length > 0 && blogs?.map((items, i) => {
                    return (
                        <div key={i} className="relative pb-5 mb-5 w-[250px] md:h-[400px]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
                            <div className=" flex items-center h-[150px] w-full">
                                <Image
                                    width={200}
                                    height={200}
                                    className="h-[220px] mx-5 md:m-0 w-full md:p-0 md:h-full rounded-t-md overflow-hidden object-cover"
                                    src={items?.videoPath}
                                    alt="ui/ux review check"
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevent infinite loop if fallback also fails
                                        e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                                    }}
                                />
                            </div>
                            <div className="h-[300px]">
                                <div className="px-5 w-full">
                                    <div className="mt-3 flex justify-between">
                                        <p className="text-sm">{ new Date(items?.updatedAt).toLocaleDateString()}</p>
                                        <p className="text-sm">{items?.time} min</p>
                                    </div>
                                    <div className="my-4">
                                        <h5 className="block font-sans text-base leading-relaxed capitalize font-semibold antialiased text-black">
                                            {items?.title}
                                        </h5>
                                    </div>
                                    <div className="mb-5">
                                        <p
                                            // dangerouslySetInnerHTML={{ __html: items?.about }}
                                            className="block text-[12px] font-normal text-gray-800 md:line-clamp-4 line-clamp-2"
                                        >
                                            {items?.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <Link
                                        // href=""
                                        href={"/travel/" + router?.query?.post + "/" + items?.title?.split(" ")?.join("-")}
                                        className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-2.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
                                        type="button"
                                    >
                                        View details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
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

export default BlogPromoPackageList;
