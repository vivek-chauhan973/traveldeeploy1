import { useAppContext } from '@/components/admin/context/Package/AddGuest';
import  { useEffect, useRef, useState } from 'react'

const DeparturePopup = ({setShowPopup}) => {
const [handleCity,setHandleCity]=useState(false);
    const {setShowAddguest}=useAppContext();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
const ref=useRef(null);

      const handleSubmit=()=>{
            // console.log(); 
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
    
    <div className="bg-white rounded-[20px]  shadow-lg z-50">
    <div className=' float-right relative top-2 right-2 cursor-pointer' onClick={handlePopupClose}>X</div>
        <h2 className="text-xl px-8 pt-8 font-semibold  text-center justify-center">Select your preferred departure city</h2>
        <div className='pt-4 px-8'>
            <div className='flex gap-3 my-2'>
                <input type="radio" name='radio' value="Ahmadabad" className=' h-6 w-6' onChange={()=>setHandleCity(true)} ref={ref}/>
                <p className=' text-md'>Ahmadabad</p>
            </div>
            <div className='flex gap-3 my-2'>
                <input type="radio" name='radio' value="Gujrat" className=' h-6 w-6'  onChange={()=>setHandleCity(true)} ref={ref} />
                <p className=' text-md'>Gujrat</p>
            </div>
            <div className='flex gap-3 my-2'>
                <input type="radio" name='radio' value="Chandhigarh" className=' h-6 w-6'  onChange={()=>setHandleCity(true)} ref={ref} />
                <p className=' text-md'>Chandhigarh</p>
            </div>
            <div className='flex gap-3 my-2'>
                <input type="radio" name='radio' value="Kashmir" className=' h-6 w-6' onChange={()=>setHandleCity(true)}  ref={ref}/>
                <p className=' text-md'>Kashmir</p>
            </div>
        </div>
        <div className="flex justify-center mt-4">
            {/* <button onClick={() => toggleModal(null)} className="mr-5 bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                Cancel
            </button> */}
             <button onClick={handleSubmit}  className="  bg-yellow-300 hover:bg-yellow-600 text-black font-normal py-3 mb-3 px-8 rounded-[25px] mx-2 ">
                {handleCity?"Proceed":"Select Departure"}
            </button>
            
           
        </div>
    </div>
</div>
  )
}

export default DeparturePopup