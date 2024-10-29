import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";

const CarDeparturePopup = ({ setShowPopup, carPackage,setdepartureData,departureData,setCarPrice1 }) => {
  const [handleCity, setHandleCity] = useState(false);
  const [departureCity, setdepartureCity] = useState([]);
  const {setCarPrice}=useAppContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleSubmit = () => {
    departureData['departureCity']=departureCity;
    setdepartureData(departureData);
    setCarPrice(((carPackage?.price)+((carPackage?.price)*(departureData?.Hike/100))));
    setCarPrice1(((carPackage?.price)+((carPackage?.price)*(departureData?.Hike/100))));
    setShowPopup(false);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  // console.log("DepartureCity data", departureData);
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
            {carPackage?.startcity?.map((item, i) => {
              const id = `radio-${i}`;
              return (
                <div
                  key={i}
                  className="flex justify-start items-center gap-3 my-2">
                  <input
                    type="radio"
                    name="radio"
                    value={item}
                    id={id}
                    className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
                    onChange={(e) => {
                      setHandleCity(true);
                      setdepartureCity(e.target.value);
                    }}
                  />
                  <label
                    htmlFor={id}
                    className="text-base cursor-pointer capitalize">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <button
              onClick={handleSubmit}
              className={`${handleCity
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

export default CarDeparturePopup;
