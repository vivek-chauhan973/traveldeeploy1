import Layout from "@/components/admin/Layout";
import { useEffect, useRef, useState } from "react";
import FaqSection from "@/components/admin/ItineraryPromo/FaqSection";
import Editor from "@/components/admin/ItineraryPromo/Editor";
import dynamic from 'next/dynamic';

// Dynamically import icons
const LuPackagePlus = dynamic(() => import('react-icons/lu').then(mod => mod.LuPackagePlus));
const HiOutlineArrowNarrowRight = dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineArrowNarrowRight));

import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Image from 'next/image';
import Index from "@/components/dy/Index";
import SeoPopupField from "@/components/dy/SeoPopupField";


export default function PromoManage() {
    const ref = useRef(null);
    const [promoTxt, setPromoTxt] = useState(null);
    const [catoryorstate,setCatoryorstate]=useState(false);
    const [selectCatagoryOrState,setSelectCatagoryOrState]=useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [seofieldpopup,setSeofieldpopup]=useState(false);
    const [alt, setAlt] = useState(null);
    const [statePackages, setStatePackages] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [faqData, setFaqData] = useState(null);
    const [editorContent, setEditorContent] = useState("");
     const [image1,setImage1]=useState(null);
     const [selectedItem,setSelectedItem]=useState("");
     const [seoData,setSeoData]=useState({});
     const [tableData,setTableData]=useState([]);
    useEffect(() => {
        if(selectCatagoryOrState==="state"){
        const fetchData = async () => {
           
            try {
                const response = await fetch('/api/public/states');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log("categories is here : ",data)
                setStatePackages(data?.states);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        

        fetchData();}
        if(selectCatagoryOrState==="category"){
        const fetchCatogories=async ()=>{
           try {
           
                const categoriesList = await fetch('/api/package-setting/category/get-categories');
            const categories = await categoriesList.json();
            setStatePackages(categories?.data);
            
            

           } catch (error) {
            console.error('Error fetching data:', error);
           }
        }
        fetchCatogories();}
        if(selectCatagoryOrState==="country"){
            const fetchCountries = async () => {
                try {
                    const res = await fetch('/api/location?type=country', { method: 'GET' });
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
                const res = await fetch(`/api/public/package-state/${selectedLocation}`);
                const data = await res.json();
                // console.log("data", data);
                return data;
            } catch (error) {
                console.error("Error fetching promo text", error);
            }
        };

        if (statePackages.length > 0) {
            getPromoData().then(res => setPromoTxt(res?.data));

        }
    }, [statePackages, selectedLocation]);
    const handleChange = (e) => {
        const data = e.target.files[0];
        setImage1(data)
    if (data) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(data);
    }
    };
    useEffect(() => {
        setTitle(promoTxt?.title || "");
        setAlt(promoTxt?.alt || "");
        setFile(promoTxt?.image || "");
        setTableData(promoTxt?.tableData || [])
        setSeoData(promoTxt?.seoField|| {})
        setEditorContent(promoTxt?.description||"<p></p>");
    }, [promoTxt])
    console.log("promotext",promoTxt)
    useEffect(()=>{
        setFile(image1)
    },[image1])

    // console.log("selected Item ::",selectedItem)
    const handleSelectChange = async (e) => {
      const selectedData=(e.target.value)?.split(",");
    //   console.log("selectedData",selectedData);
      setSelectedLocation(selectedData?.[1]);
      setSelectedItem(selectedData?.[0])
       
    };

    const handleFaqChange = (faqs) => {
        setFaqData(faqs);
    };
    // console.log("selected location ::",selectedLocation)
    const handleEditorChange = (content) => {

        // console.log("content",content)
        setEditorContent(content);
    };
    // console.log("your selected catory is : ",selectCatagoryOrState)
    // console.log("data of seofield",tableData)
    const handleSubmit = async (e) => {
        if(selectedLocation.length===0){
            return alert("select state or category or state");
        }
        const formData = new FormData();
        formData.append('file', image1);
        formData.append('title', title);
        formData.append('alt', alt);
        formData.append('faqData', JSON.stringify(faqData));
        formData.append('editorContent', editorContent);
        formData.append('tableData', JSON.stringify(tableData));
        formData.append('seoData', JSON.stringify(seoData));
        console.log("content",editorContent)
        try {
            const response = await fetch(`/api/public/package-state/${selectedLocation}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add promo');
            }

            const data = await response.json();
            console.log('Success:', data);
          // Reset form fields after successful submission
            setFile(null);
            setTitle("");
            setAlt("");
            setFaqData([]);
            setEditorContent("");
            setSelectedLocation("");
            setSeoData({});
            setTableData([]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
// console.log("table data :: ",tableData)
    return (
        <AppProvider>
            <Layout>
                <div>
                    
                    <div className="flex items-center gap-5 text-primary pb-3">
                        <LuPackagePlus size={24} className="font-semibold" />
                        <p className="text-[28px] text-black">Promo Manage</p>
                        <HiOutlineArrowNarrowRight size={28} className="text-teal-700" />
                    </div>
                    <div>
                        <div className="flex justify-between mx-1">
                            <div className="flex items-center gap-2 mb-4">
                                <label htmlFor="cityBages" className="font-semibold text-md">Select :</label>
                                <select  className='ml-4 h-7 xl:w-44 rounded-md outline-none border-slate-500/45 cursor-pointer border text-para'
                                onChange={(e)=>{setCatoryorstate(true);setSelectCatagoryOrState(e.target.value)}}>
                                    <option value="">select one</option>
                                    <option value="category">category</option>
                                    <option value="state">state</option>
                                    <option value="country">country</option>
                                </select>
                                {catoryorstate&&<select
                                    id="packageCategory"
                                    className='ml-4 h-7 xl:w-44 rounded-md outline-none border-slate-500/45 cursor-pointer border text-para'
                                    onChange={(e)=>{handleSelectChange(e);}}
                                    
                                >
                                    {selectCatagoryOrState==="category"&&<option disabled selected>Select category</option>}
                                    {selectCatagoryOrState==="state"&&<option disabled selected>Select state</option>}
                                    {selectCatagoryOrState==="country"&&<option disabled selected>Select country</option>}
                                    {selectCatagoryOrState==="country"&&statePackages.map((state, i) => (
                                        <option
                                            key={i}
                                            className='border-none bg-slate-50 text-black'
                                            value={`${state.name},${state._id}`}
                                            data-pageurl={state.url}
                                        >
                                            {state.name}
                                        </option>
                                    ))}
                                    {selectCatagoryOrState==="state"&&statePackages.map((state, i) => (
                                        <option
                                            key={i}
                                            className='border-none bg-slate-50 text-black'
                                            value={`${state.name},${state._id}`}
                                            data-pageurl={state.url}
                                        >
                                            {state.name}
                                        </option>
                                    ))}
                                    {selectCatagoryOrState==="category"&&statePackages.map((state, i) => (
                                        <option
                                            key={i}
                                            className='border-none bg-slate-50 text-black'
                                            value={`${state.category},${state._id}`}
                                            // data-pageurl={state.url}
                                        >
                                            {state.category}
                                        </option>
                                    ))}
                                </select>}
                            </div>
                            <div>
                                <button className=" bg-green-200 py-1 px-2 rounded-md hover:bg-green-500" onClick={()=>setSeofieldpopup(true)}>Add Seo field</button>
                            </div>
                            {seofieldpopup&&<SeoPopupField setSeofieldpopup={setSeofieldpopup} selectedItem={selectedItem} setSeoData={setSeoData} seoData={seoData}/>}
                        </div>

                        <div>
                            <div className="bg-white rounded p-4">
                                <div>
                                    <p className="text-[15px] font-semibold">Package Image Upload</p>
                                </div>
                                <div className="py-10 border border-slate-500/45 px-2 rounded">
                                    <div className="w-2/3">
                                        {file && <Image className="w-20 shadow-md" width="123" height="150" src={file} alt="Preview" />}
                                        
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
                                    <div>
                                        <p>Title</p>
                                        <input
                                            className="border px-2"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Alt</p>
                                        <input
                                            className="border px-2"
                                            type="text"
                                            value={alt}
                                            onChange={(e) => setAlt(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded p-4 mt-5">
                                <div>
                                    <p className="text-[15px] font-semibold">Promo Text</p>
                                    {/* <p>{promoTxt?.message}</p> Adjusted to render a specific property */}
                                </div>
                                <div>
                                    <Editor onChange={handleEditorChange} editorData={promoTxt?.description} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Index setTableData={setTableData} tableData={tableData}/>
                        </div>

                        <div className="rounded p-4 bg-white mt-5">
                            <div className="text-[15px] font-semibold">
                                <p>Faq Section</p>
                            </div>
                            <div>
                                <FaqSection onChange={handleFaqChange} faqData={promoTxt?.faq} />
                            </div>
                        </div>
                        <div className="flex">
                            <button onClick={handleSubmit} className="grow bg-black font-semibold text-white py-3 my-5 m-8 rounded">ADD</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </AppProvider>
    );
}
