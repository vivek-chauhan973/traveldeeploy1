import "../../app/globals.css";
import { FaUserAlt } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
// import Header from "@/components/Header";
import Image from 'next/image'
import { ImCross } from "react-icons/im";

export default function CarDetail(){
return(
<div className="bg-gradient-to-r from-indigo-50 from-10% via-green-50 via-30% to-indigo-50 to-90%">
    {/* <Header /> */}
    <div className="container-wrapper ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className=" col-span-2  ">
                <div className="shadow-sm rounded bg-white">
                    <div className="block md:flex justify-between px-10 md:px-20  pt-8 my-4">
                        <div className="">
                            <Image className="w-64 h-40 object-contain"
                                src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png" alt="" />
                        </div>
                        <div>
                            <div className=" ">
                                <div className=" pb-3 ">
                                    <p className="font-semibold text-lg">Volkswagen Polo</p>
                                    <p className="text-sm">Or similiar Economy</p>
                                </div>
                                <div className="block gap-3 items-center">
                                    <div className="block md:flex-row items-center">
                                        <div className="flex  gap-3 text-sm text-center">
                                            <p className="bg-primary text-[10px] md:text-sm text-white px-1 rounded">
                                                save
                                                10%
                                            </p>
                                            <p
                                                className="bg-cyan-50 border text-[10px] md:text-sm border-cyan-500 text-cyan-600 px-1 rounded">
                                                Parial Prepayment</p>
                                        </div>
                                        <div className="flex gap-3 items-center py-3">
                                            <div className="flex gap-1 items-center">
                                                <FaUserAlt />
                                                <p className="font-semibold text-sm">0</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <FaRegSnowflake />
                                                <p className="font-semibold text-sm">0</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <GiGearStickPattern />
                                                <p className="font-semibold text-sm">0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-2 ">
                                            <BsFillFuelPumpFill size={22} />
                                            <div>
                                                <p className="font-semibold text-para">Fuel policy</p>
                                                <p className="text-para">Same to Same</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaLocationDot size={22} />
                                            <div>
                                                <p className="font-semibold text-para">Pick-up location</p>
                                                <p className="text-para">Free shutter services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t  mx-10">
                        <div className="pt-5 pb-2">
                            <p className="text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                                amet, nostrum sed minus non nulla, nihil molestiae voluptas doloribus mollitia optio ad?
                            </p>
                        </div>
                        <div>
                            <button className="bg-navyblack text-white px-3 rounded shadow-sm">Read More</button>
                        </div>
                        {/* grid table */}
                        <div className="py-10">
                            <p className="font-semibold text-para pb-3">Sort Itinerary</p>
                            <table className="w-full border-collapse border text-center text-para">
                                <tbody>
                                    <tr className="border bg-black text-white">
                                        <th className="border font-light w-20">Day</th>
                                        <th className="border font-light ">Route</th>
                                        <th className="border font-light w-36">Drive(Approx)</th>
                                    </tr>
                                    <tr>
                                        <td className="border">01</td>
                                        <td className="border">Haridwar to Barkot</td>
                                        <td className="border">215 Km</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* tour inclusion and exclusion */}
                <div
                    className="grid grid-cols-2 gap-5 bg-white shadow-sm rounded py-8 px-10 md:px-20 justify-between my-4">
                    <div className="border-r">
                        <p className="font-semibold pb-3">Inclusion</p>
                        <div>
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    {/* exclusion */}
                    <div>
                        <p className="font-semibold pb-3">Exclusion</p>
                        <div>
                            <div className="flex items-center gap-2">
                                <ImCross className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <ImCross className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <ImCross className="text-green-500" />
                                <p className="text-para">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Read before you Book */}
                <div className="bg-white my-4 rounded pb-5 shadow-sm">
                    <div className=" p-2 px-8   border-b">
                        <p className="font-semibold">Read Before You Book</p>
                    </div>
                    <div className="px-10 md:px-20 py-5 ">
                        <div>
                            <p className="text-para"><span className="font-semibold">Driver Details: </span>Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Tempore beatae sapiente vero?</p>
                            <p className="text-para"><span className="font-semibold">Delay: </span>Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Temporibus magnam cupiditate dolorem.</p>
                        </div>
                    </div>
                    <div className="px-20">
                        <p className="font-semibold underline text-para">Points of Notice:</p>
                        <ul className="pl-3 flex flex-col gap-2">
                            <li className="text-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                                nihil.</li>
                            <li className="text-para">Lorem ipsum dolor sit amet consectetur.</li>
                            <li className="text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                                tempore perferendis dignissimos ipsa quod sequi nam, nostrum minima totam voluptatum
                                quidem quam!</li>
                            <li className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
                                corporis fugiat vero dolorem labore fuga eveniet pariatur cupiditate?</li>
                        </ul>
                    </div>
                    {/* table is here */}
                    <div className="py-10 mx-10">
                        <p className="font-semibold text-para pb-3">Sort Itinerary</p>
                        <table className="w-full border-collapse border text-center text-para">
                            <tbody>
                                <tr className="border bg-black text-white">
                                    <th className="border font-light ">Sightseeing Places</th>
                                    <th className="border font-light ">Sedan</th>
                                    <th className="border font-light ">Innova/Innova Crysta</th>
                                    <th className="border w-36 font-light">Tempo Traveler</th>
                                </tr>
                                <tr>
                                    <td className="border">Mana Village</td>
                                    <td className="border">INR 1000</td>
                                    <td className="border">INR 1500</td>
                                    <td className="border">INR 2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className=" px-8 flex gap-2 items-center mt-10">
                        <p className="font-semibold text-sm">Please Read</p>
                        <button className="bg-amber-200 hover:underline font-light text-sm px-2 rounded">Terms &
                            Condition</button>
                    </div>
                </div>
            </div>
            {/*grid end above */}
            {/* side car is here */}
            <div className="my-4 ">
                <div className="bg-white rounded shadow-sm px-4 sticky top-32">
                    <div className="border-b pt-2">
                        <p className="font-semibold text-md">Trip details</p>
                    </div>
                    <div>
                        <form>
                            <div className="flex flex-col my-5">
                                <label className="text-para font-semibold" for="cars">Select Pickup Location</label>
                                <select name="cars" id="cars" className="border rounded">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="flex flex-col my-5">
                                <label className="text-para font-semibold" for="cars">Select Pickup Time</label>
                                <select name="cars" id="cars" className="border rounded">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between gap-5">
                                <div className="flex flex-col ">
                                    <label className="text-para font-semibold" for="cars">Select No. Of Adults</label>
                                    <select name="cars" id="cars" className="border rounded">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="flex flex-col ">
                                    <label className="text-para font-semibold" for="cars">Select No. of Infant</label>
                                    <select name="cars" id="cars" className="border rounded">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                    <hr className="my-2 mt-4" />
                    <div className="flex items-center justify-between pb-4">
                        <div>
                            <p className="text-[20px] font-semibold text-cyan-600">Total Amount</p>
                        </div>
                        <div>
                            <p className="text-[20px] font-semibold text-cyan-600 "> ₹ 12,075</p>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <div className="flex justify-between items-center pb-1 border-b border-dashed">
                                <label className=" flex items-center">
                                    <input type="radio" className=" form-radio text-primary" name="radio-group" />
                                    <span className="ml-2 text-sm font-semibold">Pay 25% Now</span>
                                </label>
                                <div>
                                    <p className="text-sm">₹ 12,075</p>
                                </div>
                            </div>
                            <div  className="flex justify-between items-center pb-2 pt-1">
                                <label className=" flex items-center">
                                    <input type="radio" className="form-radio text-primary" name="radio-group" />
                                    <span className="ml-2 text-sm font-semibold">Pay Full Online</span>
                                </label>
                                <div>
                                    <p className="text-sm">₹ 24,075</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="pb-3">
                        <button className="rounded w-full py-3 bg-primary text-white font-semibold">Book Online</button>
                        <button className="w-full py-2 border rounded mt-2">Select Date</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
)
}