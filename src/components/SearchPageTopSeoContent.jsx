import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const IoMdArrowDropdown = dynamic(() => import('react-icons/io').then((mod) => mod.IoMdArrowDropdown));
import Image from 'next/image'
import { useAppContext } from "./admin/context/Package/AddGuest";
const stripHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

import {DownArrow} from "@/components/icons/index"
// React component to display the inner text of HTML
const SearchPageTopSeoContent = ({ state, promoData }) => {
  const { setLocationId } = useAppContext();
  const [show, setShow] = useState(false)
  useEffect(() => {
    setLocationId(state?._id)
    // }, [state]);
  }, [state?._id, setLocationId]);

  const [active, setActive] = useState(true)


  const handleToggle = () => {
    setShow(!show);
  }

  // for fade
  const fade = () => {
    setActive(!active);
  }


  return (

    <div className="mb-10">
      <div className="relative w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={promoData?.image ? promoData?.image : "/logo.png"}
          alt=""
          width={100} height={100}
        />
      </div>
      <div className="container-wrapper py-5">
        <p className="text-lg mb-2 font-medium">{state?.name}</p>
        <div className={`text-para ${show ? "" : "line-clamp-3 "}`} >

          <div dangerouslySetInnerHTML={{ __html: promoData?.description }} />

        </div>
        <div className={` ${active ? 'bg-gradient-to-t -mt-7  from-white opacity-100 w-full  h-10 -top-2 z-30" ' : null}`}></div>
        <div className="flex gap-2 items-center  justify-end" onClick={fade}
        >
          <p className="text-right text-para text-blue cursor-pointer " onClick={handleToggle}>
            {show ? "Read less" : "Read more"}
          </p>

          <div className={`text-blue  transition-transform  ${show ? 'rotate-180' : ''} cursor-pointer`} onClick={handleToggle}>
            <DownArrow/>
          </div>

        </div>

        {/* <div className=" bg-gradient-to-t from-white opacity-100 w-full  h-10  z-20" onClick={fade}></div> */}
        {/* <div  className={` ${active ? 'bg-gradient-to-t from-white opacity-100 w-full  h-10 -top-2 z-30" ' :null}`}></div> */}
      </div>

      <hr className="container-wrapper border-slate-300" />
    </div>
  );
};

export default SearchPageTopSeoContent;
