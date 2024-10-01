import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CarDetailFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };


    return (
        <div className="w-full md:w-3/4 m-auto">

            <div className="w-full mx-auto mt-10">
                {/* {data?.map((item, i) => ( */}
                    <div 
                    // key={i} 
                    className="mb-3">
                        <div className="w-full h-12 flex justify-between items-center md:px-5 px-3 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200 cursor-pointer"
                            // onClick={() => handleToggle(i)}
                            >
                            <div className='flex justify-start items-center w-[95%] h-full'>
                                <p className="md:text-base text-sm capitalize font-semibold">
                                    {/* {item.title} */}
                                    Rakesh Kumar Rikki
                                    </p>
                            </div>

                            <div className='flex justify-center items-center w-[5%] h-full'>
                                {/* {openIndex === i ? ( */}
                                    <FontAwesomeIcon
                                        icon={faChevronUp}
                                        className='h-3 w-3 cursor-pointer'
                                    />
                                {/* ) : (
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className='h-3 w-3 cursor-pointer'
                                    />
                                )} */}
                            </div>
                        </div>
                        <div className="overflow-hidden transition-max-height duration-700 ease-in-out"
                        // className={`overflow-hidden transition-max-height duration-700 ease-in-out${openIndex === i ? 'max-h-auto' : 'max-h-0'}`}
                            >
                            <div className=" md:text-base text-sm " >
                                <p  className='about-margin py-4 xl:px-10 px-5 '
                                    // dangerouslySetInnerHTML={{ __html: item.information }}
                                >
                                    Rakesh Kumar Rikki  We help you prepare for your trip and ensure an effortless and
                                    enjoyable travel experience.
                                </p>
                            </div>
                        </div>
                    </div>
                {/* ))} */}

            </div>
        </div>
    );
};

export default CarDetailFaq;
