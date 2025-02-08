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
  // console.log("items=>=========",item)
  const [packageList, setPackageList] = useState([]);
  useEffect(() => {
    fetchAllPackagesAccordingToStateId(item?.relatedId).then(res => setPackageList(res?.packages))
  }, [item])
  // console.log("res123 ------> ", packageList) 
  // console.log("resID ------> ", item?.selectedItem?.toLowerCase()?.split(" ")?.join("-")) 

  const data=item?.selectedItem?.toLowerCase()?.split(" ")?.join("-");
  return (
    <Link href={`/india/${data}-tour-packages`}>
      <div className="shadow-lg w-[320px] h-24 border gap-5 m-2 flex items-center rounded-md shrink-0">
        <div className="h-full">
          <Image className="object-cover rounded-l h-full" width={110} height={110}
            src={item?.posterPath}
            alt="" />
        </div>
        <div>
          <p className="text-[12px]">Tour Package from</p>
          <p className="text-[16px] font-semibold">{item?.selectedItem}</p>
          <p className="text-[10px]">{packageList?.length} tours</p>
        </div>
      </div>
    </Link>
  )
}

export default HorizontalCard








// width={150} height={20}
//w-20 h-16
// height={100} width={100}