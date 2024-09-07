import React, { useEffect } from 'react'

const ExtraWeightPopup = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-40">
      <div className="absolute inset-0 bg-black opacity-40"></div>
     <div className=' bg-white shadow-sm flex flex-col  w-1/2 z-50 rounded-sm'>
        <div className=' mt-4 mx-6'>
            <h1 className=' text-blue-700 font-bold'>Important Notice</h1>
        </div>
        <div  className=' mt-4 mx-6'>
            <p>Your current weight exceeds the permissible limit for the helicopter.
                For further assistance , please contact our agent or drop us a message on
                WhatsApp , and we will be happy to help you with the next steps. Thank you for your understanding.
            </p>
        </div>
        <div  className=' my-6 mx-6 flex gap-4 ' >
            <button className=' capitalize bg-orange-400 rounded-full px-4 py-2'>WhatsApp</button>
            <button className=' capitalize bg-orange-400 rounded-full px-4 py-2'>call to our executive</button>
        </div>
     </div>
    </div>
  )
}

export default ExtraWeightPopup