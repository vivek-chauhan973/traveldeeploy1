import "../../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CarDeptBookingPopup from "./CarDeparture & booking/CarDeptBookingPopup";
import { useEffect, useState } from "react";
import CustomiseTour from "@/components/ItineraryDetail/CustomiseTour";

const CardDetailPricingCard = ({ carPackage, carDepartureDetails, setShowPopupBooking, showPopupBooking }) => {
    const [travellers, setTravellers] = useState(0);
    const seatingCapacity = carPackage?.selectedVicle?.seatingCapacity || 0;
    const GSTPrice = Math.floor((carPackage?.price + (carPackage?.price * (carDepartureDetails?.Hike / 100))) * (carDepartureDetails?.GST / 100));
    const hikePrice = (carPackage?.price * (carDepartureDetails?.Hike / 100)) || 0;
    const grandTotal = carPackage?.price + hikePrice + GSTPrice;

    useEffect(()=>{
        if (travellers !== 0) {
            carDepartureDetails['travellers'] = travellers;
        }
        if (grandTotal > 0) {
            carDepartureDetails['grandTotal'] = grandTotal;
        }
    },[travellers,grandTotal]);

    const handleBookNowClick = () => {
        if (travellers !== 0) {
            setShowPopupBooking(true);
        }
    };
    const handleEdit = () => {
        setShowPopupBooking(true);
    };

    return (
        <>
            <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[490px] overflow-scroll">
                <div className=" overflow-y-auto">
                    <div className="xl:block hidden">
                        <div className="flex justify-between mb-2 pr-3">
                            <h5 className="text-md font-semibold text-graytext">
                                Booking Summary
                            </h5>
                            <div>
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="font1 cursor-pointer"
                                    onClick={handleEdit}  
                                />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="">
                        <div className="flex my-3 text-sm">
                            <p className=" w-20">PickUp Loc : </p>
                            <p className="font-semibold text-graytext capitalize">
                                {carDepartureDetails?.departureCity ? carDepartureDetails?.departureCity : "--"}
                            </p>
                        </div>
                        <div className="flex mb-2.5 text-sm">
                            <p className=" w-20">Dept. Date :</p>
                            <p className=" font-bold text-graytext">
                                {carDepartureDetails?.Date ? carDepartureDetails?.Date : "--"}
                            </p>
                        </div>
                    </div>
                    <div className="flex xl:block xl:justify-center xl:items-center flex-col md:gap-3 my-3">
                        <div>
                            <div className="flex gap-4 justify-between items-center md:pr-5 pr-1">
                                <label
                                    className="text-sm font-semibold cursor-pointer capitalize"
                                    htmlFor="travellers"
                                >
                                    Number Of Travellers :{" "}
                                </label>
                                <select
                                    name="travellers"
                                    id="travellers"
                                    className="border rounded w-1/2 pl-3 cursor-pointer focus:border-primary outline-none"
                                    onChange={(e) => {
                                        setTravellers(e.target.value);
                                    }}
                                    // disabled={!seatingCapacity}  // Disable if seating capacity is 0 or not set
                                    disabled={!carDepartureDetails?.Date}  // Disable if seating capacity is 0 or not set
                                >
                                    <option value="" className="cursor-pointer">
                                        Select Person
                                    </option>
                                    {[...Array(seatingCapacity)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {travellers > 0 ? null : (
                                <p className="md:text-xxs text-[10px] text-red-600 xl:text-end md:text-center text-end xl:pr-10 md:pl-28">
                                    Please Select Person First
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <p className="text-sm font-semibold">Base Price</p>
                        <p className="text-md font-medium text-graytext">
                            {carPackage?.price ? (carDepartureDetails?.Hike ? ((carPackage?.price) + ((carPackage?.price) * (carDepartureDetails?.Hike / 100)))?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) : carPackage?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })) || carPackage?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "--"}
                        </p>
                    </div>
                    <hr className="border-dashed my-2 " />
                    <div className="text-para  md:grid-cols-2 md:my-5 my-3 grid pr-1">
                        <div></div>
                        <div className="grid grid-cols-2">
                            <p>Total Cost</p>
                            <p className="">
                                {carPackage?.price ?
                                    (carDepartureDetails?.Hike ?
                                        ((carPackage?.price) + ((carPackage?.price) * (carDepartureDetails?.Hike / 100)))
                                        : carPackage?.price)
                                    || carPackage?.price : "--"}
                            </p>
                        </div>
                    </div>
                    <div className="text-para md:grid-cols-2 md:-mt-2 -mt-1 grid pr-1">
                        <div></div>
                        <div className="grid grid-cols-2">
                            <p>
                                GST{" "}
                                {carDepartureDetails?.GST && carDepartureDetails.GST !== 0
                                    ? `${carDepartureDetails.GST}%`
                                    : null}
                            </p>
                            <p className="">
                                {carDepartureDetails?.GST && carDepartureDetails.GST !== 0 ? GSTPrice?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "All Inclusive"}
                            </p>
                        </div>
                    </div>
                    <hr className="border-dashed md:my-5 my-3" />
                    <div className="text-para grid md:grid-cols-2 pr-1">
                        <div></div>
                        <div className="grid grid-cols-2 gap-1">
                            <p className="font-semibold">Grand Total</p>
                            <p className="font-semibold text-graytext">
                                {grandTotal ?
                                    grandTotal?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) :
                                    carPackage?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </p>
                        </div>
                    </div>
                    <div className="xl:block hidden">
                        <div className=" grid grid-cols-2 gap-3 my-5">
                            <CustomiseTour>
                                <button className=" border-primary w-full border text-primary flex-flow  flex justify-center px-5 py-2 text-para rounded-md">
                                    Customise
                                </button>
                            </CustomiseTour>
                            <button onClick={handleBookNowClick}              
                                className={` ${travellers
                                    ? "bg-gradient-to-r from-orange-500 to-red-500  cursor-pointer"
                                    : "bg-gradient-to-r from-orange-200 to-red-200"
                                    } px-5 py-2 rounded-md text-white text-center text-para`}
                                disabled={travellers === 0}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CardDetailPricingCard;
