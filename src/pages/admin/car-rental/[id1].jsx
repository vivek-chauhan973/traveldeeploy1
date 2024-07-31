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
export default function CarPackage() {
  // State variables for the Quill editors and validation
  const [title, setTitle] = useState("");
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
  const router=useRouter();
  const {id1}=router.query;
  const handleChange = (e) => {
    setMapCode(e.target.value);
  };
// console.log("data",data)
  useEffect(()=>{
    fetchPackageDataById(id1).then(res=>setdata(res?.data))
  },[id1,handleUpdate])

  useEffect(()=>{
    setPrice(data?.[0]?.carprice?.toString() ||"")
    setDescription(data?.[0]?.description||"")
    setInclusion(data?.[0]?.inclusion||'')
    setExclusion(data?.[0]?.exclusion||"")
    setTitle(data?.[0]?.title||"")
    setReadBeforeBook(data?.[0]?.readbook||"")
    setPackageId(data?.[0]?.id||null)
    setMapCode(data?.[0]?.map||"")
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
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars/carapi");
      const data = await response.json();
      setCarsList(data);
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
                      onChange={(e) => setSelectedCar(e.target.value)}
                    >
                      <option className="" value="" disabled>
                        Choose a car
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
                </div>
                <div className="bg-slate-100 w-full h-full rounded-md flex justify-center">
                  {isSelectedCar && (
                    <Image
                      src={JSON.parse(isSelectedCar)?.imageDetails[0].url}
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
