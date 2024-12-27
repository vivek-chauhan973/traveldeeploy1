import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "../admin/context/CarPopupCalculation";

const fetchPackgesTerm = async () => {
    const response = await fetch("/api/cars/package/terms-condition/packageTerm/get");
    return await response.json();
};

const CarBookingPopup = ({ setShowPopup }) => {

    const [check, setCheck] = useState(false);
    const [CarPackageTerm, setCarPackageTerm] = useState([]);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const { userFormData, userDate, userTime, userPlan, } = useCarPopupContext();

    console.log("userFormData", userFormData);


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
    const validateMobile = (mobileNumber) => {
        const isValid = /^[0-9]{10}$/.test(mobileNumber); // 10-digit number validation
        if (!isValid) {
            setMobileError("Please enter a valid 10-digit mobile number.");
        } else {
            setMobileError("");
        }
        return isValid;
    };

    useEffect(() => {
        // Check if all the required fields are filled and checkbox is checked
        if (name.trim() !== "" && mobile.trim() !== "" && email.trim() !== "" && check) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, mobile, email, check]);

    const handleSubmit = () => {
        if (isFormValid) {
            const userData = {
                name: name,
                email: email,
                mobile: mobile,
            };
            console.log("User Data filled:", userData);

            setShowPopup(false);
        } else {
            alert("Please fill all fields and check the confirmation box.");
        }
    };
    //   console.log("departure section data is here ---> ", departureSectionData) 
    // console.log("CarPackageTerm is here ---> ", CarPackageTerm);
    
    {/* Calculation of local car booking*/ }
    let rate = userFormData?.selectedCar?.[0]?.rate ?? 0;
    let misc = userFormData?.selectedCar?.[0]?.misc ?? 0;
    let markup = userFormData?.selectedCar?.[0]?.markup ?? 0;
    let selectedlocation = userFormData?.selectedlocation?.[0].localLocation;
    let cityIncreament = selectedlocation?.split('-')[1]?.trim() ?? 0; // extract city increament cost from selected local Location
    let cityIncrementNumber = parseInt(cityIncreament, 10); // city increament string convert into number
    // console.log("cityIncrementNumber here ---> ", cityIncrementNumber);

    let baseCost = rate + cityIncrementNumber + misc;
    let a = baseCost + Math.floor((baseCost * markup) / 100); // baseCost with markup 
    // console.log("baseCost here ---> ", baseCost);
    // console.log("a here ---> ", a);

    let perKmRate = userFormData?.selectedCar?.[0]?.perKmRate ?? 0;
    let b = Math.floor(perKmRate + Math.floor((perKmRate * markup) / 100)); // per km rate with markup 
    // console.log("perKmRate here ---> ", perKmRate);
    const choosePlanKm = userPlan && userPlan.match(/\d+/) ? parseInt(userPlan.match(/\d+/)[0], 10) : 1;
    let c = b * choosePlanKm;
    // console.log("c here ---> ", c);

    let totalCost = a + c; // Total cost ====>  base cost + per km rate 
    console.log("totalCost here ---> ", totalCost);
    let gst = 120;
    let grandTotalFixedPlan = totalCost + gst;
    let grandTotalByKm = a + gst;

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-[99999] mt-14">
                <div className="flex justify-center items-center max-h-auto">
                    <div className="max-w-lg md:max-w-2xl mx-auto "> {/*overflow-y-scroll */}
                        <div className="flex">
                            <div className="bg-navyblack rounded-l-lg shadow-lg text-white md:w-1/3 hidden md:block">
                                <div className="mb-4 w-full h-2/5"></div>
                                <div className="p-6">
                                    <div className="flex justify-center items-center">
                                        <div className="mr-2 text-4xl">4.6</div>
                                        <span className="text-yellow-400">★</span>
                                    </div>
                                    <p className="text-sm mb-2 text-center">3800+ reviews</p>
                                    <p className="text-sm text-center mt-20">
                                        “Our dream trip to Europe with Pickyourtrail was delightful & seamless”
                                    </p>
                                    <p className="font-semibold mt-2 text-center">Rakesh Kumar</p>
                                </div>
                            </div>
                            <div className="md:w-2/3 w-full m-2 p-5 bg-white rounded-r-lg md:rounded-l-none rounded-l-lg shadow-lg overflow-y-scroll md:h-[600px] xl:h-[650px] md:max-h-[700px] max-h-[650px]">
                                <div className="cursor-pointer flex justify-end mb-3">
                                    <FontAwesomeIcon
                                        icon={faCircleXmark}
                                        className="font1 cursor-pointer"
                                        onClick={() => setShowPopup(false)}
                                    />
                                </div>
                                <form>
                                    <div className="space-y-4 mb-2">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full md:p-2 p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                        <div className="flex space-x-4">
                                            <input
                                                disabled
                                                type="text"
                                                placeholder="+91"
                                                className="w-2/12 md:p-2 p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                            <input
                                                type="text"
                                                value={mobile}
                                                onChange={(e) => {
                                                    setMobile(e.target.value)
                                                    validateMobile(e.target.value);
                                                }}
                                                placeholder="Mobile Number"
                                                className="w-10/12 md:p-2 p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                required
                                            />
                                        </div>
                                        {mobileError && (
                                            <p className="text-red-500 text-xxs text-center">{mobileError}</p>
                                        )}
                                        <input
                                            type="email"
                                            placeholder="Email ID"
                                            value={email} // Bind state to input
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full md:p-2 p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
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
                                            <p className=" w-28 font-medium">PickUp Location : </p>
                                            <p className="font-semibold text-graytext capitalize">
                                                {userFormData?.selectedPickupPoint?.[0].name}
                                                {" "}-{" "}
                                                {userFormData?.selectedlocation?.[0].location}
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-3 mb-1">
                                            <div className="flex text-sm md:mb-0 mb-1">
                                                <p className="w-24 font-medium">Dept. Date :</p>
                                                <p className=" font-bold text-graytext">
                                                    {userDate}
                                                </p>
                                            </div>
                                            <div className="flex text-sm">
                                                <p className=" w-24 font-medium">Dept. Time :</p>
                                                <p className=" font-bold text-graytext">
                                                    {userTime}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-3 mb-1">
                                            <div className="flex text-sm md:mb-0 mb-1">
                                                <p className=" w-24 font-medium">Cost Per KM : </p>
                                                <p className="font-semibold text-graytext">
                                                    {/* {userFormData?.selectedCar?.[0].perKmRate.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })} */}
                                                    {b?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p>
                                            </div>
                                            <div className="flex text-sm">
                                                <p className=" w-24 font-medium">Choosed Plan : </p>
                                                <p className="font-semibold text-graytext">
                                                    {userPlan ? userPlan : "--"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mb-1 text-sm">
                                            <p className=" w-24 font-medium">Base Price : </p>
                                            <p className="font-semibold text-graytext">
                                                {a?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                            </p>
                                        </div>
                                        {userPlan === "BY KMs" &&
                                            <div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className="md:w-24 w-36 font-medium">Per KM Price : </p>
                                                    <p className="font-semibold text-graytext">
                                                        ---- {" "}<span className="text-xxs font-semibold ml-1">{"(To be calculated after the completion of trip)"}</span>
                                                    </p>
                                                </div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className=" w-24  font-medium">Total : </p>
                                                    <p className="font-semibold text-graytext">
                                                        {a?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                        {" "}<span className="text-xxs font-semibold ml-1">{"(Tenative Price)"}</span>
                                                    </p>
                                                </div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className=" w-24  font-medium">GST : </p>
                                                    <p className="font-semibold text-graytext">
                                                        ₹120
                                                        {" "}<span className="text-xxs font-semibold ml-1">{"(Tenative Price)"}</span>
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-0">
                                                    <p className="font-semibold">Grand Total :</p>
                                                    <p className="font-semibold text-graytext ml-1">
                                                        {grandTotalByKm?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                        {" "}<span className="text-xxs font-semibold ml-1">{"(Tenative Price)"}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                        {userPlan !== "BY KMs" &&
                                            <div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className="w-24 font-medium">Per KM Price : </p>
                                                    <p className="font-semibold text-graytext">
                                                        {c?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    </p>
                                                </div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className=" w-24 font-medium">Total : </p>
                                                    <p className="font-semibold text-graytext">
                                                        {totalCost?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    </p>
                                                </div>
                                                <div className="flex mb-1 text-sm">
                                                    <p className=" w-24  font-medium">GST : </p>
                                                    <p className="font-semibold text-graytext">
                                                        ₹120 {" "}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-0">
                                                    <p className="font-semibold">Grand Total :</p>
                                                    <p className="font-bold text-graytext ml-1">
                                                        {grandTotalFixedPlan?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {/* Terms and conditions with checkboxes */}
                                    <div className="w-full p-2 border border-gray-300 md:h-52 h-44 max-h-64 mb-4 overflow-y-scroll py-4">
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
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-start items-center gap-2 mb-4">
                                        <input
                                            className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack md:mb-0  mb-3"
                                            type="checkbox"
                                            id="checked"
                                            checked={check}
                                            onChange={() => setCheck(!check)}
                                        />
                                        <label htmlFor="checked"
                                            className="cursor-pointer label-text md:text-para text-xs font-medium text-gray-700 "
                                        >
                                            I have read and agree to the Terms & Conditions
                                        </label>
                                    </div>
                                    <button
                                        className={`${isFormValid ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-300 to-red-300 cursor-not-allowed"}
                                                text-white w-full p-3 rounded-lg hover:opacity-90`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        disabled={!isFormValid} >
                                        Book Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarBookingPopup;



