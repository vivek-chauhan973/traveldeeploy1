import CarPromoHeroSection from "@/components/car-rental/car-promo/CarPromoHeroSection";
import "../../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import CraPromoFaq from "@/components/car-rental/car-promo/CarPromoFaq";
import CarPromoSearchPageFilter from "@/components/car-rental/car-promo/CarPromoSearchPageFilter";
import CarPromoPhoneFilter from "@/components/car-rental/car-promo/CarPromoPhoneFilter";
import SearchCarPagePackageList from "@/components/car-rental/car-promo/SearchCarPackageList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import { CancelIcon } from "@/components/icons/index"
import Footer from "@/components/Footer";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import CarBreadcrumbs from "@/components/CarBreadCrumb";


const fetchLocationAccordingToCity = async (city) => {
    const res = await fetch(`/api/cars/location?city=${city}`);
    return await res.json()
}
const fetchPromoDataCity = async (cityId) => {

    const res = await fetch(`/api/cars/location/getpromo?cityId=${cityId}`);
    return await res.json()
}
const fetchCarPackageList = async (cityId) => {
    const res = await fetch(`/api/cars/location/get-citypackage?cityId=${cityId}`);
    return await res.json()
}
export default function CarPromo(pageprops) {
    const { setServerSideProps } = useCarPopupContext();
    useEffect(() => {
        if (pageprops) {
            setServerSideProps(pageprops || {});
        }

    }, [pageprops]);
    const router = useRouter();
    const city = router?.query?.city?.replace("-car-hire", "")?.split(" ")?.join("-");
    // console.log("citty",city)
    const [cityId, setCityId] = useState('');
    const [cityPromoData, setCityPromoData] = useState({});
    const [carPackageList, setCarPackageList] = useState([]);
    useEffect(() => {
        if (city) {
            fetchLocationAccordingToCity(city).then(res => { setCityId(res?.result?.[0]?._id) })
        }
    }, [city])
    useEffect(() => {
        if (city) {
            fetchPromoDataCity(cityId).then(res => { setCityPromoData(res?.data || {}) })
        }
    }, [cityId])
    useEffect(() => {
        if (city) {
            fetchCarPackageList(cityId).then(res => { setCarPackageList(res?.data || []) })
        }
    }, [cityId])

    // console.log('city id --->',cityId)
    console.log("cityPromoData", cityPromoData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleResize = () => {
        // Check if window width is 1200 pixels or less
        if (window.innerWidth <= 1200) {
            setIsModalOpen(false); // Close modal if window width is 1200 or less
        }
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        return () => {
            // Cleanup by removing event listener on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <title>{cityPromoData?.seoField?.seoTitle} | BizareXpedition™️</title>
                <meta name="description"
                    content={cityPromoData?.seoField?.seoDescription}
                />
                <meta
                    name="keywords"
                    content={cityPromoData?.seoField?.seoKeywords || "BizareXpedition™, about us, travel excellence, quality journeys, luxury travel, travel service, brand story"}
                />
                {/* Author and Robots */}
                <meta name="author" content="BizareXpedition" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph for Social Media */}
                <meta property="og:title" content={cityPromoData?.seoField?.seoTitle} />
                <meta property="og:description" content={cityPromoData?.seoField?.seoDescription || "Discover unforgettable journeys with BizareXpedition™️."} />
                <meta property="og:image" content={`https://www.bizarexpedition.com/${cityPromoData?.image} || 'https://www.bizarexpedition.com/default-meta-image.jpg          '}`} />
                <meta property="og:url" content={`https://www.bizarexpedition.com/india/${cityPromoData?.title}-car-hire`} />
                <meta property="og:type" content="website" />
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cityPromoData?.seoField?.seoTitle} />
                <meta name="twitter:description" content={cityPromoData?.seoField?.seoDescription || "Discover unforgettable journeys with BizareXpedition™️."} />
                <meta name="twitter:image" content={`https://www.bizarexpedition.com/${cityPromoData?.image} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
                {/* Organization Schema */}
                <OrganizationSchema />
            </Head> 
            <main>
                {/* CarPromoSkeleton */}
                <div className='bg-slate-100'>
                    <DesktopHeader />
                    <CarBreadcrumbs />
                    <CarPromoHeroSection cityPromoData={cityPromoData} cityId={cityId} />
                    {/* <SearchHeaderWpr /> */}
                    <div className="container-wrapper flex justify-between pb-5 items-center">
                        <div>
                            <div className=" md:flex gap-2 items-center">
                                <p className="text-[16px]"> Havelock Tour Package Car Packages</p>
                            </div>
                            <p className="text-[13px]">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <select className="select w-full max-w-xs hidden  select-sm text-[13px]">
                                <option disabled selected>
                                    Who shot first?
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <button className="border rounded-sm border-gray-400 text-sm px-2 py-0.5 hover:bg-white xl:hidden block"
                                onClick={handleOpenModal}
                            >
                                Filter
                            </button>
                        </div>
                        <Modal open={isModalOpen} onClose={handleCloseModal}>
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 mt-7">
                                <div className="relative bg-white px-6 py-8 rounded-lg w-full max-w-md h-[80%] max-h-[95vh] overflow-y-auto">
                                    <button onClick={handleCloseModal}
                                        className="absolute top-3 right-2 text-gray-500 hover:text-gray-700">
                                        <CancelIcon />
                                    </button>
                                    <CarPromoPhoneFilter handleCloseModal={handleCloseModal} />
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,320px] gap-5 relative">
                        <div>
                            <div>
                                <SearchCarPagePackageList carPackageList={carPackageList} setCarPackageList={setCarPackageList} />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='hidden xl:block'>
                                <CarPromoSearchPageFilter />
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
                            <CraPromoFaq cityPromoData={cityPromoData} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
