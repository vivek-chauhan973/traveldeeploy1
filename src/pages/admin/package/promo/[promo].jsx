
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
import { useRouter } from "next/router";


export default function PromoManage() {
    const router=useRouter();
    
    const {promo}=router?.query;
   
    const ref = useRef(null);
    const [promoTxt, setPromoTxt] = useState(null);
    const [catoryorstate,setCatoryorstate]=useState(false);
    const [selectCatagoryOrState,setSelectCatagoryOrState]=useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [seofieldpopup,setSeofieldpopup]=useState(false);
    const [alt, setAlt] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [faqData, setFaqData] = useState(null);
    const [editorContent, setEditorContent] = useState("");
     const [image1,setImage1]=useState(null);
     const [selectedItem,setSelectedItem]=useState("");
     const [seoData,setSeoData]=useState({});
     const [tableData,setTableData]=useState([]);
     const [tableColumn,setTableColumn]=useState([]);
     useEffect(()=>{
        setSelectedLocation(promo||"")
    },[promo])
    
    useEffect(() => {
        const getPromoData = async () => {
            try {
                const res = await fetch(`/api/public/package-state/${selectedLocation}`);
                const data = await res.json();
                
                return data;
            } catch (error) {
                console.error("Error fetching promo text", error);
            }
        };

       
            getPromoData().then(res => setPromoTxt(res?.data));

        
    }, [ selectedLocation]);
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
        setTableData(promoTxt?.tableData || []);
        setSeoData(promoTxt?.seoField|| {});
        setTableColumn(promoTxt?.tableColumn|| []);
        setEditorContent(promoTxt?.description||"<p></p>");
        setSelectCatagoryOrState(promoTxt?.selectType||"")
        setSelectedItem(promoTxt?.selectedItem||"");
    }, [promoTxt])
   
    useEffect(()=>{
        setFile(image1)
    },[image1])

    const handleSelectChange = async (e) => {
      const selectedData=(e.target.value)?.split(",");
   
      setSelectedLocation(selectedData?.[1]);
      setSelectedItem(selectedData?.[0])
       
    };

    const handleFaqChange = (faqs) => {
        setFaqData(faqs);
    };
 
    const handleEditorChange = (content) => {

      
        setEditorContent(content);
    };
   
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
        formData.append('tableColumn', JSON.stringify(tableColumn));
        formData.append('selectType',selectCatagoryOrState);
        formData.append("selectedItem",selectedItem);
        try {
            const response = await fetch(`/api/public/package-state/${selectedLocation}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add promo');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                                >
                                    <option value="">{selectCatagoryOrState}</option>    
                                </select>
                                <select
                                    id="packageCategory"
                                    className='ml-4 h-7 xl:w-44 rounded-md outline-none border-slate-500/45 cursor-pointer border text-para'
                                    onChange={(e)=>{handleSelectChange(e);}}
                                    
                                >
                                    {selectCatagoryOrState==="category"&&<option disabled selected>{selectedItem}</option>}
                                    {selectCatagoryOrState==="state"&&<option disabled selected>{selectedItem}</option>}
                                    {selectCatagoryOrState==="country"&&<option disabled selected>{selectedItem}</option>}
                                </select>
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
                            <Index setTableData={setTableData} tableData={tableData} setTableColumn={setTableColumn} tableColumn={tableColumn}/>
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
