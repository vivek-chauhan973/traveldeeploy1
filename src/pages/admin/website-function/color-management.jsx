
import Layout from "@/components/admin/Layout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function ColorManagement() {

    const [isColor, setColor] = useState({
        button: "",
        Secondarycolor: "",
        Tertiarycolor: "",
        Accentcolor: "",
        Neutralcolor: "",
        Complementarycolor: "",
    })

    function isHandleDefaultColor() {
        setColor(prev => {
            return {
                ...prev,
                Primarycolor: "#FF0000",
                Secondarycolor: "green",
                Tertiarycolor: "yellow",
                Accentcolor: "brown",
                Neutralcolor: "blue",
                Complementarycolor: "cyan",
            }
        })

        // console.log(isColor)
    }


    function isHandlePrimaryColr(e) {
        const { name, value } = e.target

        setColor((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleBtnColorChange = (e) => {
        // console.log(e.target.value)
        isColor.button = e.target.value
        console.log("set color property is here--------> ",e.target.value)
    }

    const colorSubmit = async (e) => {
        e.preventDefault()
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
    const [isurlEndPoint, seturlEndPoint] = useState()

    // console.log(isurlEndPoint)



    return (
      
            <Layout>
                <div>
                    <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10 md:px-5">
                        <FontAwesomeIcon icon={faCube} className="text-2xl" />
                        <p className="md:text-[28px] text-xl text-black">Color Management</p>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className=" text-teal-700 text-xl"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-5 md:px-5 px-3">
                        <form onSubmit={colorSubmit}>
                            <div className=" md:w-28 w-full bg-black py-2 px-10 flex justify-center items-center md:my-3 text-white rounded">
                                <a
                                    className="text-[14px] cursor-pointer font-semibold   "
                                    onClick={isHandleDefaultColor}
                                >
                                    Default
                                </a>
                            </div>

                            {/* Primary Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-3">
                                <div className={`bg-[${isColor.Primarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Primary Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        type="color"
                                        onChange={handleBtnColorChange}
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Secondary Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                                <div className={`bg-[${isColor.Secondarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Secondary Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        onChange={isHandlePrimaryColr}
                                        value={isColor.Secondarycolor}
                                        name="Secondarycolor"
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Tertiary Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                                <div className={`bg-[${isColor.Tertiarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Tertiary Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        onChange={isHandlePrimaryColr}
                                        value={isColor.Tertiarycolor}
                                        name="Tertiarycolor"
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Accent Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                                <div className={`bg-[${isColor.Accentcolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Accent Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        onChange={isHandlePrimaryColr}
                                        value={isColor.Accentcolor}
                                        name="Accentcolor"
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Neutral Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                                <div className={`bg-[${isColor.Neutralcolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Neutral Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        onChange={isHandlePrimaryColr}
                                        value={isColor.Neutralcolor}
                                        name="Neutralcolor"
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Complementary Color Section */}
                            <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                                <div className={`bg-[${isColor.Complementarycolor}] rounded-full w-5 h-5 shadow-sm`}></div>
                                <div className="md:w-48">
                                    <p className="text-[15px] mb-1">Complementary Colors:</p>
                                </div>
                                <div className="w-full md:w-48">
                                    <input
                                        onChange={isHandlePrimaryColr}
                                        value={isColor.Complementarycolor}
                                        name="Complementarycolor"
                                        className="w-full h-10 outline-none px-2 rounded-md"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="text-center md:text-left mt-5">
                                <button
                                    type="submit"
                                    className="bg-navyblack text-white rounded px-10 py-1.5 md:w-auto w-full"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="mt-10 md:px-5 px-3">
                    <div>
                        <p className="md:text-2xl text-xl font-medium mb-5">Suffix SEO Page URL Link End-Point</p>
                    </div>
                    <div className="flex md:flex-row flex-col md:px-5 md:items-center">
                        <label for="seo-suffix" className="w-28">Suffix in Title</label>
                        <input
                            onChange={(e) => seturlEndPoint(e.target.value)}
                            name="urlEndPoint"
                            value={isurlEndPoint}
                            className="md:w-48 w-full  h-10 outline-none px-2 rounded-md mt-1"
                            type="text"
                            id="seo-suffix"
                        />
                    </div>
                </div>

                {/* rating */}
                <div className="my-10 md:px-5 px-3">
                    <div>
                        <p className="md:text-2xl text-xl mb-5 font-semibold">Master Rating</p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5 md:px-5">
                            <div className="md:flex items-center">
                                <label for="seo-suffix" className="w-28">Rating</label>
                                <div className="md:w-48 w-full h-10 bg-white px-2 rounded-md mt-1"></div>
                            </div>
                            <div className="flex gap-2 items-center md:justify-start justify-center">
                                <FontAwesomeIcon icon={faStar} className="text-xl text-primary cursor-pointer" />
                                <FontAwesomeIcon icon={faStarHalfStroke} className="text-xl text-primary cursor-pointer" />
                            </div>
                            <div className="md:flex items-center">
                                <label for="seo-suffix" className="w-28">Review</label>
                                <input className="md:w-48 w-full h-10 outline-none px-2 rounded-md mt-1"
                                    type="text"
                                    id="seo-suffix"
                                />
                            </div>
                        </div>
                    </div>
                    <button className=" text-white bg-primary rounded-md py-2 md:w-auto w-full px-10 my-5" >Submt</button>
                </div>
            </Layout>
        
    )
}