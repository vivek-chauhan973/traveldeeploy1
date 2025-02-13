import Layout from "@/components/admin/Layout";
import { useEffect, useRef, useState } from "react";
import FaqSection from "@/components/admin/ItineraryPromo/FaqSection";
import Editor from "@/components/admin/ItineraryPromo/Editor";

import Image from "next/image";
import Index from "@/components/dy/Index";
import SeoPopupField from "@/components/dy/SeoPopupField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import mongoose from "mongoose";
export default function PromoManage() {
  const ref = useRef(null);
  const [promoTxt, setPromoTxt] = useState(null);
  const [catoryorstate, setCatoryorstate] = useState(false);
  const [selectCatagoryOrState, setSelectCatagoryOrState] = useState("");
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [title, setTitle] = useState(null);
  const [posterTitle, setPosterTitle] = useState(null);
  const [seofieldpopup, setSeofieldpopup] = useState(false);
  const [alt, setAlt] = useState(null);
  const [posterAlt, setPosterAlt] = useState(null);
  const [statePackages, setStatePackages] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [faqData, setFaqData] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [image1, setImage1] = useState(null);
  const [posterImage1, setPosterImage1] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [seoData, setSeoData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [tableColumn, setTableColumn] = useState([]);
  useEffect(() => {
    if (selectCatagoryOrState === "state") {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/public/states");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          // console.log("categories is here : ",data)
          setStatePackages(data?.states);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
    if (selectCatagoryOrState === "category") {
      const fetchCatogories = async () => {
        try {
          const categoriesList = await fetch(
            "/api/package-setting/category/get-categories"
          );
          const categories = await categoriesList.json();
          setStatePackages(categories?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchCatogories();
    }
    if (selectCatagoryOrState === "country") {
      const fetchCountries = async () => {
        try {
          const res = await fetch("/api/location?type=country", {
            method: "GET",
          });
          const data = await res.json();
          setStatePackages(data?.result);
          console.log("all countries is here", data);
        } catch (err) {
          console.log(err);
          return [];
        }
      };
      fetchCountries();
    }
    if (selectCatagoryOrState === "city") {
      const fetchCountries = async () => {
        try {
          const res = await fetch("/api/location/city");
          const data = await res.json();
          setStatePackages(data?.result);
          // console.log("all countries is here",data);
        } catch (err) {
          console.log(err);
          return [];
        }
      };
      fetchCountries();
    }
  }, [selectCatagoryOrState]);

  useEffect(() => {
    const getPromoData = async () => {
      try {
        const objectId = new mongoose.Types.ObjectId(
          "64db5b8f60a6a2145f56e39d"
        );

        const res = await fetch(
          `/api/public/package-state/${selectedLocation || objectId}`
        );
        const data = await res.json();
        // console.log("data", data);
        return data;
      } catch (error) {
        console.error("Error fetching promo text", error);
      }
    };

    if (statePackages?.length > 0) {
      getPromoData().then((res) => setPromoTxt(res?.data));
    }
  }, [statePackages, selectedLocation]);
  const handleChange = (e) => {
    const data = e.target.files[0];
    setImage1(data);
    if (data) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(data);
    }
  };
  const handleChange1 = (e) => {
    const data = e.target.files[0];
    setPosterImage1(data);
    if (data) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile1(e.target.result);
      };
      reader.readAsDataURL(data);
    }
  };
  // console.log("promo text is here-----> ",promoTxt)
  useEffect(() => {
    setTitle(promoTxt?.title || "");
    setAlt(promoTxt?.alt || "");
    setFile(promoTxt?.image || "");
    setPosterAlt(promoTxt?.posterAlt || "");
    setPosterTitle(promoTxt?.posterTitle || "");
    setFile1(promoTxt?.posterPath || "");
    setTableData(promoTxt?.tableData || []);
    setSeoData(promoTxt?.seoField || {});
    setTableColumn(promoTxt?.tableColumn || []);
    setEditorContent(promoTxt?.description || "<p></p>");
  }, [promoTxt]);
  useEffect(() => {
    setFile(image1);
  }, [image1]);

  const handleSelectChange = async (e) => {
    if (e.target.value !== "spaciality") {
      const selectedData = e.target.value?.split(",");
      setSelectedLocation(selectedData?.[1]);
      setSelectedItem(selectedData?.[0]);
      console.log("selectedData", selectedData);

    } else {
      const objectId = new mongoose.Types.ObjectId("64db5b8f60a6a2145f56e39d");
      setSelectedLocation(objectId);
      setSelectedItem(e.target.value);
    }
  };

  const handleFaqChange = (faqs) => {
    setFaqData(faqs);
  };
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  const handleSubmit = async (e) => {
    // if (selectedLocation.length === 0) {
    //     return alert("select state or category or state");
    // }
    const formData = new FormData();
    formData.append("file", image1);
    formData.append("title", title);
    formData.append("alt", alt);
    formData.append("faqData", JSON.stringify(faqData));
    formData.append("editorContent", editorContent);
    formData.append("tableData", JSON.stringify(tableData));
    formData.append("seoData", JSON.stringify(seoData));
    formData.append("tableColumn", JSON.stringify(tableColumn));
    formData.append("selectType", selectCatagoryOrState);
    formData.append("selectedItem", selectedItem);
    console.log("content", editorContent);
    try {
      const response = await fetch(
        `/api/public/package-state/${selectedLocation}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add promo");
      }

      const data = await response.json();
      setFile(null);
      setTitle("");
      setAlt("");
      setFaqData([]);
      setEditorContent("");
      setSelectedLocation("");
      setSeoData({});
      setTableData([]);
      setTableColumn([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // poster logic is here

  const handlePosterUpload = async () => {
    const formData1 = new FormData();
    formData1.append("file", posterImage1);
    formData1.append("posterTitle", posterTitle);
    formData1.append("posterAlt", posterAlt);

    try {
      const response = await fetch(
        `/api/public/package-state/poster?id=${selectedLocation}`,
        {
          method: "POST",
          body: formData1,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add promo");
      }

      const data = await response.json();
      setFile1(null);
      setPosterTitle("");
      setPosterAlt("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("selectedLocation", selectedLocation);


  return (

      <Layout>
        <div>
          <div className="flex items-center md:gap-5 gap-3 text-primary pb-5">
            <FontAwesomeIcon icon={faCube} className="text-2xl" />
            <p className="md:text-[28px] text-xl text-black">
              Promo Management
            </p>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className=" text-teal-700 text-xl"
            />
          </div>
          <div>
            <div className="flex flex-col mx-1 ">
              <div className="flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="cityBages"
                  className="font-semibold text-para md:text-base"
                >
                  Select :
                </label>
                <select
                  className="mt-1 md:ml-2 h-7  md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                  onChange={(e) => {
                    setCatoryorstate(true);
                    setSelectCatagoryOrState(e.target.value);
                  }}
                >
                  <option value="">Select One</option>
                  <option value="category">Category</option>
                  <option value="city">City</option>
                  <option value="country">Country</option>
                  <option value="state">State</option>
                  <option value="spaciality promo">Spaciality Promo</option>
                </select>
                {catoryorstate && (
                  <select
                    id="packageCategory"
                    className="mt-1 md:ml-2 capitalize h-7 md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                    onChange={(e) => {
                      handleSelectChange(e);
                    }}
                  >
                    {selectCatagoryOrState === "category" && (
                      <option disabled selected>
                        Select category
                      </option>
                    )}
                    {selectCatagoryOrState === "state" && (
                      <option disabled selected>
                        Select state
                      </option>
                    )}
                    {selectCatagoryOrState === "country" && (
                      <option disabled selected>
                        Select country
                      </option>
                    )}
                    {selectCatagoryOrState === "city" && (
                      <option disabled selected>
                        Select city
                      </option>
                    )}
                    {selectCatagoryOrState === "spaciality promo" && (
                      <option disabled selected>
                        Select spaciality promo
                      </option>
                    )}

                    {/* Conditionally render options based on selected category/state/country */}
                    {selectCatagoryOrState === "country" &&
                      statePackages?.map((state, i) => (
                        <option
                          key={i}
                          className="border-none bg-slate-50 text-black capitalize"
                          value={`${state.name},${state._id}`}
                          data-pageurl={state.url}
                        >
                          {state.name}
                        </option>
                      ))}

                    {selectCatagoryOrState === "state" &&
                      statePackages?.map((state, i) => (
                        <option
                          key={i}
                          className="border-none bg-slate-50 text-black capitalize"
                          value={`${state.name},${state._id}`}
                          data-pageurl={state.url}
                        >
                          {state.name}
                        </option>
                      ))}

                    {selectCatagoryOrState === "category" &&
                      statePackages?.map((state, i) => (
                        <option
                          key={i}
                          className="border-none bg-slate-50 text-black capitalize"
                          value={`${state.category},${state._id}`}
                        >
                          {state.category}
                        </option>
                      ))}

                    {selectCatagoryOrState === "city" &&
                      statePackages?.map((state, i) => (
                        <option
                          key={i}
                          className="border-none bg-slate-50 text-black capitalize"
                          value={`${state.name},${state._id}`}
                          data-pageurl={state.url}
                        >
                          {state.name}
                        </option>
                      ))}
                    {selectCatagoryOrState === "spaciality promo" && (
                      <option
                        value="spaciality"
                        className="border-none bg-slate-50 text-black capitalize"
                      >
                        spaciality
                      </option>
                    )}
                  </select>
                )}
                <button
                  className="mt-1 md:ml-2  bg-navyblack py-1 px-4 rounded-md text-white text-sm"
                  onClick={() => setSeofieldpopup(true)}
                >
                  Add Seo Field
                </button>
              </div>
              <div></div>
              {seofieldpopup && (
                <SeoPopupField
                  setSeofieldpopup={setSeofieldpopup}
                  selectedItem={selectedItem}
                  setSeoData={setSeoData}
                  seoData={seoData}
                />
              )}
            </div>
            <div>
              <div className="bg-white rounded p-4">
                <div>
                  <p className="text-[15px] font-semibold">
                    Package Image Upload
                  </p>
                </div>
                <div className="lg:flex gap-5">
                  <div className="p-7 flex-1 border border-slate-500/45 rounded">
                    <div className="w-2/3">
                      {file && (
                        <Image
                          className="w-28 h-28 shadow-md mb-2"
                          width="123"
                          height="150"
                          src={file}
                          alt="Preview"
                        />
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        onChange={handleChange}
                        // value={file}
                        ref={ref}
                        className="file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-black/20 file:text-black/50
                                                hover:file:bg-black/75 hover:file:text-white cursor-pointer"
                      />
                    </div>
                    <div className="my-3">
                      <p>Title</p>
                      <input
                        className="border px-2 rounded-sm"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Alt</p>
                      <input
                        className="border px-2 rounded-sm"
                        type="text"
                        value={alt}
                        onChange={(e) => setAlt(e.target.value)}
                      />
                    </div>
                    <div className="flex mt-8">
                      <span className="md:text-sm text-xs">Upload Image (1300 X 450px)</span>
                      <sup className="text-red-600 text-para">*</sup>
                    </div>
                  </div>
                  <div className="p-7 flex-1 border border-slate-500/45 rounded lg:mt-0 mt-5">
                    <div className="w-2/3">
                      {file1 && (
                        <Image
                          className="w-28 h-28 shadow-md mb-2"
                          width="123"
                          height="150"
                          src={file1}
                          alt="Preview"
                        />
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        onChange={handleChange1}
                        // value={file}
                        ref={ref}
                        className="file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-black/20 file:text-black/50
                                                hover:file:bg-black/75 hover:file:text-white cursor-pointer"
                      />
                    </div>
                    <div className="my-3">
                      <p>Title</p>
                      <input
                        className="border px-2 rounded-sm"
                        type="text"
                        value={posterTitle}
                        onChange={(e) => setPosterTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Alt</p>
                      <input
                        className="border px-2 rounded-sm"
                        type="text"
                        value={posterAlt}
                        onChange={(e) => setPosterAlt(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <button
                        onClick={handlePosterUpload}
                        className=" bg-navyblack text-white px-2 py-1 rounded "
                      >
                        Upload
                      </button>
                    </div>
                    <div className="flex">
                      <span className="md:text-sm text-xs">Upload Image (600 X 390px)</span>
                      <sup className="text-red-600 text-para">*</sup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-5 mt-5">
                <div>
                  <p className="text-[15px] font-semibold">Promo Text</p>
                  {/* <p>{promoTxt?.message}</p> Adjusted to render a specific property */}
                </div>
                <div>
                  <Editor
                    onChange={handleEditorChange}
                    editorData={promoTxt?.description}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Index
                setTableData={setTableData}
                tableData={tableData}
                setTableColumn={setTableColumn}
                tableColumn={tableColumn}
              />
            </div>
            <div className="rounded p-4 bg-white mt-5">
              <div className="text-[15px] font-semibold">
                <p>Faq Section</p>
              </div>
              <div>
                <FaqSection
                  onChange={handleFaqChange}
                  faqData={promoTxt?.faq}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className=" w-full bg-black font-semibold text-white py-3 mt-5 rounded"
            >
              ADD
            </button>
          </div>
        </div>
      </Layout>
 
  );
}
