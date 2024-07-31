// With Expand all

import React, { useState, useEffect  } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const ItineraryFaq = ({ promoData }) => {
  // Change state to an array that tracks open indices
  const [openIndices, setOpenIndices] = useState([]);

  const [isAllOpen, setIsAllOpen] = useState(false);

   // Effect to update isAllOpen based on openIndices
   useEffect(() => {
    if (openIndices.length === sections.length) {
      setIsAllOpen(true);
    } else {
      setIsAllOpen(false);
    }
  }, [openIndices]);

  const handleToggle = (i) => {
    // Check if the index is already open
    if (openIndices.includes(i)) {
      // Remove index from the array if it's already open
      setOpenIndices(openIndices.filter(index => index !== i));
    } else {
      // Add index to the array if it's not open
      setOpenIndices([...openIndices, i]);
    }
  };

  const handleExpandAll = () => {
    setOpenIndices(sections.map((_, i) => i));
    setIsAllOpen(true);
  };

  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  const sections = [
    { title: 'Hello 1', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel.` },
    { title: 'Hello 2', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel.` },
    { title: 'Hello 3', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla soluta officia est facere, vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel.` },
  ];

  return (
    <div className="w-full m-auto">
      {/* <div className="text-center md:mb-7 mb-5">
        <p className="md:text-[22px] text-[20px] mb-2">HighLight & Inclusion</p>
        <p className="text-para md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div> */}

      <div className='flex justify-end items-center'>
        <button className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100 rounded-md"
                onClick={isAllOpen ? handleHideAll : handleExpandAll}
            >
            {isAllOpen ? 'Hide all' : 'Expand all'}
        </button>
      </div>

      <div className="w-full mx-auto md:mt-5 mt-3">
        {sections.map((item, i) => (
          <div key={i} className="mb-3">            
            <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                 onClick={() => handleToggle(i)}
                >
                <p className="text-base md:font-medium font-normal">{item.title}</p>
                {openIndices.includes(i) ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                )}
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out 
                 ${openIndices.includes(i) ? 'max-h-screen' : 'max-h-0'}`}
                >
                <div className="py-4 px-10 text-para">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryFaq;
