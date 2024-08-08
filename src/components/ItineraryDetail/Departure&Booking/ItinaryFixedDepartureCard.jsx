import React, { useState } from "react";
import CustomiseTour from "../CustomiseTour";
import FixedDeparturePopup from "./FixedDeparturePopup";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";

const ItinaryFixedDepartureCard = ({
  addPackage,
  togglePopup,
  fixedDeparturePopupOpen,
}) => {
  const {
    setFixedDepDate,
    setFixedDepDate1,
    fixedDepDate,
    fixedDepCity,
    setFixedDepCity,
    setFixedDepCity1,
    setFixedDepartureButtonEnaibleAndDisable,
    fixedDepartureButtonEnaibleAndDisable,
  } = useAppContext();
  const [city, setCity] = useState(false);
  const [date, setDate] = useState(false);
  if (city && date) {
    setFixedDepartureButtonEnaibleAndDisable(true);
  }

  const handleSubmit = () => {
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
    if (fixedDepartureButtonEnaibleAndDisable) {
      togglePopup(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[480px] overflow-scroll">
        <div className=" overflow-y-auto">
          <h4 className="xl:block hidden text-md font-semibold text-center ">Booking Summary</h4>
          <div className="flex xl:block xl:justify-center xl:items-center flex-col md:gap-3 p-2">
            <div>
              <div className="flex flex-col">
                <label className="text-para font-semibold cursor-pointer" htmlFor="city">Select Dept. City : </label>
                <select name="city" id="city" className="border rounded w-full pl-3 cursor-pointer"
                  onChange={(e) => {
                    setFixedDepCity(e.target.value);
                    setCity(true);
                  }}
                >
                  <option value="" className="cursor-pointer">Departure City</option>
                  {addPackage?.startcity?.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {fixedDepCity ? null : (
                <p className="text-xs text-red-600">Please Select City First</p>
              )}
            </div>

            <div>
              <div className="flex flex-col mt-2 ">
                <label className="text-para font-semibold cursor-pointer" htmlFor="date">Select Dept. Date</label>
                <input type="date" id="date" required className="w-full py-1.5 px-3 text-para border border-[#999999] rounded text-center cursor-pointer"
                  onChange={(e) => {
                    setFixedDepDate(e.target.value);
                    setDate(true);
                  }} />
              </div>
              {fixedDepDate ? null : (
                <p className="text-xs text-red-600">Please Select Date First</p>
              )}
            </div>
          </div>

          <div className=" justify-between hidden xl:flex px-2">
            <div>
              <p className="text-sm ">Basic Price</p>
            </div>
            <div>
              <p className="text-lg font-medium text-graytext">
                {" "}
                {addPackage?.prices?.basePrice}
              </p>
              <p className="text-xxs">per person on twin sharing</p>
            </div>
          </div>
          <hr className="border-dashed my-2 hidden xl:block" />
          <div className="text-para  grid-cols-2 my-3 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2">
              <p>Total Cost</p>
              <p className="">70,000</p>
            </div>
          </div>
          <div className="text-para grid-cols-2 -mt-2 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2">
              <p>GST 5% </p>
              <p className="">2,300</p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          {/* inject your code for mobile device */}
          <div className="xl:hidden">
            <div className="ml-2">
              <p className="font-semibold text-lg mb-2 mt-1 text-graytext">
                About us
              </p>

              <p
                className="text-para px-3"
                dangerouslySetInnerHTML={{
                  __html: addPackage?.about,
                }}
              ></p>
            </div>

            <div>
              <h5 className="text-lg ml-2 font-semibold my-2 text-graytext">
                Highlights
              </h5>
              <div>
                {addPackage?.highlights?.map((highlight) => (
                  <ol key={highlight._id} className="list-disc   ">
                    <li className="px-3 text-para">{highlight.text}</li>
                  </ol>
                ))}
              </div>
            </div>
          </div>
          <div className="text-para  grid-cols-2 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2 gap-1">
              <p>Grand Total</p>
              <p className="font-semibold text-graytext">70,000</p>
            </div>
          </div>
          <div className=" justify-center gap-10 my-3 hidden xl:flex">
            <label className=" inline-flex items-center">
              <input
                type="radio"
                className=" form-radio text-primary"
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext">Pay 25% Now</p>
            </label>

            <label className=" inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-primary hidden xl:block"
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext hidden xl:block">
                Pay Full Online
              </p>
            </label>
          </div>
          <div className=" gap-3 justify-center  hidden xl:flex">
            {
              <button
                onClick={handleSubmit}
                className={`border px-5 py-2 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                    ? "bg-primary"
                    : "bg-orange-200"
                  } text-center text-para`}
              >
                Book now
              </button>
            }

            {fixedDeparturePopupOpen && (
              <FixedDeparturePopup
                togglePopup={togglePopup}
                addPackage={addPackage}
              />
            )}
            <CustomiseTour>
              <button className=" border-primary w-full border text-primary flex-flow  flex justify-center px-5 py-2 text-para rounded-md">
                Customise
              </button>
            </CustomiseTour>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItinaryFixedDepartureCard;
