import Addguest from "@/components/addguest";
import "../../../app/globals.css";
import CustomiseTour from "../CustomiseTour";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import FixedDeparturePopup from "./FixedDeparturePopup";
const ItineraryPricingCard = () => {
  const {
    addPackage,
    inputData,
    setInputData,
    guestPrice,
    closeBtn,
    price2,
    setCloseBtn,
    showPopup, setShowPopup,
    showPopup1, setShowPopup1,
    submitButtonOfPricingCalculation,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDeparturePopupPrice,
    showAddguest,
    departureSectionData
  } = useAppContext();

  const [gst, setGst] = useState(0);
  const [calculatedPrizeOfGst, setCalculatedPrizeOfGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {

    setGst(addPackage?.addguestPrices?.gst || 0);
  }, [addPackage])
  useEffect(() => {
    setCalculatedPrizeOfGst(((((submitButtonOfPricingCalculation && Math.floor(guestPrice)) || price2) || addPackage?.price) * 5) / 100)
  }, [gst, (((submitButtonOfPricingCalculation && Math.floor(guestPrice)) || price2) || addPackage?.price)])
  useEffect(() => {
    setGrandTotal(((((submitButtonOfPricingCalculation && Math.floor(guestPrice)) || price2) || addPackage?.price) + calculatedPrizeOfGst));
    setFixedDeparturePopupPrice(((((submitButtonOfPricingCalculation && Math.floor(guestPrice)) || price2) || addPackage?.price) + calculatedPrizeOfGst))
  }, [calculatedPrizeOfGst, grandTotal])

  const handleBookNowClick = () => {
    if (closeBtn) {
      setShowPopup(true); // Show popup on "Book Now" click
    }
    if (!closeBtn) {
      setShowPopup1(true);
    }
  };

  const handleEdit = () => {
    setShowPopup1(true);
  }


  return (
    <>
      {showPopup1 && <Addguest guestPrice={guestPrice}
        inputData={inputData}
        setInputData={setInputData}
        setCloseBtn={setCloseBtn}
        addPackage={addPackage}
        setShowPopup1={setShowPopup1} />}
      <div className=" border p-5 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block overflow-hidden ">
        <div className="bg-white">
          <div className="flex justify-between mb-2">
            <h5 className="text-md font-semibold text-graytext">Booking Summary</h5>
            <div>
              <FontAwesomeIcon icon={faPenToSquare} className='font1 cursor-pointer' onClick={handleEdit} />
            </div>
          </div>
          <hr />
        </div>

        <div className=" overflow-y-auto">
        <div className="flex mb-2.5 mt-3 text-sm">
              <p className=" w-20">Dept. City : </p>
              <p className="font-semibold text-graytext capitalize">{showAddguest||" -- "}</p>
            </div>
            <div className="flex mb-2.5 text-sm">
              <p className=" w-20">Dept. Date :</p>
              <p className=" font-bold text-graytext">
               {departureSectionData?.date||" -- "}
              </p>
            </div>
          <div className="flex mb-2.5 text-sm">
            <p className=" w-20">Traveller :</p>
            <p className=" font-semibold text-graytext">
              Adults : {inputData?.adult || "2"}, Child : {inputData?.child}, Infant : {inputData?.infant}
            </p>
          </div>
          <div className="flex mb-2.5 text-sm">
            <p className=" w-20">Rooms :</p>
            <div>
              {inputData &&
                Object.keys(inputData).map(
                  (roomType, index) => {
                    return (
                      <>
                        {(inputData?.[roomType] > 0 && roomType === "singleRoom") && <p>
                          Single Room : {inputData?.[roomType]}
                        </p>}
                        {(inputData?.[roomType] > 0 && roomType === "twinRoom") && <p>
                          Double Room : {inputData?.[roomType]}
                        </p>}
                        {(inputData?.[roomType] > 0 && roomType === "tripleRoom") && <p>
                          Double Room + 1 Extra Bed : {inputData?.[roomType]}
                        </p>}
                        {(inputData?.[roomType] > 0 && roomType === "quardRoom") && <p>
                          Double Room + 2 Extra Bed: {inputData?.[roomType]}
                        </p>}
                      </>
                    )
                  }
                )}
            </div>
          </div>
          <div className="grid grid-cols-2 py-3">
            <div>
              <p className="text-sm ">Basic Price : </p>
            </div>
            <div className="">
              <p className="text-lg font-medium text-graytext">
                {Math.floor(((submitButtonOfPricingCalculation && (guestPrice)) || price2) || addPackage?.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
              {(guestPrice ? "" : <p className="text-xxs">per person on twin sharing</p> )}
            </div>
          </div>
          <hr className="border-dashed my-2" />
          <div className="text-para grid grid-cols-2 my-3">
            <div></div>
            <div className="grid grid-cols-2">
              <p>Total Cost</p>
              <p className="">
                {Math.floor((((submitButtonOfPricingCalculation && (guestPrice)) || price2)) || addPackage?.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
          <div className="text-para grid grid-cols-2 mt-3">
            <div></div>
            <div className="grid grid-cols-2">
              <p>GST {gst} % </p>
              <p className="">
                {(calculatedPrizeOfGst).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          <div className="text-para grid grid-cols-2">
            <div></div>
            <div className="grid grid-cols-2 gap-1">
              <p className="font-semibold">Grand Total</p>
              <p className="font-semibold text-graytext">
                {(grandTotal).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-3">
            <CustomiseTour>
              <button className=" border-primary w-full border text-primary flex-flow   flex justify-center px-5 py-2 text-para rounded-md">
                Customise
              </button>
            </CustomiseTour>
            <button
              className={` ${fixedDepartureButtonEnaibleAndDisable ? " cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 " : "bg-gradient-to-r from-orange-200 to-red-200 "
                } px-5 py-2 rounded-md text-white text-center text-para`}
              onClick={fixedDepartureButtonEnaibleAndDisable?handleBookNowClick:null}
            >
              {closeBtn ? "Book now" : "Add Guest & room"}
            </button>
          </div>
        </div>
      </div>
      {/* Show Popup when 'Book Now' is clicked */}
      {showPopup && (
        <FixedDeparturePopup />
      )}
    </>
  );
};
export default ItineraryPricingCard;
