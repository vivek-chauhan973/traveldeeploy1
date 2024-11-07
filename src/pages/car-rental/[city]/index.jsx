import CarPromoHeroSection from "@/components/car-rental/car-promo/CarPromoHeroSection";
import "../../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import CraPromoFaq from "@/components/car-rental/car-promo/CarPromoFaq";
import BottomLink from "@/components/ItineraryDetail/BottomLink";
import CarPromoSearchPageFilter from "@/components/car-rental/car-promo/CarPromoSearchPageFilter";
import SearchCarPagePackageList from "@/components/car-rental/car-promo/SearchCarPackageList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetchLocationAccordingToCity=async (city)=>{
    const res=await fetch(`/api/cars/location?city=${city}`);
    return await res.json()
}
const fetchPromoDataCity=async (cityId)=>{
    
    const res=await fetch(`/api/cars/location/getpromo?cityId=${cityId}`);
    return await res.json()
}
const fetchCarPackageList=async (cityId)=>{
    const res=await fetch(`/api/cars/location/get-citypackage?cityId=${cityId}`);
    return await res.json()
}
export default function CarPromo() {
const router=useRouter();
const city=router?.query?.city?.replace("-car-hire","")?.split(" ")?.join("-");
// console.log("citty",city)
const [cityId,setCityId]=useState('');
const [cityPromoData,setCityPromoData]=useState({});
const [carPackageList,setCarPackageList]=useState([]);
useEffect(()=>{
    if(city){
    fetchLocationAccordingToCity(city).then(res=>{setCityId(res?.result?.[0]?._id)})
    }
},[city])
useEffect(()=>{
    if(city){
        fetchPromoDataCity(cityId).then(res=>{console.log("promo data res--> ",res);setCityPromoData(res?.data||{})})
    }
},[cityId])
useEffect(()=>{
    if(city){
        fetchCarPackageList(cityId).then(res=>{console.log("promo data res package list--> ",res);setCarPackageList(res?.data||[])})
    }
},[cityId])

// console.log('city id --->',cityId)
// console.log("cityPromoData",cityPromoData);

    return (
        <>
            {/* CarPromoSkeleton */}
            <div className='bg-slate-100'>
                <DesktopHeader />
                <Breadcrumbs />
                <CarPromoHeroSection cityPromoData={cityPromoData}/>
                {/* <SearchHeaderWpr /> */}
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,320px] gap-5 relative">
                    <div>
                        <div>
                            <SearchCarPagePackageList carPackageList={carPackageList}/>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='hidden xl:block'>
                            <CarPromoSearchPageFilter cityId={cityId}/>
                        </div>
                    </div>
                </div>
                <div className="border-t border">
                    <div className="w-full md:w-3/4 m-auto px-2 pb-5">
                        <div className="text-center mt-5 mb-10">
                            <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">
                                Frequently Asked Questions (FAQs) <span className='lowercase'>for</span> {cityPromoData?.selectedItem}
                            </p>
                            <p className="text-para md:text-base">
                                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
                            </p>
                        </div>
                        <CraPromoFaq cityPromoData={cityPromoData}/>
                    </div>
                </div>
                {/* <div className="border-t border">
                    <BottomLink/>
                </div> */}
            </div>
        </>
    );
}
