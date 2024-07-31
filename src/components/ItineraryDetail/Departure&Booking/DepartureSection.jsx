import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
import { useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { MdCurrencyRupee } from "react-icons/md";
import { AllDataRelatedCity, city } from "./DepartureSectionData";
import DeparturePopup from "./DeparturePopup";

 const DepartureSection= ( {addPackage})=> {

const {setDepartureSectionData}=useAppContext();
const [datePackage,setDatePackage]=useState(0);
const [showPopup,setShowPopup]=useState(false);
// const [color,setColor]=useState(null);
  // console.log("highlight data show is here", addPackage);
  // =====================changes===============================
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div className="">
            <div className="flex gap-3  ">
              <p className="text-base font-semibold p-4 text-graytext">
                1. SELECT DEPARTURE CITY & DATE
              </p>
            </div>
            <hr/>
            <div className="overflow-y-auto ">
              <div className="flex flex-wrap gap-3 py-4">
                {city.map((item,i)=><div onClick={()=>setDatePackage(i)} 
                  className="flex justify-center items-center font-semibold text-sm hover:bg-green-300 hover:text-white cursor-pointer border rounded-full ml-2 py-2  px-3 " key={i}>
                  <span></span>{item}
                </div>)}
              </div>

              {/* select departure city */}
              <div className=" relative gap-4  py-4 ">
                <h1 className=" font-semibold text-base ml-2 mb-2">All Departure date({AllDataRelatedCity[datePackage].length})</h1>
                {showPopup&&<DeparturePopup setShowPopup={setShowPopup} addPackage={addPackage} />}
                <div className="flex my-2 gap-3 flex-wrap ml-5">
                  {AllDataRelatedCity[datePackage].map((item,i)=><div key={i} onClick={()=>{setShowPopup(true);setDepartureSectionData(item)}} className=" cursor-pointer" >
                    <div className=" border-2 w-20 h-20 rounded-md">
                      <p className="text-center text-para">{item.day}</p>
                      <hr />
                      <p className="text-center text-sm">{item.date}</p>
                      <hr />
                      <div className="flex justify-center items-center mt-1 text-sm"><MdCurrencyRupee/> <p>{item.price}</p></div>
                    </div>
                  </div>)}
                </div>
                <div className="ml-2 my-4">
                  <p className="font-semibold text-base mb-2 text-graytext">
                    About us
                  </p>

                  <p
                    className="ml-5 mr-2 text-para"
                    dangerouslySetInnerHTML={{
                      __html: addPackage?.about,
                    }}
                  ></p>
                </div>

                <div className="my-4">
                  <p className="text-md ml-2 font-semibold mb-2 p-1 text-graytext">
                    Highlights
                  </p>
                  <div>
                  <hr />
                    {addPackage?.highlights?.map((highlight) => (
                      <ol key={highlight._id} className="list-disc  p-2 ">
                        <li className="ml-5 mr-2 text-para">{highlight.text}</li>
                      </ol>
                    ))}
                    {/* <div className= 'bg-gradient-to-t -mt-7  from-red-400 opacity-100 w-full  h-10 -top-2 z-30" ' ></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-0 bg-white my-1">
            <p className="text-para">
              View itinerary for the tours you have booked by logging into your
              account.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default DepartureSection