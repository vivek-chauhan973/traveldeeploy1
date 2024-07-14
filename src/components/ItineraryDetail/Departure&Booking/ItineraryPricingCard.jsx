import Addguest from "@/components/addguest";
import "../../../app/globals.css";
import { FaRegEdit } from "react-icons/fa";
import CustomiseTour from "../CustomiseTour";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";


 const ItineraryPricingCard = () =>{
const {inputData,setInputData,guestPrice,closeBtn,setCloseBtn,showAddguest}=useAppContext();

    return (
        <>
            <div className=" border p-3 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block overflow-hidden " >
                <div className="bg-white">
                    <div className="flex justify-between">
                        <p className="text-base font-bold text-graytext">Booking Summary</p>
                        <div>
                            <Addguest guestPrice={guestPrice}  >
                                <FaRegEdit className="cursor-pointer" />
                            </Addguest>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className=" overflow-y-auto">
                    <div className="flex mb-[10px] mt-5 text-sm">
                        <p className=" w-20">Dept. city : </p>
                        <p className="font-semibold text-graytext">Mumbai</p>
                    </div>
                    <div className="flex mb-[10px] text-sm">
                        <p className=" w-20">Dept. date :</p>
                        <p className=" font-bold text-graytext">10 Mar 2024 - 17 Mar 2024</p>
                    </div>
                    <div className="flex mb-[10px] text-sm">
                        <p className=" w-20">Traveller :</p>
                        <p className=" font-semibold text-graytext">Adults:{inputData?.adult},  Child:{inputData?.child},  Infant:{inputData?.infant}</p>
                    </div>
                    <div className="flex mb-[10px] text-sm">
                        <p className=" w-20">Rooms :</p>
                        <div className="">

                            {inputData&&Object.keys(inputData).map((roomType, index) => (
                                inputData?.[roomType] > 0 && roomType !== "adult" && roomType !== "child" && roomType !== "infant" &&
                                <p key={index} className="font-semibold capitalize">{roomType}: {inputData[roomType]}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between  pt-3 pb-3 ">
                        <div>
                            <p className="text-sm ">Basic Price</p>
                        </div>
                        <div className="">
                            <p className="text-lg font-medium text-graytext"> ₹ 40,000</p>
                            <p className="text-xxs">per person on twin sharing</p>
                        </div>
                    </div>
                    <hr className="border-dashed my-4" />
                    <div className='text-para grid grid-cols-2 my-3'>
                        <div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p>Total Cost</p>
                            <p className=''>70,000</p>
                        </div>
                    </div>
                    <div className='text-para grid grid-cols-2 -mt-2'>
                        <div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p>GST 5% </p>
                            <p className=''>2,300</p>
                        </div>
                    </div>
                    <hr className="border-dashed my-2" />
                    <div className='text-para grid grid-cols-2'>
                        <div>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <p>Grand Total</p>
                            <p className='font-semibold text-graytext'>70,000</p>
                        </div>
                    </div>
                   { closeBtn&&<div className='flex justify-center gap-10 my-3'>
                        <label className=" inline-flex items-center">
                            <input type="radio" className=" form-radio text-primary" name="radio-group" />
                            <p className="ml-2 font-semibold text-graytext">Pay 25% Now</p>
                        </label>

                        <label className=" inline-flex items-center">
                            <input type="radio" className="form-radio text-primary" name="radio-group" />
                            <p className="ml-2 font-semibold text-graytext">Pay Full Online</p>
                        </label>


                    </div>}
                    <div className='grid grid-cols-2 gap-3 mt-2'>
                        <CustomiseTour>
                            <button className=" border-primary w-full border text-primary flex-flow   flex justify-center py-2 rounded-md">Customise</button>
                        </CustomiseTour>
                        <Addguest setInputData={setInputData} inputData={inputData} guestPrice={guestPrice} setCloseBtn={setCloseBtn}>
                            <button className={` ${showAddguest?"bg-primary cursor-pointer":"bg-orange-200"} px-5 py-3 rounded-md text-white text-center text-para`}>{closeBtn?"Book now":"Add Guest & room"}</button>
                        </Addguest>
                    </div>

                </div>


            </div>
            {/* mobile Devices */}
            
        </>
    )
}
export default ItineraryPricingCard