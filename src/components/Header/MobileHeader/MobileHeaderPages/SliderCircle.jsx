
import React, { useEffect, useState } from "react";
const fetchDestinationSates = async () => {
  const data = await fetch("/api/home/destinationHeader");
  return await data.json();
}
const fetchHeaderCities = async (id) => {
  const data = await fetch(`/api/home/headerCity?id=${id}`);
  return await data.json();
}
import {
  DownArrow
} from "@/components/icons/index"
import CityCard from "./CityCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const SliderCircle = ({ setOpenClose }) => {
  const [destinationState, setDestinationState] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityIdRightManagement, setCityIdRightManagement] = useState(null);
  useEffect(() => {
    fetchDestinationSates().then(res => { setDestinationState(res?.data?.[0]?.options || []) })
  }, [])
  useEffect(()=>{
    if(destinationState?.length>0){
      setCityIdRightManagement(destinationState?.[0]?._id);
    }
  },[destinationState])
  useEffect(() => {
    if(cityIdRightManagement){
      fetchHeaderCities(cityIdRightManagement).then(res => { setCities(res?.data || []); })
    }   
  }, [cityIdRightManagement])
 
  return (
    <div className="w-full h-[90vh] px-1 sm:px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className=" flex justify-between mt-3">
        <div className=" flex  items-center cursor-pointer" onClick={() => setOpenClose(false)}>
          <div className=" mt-2 rotate-90">
            <DownArrow />
          </div>

          <p className=" font-semibold text-md">Destintion</p>
        </div>
        <div>
          <p className=" underline font-bold text-[15px] text-blue-600">View All Tours</p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden  " />

      {/* <div className=" sm:ml-3  ">
        <span className="text-sm font-normal mt-2 px-3">
          Top Recomonded Destination
        </span>
      </div> */}

      {/* <div className=" flex gap-7 py-2 px-3  mt-4 sm:p-3  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400">
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kashmir</span>
        </div>

        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kashmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">kashmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kshmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">Rajsthan</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold ml-2 text-wrap">Sikkim </span>
        </div>
        <div className="">
          <div className="w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold ml-3 text-wrap">Kerla</span>
        </div>
      </div> */}
      {/*  after circle image*/}
      <div className="flex flex-col">
        {destinationState?.map((item, i) => {
          return <div key={i} className={`${item?._id===cityIdRightManagement?" bg-slate-100":""}`}>
            <div className={` flex justify-between my-4 `}>
              <Link className=" text-md" href={`/india/` + item?.url + "-tour-packages"} onClick={()=>setOpenClose(false)}>{item?.name}</Link>
              <span className=" cursor-pointer">
                {item?._id===cityIdRightManagement?<FontAwesomeIcon icon={faAngleDown} />:<FontAwesomeIcon icon={faAngleRight} onClick={()=>setCityIdRightManagement(item?._id)}/>}
              </span>
            </div>
            {item?._id===cityIdRightManagement&&<CityCard cities={cities} setOpenClose={setOpenClose}/>}
          </div>
        })}

      </div>
    </div>
  );
};

export default SliderCircle;

