import React, { useEffect, useState } from "react";
import {
RoadIcon,DownArrow 
} from "@/components/icons/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const fetchCatagories = async () => {
  const categoriesList = await fetch('/api/package-setting/category/get-categories');
  return await categoriesList.json();
}
const fetchPopularCities = async () => {
  const res = await fetch("/api/homefooter");
  return await res.json();
}

const Speciality = ({ setOpenClose }) => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetchCatagories().then(res => setCatagories(res?.data || []));
  }, [])
  const [popularCatogories, setPopularCatagories] = useState([]);
  useEffect(() => {
    fetchPopularCities().then(res => {setPopularCatagories(res?.data || []) });
  }, [])
  const data = popularCatogories?.filter(item => item.category === "category6");
  return (
    <div className="flex h-[90vh] flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className="flex justify-between mt-3">
        <div className="flex items-center cursor-pointer " onClick={() => setOpenClose(false)}>
          <div className="rotate-90 mt-2 mr-1">
            <DownArrow />
          </div>
          <h5 className="font-semibold text-md">Speciality Tours</h5>
        </div>
        <div>
          <Link onClick={() => setOpenClose(false)} href="/india" className="underline font-bold text-para text-blue-600">
            View All Tours
          </Link>
        </div>
      </div>
      <hr className="border-b mt-3 border-gray-400 w-90 overflow-hidden" />
      <div className="px-1">
        <div className="flex mt-1 gap-1">
          <h4 className="text-blue-600 text-md font-bold">
          POPULAR & AVAILABLE TOURS
          </h4>
        </div>
        <div className=" flex flex-col pt-2" >
            {categories?.map((item, i) =>
              <Link
                href={`/speciality-tours/` + item.category + '-tour-packages'}
                key={i} className='text-para font-semibold mb-2 mx-2'
              >
                {item?.category}
              </Link>
            )}
        </div>

        <div className="mt-6 flex gap-3 px-1">
          <h4 className="text-blue-600 text-md font-bold">
          Replace by Famous Tourist Attraction
          </h4>
        </div>
        <div className="flex flex-col pt-2" >
            {data?.[0]?.options.map((item, i) =>
              <Link
                href={`/india/` + item?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2 mx-2'
              >
                {item?.selectedItem}
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default Speciality;
