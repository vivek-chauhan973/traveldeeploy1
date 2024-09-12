// import { useAppContext } from "@/components/admin/context/Package/AddGuest";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// const fetchPackgesTerm = async () => {
//   const response = await fetch("/api/package/terms-condition/packageTerm/get");
//   return await response.json();
// };
// const fetchGroupDepartureTerm = async () => {
//   const response = await fetch(
//     "/api/package/terms-condition/GroupDepartureTerm/get"
//   );
//   return await response.json();
// };
// const fetchChartureTerm = async () => {
//   const response = await fetch("/api/package/terms-condition/chartureTerm/get");
//   return await response.json();
// };

// const FixedDeparturePopup = () => {
//   const {
//     addPackage,
//     fixedDepDate,
//     fixedDepCity,
//     setShowPopup,
//     showPopup,
//     handleCleckOnDepartureFixed,
//     departureSectionData,
//     showAddguest,
//   } = useAppContext();
//   const [check, setCheck] = useState(false);
//   const [packageTerm, setPackageTerm] = useState([]);
//   const [groupDepartureTerm, setGroupDepartureTerm] = useState([]);
//   const [chartureTerm, setChartureTerm] = useState([]);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   useEffect(() => {
//     fetchPackgesTerm().then((res) =>
//       setPackageTerm(res?.CancellationGroupData || [])
//     );
//     fetchGroupDepartureTerm().then((res) =>
//       setGroupDepartureTerm(res?.CancellationGroupData || [])
//     );
//     fetchChartureTerm().then((res) =>
//       setChartureTerm(res?.CancellationGroupData || [])
//     );
//   }, []);

//   // console.log("true", check);
//   console.log("fixed derparture section ----> ", departureSectionData);

//   // console.log("refdffdsfsfsdf",ref.current);
//   const handleSubmit = () => {
//     if (check) {
//       handleCleckOnDepartureFixed();
//     } else {
//       return alert("please checke marked of confirm box");
//     }
//     setShowPopup(false);

//     // console.log("refdffdsfsfsdf212323234",ref.current);
//   };

//   return (
//     <>
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//         <div className="flex justify-center items-center h-screen">
//           <div className=" overflow-hidden max-w-lg md:max-w-2xl mx-auto">
//             <div className="flex">
//               <div className="bg-navyblack rounded-l-lg shadow-lg text-white md:w-1/3  md:block hidden">
//                 <div className="mb-4 w-full h-2/5">
//                   {/* <img
//                     src="https://via.placeholder.com/150"
//                     alt="pickyourtrail"
//                     className="w-full h-full"
//                   /> */}
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-center items-center">
//                     <div className="mr-2 text-4xl">4.6</div>
//                     <span className="text-yellow-400">★</span>
//                   </div>
//                   <p className="text-sm mb-2 text-center">3800 + reviews</p>
//                   <p className="text-sm text-center  mt-20">
//                     “Our dream trip to Europe with Pickyourtrail was delightful
//                     & seamless”
//                   </p>
//                   <p className="font-semibold mt-2 text-center">Rakesh Kumar</p>
//                 </div>
//               </div>
//               <div className="md:w-2/3 w-full p-5 bg-white  rounded-r-lg shadow-lg">
//                 <div
//                   onClick={() =>{setShowPopup(false)}}
//                   className=" cursor-pointer flex justify-end mb-3"
//                 >
//                   <FontAwesomeIcon
//                     icon={faCircleXmark}
//                     className="font1 cursor-pointer"
//                     size={28}
//                   />
//                 </div>
//                 <form>
//                   <div className="space-y-4 mb-4">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     />
//                     <div className="flex space-x-4">
//                       <input
//                         disabled
//                         type="text"
//                         placeholder="+91"
//                         className="w-2/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Mobile Number"
//                         className="w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                       />
//                     </div>
//                     <input
//                       type="email"
//                       placeholder="Email ID"
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <h5 className="md:text-lg text-md font-semibold text-graytext">
//                       Booking Summary
//                     </h5>
//                     <div className="flex mb-2.5 mt-3 text-sm border-t ">
//                       <p className=" w-20 mt-3 font-medium">Dept. City : </p>
//                       <p className="font-semibold text-graytext mt-3">Mumbai</p>
//                     </div>
//                     <div className="flex mb-2.5 text-sm">
//                       <p className=" w-20 font-medium">Dept. Date :</p>
//                       <p className=" font-bold text-graytext">
//                         10 Mar 2024 - 17 Mar 2024
//                       </p>
//                     </div>
//                     <div className="flex mb-2.5 text-sm">
//                       <p className=" w-20 font-medium">Traveller :</p>
//                       <p className=" font-semibold text-graytext">
//                         Adults : 0, Child : 0, Infant : 0
//                       </p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-1">
//                       <p className="font-semibold">Grand Total</p>
//                       <p className="font-semibold text-graytext">₹ </p>
//                     </div>
//                   </div>
//                     {/* Terms and condition */}
//                   <div className="w-full p-2 border border-gray-300 max-h-36 rounded-lg mb-4  overflow-y-scroll">
//                     {addPackage?.addguest==="addGuest"&&packageTerm?.map((item, index) => {
//                       // console.log(item);
//                       return (
//                         <div
//                           key={index} // Add a unique key for each item
//                           className="text-sm mt-2 ml-4 leading-6 px-5"
//                           dangerouslySetInnerHTML={{
//                             __html: item?.description,
//                           }}
//                         ></div>
//                       );
//                     })}
//                     {(addPackage?.addguest==="fixedDeparture"&&addPackage?.fixedfixeddepartureweightedprice === 2)&&chartureTerm?.map((item, index) => {
//                       // console.log(item);
//                       return (
//                         <div
//                           key={index} // Add a unique key for each item
//                           className="text-sm mt-2 ml-4 leading-6 px-5"
//                           dangerouslySetInnerHTML={{
//                             __html: item?.description,
//                           }}
//                         ></div>
//                       );
//                     })}
//                     {(addPackage?.addguest==="fixedDeparture"&&addPackage?.fixedfixeddepartureweightedprice === 1)&&groupDepartureTerm?.map((item, index) => {
//                       // console.log(item);
//                       return (
//                         <div
//                           key={index} // Add a unique key for each item
//                           className="text-sm mt-2 ml-4 leading-6 px-5"
//                           dangerouslySetInnerHTML={{
//                             __html: item?.description,
//                           }}
//                         ></div>
//                       );
//                     })}
//                   </div>
//                   <div className=" flex justify-start items-center gap-2 mb-4">
//                     <input
//                       className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack"
//                       type="checkbox"
//                       id="checked"
//                       onChange={() => setCheck(true)}
//                     />
//                     <label
//                       htmlFor="checked"
//                       className="cursor-pointer label-text text-para font-medium  text-gray-700"
//                     >
//                       I Aggree
//                     </label>
//                   </div>
//                   <button
//                     className="bg-gradient-to-r from-orange-400 to-red-500 text-white w-full p-3 rounded-lg hover:opacity-90"
//                     onClick={handleSubmit}
//                   >
//                     Book Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FixedDeparturePopup;

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
    handleCleckOnDepartureFixed,
    departureSectionData,
    showAddguest,
  } = useAppContext();

  const [check, setCheck] = useState(false);
  const [packageTerm, setPackageTerm] = useState([]);
  const [groupDepartureTerm, setGroupDepartureTerm] = useState([]);
  const [chartureTerm, setChartureTerm] = useState([]);
  const [termsChecked, setTermsChecked] = useState({
    package: [],
    group: [],
    charture: [],
  });

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

  // Handle term checkbox change for different term sections
  const handleTermChange = (list, index) => {
    const updatedTermsChecked = { ...termsChecked };
    updatedTermsChecked[list][index] = !updatedTermsChecked[list][index];
    setTermsChecked(updatedTermsChecked);
  };

  // Check if all terms and the "I Agree" checkbox are checked
  const allTermsChecked = (terms) => terms.every(Boolean);
  const allChecked =
    check &&
    allTermsChecked(termsChecked.package) &&
    allTermsChecked(termsChecked.group) &&
    allTermsChecked(termsChecked.charture);

  const handleSubmit = () => {
    if (allChecked) {
      handleCleckOnDepartureFixed();
      setShowPopup(false);
    } else {
      alert("Please check all the terms and the confirmation box.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
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
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                        placeholder="Mobile Number"
                        className="w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email ID"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="mb-4">
                    <h5 className="md:text-lg text-md font-semibold text-graytext">
                      Booking Summary
                    </h5>
                    <div className="flex mb-2.5 mt-3 text-sm border-t ">
                      <p className=" w-20 mt-3 font-medium">Dept. City : </p>
                      <p className="font-semibold text-graytext mt-3">Mumbai</p>
                    </div>
                    <div className="flex mb-2.5 text-sm">
                      <p className=" w-20 font-medium">Dept. Date :</p>
                      <p className=" font-bold text-graytext">
                        10 Mar 2024 - 17 Mar 2024
                      </p>
                    </div>
                    <div className="flex mb-2.5 text-sm">
                      <p className=" w-20 font-medium">Traveller :</p>
                      <p className=" font-semibold text-graytext">
                        Adults : 0, Child : 0, Infant : 0
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <p className="font-semibold">Grand Total</p>
                      <p className="font-semibold text-graytext">₹ </p>
                    </div>
                  </div>

                  {/* Terms and conditions with checkboxes */}
                  <div className="w-full p-2 border-t border-gray-300 max-h-36 mb-4 overflow-y-scroll">
                    {addPackage?.addguest === "addGuest" &&
                      packageTerm.map((item, index) => (
                        <div key={index} className="text-sm mt-2 ml-4 leading-6 px-5 flex items-start">
                          <input
                            type="checkbox"
                            className="mr-2 mt-2 cursor-pointer  rounded-lg accent-navyblack"
                            checked={termsChecked.package[index] || false}
                            onChange={() => handleTermChange("package", index)}
                          />
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
                        <div key={index} className="text-sm mt-2 leading-6 flex justify-start  flex items-start gap-2">
                          <input
                            type="checkbox"
                            className="mr-2 mt-2 cursor-pointer  rounded-lg accent-navyblack"
                            checked={termsChecked.charture[index] || false}
                            onChange={() => handleTermChange("charture", index)}
                          />
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
                        <div key={index} className="text-sm mt-2 ml-4 leading-6 px-5 flex items-start">
                          <input
                            type="checkbox"
                            className="mr-2 mt-2 cursor-pointer  rounded-lg accent-navyblack"
                            checked={termsChecked.group[index] || false}
                            onChange={() => handleTermChange("group", index)}
                          />
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
                    <label
                      htmlFor="checked"
                      className="cursor-pointer label-text text-para font-medium text-gray-700"
                    >
                      I Agree
                    </label>
                  </div>

                  <button
                    className={`${
                      allChecked
                        ? "bg-gradient-to-r from-orange-400 to-red-500"
                        : "bg-gray-400 cursor-not-allowed"
                    } text-white w-full p-3 rounded-lg hover:opacity-90`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    disabled={!allChecked}
                  >
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
