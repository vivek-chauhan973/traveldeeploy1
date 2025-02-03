import react, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SeoPopupField = ({ setSeofieldpopup, selectedItem, setSeoData, seoData }) => {
    const [seoTags, setSeoTags] = useState("");
    const [seoTitle, setSeoTitle] = useState("")
    const [seoDescription, setSeoDescription] = useState("");
    const [seoKeywords, setSeoKeywords] = useState('');
    const [seoCanonical, setSeoCanonical] = useState('');
    const ref = useRef(null);
    const data = { seoTags, seoTitle, seoDescription, seoKeywords, seoCanonical };
    const handleSaveSeo = () => {
        if ([seoTags, seoTitle, seoDescription, seoKeywords, seoCanonical].some(item => item.length === 0)) {
            return alert("please fill all the field first");
        }
        if (selectedItem.length === 0) {
            return alert("please select first categories")
        }
        setSeoData(data);
        setSeofieldpopup(false);
    }
    useEffect(() => {
        setSeoTags(seoData?.seoTags || "");
        setSeoTitle(seoData?.seoTitle || "");
        setSeoDescription(seoData?.seoDescription || "");
        setSeoKeywords(seoData?.seoKeywords || "")
        setSeoCanonical(seoData?.seoCanonical || "")
    }, [seoData])

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    return (

        <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-xl shadow-lg z-50 md:w-96 w-full h-auto max-h-[520px] px-5 py-4">
                <div className=" flex justify-between items-center">
                    <h4 className="font-semibold md:text-xl text-lg capitalize">{selectedItem || "Add Seo Field"}</h4>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                        onClick={() => setSeofieldpopup(false)}
                    />
                </div>
                <div>
                    <p className="md:text-para text-sm mt-3">Tags( Comma Separated)</p>
                    <input
                        type="text"
                        onChange={(e) => setSeoTags(e.target.value)}
                        value={seoTags}
                        className=" focus:border-primary w-full py-2 px-1 outline-none border rounded-md"
                    />
                </div>
                <div>
                    <p className="md:text-para text-sm mt-3">Meta Title</p>
                    <input type="text"
                        onChange={(e) => setSeoTitle(e.target.value)}
                        value={seoTitle}
                        className=" focus:border-primary w-full py-2 px-1 outline-none border rounded-md"
                    />
                </div>
                <div>
                    <p className="md:text-para text-sm mt-3">Meta Description</p>
                    <textarea
                        onChange={(e) => setSeoDescription(e.target.value)}
                        value={seoDescription} name="" id=""
                        className=" focus:border-primary w-full py-2 px-1 outline-none border rounded-md">

                    </textarea>
                </div>
                <div>
                    <p className="md:text-para text-sm mt-3">Keywords</p>
                    <input
                        type="text"
                        onChange={(e) => setSeoKeywords(e.target.value)}
                        value={seoKeywords}
                        className=" focus:border-primary w-full py-2 px-1 outline-none border rounded-md"
                    />
                </div>
                <div>
                    <p className="md:text-para text-sm mt-3">Canonical URL</p>
                    <input
                        type="text"
                        onChange={(e) => setSeoCanonical(e.target.value)}
                        value={seoCanonical}
                        className=" focus:border-primary w-full py-2 px-1 outline-none border rounded-md"
                    />
                </div>
                <button className="bg-navyblack text-white  mt-5 mb-1 w-full py-2 px-1 rounded-md text-sm md:text-para"
                    onClick={handleSaveSeo}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default SeoPopupField;