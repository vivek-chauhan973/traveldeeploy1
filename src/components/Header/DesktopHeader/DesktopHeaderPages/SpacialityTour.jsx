import React, { useEffect, useState } from 'react'

const fetchCatagories = async () => {
  const categoriesList = await fetch('/api/package-setting/category/get-categories');
  return await categoriesList.json();
}
const fetchPopularCities = async () => {
  const res = await fetch("/api/homefooter");
  return await res.json();
}
const SpacialityTour = () => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetchCatagories().then(res => setCatagories(res?.data || []));
  }, [])
  const [popularCatogories, setPopularCatagories] = useState([]);
  useEffect(() => {
    fetchPopularCities().then(res => { ; setPopularCatagories(res?.data || []) });
  }, [])
  const data = popularCatogories?.filter(item => item.category === "category6");
  // console.log("catories is here",data?.[0]?.options);
  const partSize = Math.floor(categories.length / 3);
  // Split the array into three parts
  const part1 = categories.slice(0, partSize);
  const part2 = categories.slice(partSize, partSize * 2);
  const part3 = categories.slice(partSize * 2);
  const partPopularSize = Math.floor(data?.[0]?.options?.length / 3);
  // Split the array into three parts
  const papularPart1 = data?.[0]?.options?.slice(0, partSize);
  const papularPart2 = data?.[0]?.options?.slice(partSize, partSize * 2);
  const papularPart3 = data?.[0]?.options?.slice(partSize * 2);
  console.log("categories-----> ", categories);
  return (
    <div className="flex flex-col min-w-[700px] h-full rounded-b-lg bg-gray-100 mt-3" >
      <div className='ml-10 mt-7 h-36 object-contain'>
        <h4 className='font-bold text-md text-[#29499A]'>POPULAR & AVAILABLE TOURS</h4>
        <div className=" grid grid-cols-3 grid-rows-3 pt-2" >
          <div className='flex flex-col'>
            {part1?.map((item, i) =>
              <a
                href={`/speciality-tours/` + item.category + '-tour-packages'}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.category}
              </a>
            )}
          </div>
          <div className='flex flex-col'>
            {part2?.map((item, i) => <a href={`/speciality-tours/` + item.category + '-tour-packages'} key={i}>{item?.category}</a>
            )}
          </div>
          <div className='flex flex-col'>
            {part3?.map((item, i) =>
              <a
                href={`/speciality-tours/` + item.category + '-tour-packages'}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.category}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='ml-10 h-[200px] object-contain'>
        <h4 className='font-bold w-full text-md text-[#29499A] uppercase'>Replace by Famous Tourist Attraction</h4>
        <div className=" grid grid-cols-3 grid-rows-3 pt-2" >
          <div className='flex flex-col'>
            {papularPart1?.map((item, i) =>
              <a
                href={`/india/` + item?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.name}
              </a>
            )}
          </div>
          <div className='flex flex-col'>
            {papularPart2?.map((item, i) =>
              <a
                href={`/india/` + item?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.name}
              </a>
            )}
          </div>
          <div className='flex flex-col'>
            {papularPart3?.map((item, i) =>
              <a
                href={`/india/` + item?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2'
              >
                {item?.name}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpacialityTour