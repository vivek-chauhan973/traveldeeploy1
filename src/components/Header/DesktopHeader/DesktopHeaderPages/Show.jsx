import React, { useEffect, useState } from "react";
import { data1, stateData } from "./Data";
const fetchDestinationSates=async ()=>{
  const data = await fetch("/api/home/destinationHeader");
  return  await data.json();
}
const fetchHeaderCities=async (id)=>{
  const data=await fetch(`/api/home/headerCity?id=${id}`);
  return await data.json();
}
const Show = () => {
  const [change, setChange] = useState(0);
  const [destinationState,setDestinationState]=useState([]);
  const [changedState,setChangedState]=useState('');
  const [changedStateId,setChangedStateId]=useState('');
  const [cities,setCities]=useState([]);
  useEffect(()=>{
    fetchDestinationSates().then(res=>{setDestinationState(res?.data?.[0]?.options||[])})
  },[])

  useEffect(()=>{
    fetchHeaderCities(changedState[0]?._id).then(res=>{console.log('fetch state Cities here ----> ',res)})
  },[changedState])

  useEffect(()=>{
fetchHeaderCities(changedStateId).then(res=>{console.log('fetch state Cities here ----> ',res?.data);setCities(res?.data||[])})
  },[changedStateId])

  return (
    <div className="w-[1100px] h-full bg-white mt-3 rounded-b-lg">
      <div className="border-b py-1.5 pl-5">
        <h2 className="text-base font-semibold text-[#595959] capitalize">Top Recommended Destinations</h2>
      </div>
      <div className="flex bg-gray-100 rounded-b-lg">
        <div className=" text-sm font-bold w-2/5 rounded-l-lg gap-x-6 bg-white rounded-bl-lg">
          <div className="cursor-pointer grid gap-1 grid-cols-1 ">
            {destinationState.map((item, i) => (
              <h4
                key={i}
                className="font-medium text-base px-5 hover:py-3 py-3 hover:bg-gray-100 hover:rounded-sm"
                onMouseEnter={() => {setChangedState(item.name);setChangedStateId(item?._id)}}
              >
                {item.name}
              </h4>

            ))}
          </div>
        </div>
        <div className="ml-4 px-4 pt-6 h-[500px] w-full grid grid-cols-3 grid-rows-3 gap-7 ">
          <div className="">
            <h4 className="font-semibold text-base mb-1">{changedState}</h4>
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
