import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import BlogPromoSeo from "@/components/admin/blog/Blog Promo/BlogPromoSeo";
import MultipleSelectCheckmarks from "../../itineraryCreate/CheckMarkSelect";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
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
const fetchWriterData = async () => {
  const data = await fetch("/api/blog/blogwriter", { method: "GET" });
  return await data.json();
};

export default function BlogDetailBanner({ setActiveTab, blogData }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectType, setSelectType] = useState("");
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
  const [countries, setCountries] = useState();
  const [locationValidate, setLocationValidate] = useState();
  const [selectedCountry, setSelesctedCountry] = useState(null);
  const [selectedState, setSelesctedState] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [cityPopup, setCityPopup] = useState(false);
  const [selectTime, setSelectTime] = useState("");
  const [allWriter, setAllWriter] = useState([])
  const [writer, setWriter] = useState(null);
  const router = useRouter();
  useEffect(() => {

    const fetchCountry = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);

    };

    fetchCountry();
    fetchWriterData().then((res) => {
      setAllWriter(res?.data || []);
    });
  }, []);

  const handleSelectCountry1 = (value) => {
    const fetchState = async () => {
      const fetchedStates = await fetchStates(value);
      setStates(fetchedStates);
    };
    fetchState();
  };
  const handleSelectCountry = (value) => {
    const fetchState = async () => {
      const fetchedStates = await fetchStates(value);
      setStates(fetchedStates);
    };
    fetchState();
  };
  const handleSelectState1 = (value) => {
    const fetchCity = async () => {
      const fetchedCities = await fetchCities(value);
      setCities(fetchedCities);
    };
    fetchCity();
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
  const handleLocation1 = (location) => {
    setSelectedLocation(location);
    if (!location) {
      setLocationValidate("Location is required");
    } else {
      setLocationValidate("");
    }
  };
  useEffect(() => {
    setSelectType(blogData?.blogType || "");
    setSelectTime(blogData?.time || "");
    setTitle(blogData?.title || "");
    setSelectedCategories(blogData?.category);
    setDescription(blogData?.description || "");
    setPreview(blogData?.videoPath || "");
    setEditorHtmlDescription(blogData?.contentsummary || "");
    setSelesctedCountry(blogData?.country?._id);
    setSelesctedState(blogData?.state?._id);
    setSelectedLocation(blogData?.location?._id);
    handleSelectCountry(blogData?.associateCountry?._id);
    handleSelectState(blogData?.associateState?._id);
    setWriter(blogData?.writer?._id || null);
    if (!blogData) {
      setCityPopup(true);

      const fetchState = async () => {
        const fetchedStates = await fetchStates(blogData?.associateCountry?._id);
        setStates(fetchedStates);
      };
      fetchState();
    }
  }, [blogData]);
  console.log("blogData?.category", blogData)
  const [packageCategories, setPackageCategories] = useState();
  const fetchCategories = async () => {
    try {
      const categoriesList = await fetch(
        "/api/package-setting/category/get-categories"
      );
      const categories = await categoriesList.json();
      setPackageCategories(categories.data);
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories();
    };
    fetchData();
  }, []);
  // Function to handle file input change
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }
  const handleCategory = (category) => {
    setSelectedCategories(category);
  };
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
  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (!file && !title) {
      alert("Please upload file and  write title");
      return;
    }

    if (file && title) {
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("blogType", selectType || blogData?.blogType);
      formData.append("category", selectedCategories);
      formData.append("contentsummary", editorHtmlDescription);
      formData.append("location", selectedLocation);
      formData.append("state", selectedState);
      formData.append("country", selectedCountry);
      formData.append("time", selectTime || blogData?.time);
      formData.append("writer", writer);
    }
    // console.log("selectedCategories -------------> ",selectedCategories)
    try {
      const res = await fetch(
        `/api/blog/${blogData ? blogData?._id : "blogdetail"}`,
        {
          method: blogData ? "PUT" : "POST",
          body: formData,
        }
      );
      const data1 = await res.json();
      // console.log("data1--->",data1?.data?._id)
      if (res?.ok) {
        router.push("/admin/blog/itinerypost/" + data1?.data?._id);
        setActiveTab("Tab2");
        alert(`File ${blogData ? "updated" : "uploaded"} successfully`);

        // Optionally, reset form fields or update state after successful upload
      } else {
        alert(`File ${blogData ? "update" : "upload"} failed`);
      }

      // router.push("/admin/blog/itinerypost/"+data1?.data?._id);
    } catch (error) {
      console.error(
        `Error ${blogData ? "updating" : "uploading"} file:`,
        error
      );
    }
  }
  // console.log("content is here as ------>  ",editorHtmlDescription)
  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">Blog Detail Banner</p>
        <div className="lg:p-4 p-2">
          <div className="flex xl:flex-row flex-col md:gap-10 gap-5 lg:items-center xl:pl-5">
            <div className=" flex flex-1 my-7 overflow-x-hidden">
              <input
                type="file"
                className="mb-4 ml-3"
                onChange={handleChange}
              />
              <div>
                {preview && (
                  <Image
                    className="md:w-36 w-auto h-auto shadow-md mb-4"
                    src={preview}
                    alt="Preview"
                    width={150}
                    height={200}
                  />
                )}
              </div>
            </div>
            <div className="flex-1 my-5">
              <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="postTypes"
                  className="font-semibold text-para md:text-sm"
                >
                  Select Post Types :
                </label>
                <select
                  id="postTypes"
                  onChange={(e) => setSelectType(e.target.value)}
                  className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md focus:border-primary outline-none cursor-pointer border text-para"
                  defaultValue={blogData?.blogType}
                >
                  {blogData ? (
                    <option disabled >{blogData?.blogType}</option>
                  ) : (
                    <option >Select type </option>
                  )}
                  <option value="blog">Blog</option>
                  <option value="travel-guide">Travel Guide</option>
                  <option value="news">News</option>
                </select>
              </div>
              <div>
                <label htmlFor="title" className=" font-semibold">
                  Title
                </label>
                <input
                  className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter Title Here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="my-4">
                <div>
                  <label
                    htmlFor="cityBages"
                    className="pb-2 font-semibold text-para "
                  >
                    Category :
                  </label>
                  <MultipleSelectCheckmarks
                    packageCategories={packageCategories}
                    onSelectedCategoryIdsChange={handleCategory}
                    selectedCategories1={selectedCategories}
                  />
                </div>
              </div>
              <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="postWriter"
                  className="font-semibold text-para md:text-sm"
                >
                  Select Writer :
                </label>
                <select
                  id="postWriter"
                  onChange={(e) => setWriter(e.target.value)}
                  className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md focus:border-primary outline-none cursor-pointer border text-para"
                  defaultValue={blogData?.writer?._id}
                >
                  {blogData ? (
                    <option disabled >{blogData?.writer?.blogwriter}</option>
                  ) : (
                    <option >Select writer </option>
                  )}
                  {allWriter?.map((item, i) => <option key={i} value={item?._id}>{item.blogwriter}</option>)}
                </select>
              </div>
              <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="postTypes1"
                  className="font-semibold text-para md:text-sm"
                >
                  Reading time :
                </label>
                <select
                  id="postTypes1"
                  onChange={(e) => setSelectTime(e.target.value)}
                  className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md focus:border-primary outline-none cursor-pointer border text-para"
                  defaultValue={blogData?.time}
                >
                  {blogData ? (
                    <option disabled >{blogData?.time}</option>
                  ) : (
                    <option >Select time </option>
                  )}
                  <option value="1">1 min</option>
                  <option value="2">2 min</option>
                  <option value="4">4 min</option>
                  <option value="5">5 min</option>
                  <option value="6">6 min</option>
                  <option value="7">7 min</option>
                  <option value="8">8 min</option>
                  <option value="9">9 min</option>
                  <option value="10">10 min</option>
                  <option value="11">11 min</option>
                  <option value="12">12 min</option>
                  <option value="13">13 min</option>
                  <option value="14">14 min</option>
                  <option value="15">15 min</option>
                  <option value="20">20 min</option>
                  <option value="25">25 min</option>
                  <option value="30">30 min</option>
                </select>
              </div>
              <div className="border-b-2 mb-2">
                <div className=" flex md:flex-row flex-col xl:items-center gap-3 mt-5">
                  <div>
                    <label htmlFor="packageLocation" className=" font-semibold text-para">Location:</label>
                  </div>
                  <div className="flex gap-4 items-center flex-wrap">
                    {(blogData && (countries)) && (<select id="packageLocation" className=' md:w-[130px] w-full md:ml-4 pl-2 rounded-md outline-none border-black border h-7 text-para' onChange={(e) => { handleSelectCountry(e.target.value); setSelesctedCountry(e.target.value) }} defaultValue={blogData?.location?.state?.country?._id}>
                       <option value="">
                        {blogData ? blogData?.country?.name : "select Country"}</option>
                      {countries?.map(country => (
                        <option key={country._id} className='border-none bg-slate-100 text-black' value={country._id}>{country.name}</option>
                      ))}
                    </select>)}
                    {(!blogData && countries) && (<select id="packageLocation" className=' md:w-[130px] w-full md:ml-4 pl-2 rounded-md outline-none border-black border h-7 text-para' onChange={(e) => { handleSelectCountry1(e.target.value); setSelesctedCountry(e.target.value) }}>
                      <option value="">Select country</option>
                      {countries?.map(country => (
                        <option key={country._id} className='border-none bg-slate-100 text-black' value={country._id}>{country.name}</option>
                      ))}
                    </select>)}
                    {(blogData && (states || cityPopup)) && (<select onChange={(e) => { handleSelectState(e.target.value); setSelesctedState(e.target.value) }} className=' md:w-[130px] w-full md:ml-4 px-2 rounded-md outline-none border-black border h-7 text-para' defaultValue={blogData?.location?.state?._id}>
                      <option value="">{blogData ? blogData?.state?.name : "select Country"}</option>
                      {states?.map(state => (
                        <option key={state._id} className='border-none bg-slate-100 text-black' value={state._id}>{state.name}</option>
                      ))}
                    </select>)}
                    {(!blogData && (states)) && (<select onChange={(e) => { handleSelectState1(e.target.value); setSelesctedState(e.target.value) }} className='md:w-[130px] w-full md:ml-4 px-2 rounded-md outline-none border-black border h-7 text-para'>
                      <option value="">Select state</option>
                      {states?.map(state => (
                        <option key={state._id} className='border-none bg-slate-100 text-black' value={state._id}>{state.name}</option>
                      ))}
                    </select>)}
                    {(blogData && (cities || cityPopup)) && (<select onChange={(e) => handleLocation(e.target.value)} id="packageLocation" className='md:w-[130px] w-full md:ml-4 rounded-md outline-none border-black px-2 border h-7 text-para' defaultValue={blogData?.location?._id}>
                      <option value="">{blogData ? blogData?.location?.name : "select Country"}</option>
                      {cities?.map(city => (
                        <option key={city._id} className='border-none bg-slate-100 text-black' value={city._id}>{city.name}</option>
                      ))}
                    </select>)}
                    {(!blogData && (cities)) && (<select onChange={(e) => handleLocation1(e.target.value)} id="packageLocation" className='md:w-[130px] w-full md:ml-4 rounded-md outline-none border-black px-2 border h-7 text-para'>
                      <option value="">Select city</option>
                      {cities?.map(city => (
                        <option key={city._id} className='border-none bg-slate-100 text-black' value={city._id}>{city.name}</option>
                      ))}
                    </select>)}
                  </div>
                </div>
                <span className="text-xs text-red-700 capitalize pl-5">{locationValidate}</span>
              </div>
              <div>
                <label htmlFor="textarea" className=" font-semibold">
                  Description
                </label>
                <textarea
                  name=""
                  id="textarea"
                  className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
                  placeholder="Enter Description Here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className=" font-semibold mb-2">Content Summary</h3>
            <QuillNoSSRWrapper
              className="rounded md:h-48 h-40 md:mb-16 mb-20 "
              theme="snow"
              value={editorHtmlDescription}
              onChange={setEditorHtmlDescription}
              placeholder="Enter Your Answer"
              modules={modules}
            />
          </div>
          <div className="flex md:flex-row flex-col md:gap-5 gap-3">
            <button
              className="bg-navyblack text-white px-3 py-2 w-full md:w-auto rounded"
              onClick={handleUpload}
            >
              {blogData ? "Update " : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
