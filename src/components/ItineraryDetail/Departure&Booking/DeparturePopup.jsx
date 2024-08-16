import { useAppContext } from '@/components/admin/context/Package/AddGuest';
import  { useEffect, useRef, useState } from 'react'

const DeparturePopup = ({setShowPopup,addPackage}) => {

    const [handleCity,setHandleCity]=useState(false);
    const {setShowAddguest,setFixedDepartureButtonEnaibleAndDisable,fixedDepartureButtonEnaibleAndDisable,setFixedDepartureProceedButton,guestPrice}=useAppContext();
    const [data,setData]=useState([]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);    
      useEffect(()=>{
       
        setData(addPackage?.startcity||[])
      // },[data])
    }, [addPackage?.startcity, data]);


    const ref=useRef(null);
    // console.log("addpackage123456789",addPackage)

    const handleSubmit=()=>{
        // console.log(); 
        if(addPackage?.addguest==="fixedDeparture" ){
          // setFixedDepartureProceedButton(true);
          setFixedDepartureButtonEnaibleAndDisable(true)
        
        }
      if(handleCity){
        setShowAddguest(ref.current.value)
        setShowPopup(false);}
      else{
        setShowPopup(true);
      }
    }

    const handlePopupClose=()=>{
      setShowPopup(false);
    }
    
  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
    
      <div className="bg-white rounded-xl  shadow-lg z-50">
          <div className=' pr-3 pt-1 flex justify-end items-center cursor-pointer' onClick={handlePopupClose}>X</div>
          <div className="py-0 px-5">
              <div className="md:text-md text-md font-semibold">
                <p>Select your preferred departure city</p>
              </div>
              <div className='my-3'>
                  {data?.map((item,i) => {
                      const id = `radio-${i}`; // Unique ID for each radio button
                      return (
                      <div key={i} className='flex justify-start items-center gap-3 my-2'>
                        <input type="radio" name='radio' value={item} id={id} className='w-5 h-5' 
                          onChange={()=>setHandleCity(true)} ref={ref}/>
                        <label htmlFor={id} className='text-base cursor-pointer'>{item}</label>
                      </div>
                    )}
                  )}
              </div>
              <div className="flex justify-center mt-4 mb-5">
                  {/* <button onClick={() => toggleModal(null)} className="mr-5 bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                      Cancel
                  </button> */}
                  <button onClick={handleSubmit}  className="  bg-yellow-300 hover:bg-yellow-600 text-black font-normal py-2 px-4 rounded-2xl">
                      {handleCity?"Proceed":"Select Departure"}
                  </button>  
              </div>
          </div>
      </div>
    </div>
  )
}

export default DeparturePopup