import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const fetchPackgesTerm = async () => {
  const response = await fetch("/api/package/terms-condition/packageTerm/get");
  return await response.json();
};
const fetchGroupDepartureTerm = async () => {
  const response = await fetch(
    "/api/package/terms-condition/GroupDepartureTerm/get"
  );
  return await response.json();
};
const fetchChartureTerm = async () => {
  const response = await fetch("/api/package/terms-condition/chartureTerm/get");
  return await response.json();
};

const FixedDeparturePopup = () => {
  const {
    addPackage,
    fixedDepDate,
    fixedDepCity,
    setShowPopup,
    showPopup,
    inputData,
    handleCleckOnDepartureFixed,
    departureSectionData,
    showAddguest,
    fixedDeparturePopupPrice,
    groupDeparturePerson
  } = useAppContext();

  const [check, setCheck] = useState(false);
  const [packageTerm, setPackageTerm] = useState([]);
  const [groupDepartureTerm, setGroupDepartureTerm] = useState([]);
  const [chartureTerm, setChartureTerm] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    fetchPackgesTerm().then((res) =>
      setPackageTerm(res?.CancellationGroupData || [])
    );
    fetchGroupDepartureTerm().then((res) =>
      setGroupDepartureTerm(res?.CancellationGroupData || [])
    );
    fetchChartureTerm().then((res) =>
      setChartureTerm(res?.CancellationGroupData || [])
    );
  }, []);

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
      handleCleckOnDepartureFixed();
      setShowPopup(false);
    } else {
      alert("Please fill all fields and check the confirmation box.");
    }
  };
  console.log("departure section data is here ---> ", departureSectionData) 

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex justify-center items-center h-screen">
          <div className="overflow-hidden max-w-lg md:max-w-2xl mx-auto">
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
                    size={28}
                  />
                </div>
                <form>
                  <div className="space-y-4 mb-4">
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
                  <div className="mb-4">
                    <h5 className="md:text-lg text-md font-semibold text-graytext">
                      Booking Summary
                    </h5>
                    <div className="flex mb-2.5 mt-1 text-sm border-t ">
                      <p className=" w-20 mt-2 font-medium">Dept. City : </p>
                      <p className="font-semibold text-graytext mt-2 capitalize">{showAddguest}</p>
                    </div>
                    {addPackage?.addguest === "addGuest" && <div className="flex mb-2 text-sm">
                      <p className=" w-20 font-medium">Dept. Date :</p>
                      <p className=" font-bold text-graytext">
                        {departureSectionData?.date}
                      </p>
                    </div>}
                    {addPackage?.addguest === "fixedDeparture" && <div className="flex mb-2 text-sm">
                      <p className=" w-20 font-medium">Dept. Date :</p>
                      <p className=" font-bold text-graytext">
                        {departureSectionData?.Date}
                      </p>
                    </div>}
                    {addPackage?.addguest === "addGuest" && <div className="flex mb-2 text-sm">
                      <p className=" w-20 font-medium">Traveller :</p>
                      <p className=" font-semibold text-graytext">
                        Adults : {inputData?.adult}, Child : {inputData?.child + inputData?.infant}, Infant : 0
                      </p>
                    </div>}
                    <div className="grid grid-cols-2">
                      <p className="font-semibold">Grand Total</p>
                      <p className="font-semibold text-graytext">₹ {fixedDeparturePopupPrice?.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Terms and conditions with checkboxes */}
                  <div className="w-full p-2 border border-gray-300 h-52 max-h-64 mb-4 overflow-y-scroll py-4">
                    {addPackage?.addguest === "addGuest" &&
                      packageTerm.map((item, index) => (
                        <div key={index} className="text-sm ml-4 leading-6 mb-3 about-margin">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></span>
                        </div>
                      ))}

                    {addPackage?.addguest === "fixedDeparture" &&
                      addPackage?.fixedfixeddepartureweightedprice === 2 &&
                      chartureTerm.map((item, index) => (
                        <div key={index} className="text-sm ml-4 leading-6 mb-3 about-margin">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></p>
                        </div>
                      ))}

                    {addPackage?.addguest === "fixedDeparture" &&
                      addPackage?.fixedfixeddepartureweightedprice === 1 &&
                      groupDepartureTerm.map((item, index) => (
                        <div key={index} className="text-sm ml-4 leading-6 mb-5 about-margin">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></span>
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

export default FixedDeparturePopup;



