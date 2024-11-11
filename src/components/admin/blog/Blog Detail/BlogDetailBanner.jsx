import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import BlogPromoSeo from "@/components/admin/blog/Blog Promo/BlogPromoSeo";
import MultipleSelectCheckmarks from "../../itineraryCreate/CheckMarkSelect";
import { useRouter } from "next/router";

export default function BlogDetailBanner({ setActiveTab, blogData }) {
  const [file, setFile] = useState(null);
  // const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectType, setSelectType] = useState("");
  const router = useRouter();

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
    // setPreview(URL.createObjectURL(selectedFile));
  }
  const handleCategory = (category) => {
    setSelectedCategories(category);
    // if (!category?.length) {
    //     setCategoryValidate("Category is required");
    // } else {
    //     setCategoryValidate("");
    // }
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
      formData.append("blogType", selectType);
      formData.append("category", selectedCategories);
    }
    // console.log("selectedCategories -------------> ",selectedCategories)
    try {
        const res = await fetch("/api/blog/blogdetail", {
            method: "POST",
            body: formData,
        });
        const data1=await res.json()
        if (res?.ok) {
            setActiveTab("Tab2");
            alert(`File ${isUpdating ? "updated" : "uploaded"} successfully`);  
            // Optionally, reset form fields or update state after successful upload
        } else {
            alert(`File ${isUpdating ? "update" : "upload"} failed`);
        }
        
         // router.push("/admin/blog/itinerypost/"+data1?.data?._id);
    } catch (error) {
        console.error(
            `Error ${isUpdating ? "updating" : "uploading"} file:`,
            error
        );

    }
  }
  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">Blog Detail Banner</p>
        <div className="p-4">
          <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
            <div className=" flex flex-1 my-7">
              <input
                type="file"
                className="mb-4 ml-3"
                onChange={handleChange}
              />
              {/* <div>
                        {preview && (
                                        <Image
                                            className="md:w-36 w-auto h-auto shadow-md mb-4"
                                            src={preview}
                                            alt="Preview"
                                            width={150}
                                            height={200}
                                        />
                                    )}
                                </div> */}
            </div>
            <div className="flex-1 my-5">
              <div className="my-5 flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                <label
                  htmlFor="postTypes"
                  className="font-semibold text-para md:text-base"
                >
                  Select Post Types :
                </label>
                <select
                  id="postTypes"
                  onChange={(e) => setSelectType(e.target.value)}
                  className="mt-1 md:ml-2 h-8  md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                >
                  <option>Select Type</option>
                  <option value="blog">Blog</option>
                  <option value="guide">Travel Guide</option>
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
                    className="pb-2 font-semibold text-para"
                  >
                    Category :
                  </label>
                  <MultipleSelectCheckmarks
                    packageCategories={packageCategories}
                    onSelectedCategoryIdsChange={handleCategory}
                    selectedCategories1={selectedCategories}
                  />
                  {/* <span className="text-xs text-red-700 capitalize pl-5">{categoryValidate}</span> */}
                </div>
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
          <div className="flex md:flex-row flex-col md:gap-5 gap-3">
            <button
              className="bg-navyblack text-white px-3 py-2 w-full md:w-auto rounded"
              onClick={handleUpload}
            >
              {isUpdating ? "Update Image" : "Upload Image"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
