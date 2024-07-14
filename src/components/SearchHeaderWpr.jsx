import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import SearchPageFilter from './SearchPageFilter';
import CloseIcon from '@mui/icons-material/Close';

// Today changes here in main file

const SearchHeaderWpr = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

const handleApplyFilter = (filters) => {
  alert(`Filters applied`);
  console.log(filters);
  handleCloseModal();  // Close the modal when filters are applied
};

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
        {/* <button className="border rounded-sm border-gray-400 text-sm px-3 py-1 hover:bg-white xl:hidden block">
          Filter
        </button> */}
          <button className="border rounded-sm border-gray-400 text-sm px-2 py-0.5 hover:bg-white xl:hidden block"
          onClick={handleOpenModal}>
          Filter
        </button>
      </div>
          
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-md h-full max-h-[95vh] overflow-y-auto">
            <button onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <CloseIcon />
            </button>
            <SearchPageFilter onApplyFilter={handleApplyFilter} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchHeaderWpr;
