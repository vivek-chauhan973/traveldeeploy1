import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const IoMdArrowDropdown = dynamic(() =>
  import("react-icons/io").then((mod) => mod.IoMdArrowDropdown)
);
import Image from "next/image";
import { useAppContext } from "./admin/context/Package/AddGuest";

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const SearchPageTopSeoContent = ({ state, promoData, priorityPackage }) => {
  const { setLocationId,setSelectedId } = useAppContext();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setLocationId(state?._id);
    setSelectedId(state?._id||null)
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
            className=" top-0 left-0 w-full   object-cover object-center h-[450px]"
            src={promoData?.image}
            alt=""
            width={100}
            height={100}
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
       
          <div className="box-Shadow-Style-Package  justify-end  gap-3  absolute z-10 w-full  py-5  bottom-0 ">
            <h1 className="absolute uppercase font-bold xl:text-[38px] md:text-[32px] text-xl italic md:bottom-5 bottom-2 xl:right-16 md:right-5 right-4 text-white">{state?.name||"Speciality"}{" Tour Packages"}</h1>
          </div>
      </div>
      <div className="container-wrapper py-5 ">
        <div className="grid md:grid-cols-[1.8fr,1.2fr] ">
          <div className="text-wrap">
            <h4 className="md:text-xl text-md font-medium mb-2 capitalize">{state?.name||"Speciality"}{" Tour Packages"}</h4>
            <div className={`text-para  ${show ? "" : "line-clamp-3"}`}>
              <div className="about-margin" dangerouslySetInnerHTML={{ __html: promoData?.description }} ></div>
            </div>
          </div>

          <div className=''>
            {show && (
              <>
                {priorityPackage && priorityPackage.length > 0 ? (
                  <div className="table-container w-full m-auto mt-4">
                    <table className="w-full border-collapse border text-center text-para">
                      <thead>
                        <tr className="border-b bg-black text-white">
                          <th className="border-t border-l px-2 text-wrap font-semibold border-r w-40 ">
                            Name
                          </th>
                          <th className="border-t border-l px-2 text-wrap font-semibold w-2 border-r ">
                            Day/Night
                          </th>
                          <th className="border-t border-l px-2 text-wrap font-semibold border-r ">
                            Price
                          </th>
                          <th className="border-t border-l px-2 text-wrap font-semibold border-r border-b w-24 ">
                            Visit
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {priorityPackage.map((item, index) => (
                          <tr key={index}>
                            <td className="border-t border-l text-left border-r px-2 py-2 border-b capitalize">
                              {item.name}
                            </td>
                            <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                              {item.days}
                            </td>
                            <td className="border-t border-l border-r px-2 py-2 border-b font-semibold capitalize">
                              {item?.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </td>
                            <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                              <a
                                href={"/package/" + item.pageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-800 hover:underline md:block hidden"
                              >
                                View Details
                              </a>
                              <a
                                href={"/package/" + item.pageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-800 hover:underline md:hidden block"
                              >
                                View
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
          </div>
        </div>

        <div className="flex justify-end items-center mt-2">
          <div className="inline-flex items-center justify-center md:px-2 px-1.5 md:py-1 py-0.5 bg-navyblack rounded shadow-sm text-white cursor-pointer">
            <button className="text-xs  flex-shrink-0" onClick={handleToggle}>
              {show ? "Read less" : "Read more"}
            </button>
            <span className="flex items-center justify-center">
              <IoMdArrowDropdown
                className={`transition-transform text-xs ${show ? "rotate-180" : ""
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
