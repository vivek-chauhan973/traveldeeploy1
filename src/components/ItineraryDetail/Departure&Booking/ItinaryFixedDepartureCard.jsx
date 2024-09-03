import React, { useEffect, useState } from "react";
import CustomiseTour from "../CustomiseTour";
import FixedDeparturePopup from "./FixedDeparturePopup";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";

const fetchLimitData=async (id)=>{
  const response = await fetch(`/api/package/price/departures/${id}`);
  return await response.json();
}

const ItinaryFixedDepartureCard = ({
  addPackage,
  togglePopup,
  fixedDeparturePopupOpen,
}) => {
  const {
    setFixedDepDate1,
    fixedDepDate,
    fixedDepCity,
    price1,
    setFixedDepCity,
    setFixedDepCity1,
    setFixedDepartureButtonEnaibleAndDisable,
    fixedDepartureButtonEnaibleAndDisable,
  } = useAppContext();
  const [city, setCity] = useState(false);
  const [date, setDate] = useState(false);
  const [calculatedPrizeOfGst,setCalculatedPrizeOfGst]=useState(0);
  const [columns,setColumns]=useState([]);
  const [limitData,setLimitData]=useState([]);
  const [limitKey,setLimitKey]=useState(1);
  const [limitKey1,setLimitKey1]=useState(0);
  const [gst,setGst]=useState(0);
  const [grandTotal,setGrandTotal]=useState(0);
const [submittedData,setSubmittedData]=useState([]);
  if (city && date) {
    setFixedDepartureButtonEnaibleAndDisable(true);
  }
const newLimitData=[];
let i=parseInt(limitData?.[0])
while(i<=parseInt(limitData?.[1])){
  let data=i.toString();
  newLimitData.push(data);
  i=i+1
}
  const handleSubmit = () => {
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
    if (fixedDepartureButtonEnaibleAndDisable) {
      togglePopup(true);
    }
  };
  useEffect(()=>{
    setSubmittedData(addPackage?.tableData||[])
    setColumns(addPackage?.tableColumn||[])
    fetchLimitData(addPackage?._id).then(res=>setLimitData(res?.data?.limit||[]))
    setGst(addPackage?.fixedDeparturePrices?.gst||0);
  },[addPackage])

  
  useEffect(()=>{
    setCalculatedPrizeOfGst((price1*5)/100)
  },[gst,price1])
  useEffect(()=>{
    setGrandTotal((price1+calculatedPrizeOfGst)*limitKey);
  },[calculatedPrizeOfGst,limitKey])

  // convert limit key into keys array , here is the logic of keys to convert array
  const [input,setInput]=useState("")
  const [lenkey,setLenKey]=useState(0);


  const keys = Array.from({ length: limitKey1 }, (_, index) => index + 1);

  // here is data of all persons' weight and data is already stored in state
  
  const [inputData1, setInputData1] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setInputData1(prevState =>
      prevState.map(item =>
        item.hasOwnProperty(name) ? { ...item, [name]: value } : item
      )
    );
    // console.log("input data is here : --->  ",inputData1)
  };
  useEffect(()=>{
    setInputData1(keys.map(item => ({ [`input${item}`]: "" })))
  },[limitKey1])
  return (
    <>
      <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[480px] overflow-scroll">
        <div className=" overflow-y-auto">
          <h4 className="xl:block hidden text-md font-semibold text-center ">Booking Summary</h4>
          <div className="flex xl:block xl:justify-center xl:items-center flex-col md:gap-3 p-2">
            <div>
              <div className="flex flex-col">
                <label className="text-para font-semibold cursor-pointer" htmlFor="city">Select limit : </label>
                <select name="city" id="city" className="border rounded w-full pl-3 cursor-pointer"
                  onChange={(e) => {
                    setFixedDepCity(e.target.value);
                    setLimitKey(e.target.value)
                    setLimitKey1(e.target.value)
                    setCity(true);
                  }}
                >
                  <option value="" className="cursor-pointer">select limit</option>
                  {newLimitData?.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {fixedDepCity ? null : (
                <p className="text-xs text-red-600">Please Select City First</p>
              )}
            </div>

            <div>
              <div className="flex flex-col mt-2 ">
                <label className="text-para font-semibold cursor-pointer" htmlFor="date">{limitKey1?"weights of person":""}</label>
                {keys.map((item,i)=><div key={i} className="flex gap-3 justify-center items-center">
                  <p>person{i+1}</p>
                <input type="text" id={`person ${i+1}`} name={`input${i+1}`} required className="mt-2 w-full py-1.5 px-3 text-para border border-[#999999] rounded text-center cursor-pointer"
                  onChange={(e) => {
                    handleInputChange(e);
                    setDate(true);
                    // console.log(e.target.value);
                  }} />
                </div>)}
                
              </div>
              
            </div>
          </div>

          <div className=" justify-between hidden xl:flex px-2">
            <div>
              <p className="text-sm ">Basic Price</p>
            </div>
            <div>
              <p className="text-lg font-medium text-graytext">
                {" "}
                {price1}
              </p>
              <p className="text-xxs">per person on twin sharing</p>
            </div>
          </div>
          <hr className="border-dashed my-2 hidden xl:block" />
          <div className="text-para  grid-cols-2 my-3 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2">
              <p>Total Cost</p>
              <p className="">{price1}</p>
            </div>
          </div>
          <div className="text-para grid-cols-2 -mt-2 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2">
              <p>GST {gst} % </p>
              <p className="">{calculatedPrizeOfGst}</p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          {/* inject your code for mobile device */}
          <div className=' xl:hidden'>
                                    <div className="mt-4">
                                       <p>Table Data is here</p>
                                        <table className="min-w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                                            <thead className="bg-black text-white">
                                                <tr>
                                                    {columns.map((col, index) => (
                                                        <th key={index} className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">
                                                            {col}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className=" border">
                                                {submittedData.map((row, rowIndex) => (
                                                    <tr key={rowIndex}>
                                                        {columns.map((col, colIndex) => (
                                                            <td key={colIndex} className="border-y-2 border-x-2 overflow-hidden  border-gray-300 px-3 py-1 whitespace-nowrap">
                                                                {row[col]}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <hr />
          <div className="xl:hidden">
            <div className="ml-2">
              <p className="font-semibold text-lg mb-2 mt-1 text-graytext">
                About us
              </p>

              <p
                className="text-para px-3"
                dangerouslySetInnerHTML={{
                  __html: addPackage?.about,
                }}
              ></p>
            </div>

            <div>
              <h5 className="text-lg ml-2 font-semibold my-2 text-graytext">
                Highlights
              </h5>
              <div>
                {addPackage?.highlights?.map((highlight) => (
                  <ol key={highlight._id} className="list-disc   ">
                    <li className="px-3 text-para">{highlight.text}</li>
                  </ol>
                ))}
              </div>
            </div>
          </div>
          <div className="text-para  grid-cols-2 hidden xl:grid">
            <div></div>
            <div className="grid grid-cols-2 gap-1">
              <p>Grand Total</p>
              <p className="font-semibold text-graytext">{grandTotal}</p>
            </div>
          </div>
          <div className=" justify-center gap-10 my-3 hidden xl:flex">
            <label className=" inline-flex items-center">
              <input
                type="radio"
                className=" form-radio text-primary"
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext">Pay 25% Now</p>
            </label>

            <label className=" inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-primary hidden xl:block"
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext hidden xl:block">
                Pay Full Online
              </p>
            </label>
          </div>
          <div className=" gap-3 justify-center  hidden xl:flex">
            {
              <button
                onClick={handleSubmit}
                className={`border px-5 py-2 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                    ? "bg-primary"
                    : "bg-orange-200"
                  } text-center text-para`}
              >
                Book now
              </button>
            }

            {fixedDeparturePopupOpen && (
              <FixedDeparturePopup
                togglePopup={togglePopup}
                addPackage={addPackage}
              />
            )}
            <CustomiseTour>
              <button className=" border-primary w-full border text-primary flex-flow  flex justify-center px-5 py-2 text-para rounded-md">
                Customise
              </button>
            </CustomiseTour>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItinaryFixedDepartureCard;
