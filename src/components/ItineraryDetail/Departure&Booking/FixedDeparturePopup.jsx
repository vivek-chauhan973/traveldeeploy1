import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect,  useState } from "react";

const FixedDeparturePopup = ({togglePopup,addPackage}) => {
  const {fixedDepDate,fixedDepCity,handleCleckOnDepartureFixed}=useAppContext();
  const [check,setCheck]=useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
      console.log("true",check)
     
const handleSubmit=()=>{
  if(check){
    handleCleckOnDepartureFixed();
    
  }
  else{
    return alert("please checke marked of confirm box");
  }
  togglePopup(false);
}

  return (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">

      <button onClick={()=>togglePopup(false)} className="float-right relative -top-5 px-2 py-2 font-semibold cursor-pointer">
        X
      </button>
      <p className="text-xl font-semibold mb-4 text-center">Name : Pradhumn</p>
      
      <div className="mb-4">
        <p className="block text-gray-700 font-medium mb-2">Package Name : {addPackage?.name}</p>
      </div>

      <div className="mb-4">
        <p className="block text-gray-700 mb-2">BasePrice :  ${addPackage?.price}</p>  
      </div>

      <div className="mb-4">
        <p className="block text-gray-700 mb-2">Departure City : {fixedDepCity}</p>
      </div>

      <div className="mb-4">
        <p className="block text-gray-700 mb-2">Departure Date : {fixedDepDate}</p>
      </div>
        
      <div className="mb-4 flex justify-start items-center gap-2">
        <input className="cursor-pointer h-4 w-4 rounded-lg accent-navyblack" 
               type="checkbox" id="checked" onChange={()=>setCheck(true)}/>
        <label htmlFor="checked" className="cursor-pointer label-text text-para  text-gray-700">
          Please confirm
        </label>
      </div>

      <div className="flex justify-center items-center">
        <button onClick={handleSubmit}
          className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 "
        >
          Submit
        </button>
      </div>

    </div>
  </div>
)}

 

export default FixedDeparturePopup