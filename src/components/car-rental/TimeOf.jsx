import React, { useEffect, useState } from 'react'
const fetchLimitedTime1=async ()=>{
    const res=await fetch("/api/cars/package/terms-condition/LimitedTime/get");
    const data=await res.json();
    return data;
}
const fetchFlexibleTime1=async ()=>{
    const res=await fetch("/api/cars/package/terms-condition/FlexibleTime/get");
    const data=await res.json();
    return data;
}
const TimeOf = () => {
const [limitedTime,setLimitedTime]=useState([]);
const [flexibleTime,setFlexibleTime]=useState([]);
const [timeState,setTimeState]=useState("limited");
const [printedData,setPrintedData]=useState([]);

useEffect(()=>{
    fetchLimitedTime1().then(res=>{setLimitedTime(res?.CancellationGroupData||[]);setPrintedData(res?.CancellationGroupData||[])});
    fetchFlexibleTime1().then(res=>setFlexibleTime(res?.CancellationGroupData||[]));
},[])
useEffect(()=>{
    if(timeState==="limited"){
        setPrintedData(limitedTime)
    }
    else if(timeState==="flexible"){
        setPrintedData(flexibleTime)
    }
},[timeState])

  return (
    <div className='flex flex-col'>
        <div className=' flex gap-3 w-80'>
        <div className=' bg-slate-200 rounded-lg hover:bg-black hover:text-white'><button onClick={()=>setTimeState("limited")} className='px-4 py-2'>Limited Time</button></div>
        <div className=' bg-slate-200 rounded-lg hover:bg-black hover:text-white'><button onClick={()=>setTimeState("flexible")} className='px-4 py-2'>Flexible Time</button></div> 
     </div>
     <div className='flex gap-3 flex-wrap w-80'>
        {printedData?.map((item,i)=><div key={i} className=' bg-slate-200 rounded-lg hover:bg-black hover:text-white'><p  className='px-4 py-2'>{item?.groupName}</p></div>)}  
     </div>
    </div>
  )
}

export default TimeOf