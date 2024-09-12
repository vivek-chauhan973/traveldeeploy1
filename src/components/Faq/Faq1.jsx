import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq1 = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };


    return (
        <div className="w-full md:w-3/4 m-auto">

            <div className="w-full mx-auto mt-10">
                {data?.map((item, i) => (
                    <div key={i} className="mb-3">
                        <div className="w-full h-12 flex justify-between items-center md:px-5 px-3 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleToggle(i)}>
                            <div className='flex justify-start items-center w-[95%] h-full'>
                                <p className="md:text-base text-sm capitalize font-semibold">{item.title}</p>
                            </div>

                            <div className='flex justify-center items-center w-[5%] h-full'>
                                {openIndex === i ? (
                                    <FontAwesomeIcon
                                        icon={faChevronUp}
                                        className='h-3 w-3 cursor-pointer'
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className='h-3 w-3 cursor-pointer'
                                    />
                                )}
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${openIndex === i ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="py-4 xl:px-10 px-5 md:text-base text-sm">
                                {item.information}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Faq1;
