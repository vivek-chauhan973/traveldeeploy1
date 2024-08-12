import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import useMyCustomHook from "./DepartureSectionData";
import DeparturePopup from "./DeparturePopup";

 const DepartureSection= ( {addPackage})=> {

const {setDepartureSectionData}=useAppContext();
const [datePackage,setDatePackage]=useState(0);
const [showPopup,setShowPopup]=useState(false);
const [startCity,setStartCity]=useState([]);
const AllDataRelatedCity=useMyCustomHook();
useEffect(()=>{
  setStartCity(addPackage?.startcity)
  
},[addPackage])
useEffect(()=>{
  startCity?.unshift('All');
},[startCity])

console.log("data seo data :::  ::  ",addPackage)

// console.log("cities is here as given :: ",AllDataRelatedCity)
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
          <div>
            <div>
              <h4 className="font-semibold text-base p-3 text-graytext">
                1. SELECT DEPARTURE CITY & DATE
              </h4>
            </div>
            <hr/>
            <div className="overflow-y-auto ">
              <div className="flex flex-wrap gap-3 pt-4">
                {addPackage?.startcity?.map((item,i)=><div onClick={()=>setDatePackage(0)} 
                  className="flex justify-center items-center font-semibold text-sm hover:bg-green-300 hover:text-white cursor-pointer border rounded-full ml-2 py-2  px-3 " key={i}>
                  <span>{item}</span>
                </div>)}
              </div>

              {/* select departure city */}
              <div className=" relative gap-4  py-4 ">
                <h6 className=" font-semibold text-base ml-2 mb-3">All Departure date({AllDataRelatedCity?.[datePackage]?.length})</h6>
                {showPopup&&<DeparturePopup setShowPopup={setShowPopup} addPackage={addPackage} />}
                <div className="flex my-2 xl:gap-3 gap-5 flex-wrap ml-5">
                  {AllDataRelatedCity?.[datePackage]?.map((item,i)=><div key={i} onClick={()=>{setShowPopup(true);setDepartureSectionData(item)}} className=" cursor-pointer" >
                    <div className=" border-b-2 hover:bg-gray-300  text-white bg-gray-50 w-16 h-14 rounded-md overflow-hidden">
                      <p className="text-center text-xxs text-white group-hover:text-white  bg-navyblack">{item.day}</p>
                      <hr />
                      <p className="text-center text-black group-hover:text-white  text-xxs">{item.date}</p>
                      
                      <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">₹ <p>{item.price}</p></div>
                    </div>
                  </div>)}
                </div>
                <div className="table-container md:w-full w-2/3 m-auto mt-4">
              <table className="w-full border-collapse border text-center text-para">
                <thead>
                  <tr className="border-b bg-black text-white">
                    <th className="border-t border-l px-2 text-wrap font-semibold border-r w-40 ">
                      Name
                    </th>
                    <th className="border-t border-l px-2 text-wrap font-semibold w-2 border-r ">
                      Day/Night
                    </th>
                    <th className="border-t border-l px-2 text-wrap font-semibold border-r ">
                      Price
                    </th>
                    <th className="border-t border-l px-2 text-wrap font-semibold border-r border-b w-24 ">
                      Visit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  
                    <tr >
                      <td className="border-t border-l text-left border-r px-2 py-2 border-b capitalize">
                        {/* {item.name} aman khr */}
                      </td>
                      <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                        {/* {item.days} */}
                      </td>
                      <td className="border-t border-l border-r px-2 py-2 border-b font-semibold capitalize">
                        {/* ₹{item?.price.toLocaleString()} */}
                      </td>
                      <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                        <a
                          // href={"/package/" + item.pageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:underline"
                        >
                          View Details
                        </a>
                      </td>
                    </tr>
                
                </tbody>
              </table>
            </div>
            <hr />
                <div className="ml-2 my-4">
                  <h6 className="font-semibold text-base mb-2 text-graytext">
                    About us
                  </h6>

                  <p
                    className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                    dangerouslySetInnerHTML={{
                      __html: addPackage?.about,
                    }}
                  ></p>
                  
                </div>

              <hr />
                <div className="ml-2 mt-3">
                  <h6 className="text-md font-semibold mb-2 text-graytext">
                    Highlights
                  </h6>
                  <div>
                  <div>
                    {addPackage?.highlights?.map((highlight) => (
                      <ul key={highlight._id} className=" ml-3">
                        <li className="xl:ml-5 ml-2 mr-2 text-para">{highlight.text}</li>
                      </ul>                     
                    ))}
                    </div>
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