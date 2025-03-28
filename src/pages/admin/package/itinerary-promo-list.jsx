import React, { useEffect, useState } from "react";
import Layout from "@/components/admin/Layout";
import Pagination from "react-js-pagination";
import Link from "next/link";
import DeleteModal from "@/components/admin/itineraryCreate/DeleteModal";
import dynamic from "next/dynamic";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faMagnifyingGlass, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const YourComponent = () => {
  const [itineraries, setItineraries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectType, setSelectType] = useState("all");


  // code for promo list

  const fetchPromoList = async () => {
    const response = await fetch(`/api/public/package-state/fetchpromocat?selectType=${selectType}`);
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    fetchPromoList().then(res => {
      setItineraries(res?.responseData || [])
    });
  }, [selectType])
  const handleDelete = () => {
    setIsModalOpen(false);
  };


  const deleteItem = async (id) => {
    const deleted = confirm("Do you want to delete promo item");
    if (deleted) {
      try {
        const response = await fetch(`/api/public/package-state/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {

        console.log("data can't deleted,something went wrong")
      }

      const newPackages = itineraries.filter((item) => item._id !== id);
      setItineraries(newPackages);
    }

  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter items based on search query

  const totalItemsCount = itineraries?.length;
  const totalNumberOfPages = Math.ceil(totalItemsCount / itemsPerPage);
  const currentItems = itineraries?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  console.log("current items", currentItems);
  return (

      <Layout>
        <div>
          <DeleteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDelete={handleDelete}
          />
        </div>
        <div className="w-30 overflow-auto">
          <div className="p-4 min-w-[768px] overflow-x-auto">
            <div className="flex justify-between items-center pb-5">
              <div className="flex flex-col pb-3">
                <div className="flex items-center gap-5 text-primary pb-3">
                  <FontAwesomeIcon icon={faCube} className="text-2xl" />
                  <p className="text-[24px] text-black">Package Promo List</p>
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className=" text-teal-700 text-xl"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="">Select Type : </p>
                  <select className="ml-2 h-7 w-32 rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                    onChange={(e) => setSelectType(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="category">Category wise</option>
                    <option value="state">State wise</option>
                    <option value="country">Country wise</option>
                  </select>
                </div>
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
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Image
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Select Type
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Type Name
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Status
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Edit & Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 &&
                  <tr className="text-center">
                    <td colSpan={5} className="text-lg  my-5">No records exist</td>
                  </tr>
                }
                {currentItems?.map((itinerary) => (
                  <tr className="border-b" key={itinerary.id}>
                    <td className="py-2 pl-4 w-52">
                      <Image
                        className="w-40 h-16 object-cover rounded"
                        src={
                          itinerary?.image
                            ? itinerary?.image
                            : "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt=""
                        width="1920"
                        height="1280"
                      />
                    </td>
                    <td className="py-4 text-center border-x capitalize">
                      {itinerary.selectType}
                    </td>
                    <td className="py-4 text-center border-x capitalize">
                      {itinerary.selectedItem}
                    </td>

                    <td className="py-4 text-center border-x">{0}</td>
                    <td className="py-4 flex justify-center items-center gap-3">
                      {/* <Link href={"./promo/" + itinerary.relatedId + "?type=edit"}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="mt-1 font1 hover:text-primary cursor-pointer"
                        />
                      </Link> */}
                      <a href={"./promo/" + itinerary.relatedId + "?type=edit"}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="mt-1 font1 hover:text-primary cursor-pointer"
                        />
                      </a>
                      <FontAwesomeIcon
                        icon={faTrash} onClick={() => deleteItem(itinerary._id)}
                        className="font1 hover:text-primary cursor-pointer"
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
