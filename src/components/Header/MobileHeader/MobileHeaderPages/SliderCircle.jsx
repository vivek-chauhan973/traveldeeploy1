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
  useEffect(() => {
    if (destinationState?.length > 0) {
      setCityIdRightManagement(destinationState?.[0]?._id);
    }
  }, [destinationState])
  useEffect(() => {
    if (cityIdRightManagement) {
      fetchHeaderCities(cityIdRightManagement).then(res => { setCities(res?.data || []); })
    }
  }, [cityIdRightManagement])

  return (
    <div className="w-full h-[90vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className=" flex justify-between mt-3">
        <div className="flex items-center cursor-pointer" onClick={() => setOpenClose(false)}>
          <div className="mt-2 mr-1 rotate-90">
            <DownArrow />
          </div>
          <p className=" font-semibold text-md">Destintion</p>
        </div>
        <div>
          <Link onClick={() => setOpenClose(false)} href="/india" className="underline font-bold text-para text-blue-600">
            View All Tours
          </Link>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden " />
      {/*  after circle image*/}
      <div className="flex flex-col">
        {destinationState?.map((item, i) => {
          return <div key={i} className={`${item?._id === cityIdRightManagement ? " bg-slate-100 px-2 pb-2" : "px-2 pb-2"}`}>
            <div className="flex justify-between my-3 pr-1"
              onClick={() => setCityIdRightManagement(item?._id)}
            >
              <p className="text-md cursor-pointer">{item?.name}</p>
              <span className="cursor-pointer">
                {item?._id === cityIdRightManagement ? 
                <FontAwesomeIcon icon={faAngleDown} /> 
                : 
                <FontAwesomeIcon icon={faAngleRight} 
                onClick={() => setCityIdRightManagement(item?._id)} 
                />}
              </span>
            </div>
            {item?._id === cityIdRightManagement && 
            <CityCard cities={cities} setOpenClose={setOpenClose} />}
          </div>
        })}

      </div>
    </div>
  );
};

export default SliderCircle;

