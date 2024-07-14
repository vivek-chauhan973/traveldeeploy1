import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";





export default function ColorManagement(){

    const[isColor,setColor] =useState({
        button:"",
        Secondarycolor:"",
        Tertiarycolor:"",
        Accentcolor:"",
        Neutralcolor:"",
        Complementarycolor:"",
    })

    function isHandleDefaultColor () {
        setColor(prev=>{
            return{...prev ,
                Primarycolor:"#FF0000",
                Secondarycolor:"green",
                Tertiarycolor:"yellow",
                Accentcolor:"brown",
                Neutralcolor:"blue",
                Complementarycolor:"cyan",
            }
        })

        // console.log(isColor)
    }


    function isHandlePrimaryColr(e){
        const {name,value} = e.target

        setColor((prev) => {
            return{...prev,[name]:value}
        })
    }

    const handleBtnColorChange=(e)=>{
        // console.log(e.target.value)
        isColor.button=e.target.value
    }

    const colorSubmit=async(e)=>{
        e.preventDefault()
        // console.log("here is click and change the states",isColor)
        try {
            const response = await fetch('/api/website-color/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(isColor),
            });

            if (response.ok) {
                const data = await response.json();

            } else {
                console.error('Failed to add package');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    }



    // set end point url
    const [isurlEndPoint, seturlEndPoint] =useState()

    // console.log(isurlEndPoint)

    

return (
    <AppProvider>
<Layout>
    <div>
        <p className="mb-5 text-[28px] font-semibold">Color Management</p>
        <div className="flex items-center gap-5">
            <form onSubmit={colorSubmit}>
                <div className="py-2">
                    <a onClick={isHandleDefaultColor} className="text-[14px] cursor-pointer font-semibold py-2 px-3 bg-black text-white rounded">Default</a>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Primarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Primary Colors:</p>
                    </div>
                    <div className="w-full">
                        <input type="color" onChange={handleBtnColorChange}  className="w-full h-10 outline-none px-2 rounded-md" />
                    </div>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Secondarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Secondary Colors :</p>
                    </div>
                    <div>
                        <input onChange={isHandlePrimaryColr} value={isColor.Secondarycolor} name="Secondarycolor" className="w-full h-10 outline-none px-2 rounded-md" type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Tertiarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Tertiary Colors: :</p>
                    </div>
                    <div>
                        <input onChange={isHandlePrimaryColr} value={isColor.Tertiarycolor} name="Tertiarycolor" className="w-full h-10 outline-none px-2 rounded-md" type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Accentcolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Accent Colors :</p>
                    </div>
                    <div>
                        <input onChange={isHandlePrimaryColr} value={isColor.Accentcolor} name="Accentcolor" className="w-full h-10 outline-none px-2 rounded-md" type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Neutralcolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Neutral Colors :</p>
                    </div>
                    <div>
                        <input onChange={isHandlePrimaryColr} value={isColor.Neutralcolor} name="Neutralcolor" className="w-full h-10 outline-none px-2 rounded-md" type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-5 pb-2">
                    <div className={`bg-[${isColor.Complementarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                    <div>
                        <p className="text-[15px]">Complementary Colors :</p>
                    </div>
                    <div>
                        <input onChange={isHandlePrimaryColr} value={isColor.Complementarycolor} name="Complementarycolor" className="w-full h-10 outline-none px-2 rounded-md" type="text" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-navyblack text-white rounded px-10 py-1 ">Add</button>
                </div>
            </form>
        </div>
    </div>
    <div className="mt-10">
        <div>
            <p className="text-[28px] mb-5 font-semibold">Suffix SEO Page URL Link End-point</p>
        </div>
        <div>
            <div className="flex gap-5 items-center ">
                <label for="seo-suffix">Suffix in Title</label>
                <input onChange={(e) => seturlEndPoint(e.target.value)} name="urlEndPoint" value={isurlEndPoint} className="w-1/3 h-10 outline-none px-2 rounded-md" type="text" id="seo-suffix" />
            </div>
        </div>
    </div>
    {/* rating */}
    <div className="mt-10">
        <div>
            <p className="text-[28px] mb-5 font-semibold">Master Rating</p>
        </div>
        <div>
            <div className="flex gap-5 items-center ">
                <label for="seo-suffix">Rating</label>
                <div className="w-1/3 h-10 bg-white e px-2 rounded-md"></div>
                <div className="flex gap-2">
                    <FaStar size={25} className="text-primary cursor-pointer"/>
                    <FaStarHalfAlt size={25} className="text-primary cursor-pointer"/>
                </div>
            <div className="flex gap-5 items-center ">
                <label for="seo-suffix">Review</label>
                <input className="w-1/3 h-10 outline-none px-2 rounded-md" type="text" id="seo-suffix" />
            </div>
            <button className="text-white bg-primary rounded-md py-2 px-2" >Submt</button>
            </div>
        </div>
    </div>
</Layout>
</AppProvider>
)
}