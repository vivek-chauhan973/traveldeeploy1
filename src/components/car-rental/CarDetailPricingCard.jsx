import "../../../src/app/globals.css";

const CardDetailPricingCard = () => {

    return (
        <>
            <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[490px] overflow-scroll">
                <div className=" overflow-y-auto">
                    <div className="">
                        <div className="flex justify-between mb-2 pr-3">
                            <h5 className="text-md font-semibold text-graytext">
                                Booking Summary
                            </h5>
                            <div>
                                {/* <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="font1 cursor-pointer"
                                /> */}
                                Edit
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="">
                        <div className="flex mb-2.5 mt-3 text-sm">
                            <p className=" w-20">PickUp Loc : </p>
                            <p className="font-semibold text-graytext capitalize">Mumbai</p>
                        </div>
                        <div className="flex mb-2.5 text-sm">
                            <p className=" w-20">Dept. Date :</p>
                            <p className=" font-bold text-graytext">
                                10 Mar 2024 - 17 Mar 2024
                            </p>
                        </div>
                    </div>
                    <div className="flex xl:block xl:justify-center xl:items-center flex-col md:gap-3">
                        <div>
                            <div className="flex gap-4 justify-between items-center md:pr-5 pr-1">
                                <label
                                    className="text-sm font-semibold cursor-pointer capitalize"
                                    htmlFor="city"
                                >
                                    Number Of Travellers :{" "}
                                </label>
                                <select
                                    name="travellers"
                                    id="travellers"
                                    className="border rounded w-1/2 pl-3 cursor-pointer"
                                >
                                    <option value="" className="cursor-pointer">
                                        Select Person
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            {/* {fixedDepCity ? null : ( */}
                            <p className="md:text-xxs text-[10px] text-red-600 xl:text-end md:text-center text-end xl:pr-10 md:pl-28">
                                Please Select Person First
                            </p>
                            {/* )} */}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <p className="text-sm font-semibold">Base Price</p>
                        <p className="text-md font-medium text-graytext">₹ 20,000 </p>
                    </div>
                    <hr className="border-dashed my-2 " />
                    <div className="text-para  grid-cols-2 my-3 grid pr-1">
                        <div></div>
                        <div className="grid grid-cols-2">
                            <p>Total Cost</p>
                            <p className="">₹ 40,000</p>
                        </div>
                    </div>
                    <div className="text-para grid-cols-2 -mt-2 grid pr-1">
                        <div></div>
                        <div className="grid grid-cols-2">
                            <p>
                                GST{" "}
                                {/* {fixedDepartureButtonEnaibleAndDisable
                                    ? departureSectionData?.GST
                                    : null}{" "} */}
                            </p>
                            <p className="">
                                ₹
                                {/* {fixedDepartureButtonEnaibleAndDisable ? (calculatedPrizeOfGst * limitKey)?.toLocaleString() : "0"} */}
                            </p>
                        </div>
                    </div>
                    <hr className="border-dashed my-2" />
                    <div className="text-para  grid-cols-2 grid pr-1">
                        <div></div>
                        <div className="grid grid-cols-2 gap-1">
                            <p className="font-semibold">Grand Total</p>
                            <p className="font-semibold text-graytext">
                                ₹ 60,000
                                {/* {fixedDepartureButtonEnaibleAndDisable ? grandTotal?.toLocaleString() : "0"} */}
                            </p>
                        </div>
                    </div>
                    <div className=" justify-center gap-10 my-3 flex">
                        <label className=" inline-flex items-center">
                            <input
                                type="radio"
                                className=" form-radio accent-navyblack"
                                name="radio-group"
                            />
                            <p className="ml-2 font-semibold text-graytext">Pay 25% Now</p>
                        </label>

                        <label className=" inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio accent-navyblack"
                                name="radio-group"
                            />
                            <p className="ml-2 font-semibold text-graytext ">
                                Pay Full Online
                            </p>
                        </label>
                    </div>
                    <div className="xl:block hidden">
                        <div className=" grid grid-cols-2 gap-3 my-3">
                            {/* <CustomiseTour> */}
                            <button className=" border-primary w-full border text-primary flex-flow  flex justify-center px-5 py-2 text-para rounded-md">
                                Customise
                            </button>
                            {/* </CustomiseTour> */}
                            <button
                                className="border px-5 py-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 text-center text-white text-para"
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CardDetailPricingCard;
