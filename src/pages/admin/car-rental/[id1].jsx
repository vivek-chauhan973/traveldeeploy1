import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../../../app/globals.css";
import Layout from "../../../components/admin/Layout";
import { MdOutlineAddCircle, MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "react-quill/dist/quill.snow.css";
import GoogleMap from "@/components/admin/itineraryCreate/GoogleMap";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Image from "next/image";
import { useRouter } from "next/router";

// Dynamic import for Quill.js as it needs to be loaded on the client-side
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const fetchPackageDataById=async (id)=>{
   const res=await fetch(`/api/cars/carpackages/${id}`)
   const data=res.json();
   return data;
}
const fetchCountries = async () => {
  try {
    const res = await fetch("/api/location/carindex?type=car-country", { method: "GET" });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchStates = async (countryId) => {
  try {
    const res = await fetch("/api/location/carindex?type=car-state&countryId=" + countryId, {
      method: "GET",
    });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchCities = async (stateId) => {
  try {
    const res = await fetch("/api/location/carindex?type=car-city&stateId=" + stateId, {
      method: "GET",
    });
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default function CarPackage() {
  // State variables for the Quill editors and validation
  const [title, setTitle] = useState("");
  const [locationValidate, setLocationValidate] = useState();
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionValidate, setDescriptionValidate] = useState("");
  const [inclusion, setInclusion] = useState("");
  const [inclusionValidate, setInclusionValidate] = useState("");
  const [exclusion, setExclusion] = useState("");
  const [exclusionValidate, setExclusionValidate] = useState("");
  const [readBeforeBook, setReadBeforeBook] = useState("");
  const [readBeforeBookValidate, setReadBeforeBookValidate] = useState("");
  const [carsList, setCarsList] = useState([]);
  const [isSelectedCar, setSelectedCar] = useState("");
  const [packageId,setPackageId]=useState(null);
  const [mapCode, setMapCode] = useState(null);
  const [data,setdata]=useState(null)
  const [handleUpdate,setHandleUpdate]=useState(false);
  const [carImageSetWithOnchange,setCarImageSetWithOnchange]=useState(false);
  const [cityPopup,setCityPopup]=useState(false);
  const router=useRouter();
  const {id1}=router.query;
  const handleChange = (e) => {
    setMapCode(e.target.value);
  };
// console.log("data",data)
  useEffect(()=>{
    fetchPackageDataById(id1).then(res=>setdata(res?.data))
  },[id1,handleUpdate])
  useEffect(() => {
    const fetchCountry = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };
    fetchCountry();
  }, []);
  const handleSelectCountry = (value) => {
    const fetchState = async () => {
      const fetchedStates = await fetchStates(value);
      setStates(fetchedStates);
    };
    fetchState();
  };
  const handleSelectState = (value) => {
    const fetchCity = async () => {
      const fetchedCities = await fetchCities(value);
      setCities(fetchedCities);
    };

    fetchCity();
  };
  const handleLocation = (location) => {
    setSelectedLocation(location);
    if (!location) {
      setLocationValidate("Location is required");
    } else {
      setLocationValidate("");
    }
  };

  useEffect(()=>{
    setPrice(data?.[0]?.carprice?.toString() ||"")
    setDescription(data?.[0]?.description||"")
    setInclusion(data?.[0]?.inclusion||'')
    setExclusion(data?.[0]?.exclusion||"")
    setTitle(data?.[0]?.title||"")
    setReadBeforeBook(data?.[0]?.readbook||"")
    setPackageId(data?.[0]?.id||null)
    setMapCode(data?.[0]?.map||"")
    setSelectedLocation(data?.[0]?.location||"")
    fetchStates(data?.[0]?.location?.state?.country?._id).then(res=>setStates(res||[]))
    fetchCities(data?.[0]?.location?.state?._id).then(res=>setCities(res||[]))
  },[data,handleUpdate])
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
// console.log("data fetched by location id ",data)
  const validateDescription = (value) => {
    setDescription(value);
    if (!value) {
      setDescriptionValidate("Description is required");
    } else {
      setDescriptionValidate("");
    }
  };

  const validateInclusion = (value) => {
    setInclusion(value);
    if (!value) {
      setInclusionValidate("Inclusion is required");
    } else {
      setInclusionValidate("");
    }
  };

  const validateExclusion = (value) => {
    setExclusion(value);
    if (!value) {
      setExclusionValidate("Exclusion is required");
    } else {
      setExclusionValidate("");
    }
  };

  const validateReadBeforeBook = (value) => {
    setReadBeforeBook(value);
    if (!value) {
      setReadBeforeBookValidate("Read Before You Book is required");
    } else {
      setReadBeforeBookValidate("");
    }
  };

  

  const validateForm = () => {
    let valid = true;

    if (!car) {
      valid = false;
    }

    if (!title) {
      valid = false;
    }

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      valid = false;
    }

    if (!description) {
      setDescriptionValidate("Description is required");
      valid = false;
    }

    if (!inclusion) {
      setInclusionValidate("Inclusion is required");
      valid = false;
    }

    if (!exclusion) {
      setExclusionValidate("Exclusion is required");
      valid = false;
    }

    if (!readBeforeBook) {
      setReadBeforeBookValidate("Read Before You Book is required");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) {
    //     return;
    // }

    const newPackage = {
      packageId,
      title,
      price: parseFloat(price),
      description,
      inclusion,
      exclusion,
      readBeforeBook,
      mapCode,
      location: selectedLocation,
    };
    // console.log("car Package data:::", newPackage);
    const data1=await fetch(`/api/cars/carpackages/${id1}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPackage),
    });
    if(data1){
      setHandleUpdate(true)
    }
    
    setTitle("");
    setPrice("");
    setDescription("");
    setInclusion("");
    setExclusion("");
    setReadBeforeBook("");
   setMapCode("");
  };

  // Fetch API car list
  useEffect(() => {
    fetchCars().then(res=>{
      setCarsList(res)});
  }, [data]);
useEffect(()=>{
  if(data){
    setCityPopup(true)
   }
},[data])

  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars/carapi");
      const data = await response.json();
      return data
      
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <AppProvider>
      <Layout>
        <div>
          <div className="flex items-center gap-5 text-primary pb-3">
            <BiSolidCarMechanic size={28} className="font-semibold" />
            <p className="text-[24px] text-black">Car Package</p>
            <HiOutlineArrowNarrowRight size={24} className=" text-teal-700" />
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-[214px] shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-36">
                      <label
                        htmlFor="cars"
                        className="text-para font-semibold w-32"
                      >
                        Choose a car:
                      </label>
                    </div>
                    <select
                      name="cars"
                      id="cars"
                      className="border outline-[0.5px] flex justify-items-center"
                      onChange={(e) => {setCarImageSetWithOnchange(true);setSelectedCar(e.target.value)} }
                      defaultValue={data?.[0]?.id?._id}
                    >
                      <option className="" value="">
                       {data?data?.[0]?.id?.name:" Choose a car"}
                      </option>
                      {carsList?.data?.map((car, i) => (
                        <option
                          className=""
                          key={i}
                          value={JSON.stringify(car)}
                        >
                          {car.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-36">
                      <label className="text-para font-semibold" htmlFor="">
                        Package Title
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <input
                      type="text"
                      className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className=" w-36">
                      <label className="text-para font-semibold" htmlFor="">
                        Car Price
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <input
                      type="text"
                      className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className=" w-36">
                      <label className="text-para font-semibold" htmlFor="">
                        location :
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                                    {((data)) && (<select id="packageLocation" className=' w-[130px] ml-4 pl-2 rounded-md outline-none border-black border h-6 text-para' onChange={(e) => handleSelectCountry(e.target.value)} defaultValue={data?.location?.state?.country?._id}>
                                        <option value="">{data?data?.[0]?.location?.state?.country?.name:"select Country"}</option>
                                        {countries?.map(country => (
                                            <option key={country._id} className='border-none bg-slate-100 text-black' value={country._id}>{country.name}</option>
                                        ))}
                                    </select>)}
                                    
                                    {((data)&&(cityPopup)) && (<select onChange={(e) => handleSelectState(e.target.value)} className=' w-[130px] ml-4 px-2 rounded-md outline-none border-black border h-6 text-para' defaultValue={data?.location?.state?._id}>
                                        <option value="">{data?data?.[0]?.location?.state?.name:"select State"}</option>
                                        {states?.map(state => (
                                            <option key={state._id} className='border-none bg-slate-100 text-black' value={state._id}>{state.name}</option>
                                        ))}
                                    </select>)}
                                    
                                    {((data)&&(cityPopup)) && (<select onChange={(e) => handleLocation(e.target.value)} id="packageLocation" className='w-[130px] ml-4 rounded-md outline-none border-black px-2 border h-6 text-para' defaultValue={data?.location?._id}>
                                        <option value="">{data?data?.[0]?.location?.name:"select city"}</option>
                                        {cities?.map(city => (
                                            <option key={city._id} className='border-none bg-slate-100 text-black' value={city._id}>{city.name}</option>
                                        ))}
                                    </select>)}

                                </div>
                  </div>
                </div>
                <div className="bg-slate-100 w-full h-full rounded-md flex justify-center">
                  { (
                    <Image
                      src={carImageSetWithOnchange? JSON.parse(isSelectedCar)?.imageDetails[0].url:data?.[0]?.id?.imageDetails?.[0]?.url}
                      width={100}
                      height={100}
                      alt="Car Image"
                    />
                  )}
                  {!isSelectedCar && (
                    <p className="self-center text-[28px] font-semibold text-[#dad8d8]">
                      Choose A Car
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 bg-white p-2 h-[214px] shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                <p className="text-para font-semibold pb-1">Description</p>
                <div className="bg-white">
                  <QuillNoSSRWrapper
                    className="rounded h-32"
                    theme="snow"
                    value={description}
                    onChange={validateDescription}
                    // dangerouslySetInnerHTML={{ __html: description }}
                    modules={modules}
                  />
                  <div>
                    <span className="text-xs text-red-700 capitalize">
                      {descriptionValidate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-white p-2  shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                <p className="text-para font-semibold pb-1">Google Map</p>
                <div className="bg-white">
                  
                  <div className="grid grid-cols-2 gap-5 items-center">
                    <div>
                      <textarea
                        value={mapCode}
                        onChange={handleChange}
                        className="p-2 w-full h-80 resize-none rounded-md"
                      ></textarea>
                      <div className="flex justify-between px-3">
                        <span className="text-xs">
                          Confirm you Enter width=100% & height=100%
                        </span>
                        
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-xs">
                        Google Map show is here
                      </p>
                      <div
                        className="border-black border w-full h-72 rounded-md overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: mapCode }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mt-5 bg-white p-2 h-[214px] shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                    <p className="font-semibold text-para">Inclusion</p>
                    <div className="bg-white">
                      <QuillNoSSRWrapper
                        className="rounded h-32"
                        theme="snow"
                        value={inclusion}
                        onChange={validateInclusion}
                        modules={modules}
                      />
                      <div>
                        <span className="text-xs text-red-700 capitalize">
                          {inclusionValidate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 bg-white p-2 h-[214px] shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                    <p className="font-semibold text-para">Exclusion</p>
                    <div className="bg-white">
                      <QuillNoSSRWrapper
                        className="rounded h-32"
                        theme="snow"
                        value={exclusion}
                        onChange={validateExclusion}
                        modules={modules}
                      />
                      <div>
                        <span className="text-xs text-red-700 capitalize">
                          {exclusionValidate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-white p-2 h-[214px] shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] rounded-md border-l-2 border-teal-600">
                <p className="text-para font-semibold">Read Before You Book</p>
                <div className="bg-white">
                  <QuillNoSSRWrapper
                    className="rounded h-32"
                    theme="snow"
                    value={readBeforeBook}
                    onChange={validateReadBeforeBook}
                    modules={modules}
                  />
                  <div>
                    <span className="text-xs text-red-700 capitalize">
                      {readBeforeBookValidate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <button
                  type="submit"
                  className="bg-black w-full rounded-md py-2 text-white"
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </AppProvider>
  );
}
