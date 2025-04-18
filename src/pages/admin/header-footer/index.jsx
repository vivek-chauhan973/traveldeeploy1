import Layout from "@/components/admin/Layout";
import dynamic from "next/dynamic";
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
import { useState } from "react";
import { useEffect } from "react";
import { header } from "@/components/Header/DesktopHeader/DesktopHeaderPages/Data";

const MdDeleteForever = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdDeleteForever)
);
const FaEdit = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaEdit)
);

const fetchScript=async ()=>{
    const data=await fetch("/api/header/header-script",{method:"GET"})

    return await data.json()
}

export default function Index() {
  const [headerScriptDataArray, setHeaderScriptDataArray] = useState([]);
  

  const [headertitle, setHeadertitle] = useState("");
  const [headercode, setHeadercode] = useState("");
  // fetching the header script data

  useEffect(()=>{
    fetchScript().then(res=>{console.log("header script is here ----> ",res);
        setHeaderScriptDataArray(res?.data||[])
    })
  },[])

  const handleAdd = async () => {
    // Optionally validate
   

const res=await fetch(`/api/header/header-script`,{
    method:"POST",
    header:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({headertitle:headertitle,headercode:headercode})
})
const submittedData=await res.json();
if(submittedData?.status){
    alert(submittedData?.message)
    fetchScript().then(res=>{
        setHeaderScriptDataArray(res?.data||[])
    })
}   
    
  };

  return (
    <Layout>
      <div>
        <div className="flex items-center gap-5 text-primary mb-12 mt-5">
          <FontAwesomeIcon icon={faCube} className="text-2xl" />
          <p className="md:text-[28px] text-xl text-black">Header/Footer</p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className=" text-teal-700 text-xl"
          />
        </div>
        <div>
          <div>
            {/* header promotion band */}
            <div className="pb-5">
              <div>
                <div className="flex md:flex-row flex-col  md:items-center pb-2">
                  <label htmlFor="header-band" className="mr-1">
                    Header Band :{" "}
                  </label>
                  <div className="flex justify-start gap-5 p-2 items-center even:bg-slate-100">
                    <div className=" rounded-md">
                      <span>Call Us Free Now,</span>
                      <input
                        value="22554527852"
                        type="number"
                        className="border h-8 px-2 text-para grow focus:border-primary font-sans outline-none"
                        placeholder="Enter Call Support"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="font1 hover:text-primary cursor-pointer"
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start flex-col gap-5 md:gap-2">
                  <div className="w-full">
                    <label htmlFor="header-band">Title</label>
                    <input
                      type="text"
                      name="headertitle"
                      value={headertitle}
                      onChange={(e)=>setHeadertitle(e.target.value)}
                      className="rounded-md h-10 px-2 mt-2 w-full border focus:border-primary outline-none"
                      id="header-band"
                      placeholder="Enter the Name"
                    />
                  </div>
                  <div className="w-full">
                    <p>Script Code</p>
                    <textarea
                      className="border rounded-md mt-2 h-24 px-2 w-full focus:border-primary outline-none resize-none"
                      id="header-script"
                      name="headercode"
                      value={headercode}
                      onChange={(e)=>setHeadercode(e.target.value)}
                      placeholder="Enter Script code here."
                      minLength={23}
                    />
                  </div>
                  <button
                    onClick={handleAdd}
                    className="bg-navyblack py-2 px-3 w-full text-white rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          
          </div>
          {/* band and sub menu data show here */}
          <div className="">
            <div className=" rounded-md grow border p-2 bg-white w-full min-h-90">
              <div className="border-b py-2">
                <p className="font-semibold">Sub Menu (10)</p>
              </div>
              <div className=" overflow-y-scroll">
                <div className="flex justify-between p-2  even:bg-slate-100">
                  <p>Google Analytics</p>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex justify-between p-2  even:bg-slate-100">
                  <p>Google Analytics</p>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex justify-between p-2  even:bg-slate-100">
                  <p>Google Analytics</p>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        {/* ===========================================Footer menu is here========================= */}
        <div>
          <p className="font-semibold text-[28px] mb-2"> Footer</p>
        </div>
        <div className="pb-5">
          <div>
            <label htmlFor="header-band">Footer Menu :</label>
            <div className="flex items-start flex-col md:flex-row gap-3 md:gap-2 ">
              <input
                type="text"
                className="rounded-md h-10 px-2 w-full border focus:border-primary outline-none"
                id="header-band"
                placeholder="Enter the Name"
              />
              <input
                type="text"
                className="rounded-md h-10 px-2 w-full border focus:border-primary outline-none"
                id="header-band"
                placeholder="Enter the Link"
              />
              <button className="bg-navyblack py-2 px-3 w-full text-white rounded-md">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" rounded-md grow border p-2 bg-white w-full min-h-90">
            <div className="border-b py-2">
              <p className="font-semibold">Footer Menu (10)</p>
            </div>
            <div className=" overflow-y-scroll">
              <div className="flex justify-between p-2  even:bg-slate-100">
                <p>Google Analytics</p>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-between p-2  even:bg-slate-100">
                <p>Google Analytics</p>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-between p-2  even:bg-slate-100">
                <p>Google Analytics</p>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="font1 hover:text-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="my-5" /> */}
      {/* <div>
                    <div>
                        <div>
                            <p className="font-semibold text-[28px] mb-3">Social Link</p>
                        </div>
                        <form className="flex flex-wrap xl:gap-10 gap-5">
                            <div className="flex gap-1 items-center pl-3">
                                <input
                                    type="checkbox"
                                    className="accent-navyblack"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                />
                                <label for="vehicle1" className="text-sm font-medium xl:mr-0 mr-5"> Twitter</label><br />
                                <input
                                    className="h-8 rounded-md px-2 border focus:border-primary outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex gap-1 items-center pl-3 flex-wrap">
                                <input
                                    type="checkbox"
                                    className="accent-navyblack"
                                    id="vehicle2"
                                    name="vehicle2"
                                    value="Car"
                                />
                                <label for="vehicle2" className="text-sm font-medium xl:mr-0 mr-1"> Facebook</label><br />
                                <input
                                    className="h-8 rounded-md px-2 border focus:border-primary outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex gap-1 items-center pl-3 flex-wrap">
                                <input
                                    type="checkbox"
                                    className="accent-navyblack"
                                    id="vehicle3"
                                    name="vehicle3"
                                    value="Boat"
                                />
                                <label for="vehicle3" className="text-sm font-medium"> Instagram</label><br /><br />
                                <input
                                    className="h-8 rounded-md px-2 border focus:border-primary outline-none"
                                    type="text"
                                />
                            </div>
                            <div>
                                <button type="submit" className="bg-navyblack px-5 py-2 text-white rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> */}
    </Layout>
  );
}
