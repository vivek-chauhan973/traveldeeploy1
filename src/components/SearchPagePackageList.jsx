import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import Image from 'next/image'
import { useAppContext } from "./admin/context/Package/AddGuest";

const fetchPackages = async (locationId) => {
  const response = await fetch(
    `/api/public/tour-packages?locationId=${locationId}`,
    { method: "GET" }
  );
  const data = await response.json();
  console.log("api public tour=package", data)
  return data.packages;
};
const filteredData = async (id, cat, min, max) => {
  const response = await fetch(`http://localhost:3000/api/public/filter-packages?locationId=${id}&categoryId=6694f2c73a8237144bdbdeb7&priceMin=${min}&priceMax=${max}`)
  const data = await response.json();
  return data;
}


const SearchPagePackageList = (locationId) => {
  const router = useRouter();

  const pathnames = router.asPath.split("/").filter((x) => x);
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page
  const [filterPackage, setFilterPackage] = useState(null);
  const [filterData1, setFilterData1] = useState([]);
  const { filterApi } = useAppContext();
  // console.log("filter api 12331",filterApi)
  useEffect(() => {
    filteredData(filterApi?.locationId, filterApi?.catagoryId, filterApi?.minPrice, filterApi?.maxPrice).then(res => setFilterPackage(res?.packages))

  }, [filterApi])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesData = await fetchPackages(
          locationId?.locationId,
          currentPage,
          itemsPerPage
        );
        setPackages(packagesData);
        // console.log("packages 123123:::",packagesData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (locationId?.locationId) {
      fetchData();
    }
  }, [locationId, currentPage, itemsPerPage]);
  useEffect(() => {
    if (filterPackage?.length > 0) {
      setFilterData1(filterPackage || [])
    }
    else {
      setFilterData1(packages)
    }
  }, [filterData1, locationId, currentPage, filterApi, packages, filterPackage])


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const windowHeight = window.innerHeight;
    const middleOfWindow = windowHeight / 2;
    window.scrollTo({ top: middleOfWindow, behavior: "smooth" });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData1?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filterData1?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // console.log("packsheghdbfhsdvfugsdjfbdscvjsdbfvjgse",currentItems)
  return (
    <div>
      {currentItems?.map((packageData, i) => (
        <div key={i} className=" relative py-5  mb-5 w-full md:flex md:h-[220px] gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
          <div className="md:pl-5 flex items-center">
            <Image 
               width={500}
               height={500}
              className=" h-[220px] mx-5   md:m-0 w-full md:p-0 md:w-[440px] md:h-full rounded-md overflow-hidden object-cover"
              src={packageData?.uploads?.[0]?packageData?.uploads?.[0]:"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
              alt="ui/ux review check"
            />
          </div>
          <div className="mx-6 md:m-0 mt-2">
            <div className="">
              <div className="flex items-center justify-between mb-1">
                <h5 className="block font-sans text-[18px] capitalize font-semibold antialiased text-black">
                  {packageData.name}
                </h5>
                <p className="px-5 hidden md:flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-4 w-4  md:h-5 md:w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  5.0
                </p>
              </div>
              <div className="flex flex-wrap gap-5 my-4">
                <p className="text-[11px] flex gap-1 items-center">
                  {" "}
                  <span>
                    <Image width={100} height={100}
                      className="w-3"
                      src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                      alt=""
                    />
                  </span>{" "}
                  15 Days
                </p>
                <p className="text-[11px] flex gap-1 items-center">
                  {" "}
                  <span>
                    <Image width={100} height={100}
                      className="w-3"
                      src="https://www.svgrepo.com/show/229132/internet.svg"
                      alt=""
                    />
                  </span>{" "}
                  15 Days
                </p>
                <p className="text-[11px] flex gap-1 items-center">
                  {" "}
                  <span>
                    <Image width={100} height={100}
                      className="w-3"
                      src="https://www.svgrepo.com/show/38705/location-pin.svg"
                      alt=""
                    />
                  </span>{" "}
                  23 Cities
                </p>
              </div>

              <div className=" line-clamp-2 w-60">
                <p
                  dangerouslySetInnerHTML={{ __html: packageData.about }}
                  className="block  text-[12px] font-normal text-gray-800"
                ></p>
              </div>
            </div>
            <div className="flex gap-3 mt-3 md:gap-4 justify-between md:justify-normal max-w-[350px]  mb-3">
              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/13776/building.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Hotel</p>
              </div>

              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Meals</p>
              </div>

              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/447874/transport.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Transport</p>
              </div>

              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/438545/flight.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Flight</p>
              </div>

              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/533057/camera-alt-1.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Sightseeing</p>
              </div>

              <div className="flex flex-col items-center ">
                <Image width={100} height={100}
                  className="w-4 "
                  src="https://www.svgrepo.com/show/394547/visa.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Visa</p>
              </div>
            </div>
          </div>

          <div className=" md:w-[420px] m-auto md:m-0 md:border-l justify-center px-5 flex flex-col">
            <div className="">
              <div className="text-right">
                <p className="text-[16px] leading-snug text-green-700 font-semibold">
                  SUPER DEAL PRICE
                </p>
                <div className="flex  justify-end items-baseline gap-2 md:block">
                  <p className="text-[12px] mt-1">Starts From </p>
                  <p className="text-[22px] font-medium">
                    ₹{packageData.price.toLocaleString()}
                  </p>
                </div>
                <p className="text-[10px] leading-snug">
                  per person on twin sharing
                </p>
              </div>
            </div>
            <div className="flex flex-cols">
              <Link
                href={"/package/" + packageData.pageUrl}
                className="mt-3 block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                type="button"
              >
                View details
              </Link>
            </div>
          </div>
          <div className=" absolute top-3">
            <div className=" rounded-tr-sm rounded-br-sm px-2 bg-gradient-to-r from-cyan-500 to-blue-500">
              <p className="py-1 text-sm text-white ">Group Departure</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-4">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={packages?.length}
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

export default SearchPagePackageList;
