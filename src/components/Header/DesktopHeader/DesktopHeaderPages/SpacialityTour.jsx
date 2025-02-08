import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// const fetchCatagories = async () => {
//   const categoriesList = await fetch('/api/package-setting/category/get-categories');
//   return await categoriesList.json();
// }
// const fetchPopularCities = async () => {
//   const res = await fetch("/api/homefooter");
//   return await res.json();
// }
const SpacialityTour = () => {
  const [categories, setCatagories] = useState([]);
  const {serverSideProps}=useCarPopupContext()
  const [popularCatogories, setPopularCatagories] = useState([]);
  // useEffect(() => {
  //   fetchCatagories().then(res => setCatagories(res?.data || []));
  // }, [])
  // const [popularCatogories, setPopularCatagories] = useState([]);
  // useEffect(() => {
  //   fetchPopularCities().then(res => {setPopularCatagories(res?.data || []) });
  // }, [])

    useEffect(() => {
      if(serverSideProps){
        setPopularCatagories(serverSideProps?.multipost || [])
        setCatagories(serverSideProps?.category || [])

      }
    }, [serverSideProps])

  const data = popularCatogories?.filter(item => item.category === "category6");
  // console.log("Replace by Famous Tourist Attraction",data?.[0]?.options);
  
  return (
    <div className="flex flex-col min-w-[800px] h-full rounded-b-lg bg-gray-100 mt-3" >
      <div className='ml-10 mt-7 h-36 object-contain'>
        <h4 className='font-bold text-md text-[#29499A]'>POPULAR & AVAILABLE TOURS</h4>
        <div className=" grid grid-cols-4 pt-2" >
            {categories?.map((item, i) =>
              <Link
                href={`/speciality-tours/` + item.category + '-tour-packages'}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.category}
              </Link>
            )}
        </div>
      </div>
      <div className='ml-10 h-[200px] object-contain'>
        <h4 className='font-bold w-full text-md text-[#29499A] uppercase mb-2'>Replace by Famous Tourist Attraction</h4>
        <div className=" grid grid-cols-4 gap-x-10" >
            {data?.[0]?.options.map((item, i) =>
              <Link
                href={`/india/` + item?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.selectedItem}
              </Link>
            )}
        </div>
      </div>
    </div>
  )
}

export default SpacialityTour