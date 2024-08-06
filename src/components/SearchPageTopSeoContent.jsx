import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const IoMdArrowDropdown = dynamic(() => import('react-icons/io').then((mod) => mod.IoMdArrowDropdown));
import Image from 'next/image';
import { useAppContext } from "./admin/context/Package/AddGuest";
import { DownArrow } from "@/components/icons/index";

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const SearchPageTopSeoContent = ({ state, promoData }) => {
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
          width={100} height={100}
        />
      </div>
      <div className="container-wrapper py-5">
        <p className="text-lg font-medium mb-2 capitalize">{state?.name}</p>
        <div className={`text-para  ${show ? "" : "line-clamp-3"}`}>
          <div dangerouslySetInnerHTML={{ __html: promoData?.description }} />
        </div>

        {show && (
          <div className="table-container mt-4">
            <table className="w-full border-collapse border text-center text-para">
              <thead>
                <tr className="border-b bg-black text-white">
                  <th className="border-t border-l border-r font-light">Sightseeing Places</th>
                  <th className="border-t border-l border-r font-light">Sedan</th>
                  <th className="border-t border-l border-r font-light">Innova/Innova Crysta</th>
                  <th className="border-t border-l border-r border-b w-36 font-light">Tempo Traveler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
                <tr>
                  <td className="border-t border-l border-r border-b">Mana Village</td>
                  <td className="border-t border-l border-r border-b">INR 1000</td>
                  <td className="border-t border-l border-r border-b">INR 1500</td>
                  <td className="border-t border-l border-r border-b">INR 2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-end items-center mt-2">
          <div className="inline-flex items-center justify-center px-1.5  py-0.5 bg-navyblack rounded shadow-sm text-white cursor-pointer">
            <button className="text-xxs flex-shrink-0" onClick={handleToggle}>
              {show ? "Read less" : "Read more"}
            </button>
            <span className="flex items-center justify-center">
              <IoMdArrowDropdown
                className={`transition-transform text-xs ${show ? 'rotate-180' : ''}`}
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


