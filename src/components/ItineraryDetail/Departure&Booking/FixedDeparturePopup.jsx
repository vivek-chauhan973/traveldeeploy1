import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const fetchPackgesTerm=async ()=>{
  const response = await fetch(
    "/api/package/terms-condition/packageTerm/get"
  );
  return await response.json();
}
const fetchGroupDepartureTerm=async ()=>{
  const response = await fetch(
    "/api/package/terms-condition/GroupDepartureTerm/get"
  );
  return await response.json();
}
const fetchChartureTerm=async ()=>{
  const response = await fetch(
    "/api/package/terms-condition/chartureTerm/get"
  );
  return await response.json();
}

const FixedDeparturePopup = () => {
  const {
    fixedDepDate,
    fixedDepCity,
    setShowPopup,
    handleCleckOnDepartureFixed,
    departureSectionData,
    showAddguest,
  } = useAppContext();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(()=>{
    fetchPackgesTerm().then(res=>console.log("res1 ==>",res));
    fetchGroupDepartureTerm().then(res=>console.log("res2   ====> ",res));
    fetchChartureTerm().then(res=>console.log("res3     =====>  ",res))
    
  },[])

  // console.log("true", check);
  console.log("fixed derparture section ----> ",departureSectionData);

  // console.log("refdffdsfsfsdf",ref.current);
  const handleSubmit = () => {
    if (check) {
      handleCleckOnDepartureFixed();
    } else {
      return alert("please checke marked of confirm box");
    }
    setShowPopup(false);
    // console.log("refdffdsfsfsdf212323234",ref.current);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex justify-center items-center h-screen">
          <div className=" overflow-hidden max-w-lg md:max-w-2xl mx-auto">
            <div className="flex">
              <div className="bg-navyblack rounded-l-lg shadow-lg text-white md:w-1/3  md:block hidden">
                <div className="mb-4 w-full h-2/5">
                  {/* <img
                    src="https://via.placeholder.com/150"
                    alt="pickyourtrail"
                    className="w-full h-full"
                  /> */}
                </div>
                <div className="p-6">
                  <div className="flex justify-center items-center">
                    <div className="mr-2 text-4xl">4.6</div>
                    <span className="text-yellow-400">★</span>
                  </div>
                  <p className="text-sm mb-2 text-center">3800 + reviews</p>
                  <p className="text-sm text-center  mt-20">“Our dream trip to Europe with Pickyourtrail was delightful & seamless”</p>
                  <p className="font-semibold mt-2 text-center">Rakesh Kumar</p>
                </div>
              </div>
              <div className="md:w-2/3 w-full p-5 bg-white  rounded-r-lg shadow-lg">
                <div className=" cursor-pointer flex justify-end mb-3"  >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="font1 cursor-pointer"
                    size={28}
                    onClick={() => setShowPopup(false)}
                  />
                </div>
                <form>
                  <div className="space-y-4 mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="flex space-x-4">
                      <input
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


                  <div className="mb-6">
                    <h5 className="md:text-lg text-md font-semibold text-graytext">Booking Summary</h5>
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
                      <p className="font-semibold text-graytext">₹ {" "}</p>
                    </div>
                  </div>

                  <textarea
                    placeholder="Comments"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>

                  <div className=" flex justify-start items-center gap-2 mb-4">
                    <input
                      className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack"
                      type="checkbox"
                      id="checked"
                      onChange={() => setCheck(true)}
                    />
                    <label
                      htmlFor="checked"
                      className="cursor-pointer label-text text-para font-medium  text-gray-700"
                    >
                      Please Confirm
                    </label>
                  </div>
                  <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white w-full p-3 rounded-lg hover:opacity-90"
                    onClick={handleSubmit}>
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

