import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCirclePlus, faCube, faEdit, faFloppyDisk, faTrash, faXmark, } from "@fortawesome/free-solid-svg-icons";

const CarLocation = () => {

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [selectedState, setSelectedState] = useState(null);
  const [editStateValue, setEditStateValue] = useState('');
  const [editCityValue, setEditCityValue] = useState('');
  const [editStateId, setEditStateId] = useState(null);
  const [editCityId, setEditCityId] = useState(null);


  const toggleEditState = (StateId) => {
    setEditStateId(StateId === editStateId ? null : StateId);
    setEditStateValue('')
  };

  const toggleEditCity = (cityId) => {
    setEditCityId(cityId === editCityId ? null : cityId);
    setEditCityValue('')
  };

  
  const saveEditState = async (stateId) => {
    try {
      const response = await fetch('/api/location/edit?type=state', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stateId, name: editStateValue }),
      });
      toggleEditState(stateId)
      const fetchedStates = await fetchStates(selectedCountry);
      setStates(fetchedStates);
    } catch (error) {
      console.log(error);
    }
  };
  const saveEditCity = async (cityId) => {
    try {
      const response = await fetch('/api/location/edit?type=city', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cityId, name: editCityValue }),
      });
      toggleEditCity(cityId)
      const fetchedCities = await fetchCities(selectedState);
      setCities(fetchedCities);
    } catch (error) {
      console.log(error);
    }
  };



  const handleStateInputChange = (event) => {
    setState(event.target.value);
  };
  const handleCityInputChange = (e) => {
    setCity(e.target.value)
  }
  

  const handleStateSelect = async (stateId) => {
    setSelectedState(stateId);
    const fetchedCities = await fetchCities(stateId);
    setCities(fetchedCities);
  };

  const handleAddState = async () => {
    try {
      const response = await fetch('/api/location/add?type=state', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state, selectedCountry }),
      });
      const fetchedStates = await fetchStates(selectedCountry);
      setStates(fetchedStates);
      setState('')
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddCity = async () => {
    try {
      const response = await fetch('/api/location/add?type=city', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city, selectedState }),
      });
      const fetchedCities = await fetchCities(selectedState);
      setCities(fetchedCities);
      setCity('')
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleDeleteState = async (stateId) => {
    try {
      const userConfirmed = confirm('Are you sure?');

      if (!userConfirmed) {
        return;
      }
      const response = await fetch(`/api/location/delete?type=state&stateId=${stateId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const fetchedStates = await fetchStates(selectedCountry);
        setStates(fetchedStates);
      } else {
        console.error('Failed to delete state');
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleDeleteCity = async (cityId) => {
    try {
      const userConfirmed = confirm('Are you sure?');

      if (!userConfirmed) {
        return;
      }
      const response = await fetch(`/api/location/delete?type=city&cityId=${cityId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // const fetchedStates = await fetchStates(selectedCountry);
        // setStates(fetchedStates);
        const fetchedCities = await fetchCities(selectedState);
        setCities(fetchedCities);
      } else {
        console.error('Failed to delete state');
      }
    } catch (error) {
      console.error(error);
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
        <p className='text-xl mb-3 font-semibold'>Local Location</p>
        <p className='text-para font-semibold'>Pickup Location and Pickup Point</p>
        <div className="border   rounded p-2">
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>  
            <div className='border md:px-4 py-4 px-3 rounded-md bg-white' >
              <div>
                <div className='flex items-center justify-between gap-1'>
                  <div className='md:flex items-center'>
                    <label htmlFor="state">Pickup Location :</label>
                    <input className=' border md:ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                      value={state} onChange={handleStateInputChange} />
                  </div>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={handleAddState}
                    disabled={!state}
                    className="text-xl hover:text-primary cursor-pointer md:mb-1 md:mt-0 mt-5"
                  />
                </div>
              </div>
              {/* data is here show */}
              <hr className='my-3' />
              <div>
                {states?.map(state => (<div className='flex justify-between even:bg-slate-50 md:px-5 px-3' key={state._id}>
                  <p className='capitalize flex gap-2 leading-8'>
                    <span>
                      <input type="radio" className="accent-navyblack"
                        value={state._id}
                        onChange={() => handleStateSelect(state._id)}
                        checked={selectedState === state._id} />
                    </span>
                    {editStateId === state._id ? (
                      <input
                        className='border rounded-md h-8 px-2 focus:border-primary outline-none'
                        defaultValue={state.name}
                        onChange={(e) => setEditStateValue(e.target.value)}
                      />
                    ) : state.name}
                  </p>
                  <div className='flex gap-2 basis-1/3'>
                    {editStateId === state._id ? (
                      <span className="flex gap-2 px-2">
                        {editStateValue &&
                          <FontAwesomeIcon
                            icon={faFloppyDisk}
                            onClick={() => saveEditState(state._id)}
                            className="font1 mt-1 hover:text-primary cursor-pointer"
                          />
                        }
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
                    {!editStateValue &&
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteState(state._id)}
                        className="mt-1 font1 hover:text-primary cursor-pointer"
                      />
                    }
                  </div>
                </div>))}
              </div>
            </div>
            <div className='border md:px-4 py-4 px-3 rounded-md bg-white' 
            // hidden={!selectedState}
            >
              <div>
                <div className='flex items-center justify-between gap-1'>
                  <div className='md:flex items-center'>
                    <label htmlFor="city">Pickup Point :</label>
                    <input onChange={handleCityInputChange} value={city} className=' border md:ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                      name="city" />
                  </div>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={handleAddCity}
                    className="text-xl hover:text-primary cursor-pointer md:mb-1 md:mt-0 mt-5"
                  />
                </div>
              </div>
              {/* data is here show */}
              <hr className='my-3' />
              <div>
                {cities?.map(city => (<div className='flex justify-between even:bg-slate-50 md:px-5 px-3' key={city._id}>
                  <p className='capitalize flex gap-2 leading-8'>
                    {/* {city.name} */}
                    {editCityId === city._id ? (
                      <input
                        className='border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                        defaultValue={city.name}
                        onChange={(e) => setEditCityValue(e.target.value)}
                      />
                    ) : city.name}
                  </p>
                  <div className='flex gap-2'>
                    {editCityId === city._id ? (
                      <span className="flex gap-2 px-2">
                        {editCityValue &&
                          <FontAwesomeIcon
                            icon={faFloppyDisk}
                            onClick={() => saveEditCity(city._id)}
                            className="font1 mt-1 hover:text-primary cursor-pointer"
                          />
                        }
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
                    {!editCityValue &&
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteCity(city._id)}
                        className="mt-1 font1 hover:text-primary cursor-pointer"
                      />
                    }
                  </div>
                </div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CarLocation;



