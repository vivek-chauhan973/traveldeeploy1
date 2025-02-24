import Image from "next/image";
import "../app/globals.css";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
import Cardwork from "@/components/Home/Cards/cardwork";
import ArrowSection from "@/components/Home/Cards/ArrowSection";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import State from "@/components/Home/Cards/State";
import { useEffect, useState } from "react";
import CarArrowSection from "@/components/Home/Cards/CarArrowSection";
import StateCard from "@/components/Home/Cards/StateCard";
import Link from "next/link";
import CarPackageCarousel from "@/components/car-rental/CarPackageCarouel";
import TravelGuideCarousel from "@/components/TravelGuideCarousel";
import BlogsCarousel from "@/components/BlogsCarousel";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function Home(props) {
  const [states, setStates] = useState([]);
  const [homePackages, setHomePackages] = useState(props?.multipost || []);
  const [homeSinglePackages, setSingleHomePackages] = useState(props?.post || []);
  const [packages, setPackages] = useState([]);
  const [cityPackages, setCityPackages] = useState([]);
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);
  const [carPackages, setCarPackages] = useState([]);
  const [carCityPromos, setCarCityPromo] = useState([]);
  const [travelGuidePackage, setTravelGuidePackage] = useState([]);
  const [blogsPackages, setBlogsPackages] = useState([]);
  
  const { setServerSideProps } = useCarPopupContext();

  useEffect(() => {
    setServerSideProps(props || {});
  }, [props, setServerSideProps]);

  useEffect(() => {
    const safeHomePackages = Array.isArray(homePackages) ? homePackages : [];
    
    setStates(safeHomePackages.find(item => item?.category === "category1")?.options || []);
    setPackages(safeHomePackages.find(item => item?.category === "category5")?.options || []);
    setCarPackages(safeHomePackages.find(item => item?.category === "category4")?.options || []);
    setCityPackages(safeHomePackages.find(item => item?.category === "category2")?.options || []);
    setCarCityPromo(safeHomePackages.find(item => item?.category === "category6")?.options || []);
    setTravelGuidePackage(safeHomePackages.find(item => item?.category === "category8")?.options || []);
    setBlogsPackages(safeHomePackages.find(item => item?.category === "category9")?.options || []);
  }, [homePackages]);

  useEffect(() => {
    const safeSinglePackages = Array.isArray(homeSinglePackages) ? homeSinglePackages : [];
    
    setCategory1(safeSinglePackages.filter(item => item?.category === "category1"));
    setCategory2(safeSinglePackages.filter(item => item?.category === "category5"));
    setCategory3(safeSinglePackages.filter(item => item?.category === "category2"));
  }, [homeSinglePackages]);

  const getSafeImageSource = (path) => {
    if (!path) return "/default-image.jpg";
    return path.startsWith("/") ? path : `/${path}`;
  };

  const getCategoryLink = (category, fallback = "tour-packages") => {
    const selectedItem = category?.[0]?.options?.[0]?.selectedItem;
    return `/speciality-tours/${selectedItem || fallback}-tour-packages`;
  };

  return (
    <>
      <Head>
        <title>BizareXpedition™️ - A Signature of Excellence</title>
        <meta name="description" content="Plan your perfect trip with BizareXpedition™️." />
        <OrganizationSchema />
      </Head>
      <main>
        <DesktopHeader multipost={props?.multipost} />
        <HeroSection />

        {/* First Section */}
        {category1?.length > 0 && (
          <div className="container-wrapper md:py-11 py-5">
            <div className="md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center">
              <div className="md:shrink-0 md:mt-0 mt-5 lg:ml-0 ml-2">
                <p className="text-amber-600 font-semibold mb-0.5">
                  {category1[0]?.subtitle || "Explore Unique Destinations"}
                </p>
                <h1 className="md:text-[25px] text-xl font-medium">
                  {category1[0]?.title || "Discover Amazing Journeys"}
                </h1>
                <p className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                  {category1[0]?.description || "Experience unforgettable adventures with our expert guides."}
                </p>
                <Link href={getCategoryLink(category1, "adventure")}>
                  <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                    Know more
                  </button>
                </Link>
              </div>
              <div className="md:ml-28">
                <Link href={getCategoryLink(category1, "adventure")}>
                  <Image
                    width={600}
                    height={265}
                    className="object-cover rounded-[17px] w-full h-[265px]"
                    src={getSafeImageSource(category1[0]?.options?.[0]?.posterPath)}
                    alt="Tour package"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* State Cards */}
        {states?.length > 0 && <StateCard states={states} />}

        {/* Second Section */}
        {category3?.length > 0 && (
          <div className="container-wrapper md:py-11 py-5">
            <div className="md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center">
              <div className="md:shrink-0 md:my-0 my-5 lg:ml-0 ml-2">
                <p className="text-amber-600 font-semibold mb-0.5">
                  {category3[0]?.subtitle || "Featured Destinations"}
                </p>
                <h1 className="md:text-[25px] text-xl font-medium">
                  {category3[0]?.title || "Popular Travel Packages"}
                </h1>
                <p className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                  {category3[0]?.description || "Explore our curated selection of top destinations."}
                </p>
                <Link href={getCategoryLink(category3, "featured")}>
                  <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                    Know more
                  </button>
                </Link>
              </div>
              <div className="md:ml-28">
                <Link href={getCategoryLink(category3, "featured")}>
                  <Image
                    width={600}
                    height={265}
                    className="object-cover rounded-[17px] w-full h-[265px]"
                    src={getSafeImageSource(category3[0]?.options?.[0]?.posterPath)}
                    alt="Featured destinations"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Third Section */}
        {category2?.length > 0 && (
          <div className="container-wrapper md:pb-10 pb-5">
            <div className="md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5 text-wrap md:items-center">
              <div>
                <Link href={`/package/${category2[0]?.options?.[0]?.pageUrl || "#"}`}>
                  <Image
                    width={600}
                    height={265}
                    className="object-cover rounded-[17px] w-full h-[265px]"
                    src={getSafeImageSource(category2[0]?.options?.[0]?.uploads?.[0])}
                    alt="Special package"
                  />
                </Link>
              </div>
              <div className="md:my-0 my-5 lg:ml-0 ml-2">
                <p className="text-amber-600 font-semibold mb-0.5">
                  {category2[0]?.subtitle || "Special Offers"}
                </p>
                <h1 className="md:text-[25px] text-xl font-medium">
                  {category2[0]?.title || "Exclusive Deals"}
                </h1>
                <p className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                  {category2[0]?.description || "Don't miss our limited-time offers and discounts."}
                </p>
                <div className="flex md:justify-between gap-3">
                  <Link href={`/package/${category2[0]?.options?.[0]?.pageUrl || "#"}`}>
                    <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Sections */}
        <div className="md:pb-10 pb-5 xl:mx-16 md:mx-3">
          <Cardwork />
        </div>

        {cityPackages?.length > 0 && (
          <div className="container-wrapper text-center pb-2">
            <p className="md:text-[25px] text-xl font-medium mb-1">
              Your Next Remarkable Adventure Awaits
            </p>
            <div className="container-wrapper justify-center flex flex-wrap">
              {cityPackages.map((item, i) => (
                <HorizontalCard key={`city-${i}`} item={item} />
              ))}
            </div>
          </div>
        )}

        {packages?.length > 0 && <Card4 packages={packages} />}

        <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
          <ArrowSection />
        </div>

        <State />

        <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
          <CarArrowSection carCityPromos={carCityPromos} />
        </div>

        {carPackages?.length > 0 && <CarPackageCarousel carPackageData={carPackages} />}
        {travelGuidePackage?.length > 0 && <TravelGuideCarousel carPackageData={travelGuidePackage} />}
        {blogsPackages?.length > 0 && <BlogsCarousel carPackageData={blogsPackages} />}

        <ReviewsCard />
        <Footer />
      </main>
    </>
  );
}

