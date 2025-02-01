import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Image from "next/image";

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

  const { loginPopup, setLoginPopup } = useCarPopupContext();

  const [check, setCheck] = useState(false);
  const [packageTerm, setPackageTerm] = useState([]);
  const [groupDepartureTerm, setGroupDepartureTerm] = useState([]);
  const [chartureTerm, setChartureTerm] = useState([]);

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

  const handleSubmit = () => {
    handleCleckOnDepartureFixed();
    setShowPopup(false);
    setLoginPopup(true);
  };
  // console.log("departure section data is here ---> ", departureSectionData)
  console.log("fixedDeparturePopupPrice----->",fixedDeparturePopupPrice)
  return (
    <>
      <div 
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex justify-center items-center h-screen">
          <div className="overflow-hidden max-w-lg md:max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="bg-primary rounded-l-lg shadow-lg text-white  hidden md:block">
                <div className="w-full h-[25%]"></div>
                <div className="flex gap-5 justify-center">
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 1.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 2.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex gap-5 justify-center">
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 3.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 4.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex gap-5 justify-center">
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 5.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 6.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex gap-5 justify-start pl-7">
                  <Image
                    className="object-cover rounded-full w-16 h-16"
                    src="/assets/Affiliation 7.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="col-span-2 p-5 bg-white rounded-r-lg shadow-lg">
                <div
                  onClick={() => setShowPopup(false)}
                  className="cursor-pointer flex justify-end"
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="font1 cursor-pointer"
                    size={28}
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
                  <div className="flex">
                    <p className="w-28 font-semibold">Grand Total</p>
                    <p className="font-semibold text-graytext">
                      {fixedDeparturePopupPrice?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
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
                    className="cursor-pointer md:h-4 md:w-4 h-3 w-3 rounded-lg accent-navyblack"
                    type="checkbox"
                    id="checked"
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                  <label htmlFor="checked"
                    className="cursor-pointer label-text md:text-para text-xs font-medium text-gray-700"
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

export default FixedDeparturePopup;



