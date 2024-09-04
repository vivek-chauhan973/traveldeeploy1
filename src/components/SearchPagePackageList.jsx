import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import Image from 'next/image';
import { useAppContext } from "./admin/context/Package/AddGuest";
import Category from "@/pages/admin/package/category";

const fetchPackages = async (locationId) => {
  const response = await fetch(`/api/public/tour-packages?locationId=${locationId}`);
  const data = await response.json();
  console.log("api public tour=package---", locationId);
  return data?.packages;
};

const filteredData = async (id, cat, min, max, minDay, maxDay) => {
  const response = await fetch(`/api/public/filter-packages?locationId=${id}&categoryId=${cat}&priceMin=${min}&priceMax=${max}&minDay=${minDay}&maxDay=${maxDay}`);
  const data = await response.json();
  console.log("filter data is here --->:: ", data);
  return data;
};

const SearchPagePackageList = ({ locationId, setMaxDay, maxDay, clearAll }) => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 
  const [filterPackage, setFilterPackage] = useState(null);
  const [filterData1, setFilterData1] = useState([]);
  const { filterApi } = useAppContext();

  useEffect(() => {
    filteredData(filterApi?.locationId, filterApi?.catagoryId, filterApi?.minPrice, filterApi?.maxPrice, filterApi?.duration?.[0], filterApi?.duration?.[1]).then(res => setFilterPackage(res?.packages));
  }, [filterApi]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesData = await fetchPackages(locationId, currentPage, itemsPerPage);
        setPackages(packagesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (locationId) {
      fetchData();
    }
  }, [locationId, currentPage, itemsPerPage, clearAll]);

  useEffect(() => {
    setFilterData1(packages);
  }, [packages]);

  useEffect(() => {
    if (filterPackage?.length > 0) {
      if (clearAll === false) {
        setFilterData1(filterPackage || []);
      }
    }
  }, [filterData1, locationId, currentPage, filterApi, filterPackage]);

  console.log("packages is here ::: ", packages);
  for (let item of packages) {
    if (maxDay < item?.days) {
      setMaxDay(item?.days);
    }
  }

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

  return (
    <div>
      {currentItems?.map((packageData, i) => (
        <div key={i} className="relative py-5 mb-5 w-full md:flex md:h-[220px] gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden">
          <div className="md:pl-5 flex items-center">
            <Image 
              width={500}
              height={500}
              className="h-[220px] mx-5 md:m-0 w-full md:p-0 md:w-[440px] md:h-full rounded-md overflow-hidden object-cover"
              src={packageData?.uploads?.[0] || '/logo.png'}
              alt="ui/ux review check"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if fallback also fails
                e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
              }}
            />
          </div>
          {packageData?.addguest === "fixedDeparture" && (
            <div className="absolute top-3">
              <div className="rounded-r-sm px-2 bg-black">
                <p className="py-1 text-sm text-white">
                  {packageData?.fixedfixeddepartureweightedprice === 1 && "Group Departure"}
                  {packageData?.fixedfixeddepartureweightedprice === 2 && "Charture"}
                </p>
              </div>
            </div>
          )}
          <div className="mx-6 md:m-0 mt-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h5 className="block font-sans text-[18px] capitalize font-semibold antialiased text-black">
                  {packageData.name}
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
                  5.0
                </p>
              </div>
              <div className="flex flex-wrap gap-5 my-4">
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
                  15 Days
                </p>
                <p className="text-[11px] flex gap-1 items-center">
                  <span>
                    <Image
                      width={100}
                      height={100}
                      className="w-3"
                      src="https://www.svgrepo.com/show/229132/internet.svg"
                      alt=""
                    />
                  </span>
                  {packageData?.days?.length} Days
                </p>
                <p className="text-[11px] flex gap-1 items-center">
                  <span>
                    <Image
                      width={100}
                      height={100}
                      className="w-3"
                      src="https://www.svgrepo.com/show/38705/location-pin.svg"
                      alt=""
                    />
                  </span>
                  {packageData?.startcity?.length} Cities
                </p>
              </div>
              <div className="line-clamp-2 w-60">
                <p
                  dangerouslySetInnerHTML={{ __html: packageData.about }}
                  className="block text-[12px] font-normal text-gray-800"
                ></p>
              </div>
            </div>
            <div className="flex gap-3 mt-3 md:gap-4 justify-between md:justify-normal max-w-[350px] mb-3">
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  className="w-4"
                  src="https://www.svgrepo.com/show/13776/building.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Hotel</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  className="w-4"
                  src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Meal</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  className="w-4"
                  src="https://www.svgrepo.com/show/22329/plane.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Flight</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  className="w-4"
                  src="https://www.svgrepo.com/show/216292/forest.svg"
                  alt=""
                />
                <p className="text-[10px] text-neutral-600">Sightseeing</p>
              </div>
            </div>
            <div className="flex justify-between items-center md:justify-start md:gap-10">
              <p className="text-lg md:text-2xl font-semibold text-red-500">
                $2,399
              </p>
              <Link href={`/details/${packageData._id}`}>
                <button
                  type="button"
                  className="flex items-center gap-2 py-2.5 px-5 font-sans text-xs font-medium tracking-normal text-white bg-red-500 rounded-lg"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="inline-flex items-center px-3 py-1 border text-sm font-medium text-gray-700 bg-white hover:bg-gray-200 cursor-pointer"
            activeClass="bg-red-500 text-white"
            hideDisabled
            hideNavigation
            activeLinkClass="bg-red-500 text-white"
          />
        </div>
      )}
    </div>
  );
};

export default SearchPagePackageList;
