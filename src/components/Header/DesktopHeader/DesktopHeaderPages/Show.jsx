import React, { useState } from "react"
import { data1, stateData } from "./Data";
const Show = () => {
  const [change, setChange] = useState(0);
  // data1.map(item=>console.log(item.state));
  console.log(stateData)
  return (
    <div className=" flex w-[1000px] ml-[340px] h-full bg-gray-100  mt-3 rounded-[15px]" >
      <div className="mt-2 text-sm  font-bold w-1/4 rounded-[15px] gap-x-6 bg-white ">
        <div className="cursor-pointer grid gap-4 grid-cols-1 p-3 ">
          {stateData.map((item, i) => <h4 key={i} className=' font-medium text-[15px] rounded-[15px] px-5 hover:px-5 hover:bg-gray-100  hover:p-2 hover:rounded-sm'
            onMouseEnter={() => setChange(i)}
          >
            {item}
          </h4>)}
        </div>
      </div>
      <div className="ml-2 p-4 h-96 w-full grid grid-cols-3 grid-rows-3  ">
        <div className="">
          <h4 className="">{data1[change].state}</h4>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div>
          <h4 className="font-medium text-base">{data1[change].state1}</h4>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div>
          <h4 className="font-medium text-base">{data1[change].state2}</h4>
          <p>Chandratal....</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div className="mt-7">
          <h4 className="font-medium text-base">{data1[change].state3}</h4>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div className="mt-7">
          <h4 className="font-medium text-base">{data1[change].state4}</h4>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
