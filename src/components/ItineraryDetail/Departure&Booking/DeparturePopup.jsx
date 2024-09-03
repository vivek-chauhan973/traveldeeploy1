import { useAppContext } from '@/components/admin/context/Package/AddGuest';
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DeparturePopup = ({ setShowPopup, addPackage }) => {

  const [handleCity, setHandleCity] = useState(false);
  const { setShowAddguest, setFixedDepartureButtonEnaibleAndDisable, setPrice2, setGuestPrice, fixedDepartureButtonEnaibleAndDisable, setFixedDepartureProceedButton, guestPrice, departureSectionData } = useAppContext();
  const [data, setData] = useState([]);
//  console.log("add package------> ",addPackage)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {

    setData(addPackage?.startcity || [])
    // },[data])
  }, [addPackage?.startcity, data]);


  const ref = useRef(null);
  // console.log("addpackage123456789",addPackage)

  const handleSubmit = () => {
    // console.log(); 
    if (addPackage?.addguest === "fixedDeparture") {
      // setFixedDepartureProceedButton(true);
      setFixedDepartureButtonEnaibleAndDisable(true)

    }
    if (addPackage?.addguest === "fixedDeparture") {
      // console.log("departureSectionData :: ----> ",departureSectionData)
      setGuestPrice(departureSectionData?.price);
    }
    else {
      setPrice2(departureSectionData?.price)
    }
    if (handleCity) {
      setShowAddguest(ref.current.value)
      setShowPopup(false);
    }
    else {
      setShowPopup(true);
    }
  }

  const handlePopupClose = () => {
    setShowPopup(false);
  }

  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-xl  shadow-lg z-50">
        <div className='pr-2 pt-1 flex justify-end items-center mt-1'>
          <FontAwesomeIcon
            icon={faXmark}
            className='h-7 w-7  hover:bg-gray-100  rounded-full cursor-pointer p-1.5'
            onClick={handlePopupClose}
          />
        </div>
        <div className="md:px-7 px-5">
          <div>
            <p className='md:text-xl text-md font-semibold'>Select your preferred departure city</p>
          </div>
          <div className='my-5'>
            {data?.map((item, i) => {
              const id = `radio-${i}`; // Unique ID for each radio button
              return (
                <div key={i} className='flex justify-start items-center gap-3 my-2'>
                  <input type="radio" name='radio' value={item} id={id} className='w-5 h-5'
                    onChange={() => setHandleCity(true)} ref={ref} />
                  <label htmlFor={id} className='text-base cursor-pointer capitalize'>{item}</label>
                </div>
              )
            }
            )}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            {/* <button onClick={() => toggleModal(null)} className="mr-5 bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                      Cancel
                  </button> */}
            <button onClick={handleSubmit} className="  bg-yellow-300 hover:bg-yellow-600 text-black font-normal py-2 px-4 rounded-md">
              {handleCity ? "Proceed" : "Select Departure"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeparturePopup