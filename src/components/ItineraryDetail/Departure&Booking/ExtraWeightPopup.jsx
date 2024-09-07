import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from '@/components/admin/context/Package/AddGuest';
const ExtraWeightPopup = () => {

    const { setContactAdimn}=useAppContext();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-40">
      <div className="absolute inset-0 bg-black opacity-40"></div>
     <div className=' bg-white shadow-sm flex flex-col w-full h-full sm:h-fit   md:w-1/2 z-50 rounded-sm'>
        <div className=' mt-4 ml-6 flex justify-between'>
            <h1 className='text-xl text-blue-700 font-bold lg:font-extrabold lg:text-2xl'>Important Notice</h1>
            <div className=" pr-3 ">
          <FontAwesomeIcon
            icon={faXmark}
            className=" h-7 w-7 md:h-8 md:w-8  hover:bg-gray-100  rounded-full cursor-pointer p-1.5"
            onClick={()=> setContactAdimn(false)}
          />
        </div>
        </div>
        <div  className='mt-2  mx-6'>
            <p className=' lg:text-md'>Your current weight exceeds the permissible limit for the helicopter.
                For further assistance , please contact our agent or drop us a message on
                WhatsApp , and we will be happy to help you with the next steps. Thank you for your understanding.
            </p>
        </div>
        <div  className='pt-6 md:pt-10  pb-5 md:pb-14 mx-2 md:mx-6 flex gap-4 flex-col md:flex-row ' >
            <button className=' capitalize bg-orange-400 rounded-full px-4 py-2'>WhatsApp</button>
            <button className=' capitalize bg-orange-400 rounded-full px-4 py-2'>call to our executive</button>
        </div>
     </div>
    </div>
  )
}

export default ExtraWeightPopup