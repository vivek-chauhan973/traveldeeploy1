import Layout from "@/components/admin/Layout";
import { useState } from "react";
import FaqSection from "@/components/admin/ItineraryPromo/FaqSection";
import Editor from "@/components/admin/ItineraryPromo/Editor";
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image'



export default function Management () {
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // image,text&Table,faq



    return (
        <>
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
                                <select id="packageCategory" className='ml-4 h-7  rounded-md outline-none border-slate-500/45 cursor-pointer border text-para '>
                                    <option className='border-none bg-slate-50 text-black' value="volvo">Select Badges</option>
                                    <option className='border-none bg-slate-50 text-black' value="volvo">India</option>
                                    <option className='border-none bg-slate-50 text-black' value="saab">Africa</option>
                                    <option className='border-none bg-slate-50 text-black' value="opel">Russia</option>
                                    <option className='border-none bg-slate-50 text-black' value="audi">US</option>
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
                                        <Image className=" w-20 shadow-md " src={file} alt="" />
                                    </div>
                                    <div>
                                        <input type="file" onChange={handleChange}
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
                                    <Editor />
                                </div>
                            </div>
                        </div>

                        {/* table */}
                        <div className="rounded p-4 bg-white mt-5">
                            <div className=" text-[15px] font-semibold ">
                                <p>Faq  Section</p>
                            </div>
                            <div>
                                <FaqSection />
                            </div>
                        </div>
                        <div className="flex">
                            <button className="grow bg-black font-semibold text-white py-3 my-5 m-8 rounded" >ADD</button>
                        </div>

                    </div>
                </div>
            </Layout>

        </>
    )
}