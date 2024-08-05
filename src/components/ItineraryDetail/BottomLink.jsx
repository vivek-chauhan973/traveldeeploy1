import "../../app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const BottomLink = ({ locationId }) => {
  console.log("location in bottom link", locationId?._id);
  const locationIds = locationId?._id;
  const [bottomLinkData, setBottomLinkData] = useState(null);
  console.log("location down in bottom link", bottomLinkData);

  const fetchPromoManagementData = async () => {
    if (!locationIds) return;
    try {
      const response = await fetch(
        `/api/public/package-list?locationId=${locationIds}`
      );
      const data = await response.json();
      setBottomLinkData(data.packages); // Store the fetched data
      console.log("bottom fetching data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPromoManagementData();
  }, [locationIds]);

  return (
    <div className="bg-slate-100 py-8">
      <div className="container-wrapper">
        <p className="text-para font-semibold">Manali Package</p>
        <div className="text-[13px] flex gap-2 flex-wrap mt-3">
          {bottomLinkData ? (
            bottomLinkData?.map((item, index) => (
              <Link
                href={"/package/" + item.pageUrl}
                className="hover:text-primary cursor-pointer text-slate-500 outline rounded-sm px-[5px] md:outline-1 "
                type="button"
              >
                {item.name}
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomLink;
