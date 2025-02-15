import "../../app/globals.css";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaGlobe, FaCar, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import { IoMdArrowDropdown } from "react-icons/io";
import CarSelectionPopup from "@/components/car-rental/CarSelectionPopup";
import CarCities from "@/components/car-rental/CarCities";
import CarPackageCarousel from "@/components/car-rental/CarPackageCarouel";
import CarCarousel from "@/components/car-rental/CarCarousel";
import CarReviewCard from "@/components/car-rental/CarHome/CarReviewCard";
import StaticBanner from "@/components/car-rental/StaticBanner";
import Footer from "@/components/Footer";
import MobilePicker from "@/components/car-rental/MobilePicker";
import Create from "@/components/login-sinup/login/create";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import CarBookingPopup from "@/components/car-rental/CarBookingPopup";
import CarBookingPopupOutsation from "@/components/car-rental/CarBookingPopupOutstation";
import ActiveInactive from "@/components/car-rental/ActiveInactive";
import Link from "next/link";
import Picker from "@/components/car-rental/Picker";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import CarHomeBreadCrumb from "@/components/CarHomeBreadCrumb";
const fetchPromoList = async () => {
  const response = await fetch(
    `/api/public/package-state/carpromo/fetchpromocat?selectType=city`
  );
  const data = await response.json();
  return data;
};

const getCitiesCarPackages = async (cityId) => {
  const res = await fetch(
    `/api/cars/location/get-citypackage?cityId=${cityId}`
  );
  return await res.json();
};

const CarHireSection = ({ title, services, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [carCTPackages, setCarCTPackages] = useState([]);

  useEffect(() => {
    getCitiesCarPackages(services).then((res) =>
      console.log("res of packages----> ", res)
    );
  }, [services]);
  const handleClick = () => {
    setIsOpen(!isOpen);
    getCitiesCarPackages(services).then((res) => {
      setCarCTPackages(res?.data || []);
    });
  };

  //  console.log("res of packages----> ", carCTPackages);

  return (
    <div className="px-5">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleClick}
      >
        <p className="capitalize font-semibold cursor-pointer">
          {title} Taxi Service
        </p>
        {isOpen ? (
          <MdKeyboardArrowUp size={25} className="font-semibold" />
        ) : (
          <MdKeyboardArrowDown size={25} className="font-semibold" />
        )}
      </div>
      {isOpen && (
        <ul className="py-1 pl-2">
          {carCTPackages?.slice(0, 3)?.map((service, index) => (
            <Link
              href={
                "/car-rental/" + service.location.url + "/" + service.pageUrl
              }
              key={index}
            >
              <li className="capitalize text-sm hover:underline cursor-pointer text-gray-600">
                {service?.name}
              </li>
            </Link>
          ))}
          {carCTPackages?.length > 0 ?
            <div className="flex justify-end pb-2">
              <Link
                href={`/car-rental/${url}-car-hire`}
                className="py-1 px-5 rounded-md text-xs bg-navyblack text-white"
              >
                More.....
              </Link>
            </div>
            :
            ""}

        </ul>
      )}
      <hr />
    </div>
  );
};

//all api is here -------------------------------->

const fetchAllSection = async () => {
  const data = await fetch("/api/cars/carhome");
  return await data.json();
};
const fetchCarBanner = async () => {
  const data = await fetch("/api/cars/carhome/carbanner");
  return await data.json();
};
const fetchHeading1 = async () => {
  const data = await fetch("/api/cars/carhome/heading1");
  return await data.json();
};
const fetchHeading2 = async () => {
  const data = await fetch("/api/cars/carhome/heading2");
  return await data.json();
};
const fetchCarousel = async () => {
  const data = await fetch("/api/cars/carhome/carCrousel");
  return await data.json();
};
const fetchStaticCarousel = async () => {
  const data = await fetch("/api/cars/carhome/carCrouselStatic");
  return await data.json();
};

const fetchAllCities = async () => {
  const res = await fetch("/api/location/city");
  return await res.json();
};

export default function App(pageprops) {
  const { loginPopup, showPopup, setShowPopup,
    showPopupOutstation, activeInactivePopup, setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }

  }, [pageprops]);
  const [cityPromoData, setCityPromoData] = useState([]);
  const [carPackageData, seCarPackageData] = useState([]);
  const [carBanner, setCarBanner] = useState({});
  const [carHeading1, setCarHeading1] = useState({});
  const [carHeading2, setCarHeading2] = useState({});
  const [carCarousel, setCarCarousel] = useState([]);
  const [carAllSection, setCarAllSection] = useState([]);
  const [staticBanner, setStaticBanner] = useState([]);
  const [cities, setCities] = useState([]);


  useEffect(() => {
    // Fetch itinerary data
    const fetchItineraryData = async () => {
      try {
        const response = await fetch("/api/cars/package/get-packages");
        const data = await response.json();
        seCarPackageData(data.packages || []); // Provide a default empty array if data.packages is undefined
      } catch (error) { }
    };

    fetchItineraryData();
    fetchAllSection().then((res) => {
      setCarAllSection(res?.data || []);
    });
    fetchCarBanner().then((res) => {
      setCarBanner(res?.data?.[0] || {});
    });

    fetchHeading1().then((res) => {
      setCarHeading1(res?.data?.[0] || {});
    });
    fetchHeading2().then((res) => {
      setCarHeading2(res?.data?.[0] || {});
    });

    fetchCarousel().then((res) => {
      setCarCarousel(res?.data || []);
    });
    fetchStaticCarousel().then((res) => {
      setStaticBanner(res?.data || []);
    });
    fetchAllCities().then((res) => {
      setCities(res?.result || []);
    });
  }, []);

  useEffect(() => {
    fetchPromoList().then((res) => {
      setCityPromoData(res?.responseData || []);
    });
  }, []);
  const packageDataCity = carAllSection?.filter(
    (item) => item?.category === "category1"
  );
  const packageData = carAllSection?.filter(
    (item) => item?.category === "category2"
  );

  // console.log("all section fetchHeading2 data is here ----> ",cities);

  const [show, setShow] = useState(false);
  const [carSelectionPopup, setCarSelectionPopup] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const boxShadowStyle = {
    boxShadow: "inset 0px -50px 20px  rgba(0, 0, 0, 0.8)",
  };

  return (
    <>
      <Head>
        <title>Car Rental | BizareXpedition™️</title>
        <meta name="description"
          content="Discover unforgettable journeys with BizareXpedition™️."
        />
        <meta
          name="keywords"
          content="BizareXpedition™, car hire, travel excellence, quality journeys, luxury travel, travel service, brand story"
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Car-Rental | BizareXpedition™️"/>
        <meta property="og:description" content="Discover unforgettable journeys with BizareXpedition™️." />
        <meta property="og:image" content={`https://www.bizarexpedition.com/ || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        <meta property="og:url" content={`https://www.bizarexpedition.com/car-rental/`} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car-Rental | BizareXpedition™️" />
        <meta name="twitter:description" content="Discover unforgettable journeys with BizareXpedition™️." />
        <meta name="twitter:image" content="https://www.bizarexpedition.com/default-meta-image.jpg" />
        {/* Organization Schema */}
        <OrganizationSchema />
      </Head>
      <main>
        <div>
          {/* CarRentalHomeSkelton  */}
          {activeInactivePopup && <ActiveInactive />}
          {carSelectionPopup && <CarSelectionPopup setCarSelectionPopup={setCarSelectionPopup} />}
          {showPopup && <CarBookingPopup />}
          {showPopupOutstation && <CarBookingPopupOutsation />}
          {loginPopup && <Create />}
          <DesktopHeader />
          <CarHomeBreadCrumb/>
          <div className="container-wrapper"></div>
          <div className="mb-2 md:mb-5">
            <div className="overflow-hidden relative xl:h-[83vh] h-[80vh]">
              <div className="container-wrapper">
                <div className="absolute top-20">
                  <p className="md:font-semibold font-bold md:text-xl text-lg  text-white w-2/3">
                    {carBanner?.title}
                  </p>
                </div>
              </div>
              <div className="container-wrapper xl:block hidden">
                <div className="absolute top-2/4 -translate-y-3/4">
                  <Picker setCarSelectionPopup={setCarSelectionPopup} />
                </div>
              </div>
              <div>
                <Image
                  className=" w-full xl:h-full h-[80vh] object-cover"
                  src={
                    carBanner?.path ||
                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  width={1283}
                  height={854}
                />
              </div>
            </div>
            <div className="xl:hidden block absolute top-56 md:left-56">
              <div className="p-2 my-5 md:flex justify-center items-center">
                <MobilePicker setCarSelectionPopup={setCarSelectionPopup} />
              </div>
            </div>
          </div>
          <div className="py-5 container-wrapper">
            <div classname="">
              <p className="md:font-semibold font-medium text-xl">
                {carHeading1?.heading1}
              </p>
              <p
                className={`text-[15px] pt-4 ${show ? "" : "line-clamp-6 md:line-clamp-3"
                  }`}
              >
                {carHeading1?.description1}
              </p>
            </div>
            <div className="flex justify-end">
              <div className="flex justify-center items-center md:h-6 h-5 md:w-24 w-20 mt-2 bg-navyblack rounded shadow-sm text-white cursor-pointer">
                <button className=" md:text-sm text-xs" onClick={handleToggle}>
                  {show ? "Read less" : "Read more"}
                </button>
                <span>
                  <IoMdArrowDropdown
                    className={`transition-transform  ${show ? "rotate-180" : ""
                      } `}
                    onClick={handleToggle}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* CarCities are here */}
          <CarCities cityPromoData={packageDataCity?.[0]?.options} />
          {/* Static section are here */}
          <div className="xl:px-20 md:px-7 px-5">
            <div className="flex flex-col md:flex-row md:gap-7 gap-10 justify-between items-center md:pb-20 pb-14 md:pt-10 pt-7 mx-auto">
              <div className="flex flex-col max-w-sm">
                <div className="flex items-center mb-2 gap-3 ">
                  <FaGlobe className="text-2xl" />
                  <h3 className="text-md font-semibold">Wide Range of Vehicles</h3>
                </div>
                <p className="text-[23px] font-semibold">
                  we offer vehicles that suit every journey.
                </p>
              </div>
              <div className="flex flex-col max-w-sm my-4 ">
                <div className="flex items-center mb-2 gap-3 ">
                  <FaCar className="text-2xl" />
                  <h3 className="text-md font-semibold">Affordable Pricing</h3>
                </div>
                <p className="text-[23px] font-semibold">
                  Experience competitive rates without compromising on quality.
                </p>
              </div>
              <div className="flex flex-col max-w-sm my-3 ">
                <div className="flex items-center mb-2 gap-3 ">
                  <FaHandsHelping className="text-2xl" />
                  <h3 className="text-md font-semibold">Easy Booking Process</h3>
                </div>
                <p className="text-[23px] font-semibold">
                  Lets you book your ride in just a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="md:container-wrapper">
            <CarCarousel carCarousel={carCarousel} />
          </div>
          {/* Car Packages are here */}
          <CarPackageCarousel carPackageData={packageData?.[0]?.options} />
          <div
            className="py-5 container-wrapper pt-10 -z-40"
            onClick={() => setCarSelectionPopup(false)}
          >
            <div>
              <p className="md:font-semibold font-medium text-xl">
                {carHeading2?.heading2}
              </p>
              <p
                className={`text-[15px] pt-4 ${show ? "" : "line-clamp-6 md:line-clamp-3"
                  }`}
              >
                {carHeading2?.description2}
              </p>
            </div>
            <div className="flex justify-end">
              <div className="flex justify-center items-center md:h-6 h-5 md:w-24 w-20 mt-2 bg-navyblack rounded shadow-sm text-white cursor-pointer">
                <button className=" md:text-sm text-xs" onClick={handleToggle}>
                  {show ? "Read less" : "Read more"}
                </button>
                <span>
                  <IoMdArrowDropdown
                    className={`transition-transform  ${show ? "rotate-180" : ""
                      } `}
                    onClick={handleToggle}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="container-wrapper">
            <div className="py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {cities?.slice(0, 24)?.map((carHire, index) => (
                  <CarHireSection
                    key={index}
                    title={carHire?.name}
                    services={carHire?._id}
                    url={carHire?.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <StaticBanner staticBanner={staticBanner} carCarousel={carCarousel} />
          <CarReviewCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
