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

const fetchLocation = async (state) => {
    const response = await fetch(`/api/public/${state}`, { method: 'GET' });
    const data = await response.json();
    console.log("this is my data", state);
    return data;
};

export default function PromoManage() {
    const ref = useRef(null);
    const [promoTxt, setPromoTxt] = useState(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [alt, setAlt] = useState(null);
    const [statePackages, setStatePackages] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [faqData, setFaqData] = useState(null);
    const [editorContent, setEditorContent] = useState("");
     const [image1,setImage1]=useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/public/states');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStatePackages(data?.states);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
        setFile(promoTxt?.image || "")
        setEditorContent(promoTxt?.description||"<p></p>");
    }, [promoTxt])
    // console.log("promotext",promoTxt)
    useEffect(()=>{
        setFile(image1)
    },[image1])


    const handleSelectChange = async (e) => {
        const selectedOption = e.target.selectedOptions[0];
        const pageUrl = selectedOption.getAttribute('data-pageurl');
        try {
            const selectedLocationData = await fetchLocation(pageUrl);
            setSelectedLocation(selectedLocationData._id);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleFaqChange = (faqs) => {
        setFaqData(faqs);
    };

    const handleEditorChange = (content) => {

        // console.log("content",content)
        setEditorContent(content);
    };

    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append('file', image1);
        formData.append('title', title);
        formData.append('alt', alt);
        formData.append('faqData', JSON.stringify(faqData));
        formData.append('editorContent', editorContent);
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
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <label htmlFor="cityBages" className="font-semibold text-para">Category :</label>
                                <select
                                    id="packageCategory"
                                    className='ml-4 h-7 rounded-md outline-none border-slate-500/45 cursor-pointer border text-para'
                                    onChange={handleSelectChange}
                                >
                                    <option disabled selected>Select a state</option>
                                    {statePackages.map((state, i) => (
                                        <option
                                            key={i}
                                            className='border-none bg-slate-50 text-black'
                                            value={state.name}
                                            data-pageurl={state.url}
                                        >
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
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
