import React, { useState } from "react";
import { data1, stateData } from "./Data";
const Show = () => {
  const [change, setChange] = useState(0);
  // data1.map(item=>console.log(item.state));
  // console.log(stateData);
  return (
    <div className="w-[1100px] h-full bg-white mt-3 rounded-b-lg">
      <div className="border-b py-1.5 pl-5">
        <h2 className="text-base font-semibold text-[#595959] capitalize">Top Recommended Destinations</h2>
      </div>
      <div className="flex bg-gray-100 rounded-b-lg">
        <div className=" text-sm font-bold w-2/5 rounded-l-lg gap-x-6 bg-white rounded-bl-lg">
          <div className="cursor-pointer grid gap-1 grid-cols-1 ">
            {stateData.map((item, i) => (
              <h4
                key={i}
                className="font-medium text-base px-5 hover:py-3 py-3 hover:bg-gray-100 hover:rounded-sm"
                onMouseEnter={() => setChange(i)}
              >
                {item}
              </h4>

            ))}
          </div>
        </div>
        <div className="ml-4 px-4 pt-6 h-[500px] w-full grid grid-cols-3 grid-rows-3 gap-7 ">
          <div className="">
            <h4 className="font-semibold text-base mb-1">{data1[change].state}</h4>
            <p className='text-para mb-1'>Chandratal</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Kaza</p>
            <p className='text-para mb-1'>Manali</p>
            <p className='text-para mb-1'>shimla</p>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">{data1[change].state1}</h4>
            <p className='text-para mb-1'>Chandratal</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Kaza</p>
            <p className='text-para mb-1'>Manali</p>
            <p className='text-para mb-1'>shimla</p>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">{data1[change].state2}</h4>
            <p className='text-para mb-1'>Chandratal....</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Kaza</p>
            <p className='text-para mb-1'>Manali</p>
            <p className='text-para mb-1'>shimla</p>
          </div>
          <div className="mt-7">
            <h4 className="font-medium text-base mb-1">{data1[change].state3}</h4>
            <p className='text-para mb-1'>Chandratal</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Kaza</p>
            <p className='text-para mb-1'>Manali</p>
            <p className='text-para mb-1'>shimla</p>
          </div>
          <div className="mt-7">
            <h4 className="font-medium text-base mb-1">{data1[change].state4}</h4>
            <p className='text-para mb-1'>Chandratal</p>
            <p className='text-para mb-1'>Dalhouse</p>
            <p className='text-para mb-1'>Kaza</p>
            <p className='text-para mb-1'>Manali</p>
            <p className='text-para mb-1'>shimla</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
