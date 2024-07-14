import { useEffect, useRef, useState } from "react";
import "../../../app/globals.css";
import MultipleSelectChip from "./Select";
import MultipleSelectCheckmarks from "./CheckMarkSelect";
import ImageUploading from "@/components/admin/itineraryCreate/ImageUploading";
import { useRouter } from "next/router";
import { MdAddLocationAlt } from "react-icons/md";

const fetchCountries = async () => {
    try {
        const res = await fetch('/api/location?type=country', { method: 'GET' });
        const data = await res.json();
        return data.result;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const fetchStates = async (countryId) => {
    try {
        const res = await fetch('/api/location?type=state&countryId=' + countryId, { method: 'GET' });
        const data = await res.json();
        return data.result;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const fetchCities = async (stateId) => {
    try {
        const res = await fetch('/api/location?type=city&stateId=' + stateId, { method: 'GET' });
        const data = await res.json();
        return data.result;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export default function ItineraryForm({ setActiveTab, itinerary, itineraryInfo, setItineraryInfo }) {
    const router = useRouter();
    const [countries, setCountries] = useState();
    const [states, setStates] = useState();
    const [cities, setCities] = useState();

    useEffect(() => {
        const fetchCountry = async () => {
            const fetchedCountries = await fetchCountries();
            setCountries(fetchedCountries);
        };

        fetchCountry();
    }, []);

    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [packageTitleName, setPackageTitleName] = useState();
    const [validateValue, setValidateValue] = useState();
    const handlePackageTitle = (title) => {
        setPackageTitleName(title);
        if (!title) {
            setValidateValue("Title name is required");
        } else {
            setValidateValue("");
        }
    };

    const [packageBadges, setPackageBadges] = useState();
    const [selectedBadges, setSelectedBadges] = useState([]); // Added selectedBadges state
    console.log("selected badges show is here",selectedBadges)
    const fetchBadges = async () => {
        try {
            const badgeList = await fetch('/api/package-setting/get-badges');
            const badges = await badgeList.json();
            setPackageBadges(badges.PackageBadges);
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchBadges();
        };
        fetchData();
    }, []);

    const [packageCategories, setPackageCategories] = useState();
    const fetchCategories = async () => {
        try {
            const categoriesList = await fetch('/api/package-setting/category/get-categories');
            const categories = await categoriesList.json();
            setPackageCategories(categories.data);
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchCategories();
        };
        fetchData();
    }, []);

    const [displayPrice, setDisplayPrice] = useState();
    const [displayPriceValidate, setDisplayPriceValidate] = useState();
    const handleDisplayPrice = (value) => {
        setDisplayPrice(value);
        if (!value) {
            setDisplayPriceValidate("Price is required");
        } else {
            setDisplayPriceValidate("");
        }
    };

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState();
    const [categoryValidate, setCategoryValidate] = useState();
    const [locationValidate, setLocationValidate] = useState();

    const handleCategory = (category) => {
        setSelectedCategories(category);
        if (!category?.length) {
            setCategoryValidate("Category is required");
        } else {
            setCategoryValidate("");
        }
    };

    const handleLocation = (location) => {
        setSelectedLocation(location);
        if (!location) {
            setLocationValidate("Location is required");
        } else {
            setLocationValidate("");
        }
    };

    const handleSelectCountry = (value) => {
        const fetchState = async () => {
            const fetchedStates = await fetchStates(value);
            setStates(fetchedStates);
        };
        fetchState();
    };

    const handleSelectState = (value) => {
        const fetchCity = async () => {
            const fetchedCities = await fetchCities(value);
            setCities(fetchedCities);
        };
        fetchCity();
    };

    const packageTitleRef = useRef(null);
    const displayPriceRef = useRef(null);

    useEffect(() => {
        setPackageTitleName(itinerary?.name);
        setDisplayPrice(itinerary?.price);
        setSelectedLocation(itinerary?.location);
        handleSelectCountry(itinerary?.location?.state?.country?._id);
        handleSelectState(itinerary?.location?.state?._id);
        handleCategory(itinerary?.category?._id);
    }, [itinerary]);

    const handleSaveBasic = async () => {
        handlePackageTitle(packageTitleName);
        handleDisplayPrice(displayPrice);
        handleCategory(selectedCategories);
        handleLocation(selectedLocation);
        if (!packageTitleName) {
            packageTitleRef.current.focus();
        } else if (!displayPrice) {
            displayPriceRef.current.focus();
        } else if (!selectedCategories?.length || !selectedLocation) {
        } else {
            try {
                const res = await fetch('/api/package/' + (itinerary ? itinerary.id : 'add-package'), {
                    method: itinerary ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: packageTitleName,
                        price: displayPrice,
                        category: selectedCategories,
                        status: 0,
                        location: selectedLocation,
                        badges:selectedBadges
                    })
                });
                const data = await res.json();
                setItineraryInfo(data?.packageBasic);
                router.push('/admin/package/itinerary/' + data?.packageBasic.id);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="bg-white p-4 rounded-md">
                <div className=" grid grid-cols-1 md:grid-cols-2 mb-4 gap-5">
                    <div className="border p-4 rounded">
                        <div>
                            <div className=" sm:flex items-center">
                                <label htmlFor="packagetitle" className=" font-semibold w-28 text-para">Title:</label>
                                <input ref={packageTitleRef} className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                    onChange={(e) => handlePackageTitle(e.target.value)} placeholder="Enter package name" defaultValue={itinerary?.name} />
                            </div>
                            <div className="pl-10">
                                <span className="text-xs text-red-700 capitalize pl-5">{validateValue}</span>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <div className=" sm:flex items-center">
                                    <label htmlFor="packagetitle" className=" font-semibold w-28 text-para">Price:</label>
                                    <input ref={displayPriceRef} className='border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para' type="number"
                                        onChange={(e) => handleDisplayPrice(e.target.value)} name="packagetitle" placeholder="Package Price" defaultValue={itinerary?.price} />
                                </div>
                                <div>
                                    <span className="text-xs text-red-700 capitalize pl-5">{displayPriceValidate}</span>
                                </div>
                            </div>
                        </div>
                        <div className=" border-b-2 pb-4">
                            <div className="">
                                <div>
                                    <label htmlFor="cityBages" className="pb-2 font-semibold text-para">City Badges :</label>
                                    <MultipleSelectChip packageBadges={packageBadges} onSelectedBadgesChange={setSelectedBadges} />
                                </div>
                                <div className="sm:flex items-center mt-2">
                                    <label className=" font-semibold w-28 text-para" htmlFor="">Start & Cities</label>
                                    <div className="flex items-center gap-2">
                                        <input className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para' type="text" />
                                        <MdAddLocationAlt className=" cursor-pointer" size={26} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 border-b-2">
                            <div className="pt-2 flex  items-center gap-3">
                                <div>
                                    <label htmlFor="packageLocation" className="pb-2 font-semibold text-para">Location:</label>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap">
                                    {(itinerary && countries) && (<select id="packageLocation" className=' w-[130px] ml-4 pl-2 rounded-md outline-none border-black border h-6 text-para' onChange={(e) => handleSelectCountry(e.target.value)} defaultValue={itinerary?.location?.state?.country?._id}>
                                        <option value="">Select country</option>
                                        {countries?.map(country => (
                                            <option key={country._id} className='border-none bg-slate-100 text-black' value={country._id}>{country.name}</option>
                                        ))}
                                    </select>)}
                                    {(!itinerary && countries) && (<select id="packageLocation" className=' w-[130px] ml-4 pl-2 rounded-md outline-none border-black border h-6 text-para' onChange={(e) => handleSelectCountry(e.target.value)}>
                                        <option value="">Select country</option>
                                        {countries?.map(country => (
                                            <option key={country._id} className='border-none bg-slate-100 text-black' value={country._id}>{country.name}</option>
                                        ))}
                                    </select>)}
                                    {(itinerary && states) && (<select onChange={(e) => handleSelectState(e.target.value)} className=' w-[130px] ml-4 px-2 rounded-md outline-none border-black border h-6 text-para' defaultValue={itinerary?.location?.state?._id}>
                                        <option value="">Select state</option>
                                        {states?.map(state => (
                                            <option key={state._id} className='border-none bg-slate-100 text-black' value={state._id}>{state.name}</option>
                                        ))}
                                    </select>)}
                                    {(!itinerary && states) && (<select onChange={(e) => handleSelectState(e.target.value)} className='w-[130px] ml-4 px-2 rounded-md outline-none border-black border h-6 text-para'>
                                        <option value="">Select state</option>
                                        {states?.map(state => (
                                            <option key={state._id} className='border-none bg-slate-100 text-black' value={state._id}>{state.name}</option>
                                        ))}
                                    </select>)}
                                    {(itinerary && cities) && (<select onChange={(e) => handleLocation(e.target.value)} id="packageLocation" className='w-[130px] ml-4 rounded-md outline-none border-black px-2 border h-6 text-para' defaultValue={itinerary?.location?._id}>
                                        <option value="">Select city</option>
                                        {cities?.map(city => (
                                            <option key={city._id} className='border-none bg-slate-100 text-black' value={city._id}>{city.name}</option>
                                        ))}
                                    </select>)}
                                    {(!itinerary && cities) && (<select onChange={(e) => handleLocation(e.target.value)} id="packageLocation" className='w-[130px] ml-4 rounded-md outline-none border-black px-2 border h-6 text-para'>
                                        <option value="">Select city</option>
                                        {cities?.map(city => (
                                            <option key={city._id} className='border-none bg-slate-100 text-black' value={city._id}>{city.name}</option>
                                        ))}
                                    </select>)}
                                </div>
                            </div>
                            <span className="text-xs text-red-700 capitalize pl-5">{locationValidate}</span>
                        </div>
                        <div className="py-2 my-4">
                            <div>
                                <label htmlFor="cityBages" className="pb-2 font-semibold text-para">Category :</label>
                                <MultipleSelectCheckmarks packageCategories={packageCategories} onSelectedCategoryIdsChange={handleCategory} />
                                <span className="text-xs text-red-700 capitalize pl-5">{categoryValidate}</span>
                            </div>
                        </div>
                    </div>
                    <div className=" border rounded p-4">
                        <div>
                            <p className="text-[15px] font-semibold">Image Upload</p>
                        </div>
                        <ImageUploading itinerary={itinerary} />
                    </div>
                </div>
                <button className="bg-black text-white w-full rounded py-2" onClick={handleSaveBasic}>Save</button>
            </div>
        </>
    );
}
