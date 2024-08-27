import React from "react";
import Image from "next/image";

const Transport = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    console.log("value is here ", isChecked);
  };
  return (
    <div>
      <div className="mt-5">
        <div className="pl-3 w-full bg-navyblack rounded-md text-white flex justify-between items-center">
          <p>Transports</p>
          {/* <button
                      onClick={handleToggle}
                      className={`px-4 py-2 rounded-r-md ${isAC ? 'bg-primary' : 'bg-red-500'}`}
                    >
                      {isAC ? 'AC' : 'NonAC'}
                    </button> */}
          <div className="flex px-4 py-2 items-center gap-2">
            <span>Non-AC</span>
            <input
              class="switch"
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
            ></input>
            <span>AC</span>
          </div>
        </div>
        <div className="flex-col flex items-center justify-between md:border-b md:flex-row mb-2">
          <Image
            className=" w-32 h-24 object-cover"
            src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
            alt=""
            width="125"
            height="150"
          />
          <div className="items-center flex flex-col md:block">
            <p className="font-semibold">Sedan </p>
            <div className="flex itmes-center justify-center">
              <p className="text-para">6</p>
            </div>
          </div>
          <div className="items-center flex flex-col">
            <button className="border border-navyblack  text-navyblack text-para px-5 py-2 rounded-md hover:bg-navyblack hover:text-white">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
