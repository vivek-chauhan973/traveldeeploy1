import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeparturePopup = ({ setShowPopup, addPackage }) => {
  const [handleCity, setHandleCity] = useState(false);
  const {
    setShowAddguest,
    setFixedDepartureButtonEnaibleAndDisable,
    setPrice2,
    setGuestPrice,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepartureProceedButton,
    guestPrice,
    departureSectionData,
    showAddguest,
  } = useAppContext();
  const [data, setData] = useState([]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    setData(addPackage?.startcity || []);
  }, [addPackage?.startcity, data]);
  const handleSubmit = () => {
    if (addPackage?.addguest === "addGuest") {
      setFixedDepartureButtonEnaibleAndDisable(true);
    }
    if (addPackage?.addguest === "fixedDeparture") {
      setFixedDepartureButtonEnaibleAndDisable(true);
    }
    if (addPackage?.addguest === "fixedDeparture") {
      setGuestPrice(departureSectionData?.Price);
    } else {
      setPrice2(departureSectionData?.price);
    }
    if (handleCity) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
    
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
 
  

  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-xl  shadow-lg z-50">
        <div className="pr-2 pt-1 flex justify-end items-center mt-1">
          <FontAwesomeIcon
            icon={faXmark}
            className="h-5 w-5  hover:bg-gray-100  rounded-full cursor-pointer p-1"
            onClick={handlePopupClose}
          />
        </div>
        <div className="md:px-7 px-5">
          <div>
            <p className="md:text-lg text-base font-semibold capitalize">
              Select your preferred departure city
            </p>
          </div>
          <div className="my-3">
            {data?.map((item, i) => {
              const id = `radio-${i}`;
              return (
                <div key={i} className="flex justify-start items-center gap-3 my-2">
                  <input
                    type="radio"
                    name="radio"
                    value={item}
                    id={id}
                    className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
                     onChange={ (e) => {
                      setHandleCity(true);
                      setShowAddguest(e.target.value);
                    }
                    }
                  />
                  <label htmlFor={id} className="text-base cursor-pointer capitalize">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <button
              onClick={handleSubmit}          
              className={`${ handleCity
                ? "bg-gradient-to-r from-orange-400 to-red-500 cursor-pointer text-white"
                : "bg-gradient-to-r from-orange-300 to-red-400 text-white"
              } text-black font-normal py-2 px-4 rounded-md cursor-not-allowed`}
              disabled={!handleCity}
            >
              {handleCity ? " Proceed " : "Select Departure"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeparturePopup;
