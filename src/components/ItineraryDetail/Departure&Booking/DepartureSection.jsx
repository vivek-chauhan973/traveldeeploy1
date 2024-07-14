import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
import { useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { MdCurrencyRupee } from "react-icons/md";
import { AllDataRelatedCity, city } from "./DepartureSectionData";
import DeparturePopup from "./DeparturePopup";

 const DepartureSection= ( )=> {

const {addPackage,setDepartureSectionData}=useAppContext();
const [datePackage,setDatePackage]=useState(0);
const [showPopup,setShowPopup]=useState(false);
// const [color,setColor]=useState(null);
  // console.log("highlight data show is here", addPackage);
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div className="">
            <div className="flex gap-3">
              <p className="text-base font-bold p-4 text-graytext">
                1. SELECT DEPARTURE CITY & DATE
              </p>
            </div>
            <hr />
            <div className="overflow-y-auto ">
              <div className="flex gap-3 py-4">
                {city.map((item,i)=><div onClick={()=>setDatePackage(i)} className="font-semibold text-sm hover:bg-green-300 hover:text-white cursor-pointer border rounded-full py-2 px-3.5" key={i}>
                  <span></span>{item}
                </div>)}
              </div>

              {/* select departure city */}
              <div className=" relative gap-4  py-4">
                <h1>All Departure date({AllDataRelatedCity[datePackage].length})</h1>
                {showPopup&&<DeparturePopup setShowPopup={setShowPopup} />}
                <div className="flex my-2">
                {AllDataRelatedCity[datePackage].map((item,i)=><div key={i} onClick={()=>{setShowPopup(true);setDepartureSectionData(item)}} className="ml-2 cursor-pointer" >
                  <div className=" border-2 w-20 h-24 rounded-md">
                    <p className="text-center">{item.day}</p>
                    <hr />
                    <p className="text-center">{item.date}</p>
                    <hr />
                    <div className="flex justify-center pt-3"><MdCurrencyRupee/> <p>{item.price}</p></div>
                  </div>
                </div>)}
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-base mb-2 mt-1 text-graytext">
                    About us
                  </p>

                  <p
                    className="text-para"
                    dangerouslySetInnerHTML={{
                      __html: addPackage?.about,
                    }}
                  ></p>
                </div>

                <div>
                  <p className="text-md ml-2 font-semibold my-2 text-graytext">
                    Highlights
                  </p>
                  <div>
                    {addPackage?.highlights?.map((highlight) => (
                      <ol key={highlight._id} className="list-disc   ">
                        <li className="ml-10 text-para">{highlight.text}</li>
                      </ol>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 bg-white my-1">
            <p className="text-para">
              View itinerary for the tours you have booked by logging into your
              account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DepartureSection