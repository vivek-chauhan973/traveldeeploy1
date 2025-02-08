import { useEffect, useState } from "react";
import "../../../app/globals.css";
import CarDeparturePopup from "./CarDeparture & booking/CarDeparturePopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CardDetailPricingCard from "./CarDetailPricingCard";

const CarDepartureSection = ({ carPackage, showPopup, carDepartureDetails,
    setCarDepartureDetails, setCarPrice1, setShowPopup, setShowPopupBooking, showPopupBooking }) => {
    const [departureData, setdepartureData] = useState();
    const data = carPackage?.prices?.departureData;
    const handleCityPopup = (item) => {
        setShowPopup(true);
        setdepartureData(item);
    }

    useEffect(() => {
        setCarDepartureDetails(departureData);
    }, [departureData?.departureCity])

    // console.log("carDepartureDetails 2",carDepartureDetails?.departureCity);

    return (
        <>
            <div>
                {/* Medium devices */}
                <div className="flex xl:hidden flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
                    <div>
                        <div>
                            <h4 className="font-semibold text-base p-3 text-graytext uppercase">
                                1. Choose your departure date and city
                            </h4>
                        </div>
                        <hr />
                        <div className="overflow-y-auto">
                            {showPopup && (
                                <CarDeparturePopup
                                    setShowPopup={setShowPopup}
                                    carPackage={carPackage}
                                    setdepartureData={setdepartureData}
                                    departureData={departureData}
                                    setCarPrice1={setCarPrice1}
                                />
                            )}
                          
                            {/* Display the current month's calendar */}
                            {
                                carDepartureDetails?.departureCity &&
                                    carDepartureDetails?.departureCity ? (
                                    <CardDetailPricingCard
                                        showPopupBooking={showPopupBooking}
                                        setShowPopupBooking={setShowPopupBooking}
                                        carPackage={carPackage}
                                        carDepartureDetails={carDepartureDetails}
                                    />
                                ) : (
                                    <div className=" ml-5">
                                        <div className="my-5">
                                            <div className="flex gap-3 flex-wrap">
                                                {data?.map((item, i) => {
                                                    const dateObj = new Date(item.Date);
                                                    const dayOfWeek = dateObj.toLocaleString(
                                                        "default",
                                                        { weekday: "short" }
                                                    );
                                                    return (
                                                        <div
                                                            key={i}
                                                            onClick={() => handleCityPopup(item)}
                                                            className="cursor-pointer"
                                                        >
                                                            <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 rounded-md overflow-hidden">
                                                                <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                                                    {dayOfWeek}
                                                                </p>
                                                                <hr />
                                                                <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xs">
                                                                    {item?.Date}
                                                                </p>
                                                                <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                                                    {(carPackage?.price + (((carPackage?.price) * (item?.Hike)) / 100))?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                                </div>
                                                                <div className="text-center flex justify-center gap-1 text-[10px] text-white group-hover:text-white bg-navyblack">
                                                                    {item?.Save > 0 && <p>Save {item?.Save}%</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            <hr />
                            <div className="ml-2 my-4">
                                <h6 className="font-semibold text-md mb-3 text-graytext">
                                    About
                                </h6>
                                <p
                                    className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                                    dangerouslySetInnerHTML={{ __html: carPackage?.about }}
                                ></p>
                            </div>
                            <div className="md:mx-5 ">
                                <div className="md:my-7 my-5 overflow-x-scroll">
                                    <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                                        <thead>
                                            <tr className="border-b bg-black text-white">
                                                {carPackage?.tableColumn?.map((col, index) => (
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
                                            {carPackage?.tableData?.map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {carPackage?.tableColumn?.map((col, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            className="border-t border-l  border-r px-2 py-2   capitalize overflow-hidden border-gray-300  text-wrap"
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
                                    {carPackage?.highlights?.map((highlight) => (
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
                {/* Large devices */}
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
                                <CarDeparturePopup
                                    setShowPopup={setShowPopup}
                                    carPackage={carPackage}
                                    setdepartureData={setdepartureData}
                                    departureData={departureData}
                                    setCarPrice1={setCarPrice1}
                                />
                            )}
                            {/* Display the current month's calendar */}
                            <div className=" ml-5">
                                <div className="my-5">
                                    <div className="flex gap-3 flex-wrap">
                                        {data?.map((item, index) => {
                                            const dateObj = new Date(item.Date);
                                            const dayOfWeek = dateObj.toLocaleString(
                                                "default",
                                                { weekday: "short" }
                                            );
                                            return (
                                                <div key={index}
                                                    onClick={() => handleCityPopup(item)}
                                                    className="cursor-pointer"
                                                >
                                                    <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 rounded-md overflow-hidden">
                                                        <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                                            {dayOfWeek}
                                                        </p>
                                                        <hr />
                                                        <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xxs">
                                                            {item?.Date}
                                                        </p>
                                                        <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                                            {(carPackage?.price + (((carPackage?.price) * (item?.Hike)) / 100))?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                        </div>
                                                        <div className="text-center flex justify-center gap-1 text-[10px] text-white group-hover:text-white bg-navyblack">
                                                            {item?.Save > 0 && <p>Save {item?.Save}%</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="ml-2 my-4">
                                <h6 className="font-semibold text-md mb-3 text-graytext">
                                    About
                                </h6>
                                <p
                                    className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                                    dangerouslySetInnerHTML={{ __html: carPackage?.about }}
                                >
                                </p>
                            </div>
                            <div className="md:mx-5 ">
                                <div className="md:my-7 my-5 overflow-x-scroll">
                                    <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                                        <thead>
                                            <tr className="border-b bg-black text-white">
                                                {carPackage?.tableColumn?.map((col, index) => (
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
                                            {carPackage?.tableData?.map((row, rowIndex) => (
                                                <tr
                                                    key={rowIndex}
                                                >
                                                    {carPackage?.tableColumn?.map((col, colIndex) => (
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
                                    {carPackage?.highlights?.map((highlight, id) => (
                                        <ul
                                            key={id}
                                            className="ml-3">
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
    )
}
export default CarDepartureSection;
