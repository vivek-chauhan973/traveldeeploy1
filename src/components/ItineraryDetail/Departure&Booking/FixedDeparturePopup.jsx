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
     
// console.log("refdffdsfsfsdf",ref.current);
const handleSubmit=()=>{
  if(check){
    handleCleckOnDepartureFixed();
    
  }
  else{
    return alert("please checke marked of confirm box");
  }
  togglePopup(false);
  // console.log("refdffdsfsfsdf212323234",ref.current);
}

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
      <h1 onClick={()=>togglePopup(false)} className="float-right relative -top-5 font-bold cursor-pointer">X</h1>
      <h2 className="text-2xl font-bold mb-4">Name:Pradhumn</h2>
      
        <div className="mb-4">
          <p className="block text-gray-700 mb-2">Package Name : {addPackage?.name}</p>
          
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
        
        <div className="mb-4 flex items-center gap-2">
          
          <input
            type="checkbox"
            onChange={()=>setCheck(true)}
            className=" border border-gray-300 rounded-lg   "
          />
          <p className="block text-gray-700 mb-2">Please confirm</p>
        </div>
        <button
        onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 w-full"
        >
          Submit
        </button>
     
    </div>
  </div>
)}

 

export default FixedDeparturePopup