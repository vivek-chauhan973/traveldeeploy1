
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Layout from "@/components/admin/Layout";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import { useEffect, useState } from "react";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";

const fetchCountries = async () => {
  try {
    const res = await fetch('/api/location?type=country', { method: 'GET' });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchStates = async (countryId) => {
  try {
    const res = await fetch('/api/location?type=state&countryId=' + countryId, { method: 'GET' });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const fetchCities = async (stateId) => {
  try {
    const res = await fetch('/api/location?type=city&stateId=' + stateId, { method: 'GET' });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};


export default function CountryStateCity () {

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    fetchData();
  }, []);

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [editCountryValue, setEditCountryValue] = useState('');
  const [editStateValue, setEditStateValue] = useState('');
  const [editCityValue, setEditCityValue] = useState('');
  const [editCountryId, setEditCountryId] = useState(null);
  const [editStateId, setEditStateId] = useState(null);
  const [editCityId, setEditCityId] = useState(null);

  const handleCountryInputChange = (event) => {
    setCountry(event.target.value);
  };

  const toggleEditCountry = (countryId) => {
    setEditCountryId(countryId === editCountryId ? null : countryId);
    setEditCountryValue('')
  };

  const toggleEditState = (StateId) => {
    setEditStateId(StateId === editStateId ? null : StateId);
    setEditStateValue('')
  };

  const toggleEditCity = (cityId) => {
    setEditCityId(cityId === editCityId ? null : cityId);
    setEditCityValue('')
  };

  const saveEditCountry = async (countryId) => {
    try {
      const response = await fetch('/api/location/edit?type=country', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ countryId, name: editCountryValue }),
      });
      toggleEditCountry(countryId)
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    } catch (error) {
      console.log(error);
    }
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
  const handleCountrySelect = async (countryId) => {
    setSelectedCountry(countryId);
    const fetchedStates = await fetchStates(countryId);
    setStates(fetchedStates);
    setSelectedState(null)
  };

  const handleStateSelect = async (stateId) => {
    setSelectedState(stateId);
    const fetchedCities = await fetchCities(stateId);
    setCities(fetchedCities);
  };


  const handleAddCountry = async () => {
    try {
      const response = await fetch('/api/location/add?type=country', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country }),
      });
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
      setCountry('')
    } catch (error) {
      console.log(error);
    }
  }

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
  const handleDeleteCountry = async (countryId) => {
    try {
      const userConfirmed = confirm('Are you sure?');

      if (!userConfirmed) {
        return;
      }
      const response = await fetch(`/api/location/delete?type=country&countryId=${countryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const fetchedCountries = await fetchCountries();
        setCountries(fetchedCountries);
      } else {
        console.error('Failed to delete country');
      }
    } catch (error) {
      console.error(error);
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
    <AppProvider>
    <Layout>
      <div>
        <div>
          <p className='font-semibold text-[28px] mb-10'>New Country Add</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='border p-4 rounded-md bg-white'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <label htmlFor="country">Country:</label>
                <input className=' border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                  value={country}
                  onChange={handleCountryInputChange} />
              </div>
              <button onClick={handleAddCountry} disabled={!country}>
                <MdOutlineAddCircle size={35} />
              </button>
            </div>
            {/* data is here show */}
            <hr className='my-3' />
            <ul>
              {countries?.map(countryData => (
                <li key={countryData._id} className='flex justify-between even:bg-slate-50 px-5'>
                  <input
                    type="radio"
                    checked={selectedCountry === countryData._id}
                    onChange={() => handleCountrySelect(countryData._id)}
                    value={countryData._id} />
                  <p className='leading-8 basis-1/2'>

                    {editCountryId === countryData._id ? (
                      <input
                        className='border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                        defaultValue={countryData.name}
                        onChange={(e) => setEditCountryValue(e.target.value)}
                      />
                    ) : countryData.name}
                  </p>
                  <div className='flex gap-2 basis-1/3'>
                    {editCountryId === countryData._id ? (
                      <span className="flex gap-2 px-2">
                        {editCountryValue && <IoIosSave
                          size={24}
                          className='mt-1 hover:text-red-500 cursor-pointer'
                          onClick={() => saveEditCountry(countryData._id)}
                        />}
                        <MdCancel
                          size={24}
                          className='mt-1 hover:text-red-500 cursor-pointer'
                          onClick={() => toggleEditCountry(countryData._id)}
                        />
                      </span>
                    ) : (
                      <FaEdit
                        size={20}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => toggleEditCountry(countryData._id)}
                      />
                    )}
                    <MdDeleteForever
                      size={24}
                      className='mt-1 hover:text-red-500 cursor-pointer'
                      onClick={() => handleDeleteCountry(countryData._id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='border p-4 rounded-md bg-white' hidden={!selectedCountry}>
            <div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <label htmlFor="state">State:</label>
                  <input className=' border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                    value={state} onChange={handleStateInputChange} />
                </div>
                <button onClick={handleAddState} disabled={!state}>
                  <MdOutlineAddCircle size={35} />
                </button>
              </div>
            </div>
            {/* data is here show */}
            <hr className='my-3' />
            <div>
              {states?.map(state => (<div className='flex justify-between even:bg-slate-50 px-5' key={state._id}>
                <p className='capitalize flex gap-2 leading-8'>
                  <span>
                    <input type="radio" value={state._id}
                      onChange={() => handleStateSelect(state._id)}
                      checked={selectedState === state._id} />
                  </span>
                  {editStateId === state._id ? (
                    <input
                      className='border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                      defaultValue={state.name}
                      onChange={(e) => setEditStateValue(e.target.value)}
                    />
                  ) : state.name}
                </p>
                <div className='flex gap-2 basis-1/3'>
                  {editStateId === state._id ? (
                    <span className="flex gap-2 px-2">
                      {editStateValue && <IoIosSave
                        size={24}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => saveEditState(state._id)}
                      />}
                      <MdCancel
                        size={24}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => toggleEditState(state._id)}
                      />
                    </span>
                  ) : (
                    <FaEdit
                      size={20}
                      className='mt-1 hover:text-red-500 cursor-pointer'
                      onClick={() => toggleEditState(state._id)}
                    />
                  )}
                  <MdDeleteForever
                    size={24}
                    className='mt-1 hover:text-red-500 cursor-pointer'
                    onClick={() => handleDeleteState(state._id)}
                  />
                </div>
              </div>))}
            </div>
          </div>
          <div className='border p-4 rounded-md bg-white' hidden={!selectedState}>
            <div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <label htmlFor="city">City:</label>
                  <input onChange={handleCityInputChange} value={city} className=' border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                    name="city" />
                </div>
                <button onClick={handleAddCity}>
                  <MdOutlineAddCircle size={35} className='cursor-pointer hover:text-primary' />
                </button>
              </div>
            </div>
            {/* data is here show */}
            <hr className='my-3' />
            <div>
              {cities?.map(city => (<div className='flex justify-between even:bg-slate-50 px-5' key={city._id}>
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
                      {editCityValue && <IoIosSave
                        size={24}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => saveEditCity(city._id)}
                      />}
                      <MdCancel
                        size={24}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => toggleEditCity(city._id)}
                      />
                    </span>
                  ) : (
                    <FaEdit size={20} onClick={() => toggleEditCity(city._id)} className='mt-1 hover:text-red-500 cursor-pointer' />
                  )}
                  <MdDeleteForever onClick={() => handleDeleteCity(city._id)} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                </div>
              </div>))}
            </div>
          </div>


        </div>
      </div>

    </Layout>
    </AppProvider>
  )
}