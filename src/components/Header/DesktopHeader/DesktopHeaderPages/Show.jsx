import React, { useEffect, useState } from "react";
// import { data1, stateData } from "./Data";
const fetchDestinationSates = async () => {
  const data = await fetch("/api/home/destinationHeader");
  return await data.json();
}
const fetchHeaderCities = async (id) => {
  const data = await fetch(`/api/home/headerCity?id=${id}`);
  return await data.json();
}
const Show = () => {
  const [change, setChange] = useState(0);
  const [destinationState, setDestinationState] = useState([]);
  const [changedState, setChangedState] = useState('');
  const [changedStateId, setChangedStateId] = useState('');
  const [cities, setCities] = useState([]);
  const [showBg, setShowBg] = useState(true);
  useEffect(() => {
    fetchDestinationSates().then(res => { setDestinationState(res?.data?.[0]?.options || []) })
  }, [])

  useEffect(() => {
    setChangedState(destinationState[0]?.name)
    fetchHeaderCities(destinationState[0]?._id).then(res => { console.log('fetch state Cities here ----> ', res); setCities(res?.data || []); })
  }, [destinationState])

  useEffect(() => {
    fetchHeaderCities(changedStateId).then(res => { console.log('fetch state Cities here ----> ', res?.data); setCities(res?.data || []) })
  }, [changedStateId])

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
                className={`font-medium text-base px-5 hover:py-3 py-3 ${i === 0 && showBg ? "bg-gray-100" : "bg-white"} hover:bg-gray-100 hover:rounded-sm`}
                onMouseEnter={() => { setChangedState(item.name); setChangedStateId(item?._id); setShowBg(false) }}
              >
                {item.name}
              </h4>
            ))}
          </div>
        </div>
        <div className="ml-4 px-4 pt-3 h-[400px] w-full">
          <h4 className="font-semibold text-base mb-3 text-[#595959]">{changedState}</h4>
          <div className="w-full h-full">
            <div className="grid grid-cols-4 gap-x-10">
              {cities.length > 0 && cities?.map((city, i) =>
                // <p key={i} className='text-para mb-2'>{city?.name}</p>
                <a
                href={`/india/` + city?.url + "-tour-packages"}
                key={i} className='text-para font-semibold mb-2'
              >
               {city?.name}
              </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
