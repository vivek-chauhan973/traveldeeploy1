import React,{useState} from "react"
import { data1, stateData } from "./Data";
const Show = () => {
  const [change,setChange]=useState(0);
  // data1.map(item=>console.log(item.state));
  console.log(stateData)
  return (
    <div className=" flex w-[1000px] h-full bg-gray-100 ml-52 mt-5" >
      <div className="mt-2 text-sm  font-bold w-1/4 gap-x-6 bg-white ">
        <div className="cursor-pointer grid gap-4 grid-cols-1 ">
         {stateData.map((item,i)=> <h2 key={i} className=' pl-2 hover:bg-gray-100 hover:p-2 hover:rounded-sm'
          onMouseEnter={() => setChange(i)}
           >
           {item}
           
          </h2>)}
        </div>
      </div>
     <div className="ml-2 p-2 h-96 w-full grid grid-cols-3 grid-rows-3  ">   
        <div>
          <h1 className="font-medium">{data1[change].state}</h1>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div>
          <h1 className="font-medium">{data1[change].state1}</h1>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div>
          <h1 className="font-medium">{data1[change].state2}</h1>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div className="mt-7">
          <h1 className="font-medium">{data1[change].state3}</h1>
          <p>Chandratal</p>
          <p>Dalhouse</p>
          <p>Kaza</p>
          <p>Manali</p>
          <p>shimla</p>
        </div>
        <div className="mt-7">
          <h1 className="font-medium">{data1[change].state4}</h1>
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
