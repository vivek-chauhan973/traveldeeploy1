import Layout from "@/components/admin/Layout";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
export default function Index(){
return(
    <AppProvider>
<Layout>
    <div>
        <div className="text-[28px] font-semibold mb-20">Header/Footer</div>
        <div>
            <div>
                {/* header promotion band */}
                <div className="pb-5">
                    <div>
                        <div className="flex items-center pb-2">
                            <label htmlFor="header-band">Header Band:</label>
                            <div className="flex justify-start gap-5 p-2 items-center even:bg-slate-100">
                                <div className="bg-navyblack text-white rounded-md px-2">
                                    <span>Call Us Free Now, </span><span>+22554527852</span>
                                </div>

                                <div className="flex items-center">
                                    <FaEdit size={20} />
                                    <MdDeleteForever size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start flex-col md:flex-row gap-3 md:gap-2 ">
                            <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                                placeholder="Enter the name" />
                            <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                                placeholder="Enter the Mobile No." />
                            <button className="bg-navyblack py-2 px-3 w-full text-white rounded-md">Add</button>
                        </div>
                    </div>
                </div>
                {/* header sub menu */}
                <div className="pb-5">
                    <div>
                        <label htmlFor="header-band">Sub Menu:</label>
                        <div className="flex items-start flex-col md:flex-row gap-3 md:gap-2 ">
                            <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                                placeholder="Enter the Name" />
                            <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                                placeholder="Enter the Link" />
                            <button className="bg-navyblack py-2 px-3 w-full text-white rounded-md">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* band and sub menu data show here */}
            <div className="">

                {/* */}
                <div className=" rounded-md grow border p-2 bg-white w-full min-h-90">
                    <div className="border-b py-2">
                        <p className="font-semibold">Sub Menu (10)</p>
                    </div>
                    <div className=" overflow-y-scroll">
                        <div className="flex justify-between p-2  even:bg-slate-100">
                            <p>Google Analytics</p>
                            <div className="flex items-center">
                                <FaEdit size={20} />
                                <MdDeleteForever size={24} />
                            </div>
                        </div>
                        <div className="flex justify-between p-2  even:bg-slate-100">
                            <p>Google Analytics</p>
                            <div className="flex items-center">
                                <FaEdit size={20} />
                                <MdDeleteForever size={24} />
                            </div>
                        </div>
                        <div className="flex justify-between p-2  even:bg-slate-100">
                            <p>Google Analytics</p>
                            <div className="flex items-center">
                                <FaEdit size={20} />
                                <MdDeleteForever size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-5" />
        {/* ===========================================Footer menu is here
        ================================================================= */}
        <div>
            <p className="font-semibold text-[28px]"> Footer</p>
        </div>
        <div className="pb-5">
            <div>
                <label htmlFor="header-band">Footer Menu:</label>
                <div className="flex items-start flex-col md:flex-row gap-3 md:gap-2 ">
                    <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                        placeholder="Enter the Name" />
                    <input className="rounded-md h-10 px-2 w-full" id="header-band" type="text"
                        placeholder="Enter the Link" />
                    <button className="bg-navyblack py-2 px-3 w-full text-white rounded-md">Add</button>
                </div>
            </div>
        </div>
        <div className="">

            {/* */}
            <div className=" rounded-md grow border p-2 bg-white w-full min-h-90">
                <div className="border-b py-2">
                    <p className="font-semibold">Footer Menu (10)</p>
                </div>
                <div className=" overflow-y-scroll">
                    <div className="flex justify-between p-2  even:bg-slate-100">
                        <p>Google Analytics</p>
                        <div className="flex items-center">
                            <FaEdit size={20} />
                            <MdDeleteForever size={24} />
                        </div>
                    </div>
                    <div className="flex justify-between p-2  even:bg-slate-100">
                        <p>Google Analytics</p>
                        <div className="flex items-center">
                            <FaEdit size={20} />
                            <MdDeleteForever size={24} />
                        </div>
                    </div>
                    <div className="flex justify-between p-2  even:bg-slate-100">
                        <p>Google Analytics</p>
                        <div className="flex items-center">
                            <FaEdit size={20} />
                            <MdDeleteForever size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <hr className="my-5" />
    {/* =========================================>Social Link is Here
    <======================================================= */} <div>
        <div>
            <div>
                <p className="font-semibold text-[28px]">Social Link</p>
            </div>
            <form className="flex flex-wrap gap-3">
                <div className="flex gap-2  items-center">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> Twitter</label><br />
                    <input className="h-8 rounded-md px-2" type="text" />
                </div>
                <div className="flex gap-2  items-center">
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label for="vehicle2"> Facebook</label><br />
                    <input className="h-8 rounded-md px-2" type="text" />
                </div>
                <div className="flex gap-2  items-center">
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                    <label for="vehicle3"> Instagram</label><br /><br />
                    <input className="h-8 rounded-md px-2" type="text" />
                </div>
                <button type="submit" className="bg-navyblack px-2 py-2 text-white rounded-md">Submit</button>
            </form>
        </div>
        </div>
</Layout>
</AppProvider>
)
}