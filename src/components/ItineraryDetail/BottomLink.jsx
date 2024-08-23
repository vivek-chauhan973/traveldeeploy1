import "../../app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const BottomLink = ({ locationId ,addPackage}) => {
  
  const selectedCategories=addPackage?.category?.map(item => item._id).join(',');
  // console.log("location in bottom link------------===============", selectedCategories);
  const locationIds = locationId?._id;
  const [bottomLinkData, setBottomLinkData] = useState(null);
  // console.log("=-0a=s-0df=s-0df=sa0dfas0= down in bottom link", bottomLinkData);

  const fetchPromoManagementData = async () => {
    if (!locationIds) return;
    // `/api/public/package-list?locationId=${locationIds}`
    try {
      const response = await fetch(
        `/api/public/filter-state-category?locationId=${locationIds}&categoryId=66baeb9660c5e33b13ee6f26,66bb31f67de371e77413ba4d,66bb320e7de371e77413ba50`
      );
      const data = await response.json();
      // console.log("data in bottom link-------", data);
      setBottomLinkData(data.packages); // Store the fetched data
      // console.log("bottom fetching data:", data);
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
        <p className="text-para font-semibold capitalize">Related Category</p>

        <div className="text-[13px] flex gap-2 flex-wrap mt-3">
          {bottomLinkData ? (
            bottomLinkData?.map((item, index) => (
              <Link key={index}
                href={"/package/" + item.pageUrl}
                className="hover:text-primary capitalize cursor-pointer text-slate-500 outline rounded-sm px-[5px] md:outline-1 "
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
