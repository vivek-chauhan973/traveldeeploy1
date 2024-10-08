import { useEffect, useState } from "react";
import "../../../app/globals.css";
import Image from 'next/image'
import Link from "next/link";
const fetchAllPackagesAccordingToStateId = async (locationId) => {
  const response = await fetch(
    `/api/public/tour-packages?locationId=${locationId}`,
    { method: "GET" }
  );
  return await response.json();
}
const HorizontalCard = ({ item }) => {
  const [packageList, setPackageList] = useState([]);
  useEffect(() => {
    fetchAllPackagesAccordingToStateId(item?._id).then(res => setPackageList(res?.packages))
  }, [item])
  console.log("res123 ------> ", item)
  return (
    <a href={`/india/${item?.pageUrl}`}>
      <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
        <div className=" h-full">
          {/* <Image className=" object-cover rounded-md" width={100} height={100}
            src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" /> */}
          <Image className="object-cover rounded-l" width={110} height={100}
            src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" />
        </div>
        <div>
          <p className="text-[12px]">Tour Package from</p>
          <p className="text-[16px] font-semibold">{item?.name}</p>
          <p className="text-[10px]">{packageList?.length} tours</p>
        </div>
      </div>
    </a>
  )
}

export default HorizontalCard








// width={150} height={20}
//w-20 h-16
// height={100} width={100}