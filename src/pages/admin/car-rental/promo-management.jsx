import Layout from "@/components/admin/Layout";
import { Tab } from "@mui/base";
import { useEffect, useRef, useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import Image from 'next/image';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit, FaQuestionCircle } from "react-icons/fa";
import FaqSection from "@/components/admin/ItineraryPromo/FaqSection";
import Editor from "@/components/admin/ItineraryPromo/Editor";
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";

const fetchState=async ()=>{
    const response = await fetch('/api/public/carstate');
    return await response.json();
}



export default function PromoManagement () {
    const [file, setFile] = useState({});
    const [faq,setFaq]=useState([]);
    const [faqData,setFaqData]=useState([])
    const [promoText,setPromoText]=useState("");
    const [editorData,setEditorData]=useState('');
    const [states,setStates]=useState([]);
    const [stateId,setStateId]=useState("");
    // const formData=new FormData();
    const ref = useRef(null);

    useEffect(()=>{
        fetchState().then(res=>setStates(res?.states||[]))
        // console.log("states::",states)
    },[])
    // image,text&Table,faq
    const handleChange1=(data)=>{
    setFaqData(data);
    }
    const handleChange2=(data)=>{
        setPromoText(data);
    }
    const handleCity=(value)=>{
      setStateId(value);
    }

    const handleSubmit=async ()=>{
        const formData = new FormData();
        // console.log(ref?.current?.files[0])
        // console.log("faq data",faqData)
        formData.append('file', ref?.current?.files[0]);
        formData.append('faqData',JSON.stringify(faqData));
        formData.append('editorContent', promoText);
        formData.append("stateId",stateId)
        // const data={formData,faqData,stateId,promoText};
        if([formData,faqData,stateId,promoText].some(item=>item===""||item.length===0)){
           alert("each field is required")
           return
        }

        console.log("for m data show is here",formData)

        const submitData=await fetch("/api/cars/carpromo",{
            method:("POST"||"PUT"),
            body:formData
        })

    }
    
   
    return (
        <>
        <AppProvider>
            <Layout>
                <div>
                    <div className="flex items-center gap-5 text-primary pb-3">
                        <LuPackagePlus size={24} className="font-semibold" />
                        <p className="text-[28px] text-black">Promo Manage</p>
         
         
         
                        <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
                    </div>
                    <div className=" ">

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <label htmlFor="cityBages" className="  font-semibold text-para">Category :</label>
                                <select id="packageCategory" className='ml-4 h-7  rounded-md outline-none border-slate-500/45 cursor-pointer border text-para ' onChange={(e)=>handleCity(e.target.value)}>
                                    <option className='border-none bg-slate-50 text-black' value="volvo">Select Badges</option>
                                    {states?.map(item=><option className='border-none bg-slate-50 text-black' value={item?._id}>{item.name}</option>)}
                                    
                                </select>
                                <button className="bg-black text-white rounded py-[3px] cursor-pointer px-3">Add</button>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded p-4">
                                <div>
                                    <p className="text-[15px] font-semibold">Package Image Upload</p>
                                </div>
                                <div className="py-10 border border-slate-500/45  px-2 rounded">
                                    <div className="w-2/3">
                                        {/* <Image className=" w-20 shadow-md " src={file} alt=""/> */}
                                    </div>
                                    <div>
                                        <input type="file"
                                        ref={ref}
                                            className=" file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-black/20 file:text-black/50
                                        hover:file:bg-black/75 hover:file:text-white cursor-pointer " />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded p-4 mt-5">
                                <div>
                                    <p className="text-[15px] font-semibold " >Promo Text</p>
                                </div>
                                <div>
                                    <Editor onChange={handleChange2} editorData={editorData} />
                                </div>
                            </div>
                        </div>

                        {/* table */}
                        <div className="rounded p-4 bg-white mt-5">
                            <div className=" text-[15px] font-semibold ">
                                <p>Faq  Section</p>
                            </div>
                            <div>
                                <FaqSection onChange={handleChange1} faqData={faq} />
                            </div>
                        </div>
                        <div className="flex">
                            <button className="grow bg-black font-semibold text-white py-3 my-5 m-8 rounded" onClick={handleSubmit} >ADD</button>
                        </div>

                    </div>
                </div>
            </Layout>
            </AppProvider>
        </>
    )
}