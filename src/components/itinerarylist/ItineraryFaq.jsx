import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const ItineraryFaq = ({ faq }) => {
  const [openIndices, setOpenIndices] = useState([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  // Toggle specific section
  const handleToggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter(index => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  // Expand all sections
  const handleExpandAll = () => {
    setOpenIndices(faq.map((_, i) => i));
    setIsAllOpen(true);
  };

  // Hide all sections
  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  return (
    <div className="w-full m-auto">
      <div className='flex justify-end items-center'>
        <button
          className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100 rounded-md"
          onClick={isAllOpen ? handleHideAll : handleExpandAll}
        >
          {isAllOpen ? 'Hide all' : 'Expand all'}
        </button>
      </div>
      <div className="w-full mx-auto md:mt-5 mt-3">
        {faq?.map((item, i) => (
          <div key={i} className="mb-4">
            <div
              className="w-full h-12 flex justify-between items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
              onClick={() => handleToggle(i)}
            >
              <div className="flex items-center gap-3">
                <div className="bg-navyblack text-white px-2 py-1 rounded-2xl">
                  <p className="text-xs font-medium text-white">Day {i + 1}</p>
                </div>
                <div>
                  <p className="text-para capitalize font-semibold text-graytext">{item.title}</p>
                </div>
              </div>
              {openIndices.includes(i) ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-600" />
              )}
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden
                ${openIndices.includes(i) ? 'max-h-[1000px]' : 'max-h-0'}`}
              style={{ maxHeight: openIndices.includes(i) ? '1000px' : '0px' }}
            >
              <div className="py-4  px-4 text-para">
                <div className="relative">
                  <div className="relative text-para md:pl-10 pl-8 border-l ml-2 border-navyblack border-dashed pb-2">
                    {/* Circle */}
                    <div className="-left-2 absolute bg-navyblack h-4 w-4 rounded-full"></div>
                    <div dangerouslySetInnerHTML={{ __html: item.information }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryFaq;