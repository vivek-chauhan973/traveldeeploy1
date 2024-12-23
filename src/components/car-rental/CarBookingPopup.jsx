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
    // console.log("CarPackageTerm is here ---> ", CarPackageTerm)

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-[99999] mt-14">
                <div className="flex justify-center items-center max-h-auto">
                    <div className="overflow-y-scroll max-w-lg md:max-w-2xl mx-auto md:h-[600px] xl:h-[650px] max-h-[700px]">
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
                            <div className="md:w-2/3 w-full p-5 bg-white rounded-r-lg shadow-lg">
                                <div
                                    onClick={() => setShowPopup(false)}
                                    className="cursor-pointer flex justify-end mb-3"
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleXmark}
                                        className="font1 cursor-pointer"
                                    />
                                </div>
                                <form>
                                    <div className="space-y-4 mb-2">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                        <div className="flex space-x-4">
                                            <input
                                                disabled
                                                type="text"
                                                placeholder="+91"
                                                className="w-2/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                            <input
                                                type="text"
                                                value={mobile}
                                                onChange={(e) => {
                                                    setMobile(e.target.value)
                                                    validateMobile(e.target.value);
                                                }}
                                                placeholder="Mobile Number"
                                                className="w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>
                                    {/* <div className="mb-4">
                                        <h5 className="md:text-lg text-md font-semibold text-graytext">
                                            Booking Summary
                                        </h5>
                                        <div className="flex mb-2.5 mt-1 text-sm border-t ">
                                            <p className=" w-20 mt-2 font-medium">Dept. City : </p>
                                            <p className="font-semibold text-graytext mt-2 capitalize">
                                                {carDepartureDetails?.departureCity}
                                            </p>
                                        </div>
                                        <div className="flex mb-2 text-sm">
                                            <p className=" w-20 font-medium">Dept. Date :</p>
                                            <p className=" font-bold text-graytext">
                                                {carDepartureDetails?.Date}
                                            </p>
                                        </div>
                                        <div className="flex mb-2 text-sm">
                                            <p className=" w-36 font-medium">Number Of Travellers :</p>
                                            <p className=" font-semibold text-graytext">
                                                {carDepartureDetails?.travellers}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="font-semibold">Grand Total :</p>
                                            <p className="font-semibold text-graytext">
                                                {carDepartureDetails?.grandTotal?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                            </p>
                                        </div>
                                    </div> */}
                                    <div className="mb-2">
                                        <h5 className="md:text-lg text-md font-semibold text-graytext border-b pb-1">
                                            Booking Summary
                                        </h5>
                                        <div className="grid grid-cols-2 mt-1 gap-3">
                                            <div className="flex mb-2 text-sm ">
                                                <p className=" w-20 font-medium">Vehicle Type : </p>
                                                <p className="font-semibold text-graytext capitalize ml-1">
                                                    {userFormData?.selectedCar?.[0].vehicleType}
                                                </p>
                                            </div>
                                            <div className="flex mb-2 text-sm">
                                                <p className=" w-32 font-medium">Number Of Person :</p>
                                                <p className=" font-semibold text-graytext">
                                                    {userFormData?.persons}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 mb-2">
                                            <div className="flex text-sm">
                                                <p className=" w-20 font-medium">Dept. Date :</p>
                                                <p className=" font-bold text-graytext">
                                                {userDate}
                                                </p>
                                            </div>
                                            <div className="flex text-sm">
                                                <p className=" w-20 font-medium">Dept. Time :</p>
                                                <p className=" font-bold text-graytext">
                                                    {userTime}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mb-2 text-sm">
                                            <p className=" w-28 font-medium">PickUp Location : </p>
                                            <p className="font-semibold text-graytext capitalize">
                                                {userFormData?.selectedlocation?.[0].location}
                                                {" "}-{" "}
                                                {userFormData?.selectedPickupPoint?.[0].name}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 mb-2">
                                            <div className="flex text-sm">
                                                <p className=" w-20 font-medium">Cost Per KM : </p>
                                                <p className="font-semibold text-graytext ml-1">
                                                    {userFormData?.selectedCar?.[0].perKmRate.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p>
                                            </div>
                                            <div className="flex text-sm">
                                                <p className=" w-24 font-medium">Choosed Plan : </p>
                                                <p className="font-semibold text-graytext">
                                                    {userPlan} KM
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <p className="font-semibold">Grand Total :</p>
                                            <p className="font-semibold text-graytext">
                                                {/* {carDepartureDetails?.grandTotal?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })} */}
                                                4,000
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
                                        className={`${isFormValid ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-200 to-red-200 cursor-not-allowed"}
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



