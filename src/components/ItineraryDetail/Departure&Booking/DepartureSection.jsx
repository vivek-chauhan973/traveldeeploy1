import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import useMyCustomHook from "./DepartureSectionData";
import DeparturePopup from "./DeparturePopup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';






const DepartureSection = ({ addPackage }) => {
  const { setDepartureSectionData } = useAppContext();
  const [datePackage, setDatePackage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [startCity, setStartCity] = useState([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // New state for managing the current month
  const AllDataRelatedCity = useMyCustomHook();

  useEffect(() => {
    setStartCity(addPackage?.startcity);
  }, [addPackage]);

  useEffect(() => {
    startCity?.unshift('All');
  }, [startCity]);

  const groupedByMonth = AllDataRelatedCity?.[datePackage]?.reduce((acc, item) => {
    const dateObj = new Date(item.date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    const monthWithYear = `${month} ${year}`;

    if (!acc[monthWithYear]) {
      acc[monthWithYear] = [];
    }
    acc[monthWithYear].push(item);
    return acc;
  }, {});

  const monthKeys = Object.keys(groupedByMonth || {});

  const handlePreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < monthKeys.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div>
            <div>
              <h4 className="font-semibold text-base p-3 text-graytext">
                1. SELECT DEPARTURE CITY & DATE
              </h4>
            </div>
            <hr />
            <div className="overflow-y-auto">
              {/* <div className="flex flex-wrap gap-3 pt-4">
                {addPackage?.startcity?.map((item, i) => (
                  <div
                    onClick={() => setDatePackage(0)}
                    className="flex justify-center items-center font-semibold text-sm hover:bg-green-300 hover:text-white cursor-pointer border rounded-full ml-2 py-2 px-3"
                    key={i}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div> */}

              {/* Select departure city */}
              <div className="relative gap-4 pb-4 pt-2">
                {/* <h6 className="font-semibold text-base ml-2 mb-3">
                  All Departure date({AllDataRelatedCity?.[datePackage]?.length})
                </h6> */}
                {showPopup && <DeparturePopup setShowPopup={setShowPopup} addPackage={addPackage} />}

                {/* Calendar Slider with Previous and Next Buttons */}
                <div className="flex pr-5 justify-end gap-2 items-center">
                  <button
                    className={` p-2 rounded-full ${currentMonthIndex === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={handlePreviousMonth}
                    disabled={currentMonthIndex === 0}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} className='font1' />
                  </button>
                  <button
                    className={` p-2 rounded-full ${currentMonthIndex === monthKeys.length - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={handleNextMonth}
                    disabled={currentMonthIndex === monthKeys.length - 1}
                  >
                    <FontAwesomeIcon icon={faAngleRight} className='font1' />
                  </button>
                </div>

                {/* Display the current month's calendar */}
                <div className="mb-2 ml-5">
                  {groupedByMonth && monthKeys[currentMonthIndex] && (
                    <div key={currentMonthIndex} className="mb-5">
                      <h3 className="text-md font-semibold mb-2">
                        {monthKeys[currentMonthIndex]}
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {groupedByMonth[monthKeys[currentMonthIndex]].map((item, i) => {
                          const dateObj = new Date(item.date);
                          const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'short' });
                          const dayOfMonth = dateObj.getDate();

                          return (
                            <div
                              key={i}
                              onClick={() => {
                                setShowPopup(true);
                                setDepartureSectionData(item);
                              }}
                              className="cursor-pointer"
                            >
                              <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 h-14 rounded-md overflow-hidden">
                                <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                  {dayOfWeek}
                                </p>
                                <hr />
                                <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xs">
                                  {dayOfMonth}
                                </p>
                                <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                  ₹ <p>{item?.price?.toLocaleString()}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="ml-2 my-4">
                  <h6 className="font-semibold text-base mb-2 text-graytext">About us</h6>
                  <p
                    className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                    dangerouslySetInnerHTML={{ __html: addPackage?.about }}
                  ></p>
                </div>

                <hr />
                <div className="ml-2 mt-3">
                  <h6 className="text-md font-semibold mb-2 text-graytext">Highlights</h6>
                  <div>
                    <div>
                      {addPackage?.highlights?.map((highlight) => (
                        <ul key={highlight._id} className="ml-3">
                          <li className="xl:ml-5 ml-2 mr-2 text-para">{highlight.text}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DepartureSection;






// <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack">
// {dayAbbreviations[item.day] || item.day.slice(0, 3)}
// </p>













//


//  {/* <div className="flex my-2 xl:gap-3 gap-5 flex-wrap ml-5">
//                   {AllDataRelatedCity?.[datePackage]?.map((item, i) => <div key={i} onClick={() => { setShowPopup(true); setDepartureSectionData(item) }} className=" cursor-pointer" >
//                     <div className=" border-b-2 hover:bg-gray-300  text-white bg-gray-50 w-16 h-14 rounded-md overflow-hidden">
//                       <p className="text-center text-xxs text-white group-hover:text-white  bg-navyblack">{item.day}</p>
//                       <hr />
//                       <p className="text-center text-black group-hover:text-white  text-xxs">{item.date}</p>

//                       <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">₹ <p>{item.price}</p></div>
//                     </div>
//                   </div>)}
//                 </div> */}
