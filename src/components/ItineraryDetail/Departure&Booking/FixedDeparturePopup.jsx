import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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

  // console.log("true", check);

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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div
        className=" cursor-pointer hover:scale-105 flex justify-end bg-white mb-3"
        size={28}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="font1 cursor-pointer"
          onClick={() => setShowPopup(false)}
        />
      </div>
      <div className="md:w-1/2 w-full h-auto ">
        <img src="https://usatodayhss.com/wp-content/uploads/sites/96/2022/08/11268798.jpeg?w=1000&h=600&crop=1"
          alt="fsdv"
          className="w-full h-full object-cover" />
      </div>
      <div className="bg-white rounded-lg p-6 md:w-1/2 w-full h-auto max-w-md shadow-lg">

        <div className=" flex gap-3 flex-col">
          <div>
            <input
              type="text"
              placeholder="Name"
              className=" py-2 px-4 w-full outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className=" w-full flex gap-3">
            <div className=" py-1 px-2 flex-7  border border-gray-400 rounded-md">
              <p className="text-[10px] ">IND</p>
              <p className=" text-[12px] font-medium">+91</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Mobile Number"
                className=" py-2 px-4 w-full outline-none border border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Id"
              className=" py-2 px-4 w-full outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <h2 className="font-semibold">Booking Summary</h2>
            <hr />
            <div className=" flex flex-col gap-3">
              <p className="">
                Dept. City :  <span className="font-medium">Mumbai</span>
              </p>
              <p>
                Dept. Date :  <span className="font-medium">10 Mar 2024-17 Mar 2024</span>
              </p>
              <p>
                Traveller :  <span className="font-medium">Adults : 2, Child : 0,infant : 0</span>
              </p>
              <p>
                Price :  <span className=" font-medium">₹ 100000</span>
              </p>
            </div>
          </div>
          <div>
            <textarea
              name="textarea"
              id="textarea"
              rows="4" cols="8" placeholder="Enter your message..."
              className=" py-2 px-4 w-full outline-none border border-gray-400 rounded-md"
            ></textarea>
          </div>
          <div>
            <div className=" flex justify-start items-center gap-2">
              <input
                className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack"
                type="checkbox"
                id="checked"
                onChange={() => setCheck(true)}
              />
              <label
                htmlFor="checked"
                className="cursor-pointer label-text text-para  text-gray-700"
              >
                Please Confirm
              </label>
            </div>
          </div>
          <div className=" w-full">
            <button className=" bg-orange-400 text-center w-full py-2 rounded-md">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDeparturePopup;
