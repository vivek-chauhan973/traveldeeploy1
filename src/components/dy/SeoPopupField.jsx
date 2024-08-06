import react, { useEffect, useRef, useState } from "react";

const SeoPopupField=({setSeofieldpopup,selectedItem,setSeoData,seoData})=>{
const [seoTags,setSeoTags]=useState("");
const [seoTitle,setSeoTitle]=useState("")
const [seoDescription,setSeoDescription]=useState("");
const [seoKeywords,setSeoKeywords]=useState('');
const ref=useRef(null);
const data={seoTags,seoTitle,seoDescription,seoKeywords};
const handleSaveSeo=()=>{
    if([seoTags,seoTitle,seoDescription,seoKeywords].some(item=>item.length===0)){
        return alert("please fill all the field first");
    }
    if(selectedItem.length===0){
        return alert("please select first categories")
    }
    setSeoData(data);
  
    setSeofieldpopup(false);
}
useEffect(()=>{
    setSeoTags(seoData?.seoTags||"");
    setSeoTitle(seoData?.seoTitle||"");
    setSeoDescription(seoData?.seoDescription||"");
    setSeoKeywords(seoData?.seoKeywords||"")

},[seoData])

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return (
        <div className="absolute inset-0 flex justify-center items-center w-full top-7">
            
            <div className="bg-slate-100 py-2 px-5 flex flex-col shadow-lg rounded-md w-1/2 xl:w-1/3">
                <div className="flex justify-between">
                    <div><h1>{selectedItem}</h1></div>
                    <h2  onClick={()=>setSeofieldpopup(false)} className=" cursor-pointer">X</h2>
                </div>
                <div>
                    <div className="text-md mt-2">Tags( comma separated)</div>
                    <div><input type="text" onChange={(e)=>setSeoTags(e.target.value)} value={seoTags} className=" focus:border-green-400 w-full mt-1 py-2 px-1 outline-none border rounded-md"/></div>
                </div>
                <div>
                <div className="text-md mt-2">Seo Title</div>
                <div><input type="text" onChange={(e)=>setSeoTitle(e.target.value)} value={seoTitle} className=" focus:border-green-400 w-full mt-1 py-2 px-1 outline-none border rounded-md"/></div>
                </div>
                <div>
                <div className="text-md mt-2">Seo Description</div>
                <textarea onChange={(e)=>setSeoDescription(e.target.value)} value={seoDescription} name="" id="" className=" focus:border-green-400 w-full mt-1 py-2 px-1 outline-none border rounded-md"></textarea>
                </div>
                <div>
                <div className="text-md mt-2"> Seo Keywords</div>
                <div><input type="text" onChange={(e)=>setSeoKeywords(e.target.value)} value={seoKeywords} className=" focus:border-green-400 w-full mt-1 py-2 px-1 outline-none border rounded-md" /></div>
                </div>
                <button className="bg-green-300 mt-2 hover:bg-green-500 py-2 px-1 rounded-md text-md" onClick={handleSaveSeo}>save</button>
            </div>
            
        </div>
        
    )
}

export default SeoPopupField;