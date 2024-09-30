import "../../app/globals.css";
// import ItineraryPriceRangeSlider from "./ItineraryPriceRangeSlider";
// import RangeSlider from "./RangeSlider";
import Slider from '@mui/material-next/Slider';




 const ItineraryFilter=()=>{
return(
<>
    <div>
        <div className="bg-white rounded-md sticky top-[145px] ">
            <div className="p-5">
                <div className="flex justify-between pb-2">
                    <p className="text-[16px] font-semibold">Package Prices</p>
                    <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
                </div>
                <div>
                    <div>
                        {/* <ItineraryPriceRangeSlider /> */}

                    </div>

                </div>

            </div>
            <div>
                <div className="border-t p-5 py-0">
                    <div>
                        <p className="text-[16px] font-semibold my-2">Tour Duration</p>
                    </div>
                    {/* <RangeSlider /> */}
                    <div>
                        <div className="flex justify-between mb-4">
                            <p className="text-[14px]">Min <span>9 days</span></p>
                            <p className="text-[14px]">Max <span>15 days</span></p>
                        </div>
                    </div>

                </div>
                <div className="border-b mt-2"></div>
                <div className="px-5 py-2">
                    <p className="text-[16px] font-semibold my-2">Departure City</p>
                </div>
                <div>
                    <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                        <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                            id="vehicle1" name="vehicle1" value="Bike" />
                        <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 px-5 pb-2 py-2">
                        <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                            id="vehicle2" name="vehicle1" value="Bike" />
                        <label htmlFor="vehicle2" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 px-5 pb-2 py-2">
                        <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                            id="vehicle3" name="vehicle1" value="Bike" />
                        <label htmlFor="vehicle3" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 px-5 pb-2 py-2">
                        <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                            id="vehicle4" name="vehicle1" value="Bike" />
                        <label htmlFor="vehicle4" className="cursor-pointer label-text text-[14px]"> Banglore</label>
                    </div>
                </div>
                <div className="border-b mt-5"></div>
                <div className="pr-5 py-2">
                    <p className="text-[16px] font-semibold my-2 px-5">Package Category</p>
                    <div>
                        <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                            <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                id="vehicle1" name="vehicle1" value="Bike" />
                            <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                Banglore</label>
                        </div>
                        <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                            <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                id="vehicle1" name="vehicle1" value="Bike" />
                            <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                Banglore</label>
                        </div>
                        <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                            <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                id="vehicle1" name="vehicle1" value="Bike" />
                            <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                Banglore</label>
                        </div>
                        <div className="flex items-center gap-2 px-5 pb-2 py-2 ">
                            <input className="cursor-pointer h-5 w-5 rounded-lg accent-navyblack" type="checkbox"
                                id="vehicle1" name="vehicle1" value="Bike" />
                            <label htmlFor="vehicle1" className="cursor-pointer label-text text-[14px]">
                                Banglore</label>
                        </div>
                        
                        

                    </div>
                </div>
            </div>

        </div>
    </div>
</>
)
}
export default  ItineraryFilter