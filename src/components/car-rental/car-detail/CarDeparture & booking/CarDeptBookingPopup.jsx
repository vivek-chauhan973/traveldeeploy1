import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const fetchPackgesTerm = async () => {
    const response = await fetch("/api/cars/package/terms-condition/packageTerm/get");
    return await response.json();
};

const CarDeptBookingPopup = ({ carPackage, setShowPopup, carDepartureDetails }) => {

    const [check, setCheck] = useState(false);
    const [CarPackageTerm, setCarPackageTerm] = useState([]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        fetchPackgesTerm().then(res => {
            console.log("terma and condition=========> ", res?.CancellationGroupData)
            setCarPackageTerm(res?.CancellationGroupData)
        })
    }, [])

    const handleSubmit = () => {
        setShowPopup(false);
    };
    //   console.log("departure section data is here ---> ", departureSectionData) 
    // console.log("CarPackageTerm is here ---> ", CarPackageTerm)

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                <div className="flex justify-center items-center h-screen">
                    <div className="overflow-hidden max-w-lg md:max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-3 grid-cols-1">
                            <div className="bg-primary rounded-l-lg shadow-lg text-white  hidden md:block">
                                <div className="w-full h-[30%]"></div>
                                <div className="flex gap-5 justify-center">
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 1.png"
                                        alt=""
                                    />
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex gap-5 justify-center">
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 3.png"
                                        alt=""
                                    />
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex gap-5 justify-center">
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 5.png"
                                        alt=""
                                    />
                                    <img
                                        className="object-cover rounded-full w-20 h-20 "
                                        src="/assets/Affiliation 6.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 w-full p-5 bg-white rounded-r-lg shadow-lg">
                                <div
                                    onClick={() => setShowPopup(false)}
                                    className="cursor-pointer flex justify-end"
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleXmark}
                                        className="font1 cursor-pointer"
                                    // size={28}
                                    />
                                </div>
                                <div className="mb-4">
                                    <h5 className="md:text-lg text-md font-semibold text-graytext">
                                        Booking Summary
                                    </h5>
                                    <div className="flex mb-2.5 mt-1 text-sm border-t ">
                                        <p className=" w-28 mt-2 font-medium">Dept. City : </p>
                                        <p className="font-semibold text-graytext mt-2 capitalize">
                                            {carDepartureDetails?.departureCity}
                                        </p>
                                    </div>
                                    <div className="flex mb-2 text-sm">
                                        <p className=" w-28 font-medium">Dept. Date :</p>
                                        <p className=" font-bold text-graytext">
                                            {carDepartureDetails?.Date}
                                        </p>
                                    </div>
                                    <div className="flex mb-2 text-sm">
                                        <p className="w-28 font-medium">No. Of Travellers :</p>
                                        <p className=" font-semibold text-graytext">
                                            {carDepartureDetails?.travellers}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-28 font-semibold">Grand Total :</p>
                                        <p className="font-semibold text-graytext">
                                            {carDepartureDetails?.grandTotal?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                        </p>
                                    </div>
                                </div>
                                {/* Terms and conditions with checkboxes */}
                                <div className="w-full p-2 border border-gray-300 h-52 max-h-64 mb-4 overflow-y-scroll py-4">
                                    {CarPackageTerm?.length > 0 &&
                                        CarPackageTerm.map((item, index) => (
                                            <div
                                                key={index}
                                                className="text-sm ml-4 leading-6 mb-3 about-margin">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.description,
                                                    }}
                                                >
                                                </span>
                                            </div>
                                        ))}
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-4">
                                    <input
                                        className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack"
                                        type="checkbox"
                                        id="checked"
                                        checked={check}
                                        onChange={() => setCheck(!check)}
                                    />
                                    <label htmlFor="checked"
                                        className="cursor-pointer label-text text-para font-medium text-gray-700 "
                                    >
                                        I have read and agree to the Terms & Conditions
                                    </label>
                                </div>
                                <button
                                    className={`${check ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-200 to-red-200 cursor-not-allowed"}
                                                text-white w-full p-3 rounded-lg hover:opacity-90`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                    disabled={!check} >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDeptBookingPopup;



