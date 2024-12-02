import React, { useState ,useEffect} from "react";
import Modal from '@mui/material/Modal';
import SearchPageFilter from './SearchPageFilter';
import {CancelIcon} from "@/components/icons/index"


// Today changes here in main file

const SearchHeaderWpr = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


const handleResize = () => {
  // Check if window width is 1200 pixels or less
  if (window.innerWidth <= 1200) {
    setIsModalOpen(false); // Close modal if window width is 1200 or less
  }
};

useEffect(() => {
  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  return () => {
    // Cleanup by removing event listener on component unmount
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className="container-wrapper flex justify-between pb-5 items-center">
      <div>
        <div className=" md:flex gap-2 items-center">
          <p className="text-[16px]"> Havelock Tour Package Holiday Packages</p>
          <p className="text-[13px] mt-1">
            <span>5</span>(149 Reviews)
          </p>
        </div>
        <p className="text-[13px]">Lorem ipsum dolor sit amet .</p>
      </div>
      <div>
        <select className="select w-full max-w-xs hidden  select-sm text-[13px]">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button className="border rounded-sm border-gray-400 text-sm px-2 py-0.5 hover:bg-white xl:hidden block"
                onClick={handleOpenModal}
          >
          Filter
        </button>
      </div>
          
      <Modal open={isModalOpen} onClose={isModalOpen}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 mt-7">
          <div className="relative bg-white px-6 py-8 rounded-lg w-full max-w-md md:h-[75%] h-[65%] max-h-[95vh] overflow-y-auto">
            <button onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <CancelIcon/>
            </button>
            <SearchPageFilter setClearAll={handleCloseModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchHeaderWpr;
