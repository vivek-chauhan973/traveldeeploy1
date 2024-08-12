import React, { useEffect, useState } from "react";

const Calender = ({ itinerary, setActiveTab }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priceIncrease, setPriceIncrease] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [svg,setSvg]=useState("");
  const [num,setNum]=useState(0);


//   console.log("itinary ::: ",itinerary)
  const handleSubmitNext = async (e) => {
    e.preventDefault();

    const data={startDate,endDate,priceIncrease,isActive,svg};
    if([startDate,endDate,priceIncrease].some(item=>item==="")){
        return alert("some field is missing");
    }

   try {
    
    const response=await fetch(`/api/package/price-hike?packageId=${itinerary?._id}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body:JSON.stringify(data)
    })

   } catch (error) {

    console.log("something went wrong")
   }

    // setActiveTab("Tab4");
  };
  const handleCheckBox=(e)=>{
      if(num%2===0){
        setIsActive(true);
     }
      setNum(num+1);
      console.log("num:::  ",num)
     if(num%2!==0){
        setIsActive(false);
     }
  }

  return (
    <>
      <div className="bg-white rounded p-3">
        <div>
          <p className="font-semibold text-base mb-2">Calender</p>
        </div>
        <div className="border p-4 rounded mb-2 overflow-scroll">
          <div className=" sm:flex items-center md:mb-4 mb-2">
            <label
              htmlFor="startDate"
              className=" font-semibold w-28 text-para"
            >
              Start Date :
            </label>
            <input
              type="date"
              id="startDate"
              onChange={(e)=>setStartDate(e.target.value)}
              className="  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter Start Date"
            />
          </div>
          <div className=" sm:flex items-center md:mb-4 mb-2">
            <label htmlFor="endDate" className=" font-semibold w-28 text-para">
              End Date :
            </label>
            <input
              type="Date"
              id="endDate"
              onChange={(e)=>setEndDate(e.target.value)}
              className="  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter End Date "
            />
          </div>
          <div className=" sm:flex items-center  mb-2">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center mb-2 ">
                <label
                  htmlFor="price"
                  className=" font-semibold w-28 text-para"
                >
                  Price Hike :
                </label>
                <input
                  type="text"
                  id="price"
                  onChange={(e)=>setPriceIncrease(e.target.value)}
                  className="  border w-full  rounded-md h-8 ml-7 px-2 focus:border-primary outline-none text-para"
                  placeholder="Enter Price "
                />
              </div>
              <div>
                <input type="checkbox" name="checkbox" className="scale-150" onChange={(e)=>handleCheckBox(e)} />
              </div>
            </div>
          </div>
          <div className=" sm:flex items-center">
            <label htmlFor="svg" className=" font-semibold w-28 text-para">
              SVG Icon :
            </label>
            <select
              id="svg"
              className="  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para"
            onChange={(e)=>setSvg(e.target.value)}
            
            >
              <option vlaue="">Select One</option>
              <option vlaue="A">A</option>
              <option vlaue="B">B</option>
              <option vlaue="C">C</option>
              <option vlaue="D">D</option>
              <option vlaue="E">E</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleSubmitNext}
          className="w-full rounded py-2 bg-black text-white"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Calender;
