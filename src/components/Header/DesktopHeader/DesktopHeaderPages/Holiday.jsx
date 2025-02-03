import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";

// const fetchCategory = async () => {
//   const res = await fetch("/api/homefooter");
//   return await res.json();
// }
const Holiday = () => {

  // const [catogories, setCatagories] = useState([]);
  // useEffect(() => {
  //   fetchCategory().then(res => { ; setCatagories(res?.data || []) });
  // }, [])
  const {serverSideProps}=useCarPopupContext()
  
  const [catogories, setCatagories] = useState([]);
  useEffect(() => {
    if(serverSideProps){
      setCatagories(serverSideProps.multipost || [])
    }
  }, [serverSideProps])

  const data = catogories?.filter(item => item.category === "category3");
  console.log("catories is here", data?.[0]?.options)

  return (
    <div className="flex min-w-[400px] px-4 pb-3 h-auto bg-gray-100 mt-3 rounded-b-lg">
      <div className='ml-5 mt-7 object-contain'>
        <h4 className="text-md font-bold leading-5 text-[#29499A]">
          THEMED EXPERINCE -Find your reason!
        </h4>
        <div className="flex flex-col pt-2">
          {data?.[0]?.options?.map((item, i) =>
            <Link
              key={i} className='text-para font-semibold mb-2'
              href={'/speciality-tours/' + item.category + '-tour-packages'}
            >
                {item.category}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Holiday;