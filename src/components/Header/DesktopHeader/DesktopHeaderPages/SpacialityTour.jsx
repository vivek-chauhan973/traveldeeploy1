import React, { useEffect, useState } from 'react'
const fetchCatagories=async ()=>{
  const categoriesList = await fetch('/api/package-setting/category/get-categories');
  return await categoriesList.json();
}
const fetchPopularCities=async ()=>{
  const res=await fetch("/api/homefooter");
  return await res.json();
}
const SpacialityTour = () => {
  const [categories,setCatagories]=useState([]);
  useEffect(()=>{
    fetchCatagories().then(res=>setCatagories(res?.data||[]));
  },[])
  const [popularCatogories,setPopularCatagories]=useState([]);
useEffect(()=>{
  fetchPopularCities().then(res=>{;setPopularCatagories(res?.data||[])});
},[])
const data=popularCatogories?.filter(item=>item.category==="category6");
console.log("catories is here",data?.[0]?.options);
  // console.log("categories-----> ",categories?.length);
  return (
    <div className=" flex ml-52 flex-col min-w-[700px] h-full rounded-[15px] bg-gray-100  mt-4" >
      <div className='ml-5  mt-4 h-32 object-contain'>
        <h4 className=' font-semibold w-full text-lg'>POPULAR & AVAILABLE TOURS</h4>
       
      </div>
      <div className='ml-5  h-[150px]  object-contain'>
        <h4 className=' font-semibold w-full text-lg '>UPCOMING TOURS</h4>
        <div className=" grid grid-cols-3 grid-rows-3  " >
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>

          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>
          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default SpacialityTour