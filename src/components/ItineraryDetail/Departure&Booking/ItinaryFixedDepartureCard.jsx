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
      <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
        <div className=" overflow-y-auto">
          <div className="flex mb-[10px] mt-5 text-sm">
            <p className=" w-24 text-md">Dept. city : </p>
            <select
              id="city"
              name="city"
              className=" w-40 text-center text-md outline-none"
              onChange={(e) => {
                setFixedDepCity(e.target.value);
                setCity(true);
              }}
            >
              <option value="" className=" w-32 text-start text-md">
                Select Departure city
              </option>
              {addPackage?.startcity?.map((item, i) => (
                <option
                  key={i}
                  value={item}
                  className="text-start my-2 text-md"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          {fixedDepCity ? null : (
            <p className=" text-red-600">please select City first</p>
          )}

          <div className=" flex gap-2">
            <p>select Dept. date : </p>
            <input
              type="date"
              className=" outline-none border-2 rounded-lg p-1 text-sm"
              onChange={(e) => {
                setFixedDepDate(e.target.value);
                setDate(true);
              }}
            />
          </div>
          {fixedDepDate ? null : (
            <p className=" text-red-600">please select date first</p>
          )}

          <div className=" justify-between  pt-3 pb-3 hidden xl:flex ">
            <div>
              <p className="text-sm ">Basic Price</p>
            </div>
            <div className="">
              <p className="text-lg font-medium text-graytext">
                {" "}
                {addPackage?.prices?.basePrice}
              </p>
              <p className="text-xxs">per person on twin sharing</p>
            </div>
          </div>
          <hr className="border-dashed my-4 hidden xl:block" />
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
                book now
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
