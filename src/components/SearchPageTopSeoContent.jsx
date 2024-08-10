import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const IoMdArrowDropdown = dynamic(() =>
  import("react-icons/io").then((mod) => mod.IoMdArrowDropdown)
);
import Image from "next/image";
import { useAppContext } from "./admin/context/Package/AddGuest";
import { DownArrow } from "@/components/icons/index";

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const SearchPageTopSeoContent = ({ state, promoData, priorityPackage }) => {
  const { setLocationId } = useAppContext();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setLocationId(state?._id);
  }, [state?._id, setLocationId]);

  const handleToggle = () => {
    setShow(!show);
  };

  const fade = () => {
    setActive(!active);
  };

  return (
    <div className="mb-6">
      <div className="relative w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={promoData?.image ? promoData?.image : "/logo.png"}
          alt=""
          width={100}
          height={100}
          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
        />
        
      </div>
      <div className="container-wrapper py-5">
        <h4 className="text-xl font-medium mb-2 capitalize">{state?.name}</h4>
        <div className={`text-para  ${show ? "" : "line-clamp-3"}`}>
          <p dangerouslySetInnerHTML={{ __html: promoData?.description }} />
        </div>
        {show && (
          <>

          {priorityPackage && priorityPackage.length > 0 ? (
            <div className="table-container w-full md:w-2/3 m-auto mt-4">
              <table className="w-full border-collapse border text-center text-para">
                <thead>
                  <tr className="border-b bg-black text-white">
                    <th className="border-t border-l border-r font-light">
                      Name
                    </th>
                    <th className="border-t border-l border-r font-light">
                      Day/Night
                    </th>
                    <th className="border-t border-l border-r font-light">
                      Price
                    </th>
                    <th className="border-t border-l border-r border-b w-36 font-light">
                      Visit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {priorityPackage.map((item, index) => (
                    <tr key={index}>
                      <td className="border-t border-l border-r border-b capitalize">
                        {item.name} aman kharwar
                      </td>
                      <td className="border-t border-l border-r border-b capitalize">
                        {item.days}
                      </td>
                      <td className="border-t border-l border-r border-b font-semibold capitalize">
                        ₹{item?.price.toLocaleString()}
                      </td>
                      <td className="border-t border-l border-r border-b capitalize">
                        <a
                          href={"/package/" + item.pageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:underline"
                        >
                          View Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          </>

        )}


        <div className="flex justify-end items-center mt-2">
          <div className="inline-flex items-center justify-center px-1.5  py-0.5 bg-navyblack rounded shadow-sm text-white cursor-pointer">
            <button className="text-xxs flex-shrink-0" onClick={handleToggle}>
              {show ? "Read less" : "Read more"}
            </button>
            <span className="flex items-center justify-center">
              <IoMdArrowDropdown
                className={`transition-transform text-xs ${
                  show ? "rotate-180" : ""
                }`}
                onClick={handleToggle}
              />
            </span>
          </div>
        </div>
      </div>
      <div>
        <hr className="container-wrapper border-slate-300" />
      </div>
    </div>
  );
};

export default SearchPageTopSeoContent;
