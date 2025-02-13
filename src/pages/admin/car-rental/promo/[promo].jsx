
import Layout from "@/components/admin/Layout";
import { useEffect, useRef, useState } from "react";
import FaqSection from "@/components/admin/ItineraryPromo/FaqSection";
import Editor from "@/components/admin/ItineraryPromo/Editor";
import Image from 'next/image';
import Index from "@/components/dy/Index";
import SeoPopupField from "@/components/dy/SeoPopupField";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const getPromoData = async (selectedLocation) => {
    try {
        const res = await fetch(`/api/public/package-state/carpromo/${selectedLocation}`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching promo text", error);
    }
};
export default function PromoManage() {
    const router = useRouter();

    const { promo } = router?.query;
    // console.log("router is here : ",router);
    const ref = useRef(null);
    const [promoTxt, setPromoTxt] = useState(null);
    const [catoryorstate, setCatoryorstate] = useState(false);
    const [selectCatagoryOrState, setSelectCatagoryOrState] = useState("");
    const [file, setFile] = useState(null);
    const [file1, setFile1] = useState(null);
    const [title, setTitle] = useState(null);
    const [posterImage1, setPosterImage1] = useState(null);
    const [posterTitle, setPosterTitle] = useState(null);
    const [posterAlt, setPosterAlt] = useState(null);
    const [seofieldpopup, setSeofieldpopup] = useState(false);
    const [alt, setAlt] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [faqData, setFaqData] = useState(null);
    const [editorContent, setEditorContent] = useState("");
    const [image1, setImage1] = useState(null);
    const [selectedItem, setSelectedItem] = useState("");
    const [seoData, setSeoData] = useState({});
    const [tableData, setTableData] = useState([]);
    const [tableColumn, setTableColumn] = useState([]);
    useEffect(() => {
        if(promo){
            setSelectedLocation(promo || "")
        }
       
    }, [])

    useEffect(() => {
        if(promo){
        getPromoData(promo).then(res => {setPromoTxt(res?.data);console.log("res------->",res)});
        }
    }, [promo]);
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
    const handleChange1 = (e) => {
        const data = e.target.files[0];
        setPosterImage1(data)
        if (data) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFile1(e.target.result);
            };
            reader.readAsDataURL(data);
        }
    };
    console.log("promo txt is there -------> ",promoTxt)
    useEffect(() => {
        setTitle(promoTxt?.title || "");
        setAlt(promoTxt?.alt || "");
        setFile(promoTxt?.image || "");
        setPosterAlt(promoTxt?.posterAlt || "")
        setPosterTitle(promoTxt?.posterTitle||"")
        setFile1(promoTxt?.posterPath || "");
        setTableData(promoTxt?.tableData || []);
        setSeoData(promoTxt?.seoField || {});
        setTableColumn(promoTxt?.tableColumn || []);
        setEditorContent(promoTxt?.description || "<p></p>");
        setSelectCatagoryOrState(promoTxt?.selectType || "")
        setSelectedItem(promoTxt?.selectedItem || "");
    }, [promoTxt])

    useEffect(() => {
        setFile(image1)
    }, [image1])

    const handleSelectChange = async (e) => {
       
            const selectedData = (e.target.value)?.split(",");
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
        
        const formData = new FormData();
        formData.append('file', image1);
        formData.append('title', title);
        formData.append('alt', alt);
        formData.append('faqData', JSON.stringify(faqData));
        formData.append('editorContent', editorContent);
        formData.append('tableData', JSON.stringify(tableData));
        formData.append('seoData', JSON.stringify(seoData));
        formData.append('tableColumn', JSON.stringify(tableColumn));
        formData.append('selectType', selectCatagoryOrState);
        formData.append("selectedItem", selectedItem);
        try {
            const response = await fetch(`/api/public/package-state/carpromo/${promo}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add promo');
            }

            const data = await response.json();
            console.log('Success:', data);
            // Reset form fields after successful submission
            /* setFile(null);
            setTitle("");
            setAlt("");
            setFaqData([]);
            setEditorContent("");
            setSelectedLocation("");
            setSeoData({});
            setTableData([]);
            setTableColumn([]);*/
        } catch (error) {
            console.error('Error:', error);
        }
        alert("updated SuccessFully")
    };
    const handlePosterUpload=async ()=>{
        const formData1 = new FormData();
        formData1.append('file', posterImage1);
        formData1.append('posterTitle', posterTitle);
        formData1.append('posterAlt', posterAlt);

        try {
            const response = await fetch(`/api/public/package-state/carposter?id=${promo}`, {
                method: 'POST',
                body: formData1,
            });

            if (!response.ok) {
                throw new Error('Failed to add promo');
            }

            const data = await response.json();
            setFile1(null);
            setPosterTitle("");
            setPosterAlt("");
           
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
  
            <Layout>
                <div>
                    <div className="flex items-center gap-5 text-primary pb-5">
                        <FontAwesomeIcon icon={faCube} className="text-2xl" />
                        <p className="md:text-[28px] text-xl text-black">Promo Manage</p>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className=" text-teal-700 text-xl"
                        />
                    </div>
                    <div>
                        <div className="flex flex-col ">
                            <div className="flex flex-col sm:flex-row md:items-center gap-2 mb-4 w-full">
                                <label htmlFor="cityBages"
                                    className="font-semibold text-para md:text-base">
                                    Select :
                                </label>
                                <select
                                    className="mt-1 md:ml-2 h-7  md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                                >
                                    <option value="" >{selectCatagoryOrState}</option>
                                </select>
                                <select
                                    id="packageCategory"
                                    className="mt-1 md:ml-2  h-7 md:w-32 w-full rounded-md outline-none border-slate-500/45 cursor-pointer border text-para"
                                    onChange={(e) => { handleSelectChange(e); }}
                                >
                                    {selectCatagoryOrState === "category" && <option disabled selected>{selectedItem}</option>}
                                    {selectCatagoryOrState === "state" && <option disabled selected>{selectedItem}</option>}
                                    {selectCatagoryOrState === "country" && <option disabled selected>{selectedItem}</option>}

                                </select>
                                <button
                                    className="mt-1 md:ml-2  bg-green-300 py-1 px-5 rounded-md hover:bg-green-500"
                                    onClick={() => setSeofieldpopup(true)}
                                >
                                    Add Seo field
                                </button>
                            </div>
                            <div></div>
                            {seofieldpopup &&
                                <SeoPopupField
                                    setSeofieldpopup={setSeofieldpopup}
                                    selectedItem={selectedItem}
                                    setSeoData={setSeoData}
                                    seoData={seoData}
                                />}
                        </div>
                        <div>
                            <div className="bg-white rounded p-4">
                                <div>
                                    <p className="text-[15px] font-semibold">Package Image Upload</p>
                                </div>
                                <div className=" flex">
                                <div className="p-7 flex-1 border border-slate-500/45 rounded">
                                    <div className="w-2/3">
                                        {file && <Image className="w-28 h-28 shadow-md mb-2" width="123" height="150" src={file} alt="Preview" />}

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
                                </div>
                                <div className="p-7 mx-5 flex-1 border border-slate-500/45 rounded">
                                    <div className="w-2/3">
                                        {file1 && <Image className="w-28 h-28 shadow-md mb-2" width="123" height="150" src={file1} alt="Preview" />}

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
                                    <div className="my-3"><button onClick={handlePosterUpload} className=" bg-orange-500 px-2 mx-3 py-1 rounded-lg">upload</button></div>
                                </div>
                                </div>
                                
                            </div>
                            <div className="bg-white rounded p-5 mt-5">
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
                            <Index setTableData={setTableData} tableData={tableData} setTableColumn={setTableColumn} tableColumn={tableColumn} />
                        </div>
                        <div className="rounded p-4 bg-white mt-5">
                            <div className="text-[15px] font-semibold">
                                <p>FAQ Section</p>
                            </div>
                            <div>
                                <FaqSection onChange={handleFaqChange} faqData={promoTxt?.faq} />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="grow w-full bg-black font-semibold text-white py-3 mt-5 rounded">ADD</button>
                    </div>
                </div>
            </Layout>

    );
}
