import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "../admin/context/CarPopupCalculation";
import Create from "../login-sinup/login/create";
import Image from "next/image";

const fetchGroupDepartureTermOutstation = async () => {
    const response = await fetch("/api/cars/package/terms-condition/GroupDepartureTermOutstation/get");
    return await response.json();
};
const fetchGSTDate = async () => {
    const response = await fetch("/api/cars/carrentalLocalPrice/localdategst");
    return await response.json();
}

const CarBookingPopupOutsation = () => {

    const [check, setCheck] = useState(false);
    const [carGroupDepartureTermOutstation, setCarGroupDepartureTermOutstation] = useState([]);
    const [gstDateWise, setGstDateWise] = useState()
    const [selectedGST, setSelectedGST] = useState(null);
    const [additionalmarkup, setAdditionalmarkup] = useState(0);
    // console.log("gstDateWise ", gstDateWise);

    const { userFormData, pickupDateOutstation, returnDateOutstation, pickupTimeOutstation,
        returnTimeOutstation, planOutstation,setPlanOutstation, setLoginPopup,
        setShowPopupOutstation, activeBookingProcess,
        grandTotalCar, setGrandTotalCar, summaryCarData, setSummaryCarData
     } = useCarPopupContext();

    // console.log("userFormData", userFormData);

    // Calculate the difference in time (in milliseconds)
    const timeDifference = new Date(returnDateOutstation) - new Date(pickupDateOutstation);
    // Convert time difference from milliseconds to days
    const numberOfDays = (timeDifference / (1000 * 60 * 60 * 24)) + 1;

    // Convert the string to a Date object
    let dateObj = new Date(pickupDateOutstation);
    // Extract day, month, and year
    let day = dateObj.getDate().toString().padStart(2, '0'); // Ensure two digits
    let month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let year = dateObj.getFullYear();
    // Format as dd-mm-yyyy
    let formattedDate = `${day}-${month}-${year}`;

    useEffect(() => {
        if (gstDateWise && formattedDate) {
            // Find the matching date and get the GST value
            const matchingItem = gstDateWise.find(item => item?.Date === formattedDate);
            if (matchingItem) {
                // console.log("matchingItem:", matchingItem);
                setSelectedGST(matchingItem?.GST); // Set GST if a match is found
                setAdditionalmarkup(matchingItem?.Additional_Markup); // Set GST if a match is found
            } else {
                setSelectedGST(0); // Set null if no match is found
                setAdditionalmarkup(0); // Set null if no match is found
            }
        }
    }, [gstDateWise, pickupDateOutstation]);

    // Log the selected GST value
    useEffect(() => {
        console.log("Selected GST value:", selectedGST);
        console.log("Selected additionalmarkup value:", additionalmarkup);
    }, [selectedGST, additionalmarkup]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        fetchGroupDepartureTermOutstation().then(res => {
            // console.log("terma and condition=========> ", res?.CancellationGroupData)
            setCarGroupDepartureTermOutstation(res?.CancellationGroupData)
        });

        fetchGSTDate().then(res => {
            // console.log("GST Date wise =========> ", res?.data?.localdatagst);
            setGstDateWise(res?.data?.localdatagst);
        })
    }, []);

    const handleSubmit = () => {
        setLoginPopup(true);
    };

    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive((prev) => !prev); // Toggles between true and false
    };
    // console.log("isActive", isActive);

    {/* Calculation of outstation by km  car booking*/ }
    let rate = userFormData?.selectedCar?.[0]?.outStationBasePrice ?? 0;
    // console.log("rate here ---> ", rate);
    let rate2 = userFormData?.selectedCar?.[0]?.capacity ?? 0;
    // console.log("rate2 here ---> ", rate2);
    let misc = userFormData?.selectedCar?.[0]?.misc ?? 0;
    let ac = userFormData?.selectedCar?.[0]?.ac ?? 0;
    let markup = userFormData?.selectedCar?.[0]?.markup ?? 0;
    let totalMarkup = markup + additionalmarkup;
    let dailyLimit = userFormData?.selectedCar?.[0]?.dailyLimit ?? 1;
    let kmLimit = numberOfDays * dailyLimit;
    let selectedlocation = userFormData?.selectedlocation?.[0].localLocation;
    let cityIncreament = selectedlocation?.split('-')[1]?.trim() ?? 0; // extract city increament cost from selected local Location
    let cityIncrementNumber = parseInt(cityIncreament, 10); // city increament string convert into number
    let cityMarkup = userFormData?.selectedCar?.[0]?.locationrate ?? 0;
    let locationratePercentage = cityIncrementNumber + Math.floor((cityIncrementNumber * cityMarkup) / 100);
    // console.log("locationratePercentage here ---> ", locationratePercentage);

    // by km calculation
    let baseCost = rate + misc;
    let a = baseCost + Math.floor((baseCost * totalMarkup) / 100); // baseCost with markup 
    let basePrice = (a * numberOfDays) + locationratePercentage;
    // console.log("basePrice here ---> ", basePrice);

    let perKmRate = userFormData?.selectedCar?.[0]?.perKmRate ?? 0;
    let perKmMarkup = (perKmRate * totalMarkup) / 100;
    let costPerKm = Math.floor(perKmRate + perKmMarkup); // per km rate with markup  
    // console.log("costPerKm here ---> ", costPerKm);

    // per days calculation
    let baseCost2 = rate2 + misc;
    let a2 = baseCost2 + Math.floor((baseCost2 * totalMarkup) / 100); // baseCost with markup 
    let basePrice2 = (a2 * numberOfDays) + locationratePercentage;
    // console.log("basePrice2 here ---> ", basePrice2);
    let acCharge = ac * numberOfDays;
    // console.log("acCharge",acCharge);

    const [price1, setPrice1] = useState();
    const [price2, setPrice2] = useState();

    useEffect(() => {
        if (isActive === true) {
            setPrice1(basePrice + acCharge);
            setPrice2(basePrice2 + acCharge);
        }
        else {
            setPrice1(basePrice);
            setPrice2(basePrice2);
        }
    }, [isActive, basePrice, basePrice2])

    let gstPrice = Math.floor((price1 * selectedGST) / 100);
    // let grandTotalByKm = price1 + gstPrice;

    let gstPrice2 = Math.floor((price2 * selectedGST) / 100);
    // let grandTotalPerDay = price2 + gstPrice2;

    // console.log("price1",price1);
    // console.log("price2",price2);

    useEffect(()=>{
        if(planOutstation === "By Kms"){
            setGrandTotalCar( price1 + gstPrice);         
        }else{
            setGrandTotalCar(price2 + gstPrice2);
            }
            setSummaryCarData({costPerKm,isActive, selectedGST});
    },[gstPrice, price1, price2, gstPrice2, selectedGST, isActive]);
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[50]">
                <div className="flex justify-center items-center max-h-auto">
                    <div className="max-w-lg md:max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-3 grid-cols-1">
                            <div className="bg-primary rounded-l-lg shadow-lg text-white md:h-[650px] xl:h-[650px] md:max-h-[700px] max-h-[650px] hidden md:block">
                                <div className="w-full h-[25%]"></div>
                                <div className="flex gap-5 justify-center">
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 1.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 2.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex gap-5 justify-center">
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 3.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 4.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex gap-5 justify-center">
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 5.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 6.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex gap-5 justify-start pl-5">
                                    <Image
                                        className="object-cover rounded-full w-16 h-16 "
                                        src="/assets/Affiliation 7.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 w-full md:m-0 m-2 px-5 md:pt-3 pt-2 pb-3 bg-white rounded-r-lg md:rounded-l-none rounded-l-lg shadow-lg overflow-y-scroll md:h-[650px] xl:h-[650px] md:max-h-[700px] max-h-[650px]">
                                <div className="cursor-pointer flex justify-end">
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className="cursor-pointer h-4 w-4 hover:bg-gray-100 rounded-full p-1"
                                        onClick={() => setShowPopupOutstation(false)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <h5 className="md:text-lg text-md font-semibold text-graytext border-b pb-1">
                                        Booking Summary
                                    </h5>
                                    <div className="grid md:grid-cols-2 mt-1 mb-1 md:gap-3">
                                        <div className="flex  text-sm md:mb-0 mb-1">
                                            <p className="w-24 font-medium">Vehicle Type : </p>
                                            <p className="font-semibold text-graytext capitalize">
                                                {userFormData?.selectedCar?.[0].vehicleType}
                                            </p>
                                        </div>
                                        <div className="flex text-sm">
                                            <p className="w-24 font-medium">No. Of Person :</p>
                                            <p className=" font-semibold text-graytext">
                                                {userFormData?.persons}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-1 text-sm">
                                        <p className="md:w-28 font-medium">PickUp Location : </p>
                                        <p className="font-semibold text-graytext capitalize md:ml-0 ml-1">
                                            {userFormData?.selectedPickupPoint?.[0].name}
                                            {" "}-{" "}
                                            {userFormData?.selectedlocation?.[0].location}
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-3 mb-1">
                                        <div className="flex text-sm md:mb-0 mb-1">
                                            <p className="w-24 font-medium">Dept. Date :</p>
                                            <p className=" font-bold text-graytext">
                                                {pickupDateOutstation}
                                            </p>
                                        </div>
                                        <div className="flex text-sm">
                                            <p className=" w-24 font-medium">Dept. Time :</p>
                                            <p className=" font-bold text-graytext">
                                                {pickupTimeOutstation}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-3 mb-1">
                                        <div className="flex text-sm md:mb-0 mb-1">
                                            <p className="w-24 font-medium">Arrival Date :</p>
                                            <p className=" font-bold text-graytext">
                                                {returnDateOutstation}
                                            </p>
                                        </div>
                                        <div className="flex text-sm">
                                            <p className=" w-24 font-medium">Arrival Time :</p>
                                            <p className=" font-bold text-graytext">
                                                {returnTimeOutstation}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex text-sm mb-1">
                                        <p className="w-24 font-medium">AC Option :</p>
                                        <div className="flex items-center space-x-2">
                                            <p
                                                className={`font-medium transition duration-300 ${!isActive ? "text-black" : "text-gray-400 blur-none"
                                                    }`}
                                            >
                                                Non Ac
                                            </p>
                                            <div
                                                className="w-6 h-3 flex justify-between items-center rounded-full bg-white border-2 border-black"
                                                onClick={handleToggle}
                                            >
                                                <div
                                                    className={`flex items-center justify-center w-2.5 h-2 cursor-pointer rounded-full transition-all duration-300 ${!isActive
                                                        ? "bg-navyblack  shadow-md"
                                                        : "bg-white text-red-500"
                                                        }`}
                                                ></div>
                                                <div
                                                    className={`flex items-center justify-center w-2.5 h-2 cursor-pointer rounded-full transition-all duration-300 ${isActive
                                                        ? "bg-navyblack shadow-md"
                                                        : "bg-white text-gray-500"
                                                        }`}
                                                ></div>

                                            </div>

                                            <p
                                                className={`font-medium transition duration-300 ${isActive ? "text-black" : "text-gray-400 blur-none"
                                                    }`}
                                            >
                                                Ac
                                            </p>
                                        </div>
                                    </div>
                                    {planOutstation !== "Per Days" &&
                                        <div>
                                            <div className="grid md:grid-cols-2 md:gap-3 mb-1">
                                                <div className="flex text-sm md:mb-0 mb-1">
                                                    <p className=" w-24 font-medium">Cost Per KM : </p>
                                                    <p className="font-semibold text-graytext">
                                                        {costPerKm?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    </p>
                                                </div>
                                                <div className="flex text-sm">
                                                    <p className=" w-24 font-medium">Choosed Plan : </p>
                                                    <p className="font-semibold text-graytext">
                                                        {planOutstation}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className="md:w-24 w-40 font-medium">Base Price : </p>
                                                <p className="font-semibold text-graytext">
                                                    {price1?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    {" "} <span className="text-xxs font-semibold ml-1">{` (Daily allowance, Night charges for ${numberOfDays} days included) `}</span>
                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className="md:w-24 w-36 font-medium">Per KM Price : </p>
                                                <p className="font-semibold text-graytext">
                                                    ---- {" "}<span className="text-xxs font-semibold ml-1">{"(To be calculated after the completion of trip)"}</span>
                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className="md:w-24 w-16 font-medium">KM Limit : </p>
                                                <p className="font-semibold text-graytext ">
                                                    <span className="bg-yellow-200">{kmLimit} KM</span>
                                                    <span className="text-xxs font-semibold ml-1">
                                                        {"(Running limit for this trip)"}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className=" w-24  font-medium">Total : </p>
                                                <p className="font-semibold text-graytext">
                                                    {price1?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    {" "}<span className="text-xxs font-semibold ml-1">{"(Tentative Price)"}</span>
                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className=" w-24 font-medium">GST {selectedGST === "0" ? "" : `${selectedGST}%`} : </p>
                                                <p className="font-semibold text-graytext">
                                                    {gstPrice > "0" ? `${gstPrice?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })} (Tentative Price)` : "ALL inclusive"}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-0">
                                                <p className="font-semibold">Grand Total :</p>
                                                <p className="font-semibold text-graytext ml-1">
                                                    {grandTotalCar?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    {" "}<span className="text-xxs font-semibold ml-1">{"(Tentative Price)"}</span>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    {planOutstation === "Per Days" &&
                                        <div>
                                            <div className="flex mb-1 text-sm">
                                                <p className=" w-24 font-medium">Choosed Plan : </p>
                                                <p className="font-semibold text-graytext">
                                                    {planOutstation}
                                                </p>
                                            </div>

                                            <div className="flex mb-1 text-sm">
                                                <p className="md:w-24 w-16 font-medium">KM Limit : </p>
                                                <p className="font-semibold text-graytext">
                                                    <span className="bg-yellow-200">{kmLimit} KM</span>
                                                    <span className="text-xxs font-semibold ml-1">
                                                        {"(Running limit for this trip)"}
                                                    </span>                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className="w-24 font-medium">Base Price : </p>
                                                <p className="font-semibold text-graytext">
                                                    {price2?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p>
                                            </div>
                                            <div className="flex mb-1 text-sm">
                                                <p className=" w-24 font-medium">GST {selectedGST === "0" ? "" : `${selectedGST}%`} : </p>
                                                <p className="font-semibold text-graytext">
                                                    {gstPrice2 > "0" ? `${gstPrice2?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : "ALL inclusive"}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-0">
                                                <p className="font-semibold">Grand Total :</p>
                                                <p className="font-bold text-graytext ml-1">
                                                    {grandTotalCar?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {/* Terms and conditions with checkboxes */}
                                <div className="w-full border border-gray-300 md:h-52 h-40 max-h-64 mb-4 overflow-y-scroll">
                                    {carGroupDepartureTermOutstation?.length > 0 &&
                                        carGroupDepartureTermOutstation.map((item, index) => (
                                            <div
                                                key={index}
                                                className="text-sm ml-4 mr-2 md:my-4 my-2 md:leading-6 leading-5 about-margin">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.description,
                                                    }}
                                                >
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-2">
                                    <input
                                        className="cursor-pointer h-3 w-3 rounded-lg accent-navyblack md:mb-0 mb-4"
                                        type="checkbox"
                                        id="checked"
                                        checked={check}
                                        onChange={() => setCheck(!check)}
                                    />
                                    <label htmlFor="checked"
                                        className="cursor-pointer label-text md:text-sm text-xs font-medium text-gray-700 "
                                    >
                                        I have read and agree to the Terms & Conditions
                                    </label>
                                </div>
                                <button
                                    className={`${check ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-300 to-red-300 cursor-not-allowed"}
                                                text-white w-full p-3 rounded-lg hover:opacity-90`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                >
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

export default CarBookingPopupOutsation;



