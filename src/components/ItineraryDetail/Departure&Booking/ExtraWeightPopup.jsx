import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from '@/components/admin/context/Package/AddGuest';
const ExtraWeightPopup = () => {

  const { setContactAdimn } = useAppContext();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='bg-white shadow-sm flex flex-col w-full h-auto md:w-1/2 z-50 rounded-md'>
        <div className='mt-4 flex justify-between items-center px-3 md:px-5'>
          <h2 className='text-3xl md:ml-1 ml-3 md:text-5xl font-semibold text-navyblack'>Important Notice</h2>
          <div className="">
            <FontAwesomeIcon
              icon={faXmark}
              className="md:h-7 md:w-7 h-6 w-6 hover:bg-gray-100 rounded-full cursor-pointer p-1.5"
              onClick={() => setContactAdimn(false)}
            />
          </div>
        </div>
        <div className='mt-3 mx-6'>
          <p className='text-base'>
            Your current weight exceeds the permissible limit for the helicopter.
            For further assistance, please contact our agent or drop us a message on
            WhatsApp, and we will be happy to help you with the next steps. Thank you for your understanding.
          </p>
        </div>
        <div className='py-6 md:py-8 mx-4 md:mx-6 flex gap-4 flex-col xl:flex-row justify-center items-center'>
          <button className='capitalize w-full xl:w-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2 text-white hover:bg-orange-500'
           onClick={() => window.open('https://wa.me/9873748806?text=Hello, I need assistance regarding my weight limit for the helicopter.')}
           >
            WhatsApp
          </button>
          <button className='capitalize w-full xl:w-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2 text-white hover:bg-orange-500'
          onClick={() => window.open('tel:9873748806')}
          >
            Call To Our Executive
          </button>
        </div>
      </div>
    </div>

  )
}

export default ExtraWeightPopup
