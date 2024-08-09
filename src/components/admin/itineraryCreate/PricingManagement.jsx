import React, { useEffect, useState } from 'react';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useAppContext } from '../context/Package/AddGuest';

const PricingManagement = ({ itinerary,setActiveTab }) => {
    // console.log("Pricing data show is here itinerary", itinerary?._id)
  const {pricingManagement}= useAppContext()
    const [pricingData, setPricingData] = useState({
        addguest:pricingManagement,
        singleRoom: '',
        twinSharingRoom: '',
        tripleSharingRoom: '',
        quadSharingRoom: '',
        infantSharingRoom: '',
        childUnderFive: '',
        childOverFive: '',
        packageId: "",
        misc:"",
        markup:"",
        diskHike:"",
        gst:""
    });

    const [itineraryPriceApi, setItineraryPriceApi] = useState({
        addguest:pricingManagement,
        singleRoom: '',
        twinSharingRoom: '',
        tripleSharingRoom: '',
        quadSharingRoom: '',
        infantSharingRoom: '',
        childUnderFive: '',
        childOverFive: '',
        packageId: "",
        misc:"",
        markup:"",
        diskHike:"",
        gst:""
    });

    useEffect(() => {
        if (itinerary && itinerary.prices) {
            const { addguest,singleRoom, twinSharingRoom, tripleSharingRoom, quadSharingRoom, infantSharingRoom, childUnderFive, childOverFive,misc,diskHike,markup,gst } = itinerary.prices;
            setPricingData({
                addguest:pricingManagement||addguest,
                singleRoom: singleRoom || '',
                twinSharingRoom: twinSharingRoom || '',
                tripleSharingRoom: tripleSharingRoom || '',
                quadSharingRoom: quadSharingRoom || '',
                infantSharingRoom: infantSharingRoom || '',
                childUnderFive: childUnderFive || '',
                childOverFive: childOverFive || '',
                gst:gst||"",
                markup:markup||"",
                misc:misc||"",
                diskHike:diskHike||"",
                packageId: itinerary._id || ''
            });
        }
    }, [itinerary,pricingManagement]);
    // console.log("itineray data show is here pricing management", itineraryPriceApi);


    const [errors, setErrors] = useState({});

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setPricingData({ ...pricingData, [name]: value });
    // };
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (value >= 0 || value === '') {
            setPricingData({ ...pricingData, [name]: value });
        } else {
            setPricingData({ ...pricingData, [name]: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};
        let hasError = false;
        setPricingData({ ...pricingData, packageId: itinerary?._id, })

        // Check for empty fields
        Object.keys(pricingData).forEach((key) => {
            if (pricingData[key] === '') {
                errors[key] = 'This field is required';
                hasError = true;
                // console.log("key data ", key);
                // console.log("pricing  data ", pricingData);

            }
        });

        // Validate numeric fields
        // const numericFields = ['singleRoom', 'twinSharingRoom', 'tripleSharingRoom', 'quadSharingRoom', 'infantSharingRoom', 'childUnderFive', 'childOverFive'];
        // numericFields.forEach((field) => {
        //     if (isNaN(pricingData[field])) {
        //         errors[field] = 'Please enter a valid number';
        //         hasError = true;
        //     }
        // });

        // If there are errors, set them in state and prevent form submission
        if (hasError) {
            setErrors(errors);
        } else {
            // If no errors, proceed with form submission
            // console.log("your data is now on console", pricingData);
            try {
                // console.log("pricing data of addguest is here",pricingData)
                const res = await fetch(`/api/package/price/addguests/${itinerary?._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pricingData)
                })
                const data = await res.json();
                setActiveTab("Tab11");
                // console.log("pricing data show is here", pricingData)

            } catch (error) {
                console.log(error);
            }
            // Reset errors
            setErrors({});
        }
    };
    // console.log("pricing data is here :: :: :: ",pricingData)

    return (
        <>
        
            <div className="p-2 rounded-md">
                <div className="border bg-white rounded-md p-4">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Single Room :
                                
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="singleRoom"
                                    // defaultValue={itinerary?.prices?.singleRoom}
                                    value={pricingData.singleRoom}
                                    type="number"
                                />
                            </div>
                            {errors.singleRoom && <p className="text-red-500 text-sm ml-2">{errors.singleRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Twin Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="twinSharingRoom"
                                    // defaultValue={itinerary?.prices?.twinSharingRoom}
                                    value={pricingData.twinSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.twinSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.twinSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Triple Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="tripleSharingRoom"
                                    // defaultValue={itinerary?.prices?.tripleSharingRoom}
                                    value={pricingData.tripleSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.tripleSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.tripleSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Quad Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="quadSharingRoom"
                                    // defaultValue={itinerary?.prices?.quadSharingRoom}
                                    value={pricingData.quadSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.quadSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.quadSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Infant Sharing Room :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="infantSharingRoom"
                                    // defaultValue={itinerary?.prices?.infantSharingRoom}
                                    value={pricingData.infantSharingRoom}
                                    type="number"
                                />
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Child (2 ~ 5) :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="childUnderFive"
                                    // defaultValue={itinerary?.prices?.childUnderFive}
                                    value={pricingData.childUnderFive}
                                    type="number"
                                />
                            </div>
                            {errors.childUnderFive && <p className="text-red-500 text-sm ml-2">{errors.childUnderFive}</p>}
                        </div>
                       
                        {/* Repeat similar structure for other fields */}
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Child (5 - 11) :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="childOverFive"
                                    // defaultValue={itinerary?.prices?.childOverFive}
                                    value={pricingData.childOverFive}
                                    type="number"
                                />
                            </div>
                            {errors.childOverFive && <p className="text-red-500 text-sm ml-2">{errors.childOverFive}</p>}
                        </div>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Misc Per Day :
                            </label>
                            <div className="flex gap-1 items-center">
                                <LiaRupeeSignSolid size={18} />
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="misc"
                                    // defaultValue={itinerary?.prices?.infantSharingRoom}
                                    value={pricingData.misc}
                                    type="number"
                                />
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Markup(%) :
                            </label>
                            <div className="flex gap-1 items-center">
                               <p className='mx-1'>%</p>
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="markup"
                                    // defaultValue={itinerary?.prices?.infantSharingRoom}
                                    value={pricingData.markup}
                                    type="number"
                                />
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                Discount/Hike(%):
                            </label>
                            <div className="flex gap-1 items-center">
                                <p className='mx-1'>%</p>
                                <input
                                    onChange={handleChange}
                                    className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                    name="diskHike"
                                    // defaultValue={itinerary?.prices?.infantSharingRoom}
                                    value={pricingData.diskHike}
                                    type="number"
                                />
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                            <label className="font-semibold w-40" htmlFor="">
                                GST:
                            </label>
                            <div className="flex gap-1 items-center">
                            <select name='gst' className='mx-4 w-52' value={pricingData.gst}
                            onChange={handleChange}>
                                  <option value="">Select GST</option>
                                  <option value="5">5%</option>
                                  <option value="15">15%</option>
                                  <option value="0">All inclusive</option>
                            </select>
                            </div>
                            {errors.infantSharingRoom && <p className="text-red-500 text-sm ml-2">{errors.infantSharingRoom}</p>}
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="bg-navyblack text-white rounded px-10 py-1">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PricingManagement;



