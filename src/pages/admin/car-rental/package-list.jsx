import React, { useEffect, useState } from "react";
import Layout from "@/components/admin/Layout";
import Pagination from "react-js-pagination";
import Link from "next/link";
import DeleteModal from "@/components/admin/itineraryCreate/DeleteModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCube, faArrowRightLong, faMagnifyingGlass, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const YourComponent = () => {
  const [itineraries, setItineraries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch itinerary data
    const fetchItineraryData = async () => {
      try {
        const response = await fetch("/api/cars/package/get-packages");
        const data = await response.json();
        console.log("all packages list is here ---> ",data);
        setItineraries(data.packages || []); // Provide a default empty array if data.packages is undefined
      } catch (error) {
        console.error("Error fetching itinerary data:", error);
      }
    };

    fetchItineraryData();
  }, []);

  const handleDelete = () => {
    // Perform delete action here
    setIsModalOpen(false);
    // console.log("Deleting item with ID:", deletedId);
    // Handle delete logic...
  };

  // console.log("current items", itineraries);
  const deleteItem = (id) => {
    const newPackages = itineraries.filter((item) => item._id !== id);
    setItineraries(newPackages);
    setIsModalOpen(true);

    setDeletedId(id);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter items based on search query
  let filteredItineraries = itineraries?.filter((itinerary) =>
    itinerary?.customId?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItemsCount = filteredItineraries.length;
  const totalNumberOfPages = Math.ceil(totalItemsCount / itemsPerPage);
  const currentItems = filteredItineraries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  // console.log("Rakesh2", currentItems);
  return (

      <Layout>
        <div>
          <DeleteModal
            Deleted_id={deletedId}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDelete={handleDelete}
          />
        </div>
        <div className="w-30 overflow-auto">
          <div className="p-4 min-w-[768px] overflow-x-auto">
            <div className="flex justify-between items-center pb-5">
              <div className="flex items-center gap-5 text-primary pb-3">
                <FontAwesomeIcon icon={faCube} className="text-2xl" />
                <p className="text-[24px] text-black">Car Package List</p>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=" text-teal-700 text-xl"
                />
              </div>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-slate-400 text-sm"
                  />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-8 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:outline sm:text-sm"
                  placeholder="Search for package..."
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
            </div>
            <table className="bg-[#FFFBF5] shadow-md table-auto w-full border-collapse border rounded-lg outline outline-[0.5px] overflow-hidden p-10 ">
              <thead>
                <tr className="border rounded">
                  {/* <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Image
                  </th> */}
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Pckage ID
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Name
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Category
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Price
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Rating
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Status
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Edit & Remove1
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((itinerary) => (
                  <tr className="border-b" key={itinerary?._id}>
                    {/* <td className="py-2 pl-4 w-52">
                      <Image
                        className="w-40 h-16 object-cover rounded"
                        src={
                          itinerary?.uploads?.[0]
                            ? itinerary?.uploads?.[0]
                            : "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt=""
                        width="1920"
                        height="1280"
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop if fallback also fails
                          e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                        }}
                      />
                    </td> */}
                    <td className="py-4 text-center border-x capitalize">
                      {itinerary.customId}
                    </td>
                    <td className="py-4 text-center border-x capitalize">
                      {itinerary.name}
                    </td>
                    <td className="py-4 text-center flex flex-wrap border-x capitalize">
                      {itinerary.category?.map((item,i)=><p key={i} className="px-2">{item?.category}</p>)}
                    </td>
                    <td className="text-center border-x">Rs {itinerary.price}</td>
                    <td className="py-4 text-center border-x">
                      {itinerary.packageRating}
                    </td>
                    <td className="text-center border-x">{itinerary.status}</td>
                    <td className="py-4 flex justify-center items-center gap-3">
                      <Link
                        href={"/admin/car-rental/itinerary/" + itinerary?._id + "?type=edit"}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="font1 hover:text-primary cursor-pointer"
                        />
                      </Link>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 hover:text-primary cursor-pointer"
                        onClick={() => deleteItem(itinerary?._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex justify-end mt-4">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={2}
                onChange={handlePageChange}
                itemClass="pagination-item"
                linkClass="pagination-link"
                prevPageText="<"
                nextPageText=">"
                firstPageText="1"
                lastPageText={totalNumberOfPages.toString()}
                innerClass="pagination"
              />
            </div>
          </div>
        </div>
      </Layout>

  );
};

export default YourComponent;
