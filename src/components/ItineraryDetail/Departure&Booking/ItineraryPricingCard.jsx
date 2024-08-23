import Addguest from "@/components/addguest";
import "../../../app/globals.css";
import CustomiseTour from "../CustomiseTour";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const ItineraryPricingCard = () => {
  const {
    addPackage,
    inputData,
    setInputData,
    guestPrice,
    closeBtn,
    price1,
    setCloseBtn,
    showAddguest,
    submitButtonOfPricingCalculation
  } = useAppContext();

  const [gst,setGst]=useState(0);
  const [calculatedPrizeOfGst,setCalculatedPrizeOfGst]=useState(0);
  const [grandTotal,setGrandTotal]=useState(0);
  useEffect(()=>{
    (submitButtonOfPricingCalculation&&guestPrice)||price1
    setGst(addPackage?.addguestPrices?.gst||0);
  },[addPackage])
  useEffect(()=>{
    setCalculatedPrizeOfGst((( (submitButtonOfPricingCalculation&&guestPrice)||price1)*5)/100)
  },[gst,price1])
  useEffect(()=>{
    setGrandTotal((((submitButtonOfPricingCalculation&&guestPrice)||price1)+calculatedPrizeOfGst));
  },[calculatedPrizeOfGst])
 
  return (
    <>
      <div className=" border p-5 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block overflow-hidden ">
        <div className="bg-white">
          <div className="flex justify-between mb-2">
            <h5 className="text-md font-semibold text-graytext">Booking Summary</h5>
            <p> ₹{Math.floor( (submitButtonOfPricingCalculation&&guestPrice)||price1).toLocaleString()}</p>
            <div>
              <Addguest
                guestPrice={guestPrice}
                setInputData={setInputData}
                inputData={inputData} 
                setCloseBtn={setCloseBtn}
                addPackage={addPackage}
              >
                <FontAwesomeIcon icon={faPenToSquare} className='font1 cursor-pointer' />
              </Addguest>
            </div>
          </div>
          <hr />
        </div>

        <div className=" overflow-y-auto">
          <div className="flex mb-2.5 mt-3 text-sm">
            <p className=" w-20">Dept. city : </p>
            <p className="font-semibold text-graytext">Mumbai</p>
          </div>
          <div className="flex mb-2.5 text-sm">
            <p className=" w-20">Dept. date :</p>
            <p className=" font-bold text-graytext">
              10 Mar 2024 - 17 Mar 2024
            </p>
          </div>
          <div className="flex mb-2.5 text-sm">
            <p className=" w-20">Traveller :</p>
            <p className=" font-semibold text-graytext">
              Adults:{inputData?.adult}, Child:{inputData?.child}, Infant:
              {inputData?.infant}
            </p>
          </div>
          <div className="flex mb-2.5 text-sm">
            <p className=" w-20">Rooms :</p>
            <div>
              {inputData &&
                Object.keys(inputData).map(
                  (roomType, index) =>
                    inputData?.[roomType] > 0 &&
                    roomType !== "adult" &&
                    roomType !== "child" &&
                    roomType !== "infant" && (
                      <p key={index} className="font-semibold capitalize">
                        {roomType}: {inputData[roomType]}
                      </p>
                    )
                )}
            </div>
          </div>
          <div className="flex justify-between  pt-3 pb-3 ">
            <div>
              <p className="text-sm ">Basic Price</p>
            </div>
            <div className="">
              <p className="text-lg font-medium text-graytext"> ₹{Math.floor( (submitButtonOfPricingCalculation&&guestPrice)||price1).toLocaleString()}</p>
              <p className="text-xxs">per person on twin sharing</p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          <div className="text-para grid grid-cols-2 my-3">
            <div></div>
            <div className="grid grid-cols-2">
              <p>Total Cost</p>
              <p className=""> ₹{Math.floor( (submitButtonOfPricingCalculation&&guestPrice)||price1).toLocaleString()}</p>
            </div>
          </div>
          <div className="text-para grid grid-cols-2 mt-3">
            <div></div>
            <div className="grid grid-cols-2">
              <p>GST {gst}% </p>
              <p className="">₹{Math.floor(calculatedPrizeOfGst).toLocaleString()}</p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          <div className="text-para grid grid-cols-2">
            <div></div>
            <div className="grid grid-cols-2 gap-1">
              <p>Grand Total</p>
              <p className="font-semibold text-graytext">₹{Math.floor(grandTotal).toLocaleString()}</p>
            </div>
          </div>
          {closeBtn && (
            <div className="flex justify-center gap-10 my-3">
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
                  className="form-radio text-primary"
                  name="radio-group"
                />
                <p className="ml-2 font-semibold text-graytext">
                  Pay Full Online
                </p>
              </label>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3 my-3">
            <CustomiseTour>
              <button className=" border-primary w-full border text-primary flex-flow   flex justify-center px-5 py-2 text-para rounded-md">
                Customise
              </button>
            </CustomiseTour>

            {
              <Addguest
              guestPrice={guestPrice}
              setInputData={setInputData}
              inputData={inputData}
              setCloseBtn={setCloseBtn}
              addPackage={addPackage}
              >
                <button
                  className={` ${
                    showAddguest ? "bg-primary cursor-pointer" : "bg-orange-200"
                  } px-5 py-2 rounded-md text-white text-center text-para`}
                >
                  {closeBtn ? "Book now" : "Add Guest & room"}
                </button>
              </Addguest>
            }
          </div>
        </div>
      </div>
      {/* mobile Devices */}
    </>
  );
};
export default ItineraryPricingCard;
