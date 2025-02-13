import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/admin/Layout";
import CarBanner from "@/components/car-rental/CarHome/Banner";
import HeadingDesc from "@/components/car-rental/CarHome/HeadingDesc";
import CarCarouselBanner from "@/components/car-rental/CarHome/CarCarouselBanner";
import CarStaticBanner from "@/components/car-rental/CarHome/CarStaticBanner";
const fetchCarHomeData = async () => {
  const data = await fetch("/api/cars/carhome/seoData");
  return await data.json();
};
const fetchAllCarPackages=async ()=>{
  try {
    const response = await fetch("/api/cars/package/get-packages");
    const data = await response.json();
     return data;
  } catch (error) {
    console.error("Error fetching itinerary data:", error);
  }
}
const fetchPromoList = async () => {
  const response = await fetch(
    `/api/public/package-state/carpromo/fetchpromocat?selectType=city`
  );
  const data = await response.json();
  return data;
};
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("category1");
  const [selectedOptions, setSelectedOptions] = useState({
    category1: [],
    category2: [],
  });
  const [printValue, setPrintValue] = useState(0);
  const [options, setOptions] = useState({
    category1: [],
    category2: [],
  });
  //car home seo field here

  const [title, setTitle] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");

  // Track when the component has fully hydrated on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that the client has hydrated

    fetchPromoList().then((res) => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category1: res?.responseData,
      }));
      //   console.log("res---> ",res)
    });
    fetchAllCarPackages().then(res=>{
      setOptions((prevOptions) => ({
        ...prevOptions,
        category2: res?.packages,
      }));
    })
    // fetchPromoList().then(res=>console.log("res====> car city promo ",res))
    fetchCarHomeData().then((res) => {
      setTitle(res?.data?.[0]?.title);
      setCanonicalUrl(res?.data?.[0]?.canonicalUrl);
      setDescription(res?.data?.[0]?.description);
      setKeyword(res?.data?.[0]?.keyword);
    });
  }, []);

  const maxSelections = 15; // Maximum number of options that can be selected for each category
  const filteredOptions = options[selectedCategory]?.filter((option) => {
    if(selectedCategory==="category1"){
      return option?.selectedItem?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return option?.name?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleCheckboxChange = (option) => {
    if (selectedOptions[selectedCategory].includes(option)) {
      // Uncheck if already selected
      setSelectedOptions((prevSelected) => ({
        ...prevSelected,
        [selectedCategory]: prevSelected[selectedCategory].filter(
          (item) => item !== option
        ),
      }));
    } else if (selectedOptions[selectedCategory].length < maxSelections) {
      // Only allow selection if below the limit
      setSelectedOptions((prevSelected) => ({
        ...prevSelected,
        [selectedCategory]: [...prevSelected[selectedCategory], option],
      }));
    }
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSearchQuery("");
  };

  const handlePayloadSend = async () => {
    const payload = {
      category: selectedCategory,
      selectedOptions: selectedOptions[selectedCategory],
    };
    try {
      const data = await fetch("/api/cars/carhome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (data) {
        alert("Data added successfully");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  // Don't render anything until the component has hydrated on the client
  if (!isClient) return null;

  const handleSaveCarSeoData = async () => {
    if (!title || !canonicalUrl || !description || !keyword) {
      return alert("each field is required !!!!");
    }
    const seoData = { title, canonicalUrl, description, keyword };
    // console.log("seo data -----> ", seoData);
    try {
      const data = await fetch("/api/cars/carhome/seoData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(seoData),
      });
      // console.log("seo data ----> ", data?.ok);
      if (data.ok) {
        alert("Data add succesfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };
  //   console.log("options is here----> ",selectedOptions)
  return (

      <Layout>
        <div className="">
          <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
            <FontAwesomeIcon icon={faCube} className="text-2xl" />
            <p className="md:text-[28px] text-xl text-black">Car Home Master</p>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className=" text-teal-700 text-xl"
            />
          </div>
          <div className=" w-full grid xl:grid-cols-2 grid-cols-1 gap-5">
            <div className="bg-white shadow-lg rounded-lg p-5">
              <div>
                <h3 className=" font-semibold mb-1"> Select Car City</h3>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mb-4 p-2 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                >
                  <option value="category1">Section 1</option>
                  <option value="category2">Section 2</option>
                </select>
              </div>
              <div>
                <h3 className=" font-semibold mb-1">Search City</h3>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                />
              </div>
              <div className="max-h-64 overflow-y-auto">
                {filteredOptions?.length > 0 ? (
                  filteredOptions?.map((option, index) => {
                    // console.log("option ---> ",option)
                    return (
                      <label
                        key={index}
                        className="flex items-center mb-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions[selectedCategory].includes(
                            option._id
                          )}
                          onChange={() => handleCheckboxChange(option?._id)}
                          disabled={
                            selectedOptions[selectedCategory].length >=
                              maxSelections &&
                            !selectedOptions[selectedCategory].includes(
                              option._id
                            )
                          }
                          className="mr-2 accent-navyblack"
                        />
                        {selectedCategory === "category1" && (
                          <span
                            className={
                              selectedOptions[selectedCategory].length >=
                                maxSelections &&
                              !selectedOptions[selectedCategory].includes(
                                option
                              )
                                ? "text-gray-400 cursor-not-allowed"
                                : ""
                            }
                          >
                            {option?.selectedItem
                            }
                          </span>
                        )}
                        {selectedCategory === "category2" && (
                          <span
                            className={
                              selectedOptions[selectedCategory].length >=
                                maxSelections &&
                              !selectedOptions[selectedCategory].includes(
                                option
                              )
                                ? "text-gray-400 cursor-not-allowed"
                                : ""
                            }
                          >
                            {option?.name}
                          </span>
                        )}
                      </label>
                    );
                  })
                ) : (
                  <p className="text-gray-500">No options found.</p>
                )}
              </div>
              {selectedOptions[selectedCategory].length >= maxSelections && (
                <p className="text-red-500 text-sm mt-2">
                  You can only select up to {maxSelections} options.
                </p>
              )}
              <button
                onClick={handlePayloadSend}
                className="mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full"
              >
                Send Payload
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-5">
              <h2 className="text-base font-semibold mb-4">Seo Field</h2>
              <div>
                <h3 className=" font-semibold">Title</h3>
                <input
                  className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Title Here"
                />
              </div>
              <div>
                <label htmlFor="textarea" className="mt-3 font-semibold">
                  Description
                </label>
                <textarea
                  name=""
                  id="textarea"
                  className="mt-1 w-full border rounded h-28 px-2 focus:border-primary outline-none"
                  placeholder="Enter Description Here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <h3 className=" font-semibold">Canonical URL</h3>
                <input
                  className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="Enter URL Here"
                />
              </div>
              <div>
                <h3 className=" font-semibold">Keyword</h3>
                <input
                  className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Enter Keyword Here"
                />
              </div>
              <div className="flex justify-end items-center">
                <button
                  onClick={handleSaveCarSeoData}
                  className="px-5 py-1.5 bg-navyblack text-white rounded-md mt-4"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <CarBanner />
          <CarCarouselBanner />
          <HeadingDesc />
          <CarStaticBanner/>
        </div>
      </Layout>

  );
};

export default Home;
