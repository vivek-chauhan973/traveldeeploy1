import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import useMyCustomHook from "./DepartureSectionData";
import DeparturePopup from "./DeparturePopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ItinaryFixedDepartureCard from "./ItinaryFixedDepartureCard";

const DepartureSection = ({ addPackage }) => {
  const {
    departureSectionData,
    setDepartureSectionData,
    setGuestPrice,
    guestPrice,
    setPrice2,
    fixedDepartureButtonEnaibleAndDisable,
  } = useAppContext();
  const [datePackage, setDatePackage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [startCity, setStartCity] = useState([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // New state for managing the current month
  const [columns, setColumns] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const AllDataRelatedCity = useMyCustomHook();
  useEffect(() => {
    setStartCity(addPackage?.startcity);
    setSubmittedData(addPackage?.tableData || []);
    setColumns(addPackage?.tableColumn || []);
  }, [addPackage]);
  const groupedByMonth = AllDataRelatedCity?.[datePackage]?.reduce(
    (acc, item) => {
      const dateObj = new Date(item.date);
      const month = dateObj.toLocaleString("default", { month: "long" });
      const year = dateObj.getFullYear();
      const monthWithYear = `${month} ${year}`;
      if (!acc[monthWithYear]) {
        acc[monthWithYear] = [];
      }
      acc[monthWithYear].push(item);
      return acc;
    },
    {}
  );
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
        <div className="flex xl:hidden flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div>
            <div>
              {fixedDepartureButtonEnaibleAndDisable ? "" : <h4 className="font-semibold text-base p-3 text-graytext uppercase">
                1. Choose your departure date and city
              </h4>}
            </div>
            <hr />
            <div className="overflow-y-auto">
              {showPopup && (
                <DeparturePopup
                  setShowPopup={setShowPopup}
                  addPackage={addPackage}
                />
              )}
              {/* Calendar Slider with Previous and Next Buttons */}
              {addPackage?.addguest === "addGuest" && (
                <div className="flex pr-5 justify-end gap-2 items-center mt-2">
                  <button
                    className={`p-2 rounded-full ${currentMonthIndex === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    onClick={handlePreviousMonth}
                    disabled={currentMonthIndex === 0}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} className="font1" />
                  </button>
                  <button
                    className={`p-2 rounded-full ${currentMonthIndex === monthKeys.length - 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    onClick={handleNextMonth}
                    disabled={currentMonthIndex === monthKeys.length - 1}
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="font1" />
                  </button>
                </div>
              )}
              {/* Display the current month's calendar */}
              {addPackage?.addguest === "addGuest" && (
                <div className="mb-2 ml-5">
                  {groupedByMonth && monthKeys[currentMonthIndex] && (
                    <div key={currentMonthIndex} className="mb-5">
                      <h3 className="text-md font-semibold mb-2">
                        {monthKeys[currentMonthIndex]}
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {groupedByMonth[monthKeys[currentMonthIndex]].map(
                          (item, i) => {
                            const dateObj = new Date(item.date);
                            const dayOfWeek = dateObj.toLocaleString(
                              "default",
                              { weekday: "short" }
                            );
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
                                    <p>{item?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {
                fixedDepartureButtonEnaibleAndDisable &&
                  addPackage?.fixedfixeddepartureweightedprice === 1 ? (
                  <ItinaryFixedDepartureCard
                  />
                ) : (
                  addPackage?.addguest === "fixedDeparture" &&
                  addPackage?.fixedfixeddepartureweightedprice === 1 && (
                    <div className=" ml-5">
                      {AllDataRelatedCity?.[0]?.[0] && (
                        <div className="my-5">
                          <div className="flex gap-3 flex-wrap">
                            {AllDataRelatedCity?.[0]?.[0]?.map((item, i) => {
                              const dateObj = new Date(item.date1);
                              const dayOfWeek = dateObj.toLocaleString(
                                "default",
                                { weekday: "short" }
                              );
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
                                      {item?.date1}
                                    </p>
                                    <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                      <p>{item?.Price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              {fixedDepartureButtonEnaibleAndDisable &&
                addPackage?.fixedfixeddepartureweightedprice === 2 ? (
                <ItinaryFixedDepartureCard
                />
              ) : (
                addPackage?.addguest === "fixedDeparture" &&
                addPackage?.fixedfixeddepartureweightedprice === 2 && (
                  <div className="ml-5">
                    {AllDataRelatedCity?.[0]?.[0]?.length>0 && (
                      <div className="my-5">
                        <div className="flex gap-3 flex-wrap">
                          {AllDataRelatedCity?.[0]?.[0]?.map((item, i) => {
                            const dateObj = new Date(item.Date);
                            const dayOfWeek = dateObj.toLocaleString(
                              "default",
                              { weekday: "short" }
                            );
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
                                <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 rounded-md overflow-hidden">
                                  <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                    {dayOfWeek}
                                  </p>
                                  <hr />
                                  <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xs">
                                    {item?.date1}
                                  </p>
                                  <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                    <p>{item?.Price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                  </div>
                                  <div className="text-center flex justify-center gap-1 text-xxs text-white group-hover:text-white bg-navyblack">
                                    <p>Ava -</p>
                                    <p>{item.Avilability}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
              <hr />
              <div className="ml-2 my-4">
                <h6 className="font-semibold text-md mb-3 text-graytext">
                  About
                </h6>
                <p
                  className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                  dangerouslySetInnerHTML={{ __html: addPackage?.about }}
                ></p>
              </div>
              <div className="md:mx-5 ">
                <div className="md:my-7 my-5 overflow-x-scroll">
                  <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                    <thead>
                      <tr className="border-b bg-black text-white">
                        {columns.map((col, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                      {submittedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {columns.map((col, colIndex) => (
                            <td
                              key={colIndex}
                              className="   border-t border-l  border-r px-2 py-2   capitalize overflow-hidden border-gray-300  text-wrap"
                            >
                              {row[col]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
              <div className="ml-2 my-4">
                <h6 className="font-semibold text-md mb-5 text-graytext">
                  Highlights
                </h6>
                <div>
                  {addPackage?.highlights?.map((highlight) => (
                    <ul key={highlight._id} className="ml-3">
                      <li className="xl:ml-5 ml-2 mr-2 text-para">
                        {highlight.text}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div>
            <div>
              <h4 className="font-semibold text-base p-3 text-graytext uppercase">
                1. Choose your departure date and city
              </h4>
            </div>
            <hr />
            <div className="overflow-y-auto">
              {showPopup && (
                <DeparturePopup
                  setShowPopup={setShowPopup}
                  addPackage={addPackage}
                />
              )}
              {/* Calendar Slider with Previous and Next Buttons */}
              {addPackage?.addguest === "addGuest" && (
                <div className="flex pr-5 justify-end gap-2 items-center mt-2">
                  <button
                    className={`p-2 rounded-full ${currentMonthIndex === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    onClick={handlePreviousMonth}
                    disabled={currentMonthIndex === 0}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} className="font1" />
                  </button>
                  <button
                    className={`p-2 rounded-full ${currentMonthIndex === monthKeys.length - 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    onClick={handleNextMonth}
                    disabled={currentMonthIndex === monthKeys.length - 1}
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="font1" />
                  </button>
                </div>
              )}
              {/* Display the current month's calendar */}
              {addPackage?.addguest === "addGuest" && (
                <div className="mb-2 ml-5">
                  {groupedByMonth && monthKeys[currentMonthIndex] && (
                    <div key={currentMonthIndex} className="mb-5">
                      <h3 className="text-md font-semibold mb-2">
                        {monthKeys[currentMonthIndex]}
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {groupedByMonth[monthKeys[currentMonthIndex]].map(
                          (item, i) => {
                            const dateObj = new Date(item.date);
                            const dayOfWeek = dateObj.toLocaleString(
                              "default",
                              { weekday: "short" }
                            );
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
                                    <p>{item?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {addPackage?.addguest === "fixedDeparture" &&
                addPackage?.fixedfixeddepartureweightedprice === 1 && (
                  <div className="ml-5">
                    {AllDataRelatedCity?.[0]?.[0] && (
                      <div className="my-5">
                        <div className="flex gap-3 flex-wrap">
                          {AllDataRelatedCity?.[0]?.[0]?.length>0&&AllDataRelatedCity?.[0]?.[0]?.map((item, i) => {
                            const dateObj = new Date(item.Date);
                            const dayOfWeek = dateObj.toLocaleString(
                              "default",
                              { weekday: "short" }
                            );
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
                                    {item?.date1}
                                  </p>
                                  <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                    <p>{item?.Price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              {addPackage?.addguest === "fixedDeparture" &&
                addPackage?.fixedfixeddepartureweightedprice === 2 && (
                  <div className=" ml-5">
                    {AllDataRelatedCity?.[0]?.[0]?.length>0 && (
                      <div className="my-5">
                        <div className="flex gap-3 flex-wrap">
                          {AllDataRelatedCity?.[0]?.[0]?.map((item, i) => {
                            const dateObj = new Date(item.Date);
                            const dayOfWeek = dateObj.toLocaleString(
                              "default",
                              { weekday: "short" }
                            );
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
                                <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 rounded-md overflow-hidden">
                                  <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                    {dayOfWeek}
                                  </p>
                                  <hr />
                                  <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xs">
                                    {item?.date1}
                                  </p>
                                  <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                    <p>{item?.Price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                                  </div>
                                  <div className="text-center flex justify-center gap-1 text-xxs text-white group-hover:text-white bg-navyblack">
                                    <p>Avai -</p>
                                    <p>{item.Avilability}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              <hr />
              <div className="ml-2 my-4">
                <h6 className="font-semibold text-md mb-3 text-graytext">
                  About
                </h6>
                <p
                  className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                  dangerouslySetInnerHTML={{ __html: addPackage?.about }}
                ></p>
              </div>
              <div className="md:mx-5 ">
                <div className="md:my-7 my-5 overflow-x-scroll">
                  <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                    <thead>
                      <tr className="border-b bg-black text-white">
                        {columns.map((col, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                      {submittedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {columns.map((col, colIndex) => (
                            <td
                              key={colIndex}
                              className="   border-t border-l  border-r px-2 py-2   capitalize overflow-hidden border-gray-300  text-wrap"
                            >
                              {row[col]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
              <div className="ml-2 my-4">
                <h6 className="font-semibold text-md mb-5 text-graytext">
                  Highlights
                </h6>
                <div>
                  {addPackage?.highlights?.map((highlight) => (
                    <ul key={highlight._id} className="ml-3">
                      <li className="xl:ml-5 ml-2 mr-2 text-para">
                        {highlight.text}
                      </li>
                    </ul>
                  ))}
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
