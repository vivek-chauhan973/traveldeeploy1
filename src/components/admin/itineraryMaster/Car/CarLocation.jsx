import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCirclePlus,
  faCube,
  faEdit,
  faFloppyDisk,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const fetchAllLocation = async () => {
  const res = await fetch("/api/cars/carrentalLocalPrice");
  return await res.json();
};
const fetchAllPickupLocation = async (id) => {
  const res = await fetch(`/api/cars/carrentalLocalPrice/pickupLocation?id=${id}`);
  return await res.json();
};
const CarLocation = () => {
  const [localLocation, setLocalLocation] = useState("");
  const [states, setStates] = useState([]);
  const [selectedLocation,setSelectedLocation]=useState(null);
  const [cities, setCities] = useState([]);
  const [pickupLocation,setPickupLocation]=useState("")
  const [editLocationValue, setEditLocationValue] = useState("");
  const [editPickupValue, setEditPickupValue] = useState("");
  const [editStateId, setEditStateId] = useState(null);
  const [editPickupId, setEditPickupId] = useState(null);

  useEffect(() => {
    fetchAllLocation().then((res) => {
      setStates(res?.data || []);
    });
  }, []);

  const toggleEditState = (StateId) => {
    setEditStateId(StateId === editStateId ? null : StateId);
  };
  const toggleEditCity = (StateId) => {
    setEditPickupId(StateId === editPickupId ? null : StateId);
  };

  const handleAddLocation = async () => {
    try {
      const res = await fetch("/api/cars/carrentalLocalPrice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ localLocation }),
      });
      if (res?.ok) {
        setLocalLocation("")
        fetchAllLocation().then((res) => {
          setStates(res?.data || []);
        });
        alert("data of location saved successfuuly");
      }
    } catch (error) {
      console.log("error :", error);
      alert("something went wrong in fontend side");
    }
  };

  const saveEditState = async (id) => {
    try {
      const res = await fetch(`/api/cars/carrentalLocalPrice?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ localLocation: editLocationValue }),
      });
      if (res?.ok) {
        fetchAllLocation().then((res) => {
          setStates(res?.data || []);
        });
        setEditLocationValue("");
        setEditStateId(null);
        alert("data of location updated successfuuly");
      }
    } catch (error) {
      console.log("error :", error);
      alert("something went wrong in fontend side");
    }
  };
  const handleLocationSelect=(id)=>{
   setSelectedLocation(id);
   fetchAllPickupLocation(id).then((res) => {
    setCities(res?.data || []);
  });
  }

  const handleAddPickupLocation=async ()=>{
    if(!selectedLocation){
      alert("location id is required !!!")
    }
    try {
      const res = await fetch(`/api/cars/carrentalLocalPrice/pickupLocation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: pickupLocation ,local:selectedLocation}),
      });
      if (res?.ok) {
        setPickupLocation("");
        fetchAllPickupLocation(selectedLocation).then((res) => {
          setCities(res?.data || []);
        });
        alert("data of pickup location saved successfuuly");
      }
    } catch (error) {
      console.log("error :", error);
      alert("something went wrong in fontend side");
    }
  }

  const saveEditPickupLocation=async(id)=>{
    if(!selectedLocation){
      alert("location id is required !!!")
    }
    try {
      const res = await fetch(`/api/cars/carrentalLocalPrice/pickupLocation?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editPickupValue ,local:selectedLocation}),
      });
      if (res?.ok) {
        setEditPickupValue("")
        setEditPickupId(null)
        fetchAllPickupLocation(selectedLocation).then((res) => {
          setCities(res?.data || []);
        });
        alert("data of pickup location updated successfuuly");
      }
    } catch (error) {
      console.log("error :", error);
      alert("something went wrong in fontend side");
    }
  }
  const handleDeletePickupLocation=async (id)=>{
    try {
      const res=await fetch(`/api/cars/carrentalLocalPrice/pickupLocation?id=${id}`,{method:"DELETE"});
      if(res?.ok){
        fetchAllPickupLocation(selectedLocation).then((res) => {
          setCities(res?.data || []);
        });
        alert("pickup location successfully deleted");
      }
      
    } catch (error) {
      console.log(error);
      alert("something went wrong on frontend side");
    }
  }

  const handleDeleteLocation=async (id)=>{
    try {
      const res=await fetch(`/api/cars/carrentalLocalPrice?id=${id}`,{method:"DELETE"});
      if(res?.ok){
        fetchAllLocation().then((res) => {
          setStates(res?.data || []);
        });
        setSelectedLocation(null);
        alert("location successfully deleted");
      }
      
    } catch (error) {
      console.log(error);
      alert("something went wrong on frontend side");
    }
  }

  return (
    <>
      <div className="flex items-center gap-5 text-primary mb-5">
        <FontAwesomeIcon icon={faCube} className="text-2xl" />
        <p className="md:text-[28px] text-xl text-black">Car Location</p>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className=" text-teal-700 text-xl"
        />
      </div>
      <div className="w-full  border-l-2 border-teal-600 bg-white mt-2 p-4 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] rounded-md">
        <p className="text-xl mb-3 font-semibold">Local Location</p>
        <p className="text-para font-semibold">
          Pickup Location and Pickup Point
        </p>
        <div className="border   rounded p-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <div className="border md:px-4 py-4 px-3 rounded-md bg-white">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <div className="md:flex items-center">
                    <label htmlFor="state">Pickup Location :</label>
                    <input
                      className=" border md:ml-2 rounded-md h-8 px-2 focus:border-primary outline-none"
                      value={localLocation}
                      onChange={(e) => setLocalLocation(e.target.value)}
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={handleAddLocation}
                    disabled={!localLocation}
                    className="text-xl hover:text-primary cursor-pointer md:mb-1 md:mt-0 mt-5"
                  />
                </div>
              </div>
              {/* data is here show */}
              <hr className="my-3" />
              <div>
                {states?.map((state) => (
                  <div
                    className="flex justify-between even:bg-slate-50 md:px-5 px-3"
                    key={state._id}
                  >
                    <p className="capitalize flex gap-2 leading-8">
                      <span>
                        <input
                          type="radio"
                          className="accent-navyblack"
                          value={state._id}
                          onChange={() => handleLocationSelect(state._id)}
                          checked={selectedLocation === state._id}
                        />
                      </span>
                      {editStateId === state._id ? (
                        <input
                          className="border rounded-md h-8 px-2 focus:border-primary outline-none"
                          defaultValue={state.localLocation}
                          onChange={(e) => setEditLocationValue(e.target.value)}
                        />
                      ) : (
                        state.localLocation
                      )}
                    </p>
                    <div className="flex gap-2 basis-1/3">
                      {editStateId === state._id ? (
                        <span className="flex gap-2 px-2">
                          {editLocationValue && (
                            <FontAwesomeIcon
                              icon={faFloppyDisk}
                              onClick={() => saveEditState(state._id)}
                              className="font1 mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditState(state._id)}
                            className="font1 mt-1 hover:text-primary cursor-pointer"
                          />
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditState(state._id)}
                          className="font1 mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      {!editLocationValue && (
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDeleteLocation(state._id)}
                          className="mt-1 font1 hover:text-primary cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="border md:px-4 py-4 px-3 rounded-md bg-white"
              hidden={!selectedLocation}
            >
              <div>
                <div className="flex items-center justify-between gap-1">
                  <div className="md:flex items-center">
                    <label htmlFor="city">Pickup Point :</label>
                    <input
                       onChange={(e)=>setPickupLocation(e.target.value)}
                       value={pickupLocation}
                      className=" border md:ml-2 rounded-md h-8 px-2 focus:border-primary outline-none"
                      name="city"
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={handleAddPickupLocation}
                    className="text-xl hover:text-primary cursor-pointer md:mb-1 md:mt-0 mt-5"
                  />
                </div>
              </div>
              {/* data is here show */}
              <hr className="my-3" />
              <div>
                {cities?.map((city) => (
                  <div
                    className="flex justify-between even:bg-slate-50 md:px-5 px-3"
                    key={city._id}
                  >
                    <p className="capitalize flex gap-2 leading-8">
                      {/* {city.name} */}
                      {editPickupId === city._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none"
                          defaultValue={city.name}
                          onChange={(e) => setEditPickupValue(e.target.value)}
                        />
                      ) : (
                        city.name
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editPickupId === city._id ? (
                        <span className="flex gap-2 px-2">
                          {editPickupValue && (
                            <FontAwesomeIcon
                              icon={faFloppyDisk}
                              onClick={() => saveEditPickupLocation(city._id)}
                              className="font1 mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditCity(city._id)}
                            className="font1 mt-1 hover:text-primary cursor-pointer"
                          />
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditCity(city._id)}
                          className="font1 mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      {!editPickupValue && (
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDeletePickupLocation(city._id)}
                          className="mt-1 font1 hover:text-primary cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarLocation;
