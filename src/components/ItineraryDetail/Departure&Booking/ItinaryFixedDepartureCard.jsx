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
// ========================================================
  return (
    <>
      <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[480px] overflow-scroll">
        <div className=" overflow-y-auto">
          <p className="xl:block hidden text-md font-semibold text-center ">Booking Summary</p>                 
          <div className="flex xl:block justify-center items-center flex-col gap-3 md:p-2">
            <div>   
              <div className="flex xl:flex-col">
                <label className="text-para font-semibold" htmlFor="city">Select Dept. City : </label>
                <select name="city" id="city" className="border rounded w-full pl-3"
                        onChange={(e) => { setFixedDepCity(e.target.value);
                                           setCity(true);
                                          }}
                  >
                  <option value="">Departure City</option>
                  {addPackage?.startcity?.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {fixedDepCity ? null : (
                <p className="text-sm text-red-600">Please Select City First</p>
              )}
            </div>

            <div>
              <div className="flex xl:flex-col mt-3">
                <label className="text-para font-semibold" htmlFor="date">Select Dept. Date</label>
                <input type="date" id="date" required className="w-full md:py-1.5 md:px-3 text-para border border-[#999999] rounded text-center"
                       onChange={(e) => { setFixedDepDate(e.target.value);
                                          setDate(true);
                                        }}/>
              </div>
              {fixedDepDate ? null : (
                <p className="text-sm text-red-600">Please Select Date First</p>
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
              <p className="text-lg ml-2 font-semibold my-2 text-graytext">
                Highlights
              </p>
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
          <div className=" gap-2 justify-center py-3 hidden xl:flex">
            {
              <button
                onClick={handleSubmit}
                className={`border px-5 py-1 rounded-md ${
                  fixedDepartureButtonEnaibleAndDisable
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
              <p className="border px-5 cursor-pointer py-1 rounded-md text-center text-para">
                <span>Customise</span>
              </p>
            </CustomiseTour>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItinaryFixedDepartureCard;
