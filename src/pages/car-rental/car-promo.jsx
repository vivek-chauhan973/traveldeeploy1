import CarPromoHeroSection from "@/components/car-rental/car-promo/CarPromoHeroSection";
import "../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CarPromo() {

    return (
        <>
            {/* CarPromoSkeleton */}
            <div className='bg-slate-100'>
                <DesktopHeader />
                <Breadcrumbs />
                <CarPromoHeroSection />
                {/* <SearchHeaderWpr /> */}
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
                    <div className='relative'>
                        <div className='hidden xl:block'>
                            {/* <SearchPageFilter /> */}
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* <SearchPagePackageList/> */}
                        </div>
                    </div>
                </div>
                <div className="border-t border">
                    <div className="w-full md:w-3/4 m-auto px-2 pb-5">
                        <div className="text-center mt-5 mb-10">
                            <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">
                                Frequently Asked Questions (FAQs) <span className='lowercase'>for</span>
                            </p>
                            <p className="text-para md:text-base">
                                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
                            </p>
                        </div>
                        {/* <Faq1/> */}
                    </div>
                </div>
                <div className="border-t border">
                    {/* <BottomLink /> */}
                </div>
            </div>
        </>
    );
}
