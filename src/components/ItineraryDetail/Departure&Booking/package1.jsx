import dynamic from "next/dynamic";
import "../../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DepartureSection = dynamic(() =>
  import("@/components/ItineraryDetail/Departure&Booking/DepartureSection")
);
const ItineraryPricingCard = dynamic(() =>
  import("@/components/ItineraryDetail/Departure&Booking/ItineraryPricingCard")
);
import ItineraryHeroSection from "@/components/ItineraryDetail/ItineraryHeroSection";
const Itinerary = dynamic(() =>
  import("@/components/ItineraryDetail/Itinerarypackage/Itinerary")
);
const ItineraryFaq = dynamic(() =>
  import("@/components/itinerarylist/ItineraryFaq")
);
const ItineraryTourDetails = dynamic(() =>
  import("@/components/ItineraryDetail/Itinerarypackage/ItineraryTourDetails")
);
const ItineraryPaymentTerms = dynamic(() =>
  import("@/components/ItineraryDetail/Itinerarypackage/ItineraryPaymentTerms")
);
const ItinerarySideCard = dynamic(() =>
  import("@/components/ItineraryDetail/Itinerarypackage/ItinerarySideCard")
);
const Itinerarymap = dynamic(() =>
  import("@/components/ItineraryDetail/Itinerarypackage/Itinerarymap")
);
import ReviewsCard from "@/components/ReviewsCard";
const BottomLink = dynamic(() =>
  import("@/components/ItineraryDetail/BottomLink")
);
const CustomiseTour = dynamic(() =>
  import("@/components/ItineraryDetail/CustomiseTour")
);
const Breadcrumbs = dynamic(() => import("@/components/Breadcrumbs"));
const Addguest = dynamic(() => import("@/components/addguest"));
const TestingCard = dynamic(() =>
  import("@/components/ItineraryDetail/TestingCard")
);
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
const ItinaryFixedDepartureCard = dynamic(() =>
  import("./ItinaryFixedDepartureCard")
);
const FixedDeparturePopup = dynamic(() =>
  import("@/components/ItineraryDetail/Departure&Booking/FixedDeparturePopup")
);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Faq1 from "@/components/Faq/Faq1";
import PackageBreadcrums from "@/components/PackageBreadcrums";
import Create from "@/components/login-sinup/login/create";
const getAllPackags = async () => {
  return await (await fetch("/api/package/get-packages")).json();
};
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function Package1() {

  const {
    addPackage,
    guestPrice,
    inputData,
    setInputData,
    closeBtn,
    setCloseBtn,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepCity1,
    setFixedDepDate1,
    fixedDepCity,
    fixedDepDate,
    price2,
    setShowPopup1,
    showPopup1,
    setShowPopup,
    showPopup,
    submitButtonOfPricingCalculation,
  } = useAppContext();

  const { loginPopup, setLoginPopup, schemaData, serverSideProps } = useCarPopupContext();
  // console.log("serverSideProps", serverSideProps);
  const [matchedPackages, setMatchedPackages] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router) return;
    // Extract package slug from URL
    const path = window.location.pathname; // e.g., "/package/darbhanga-tour-package"
    const slug = path.split("/").pop(); // "darbhanga-tour-package"
    if (slug) {
      const title = slug.replace(/-tour-package/, "").split("-") // Remove "tour-package" and split words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
        .join(" ");
      // Filter packages based on extracted title
      const filtered = serverSideProps?.server_Packages?.
        filter(pkg => {
          return pkg.name.toLowerCase().includes(title.toLowerCase())
        });
      setMatchedPackages(filtered?.[0]);
    }
  }, [serverSideProps.server_Packages]);

  const [images, setImages] = useState(null);
  const [allPackages, setAllPackages] = useState([]);
  const [highlightedPackage1, setHighLightedPackage1] = useState();
  const [fixedDeparturePopupOpen, setFixedDeparturePopupOpen] = useState(false);
  useEffect(() => {
    setImages(addPackage?.uploads);
  }, [addPackage]);
  const [isDisplayPrice, setDisplayPrice] = useState();
  useEffect(() => {
    if (addPackage?.addguest === "addGuest") {
    } else {
    }
  }, [addPackage, guestPrice]);
  const handleSubmit = () => {
    if (fixedDepartureButtonEnaibleAndDisable) {
      setFixedDeparturePopupOpen(true);
      setLoginPopup(true);
    }
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
  };
  const [buttonGuest, setButtonGuest] = useState("Add Guest & Room");

  useEffect(() => {
    if (closeBtn) {
      setButtonGuest("Book Now");
    }
  }, [closeBtn]);
  useEffect(() => {
    getAllPackags().then((res) => setAllPackages(res?.packages || []));
  }, []);
  const handleClickPopup = () => {
    if (closeBtn) {
      setShowPopup(true);
    }
    if (!closeBtn) {
      setShowPopup1(true);
    }
  };
  useEffect(() => {
    const dataPackage = allPackages?.filter(
      (item) => item?.customId === addPackage?.highlightedPackage
    );
    setHighLightedPackage1(dataPackage);
  }, [allPackages, addPackage]);
  const handleSendItinerary = () => {
    const whatsAppUrl = `https://api.whatsapp.com/send/?phone=919897581113&text=Hello+I+want+to+know+more+about+Chardham+4Nights+and+5Days+Charter+booking.%0A%0A%E2%9E%A4+Travel+Date++%0A%E2%9E%A4+No.+of+seats+a+%0A%E2%9E%A4+Total+Weight+of+pax+a+%0A&type=phone_number&app_absent=0`;
    window.location.href = whatsAppUrl;
  };
  const handleEmailRedirect = () => {
    const currentUrl = window.location.href; // Get the current URL
    const subject = encodeURIComponent("I have Itinerary related some query?");
    const body = encodeURIComponent(`Here is this itinerary: ${currentUrl}`);
    window.location.href = `mailto: info@bizarexpedition.com?subject=${subject}&body=${body}`;
  };
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleMouseEnter = () => {
    setShowSharePopup(true);
  };
  const handleMouseLeave = () => {
    setShowSharePopup(false);
  };

  const handleTwitter = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`,
      // window.open(`https://twitter.com/intent/tweet?url=${"https://youtu.be/wTGVHLyV09M?si=qdwwlVkFQM3U5pDy"}`,
      "_blank");
  };
  const handleLinkedIn = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      "_blank"
    );
  };
  const handleFacebook = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, // Constructs the Facebook share dialog URL with the encoded current page URL
      "_blank"
    );
  };
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Check this out!");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${message}%20${url}`, "_blank");
  };

  // console.log("addPackage", addPackage);
  // console.log("schemaData", schemaData);
  // console.log("matchedPackages", matchedPackages);

  // Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": matchedPackages?.seo?.title || addPackage?.seoData?.title,
    "description": matchedPackages?.seo?.description || addPackage?.seoData?.description,
    "sku": "BX1234",
    "image": matchedPackages?.uploads && matchedPackages?.uploads?.length > 0 ?
    matchedPackages?.uploads?.map(upload => `https://www.bizarexpedition.com/${upload}`) : " "
    ,
    "brand": {
      "@type": "Brand",
      "name": "BizareXpedition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": schemaData?.ratingValue,
      "ratingCount": schemaData?.ratingCount
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.bizarexpedition.com/package/${matchedPackages?.pageUrl}` || `https://www.bizarexpedition.com/package/${addPackage?.pageUrl}`,
      "priceCurrency": "INR",
      "price": matchedPackages?.price || addPackage?.price,
      "priceValidUntil": matchedPackages?.seo?.priceValid || addPackage?.seoData?.priceValid,
      "seller": {
        "@type": "Organization",
        "name": "BizareXpedition Services Private Limited"
      }
    }
  };

  // Event Schema JSON-LD
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": matchedPackages?.seo?.title,
    "image": matchedPackages?.uploads?.[0],
    "startDate": schemaData?.startDate,
    "endDate": schemaData?.endDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name":  "BizareXpedition™ Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":"13A/4, THDC Near Shivalik Mart, Ranipur, Haridwar Near, near Ram Mandir, Ranipur, Uttarakhand",
        "addressLocality": "Haridwar",
        "postalCode": "249407",
        "addressCountry": "IN"
      }
    }
  };
  
  return (
    <>
      {/* Head Section with Organization Schema */}
      <Head>
        <title>{matchedPackages?.seo?.title || addPackage?.seoData?.title} | BizareXpedition™️</title>
        <meta name="description"
          content={matchedPackages?.seo?.description || addPackage?.seoData?.description}
        />
        <meta
          name="keywords"
          content={matchedPackages?.seo?.keyword || "BizareXpedition™, about us, travel excellence, quality journeys, luxury travel, travel service, brand story"}
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content={matchedPackages?.seo?.title || addPackage?.seoData?.title} />
        <meta property="og:description" content={matchedPackages?.seo?.description || "Discover unforgettable journeys with BizareXpedition™️."} />
        <meta property="og:image" content={`https://www.bizarexpedition.com/${matchedPackages?.uploads?.[0] || 'https://www.bizarexpedition.com/default-meta-image.jpg          '}`} />
        <meta property="og:url" content={`https://www.bizarexpedition.com/package/${matchedPackages?.url || addPackage?.url}-tour-package`} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${matchedPackages?.seo?.title || addPackage?.seoData?.title } | BizareXpedition™️`} />
        <meta name="twitter:description" content={matchedPackages?.seo?.description || "Discover unforgettable journeys with BizareXpedition™️."} />
        <meta name="twitter:image" content={`https://www.bizarexpedition.com/${matchedPackages?.uploads?.[0] || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        {/* Organization Schema */}
        <OrganizationSchema />
        {/* Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>
      <main>
        <div>
          {showPopup && <FixedDeparturePopup />}
          {showPopup1 && (
            <Addguest
              guestPrice={guestPrice}
              inputData={inputData}
              setInputData={setInputData}
              setCloseBtn={setCloseBtn}
              addPackage={addPackage}
              setShowPopup1={setShowPopup1}
            />
          )}
          {loginPopup && (<Create />)}
          <DesktopHeader />
          {/* <Caraousel /> */}
          <div>
            <PackageBreadcrums addPackage={addPackage} />
            <ItineraryHeroSection
              addPackage={addPackage}
              closeBtn={closeBtn}
              guestPrice={guestPrice}
              setInputData={setInputData}
              inputData={inputData}
              setCloseBtn={setCloseBtn}
              images={images}
              isDisplayPrice={isDisplayPrice}
            />
          </div>
          <div className="bg-gray-100  mt-[20px] pb-7">
            <div className="container-wrapper mb-4">
              <div className="mb-[20px] pt-[40px]">
                <h1 className="text-lg font-medium text-graytext">
                  Choose your departure city, dates, and add guests to secure your
                  tour.
                </h1>
                <p className="italic  text-sm">
                  Hurry, as seats fill up, prices rise! Book now! 
                  {schemaData?.startDate}
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
                <div id="departure" className=" hidden xl:block">
                  <DepartureSection addPackage={addPackage} />
                </div>
                <div className="xl:hidden">
                  {addPackage?.prices?.addguest === "addGuest" && (
                    <DepartureSection addPackage={addPackage} />
                  )}
                  {addPackage?.prices?.departure1 === "fixedDeparture" && (
                    <DepartureSection
                      addPackage={addPackage}
                      setFixedDeparturePopupOpen={setFixedDeparturePopupOpen}
                      fixedDeparturePopupOpen={fixedDeparturePopupOpen}
                    />
                  )}
                </div>
                {/* Pricing */}
                <div>
                  <div className="hidden xl:block">
                    {addPackage?.prices?.addguest === "addGuest" && (
                      <ItineraryPricingCard />
                    )}
                    {addPackage?.prices?.departure1 === "fixedDeparture" && (
                      <ItinaryFixedDepartureCard />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Departure city End */}
          <div>
            <div
              id="ItinerarySection"
              className="bg-white py-1 shadow-md sticky top-0 z-30"
            >
              <div className="container-wrapper gap-3  md:gap-12 xs:pb-5 md:pb-0 hide-scrollbar flex justity-start overflow-x-auto ">
                <div>
                  <ScrollLink
                    to="ItinerarySubSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className=" text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      Itinerary
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="TourDetailsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      Tour Details
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="TourDetailsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      Inclusion
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="TourDetailsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      Exclusion
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="Policy&TermsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      {" "}
                      Policy
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="NeedToKnowSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                      Need to Know
                    </p>
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
              <div>
                <div
                  id="ItinerarySubSection"
                  className="flex  justify-between mt-5 mb-3"
                >
                  <h3 className="text-lg font-semibold text-graytext">
                    Itinerary{" "}
                    <span className="text-[13px] italic text-slate-600 ">
                      (Day Wise)
                    </span>
                  </h3>
                </div>
                <div>
                  <p className="text-para leading-relaxed  pb-5">
                    {addPackage?.dayWiseInformation}
                  </p>
                </div>
                <div className="mb-7">
                  {/* <Itinerary /> */}
                  <ItineraryFaq faq={addPackage?.days} />
                </div>
                <div>
                  {/* Itinerary map */}
                  <Itinerarymap />
                </div>
                {/* <!- TOUR DETAILS IS HERE --> */}
                <ItineraryTourDetails />
                {/* Privacy policy Terms */}
                <div id="Policy&TermsSection" className="pt-7">
                  <ItineraryPaymentTerms />
                </div>
                {/* be responsible */}
                <div className="pt-7">
                  <h2 className="md:text-lg text-md font-semibold text-graytext">
                    Be Responsible Traveller
                  </h2>
                  <ol className="text-para ml-6 pt-3">
                    <li>
                      <span className="font-semibold">Minimize Plastic Use : </span>{" "}
                      Bring a reusable water bottle, shopping bag, and utensils to
                      reduce the need for single-use plastics. Many destinations
                      have water refill stations and eco-friendly stores.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Support Local and Sustainable Businesses :{" "}
                      </span>{" "}
                      Eat at local restaurants, buy souvenirs from local artisans,
                      and choose tour operators that prioritize sustainable
                      practices and support the local community.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Respect Wildlife and Natural Habitats :{" "}
                      </span>{" "}
                      Avoid disturbing wildlife or their natural habitats. Stick to
                      designated paths and observe animals from a distance without
                      feeding or touching them.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Dispose of Waste Properly :{" "}
                      </span>{" "}
                      Follow local guidelines for recycling and waste disposal. If
                      facilities aren&apos;t available, carry your waste with you
                      until you can dispose of it responsibly.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Educate Yourself and Others :{" "}
                      </span>{" "}
                      Learn about the local environment, culture, and customs.
                      Respect local practices and traditions, and share your
                      knowledge about responsible travel with others.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Choose Sustainable Activities :{" "}
                      </span>{" "}
                      Engage in eco-friendly activities such as hiking, snorkeling,
                      or visiting national parks. Avoid activities that exploit
                      animals or damage the environment.
                    </li>
                    <li>
                      <span className="font-semibold">Leave No Trace : </span>{" "}
                      Follow the principle of &quot;Leave No Trace,&quot; which
                      means leaving natural areas as you found them. Pack out all
                      trash, avoid picking plants, and refrain from carving or
                      writing on rocks or trees.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Plant Trees Whenever Possible :{" "}
                      </span>{" "}
                      Participate in local tree-planting initiatives or plant trees
                      in your own community. Trees absorb carbon dioxide, provide
                      oxygen, and help support biodiversity, making them vital for a
                      healthy environment.
                    </li>
                  </ol>
                </div>
              </div>
              <div className=" mt-10">
                <div className="sticky top-[50px] z-10">
                  <div className="flex gap-1 justify-center items-center">
                    <div className="items-center flex flex-col p-2 ml-10 text-center">
                      <span>
                        <svg
                          onClick={handleSendItinerary}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-whatsapp cursor-pointer hover:text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                      </span>
                      <p
                        onClick={handleSendItinerary}
                        className="text-[12px] cursor-pointer mx-1 mt-0.5"
                      >
                        Connect
                      </p>
                    </div>
                    <div
                      className="border-l h-full items-center flex flex-col p-2 text-center"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        className="font1 cursor-pointer hover:text-primary"
                      />
                      <p className="text-[12px] cursor-pointer mt-0.5">Share Itinerary</p>
                      {showSharePopup && (
                        <div className="absolute top-12 left-32 z-[9999] bg-slate-100 shadow-md p-7 rounded-md flex justify-center items-center gap-7">
                          <svg
                            onClick={handleWhatsApp}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-whatsapp cursor-pointer hover:text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                          </svg>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="font1 cursor-pointer hover:text-primary"
                            onClick={handleTwitter}
                          />
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="font1 cursor-pointer hover:text-primary"
                            onClick={handleFacebook}
                          />
                          {/* <FontAwesomeIcon
                        icon={faInstagram}
                        className="font1 cursor-pointer hover:text-primary"
                        onClick={handleInstagram}
                      /> */}
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="font1 cursor-pointer hover:text-primary"
                            onClick={handleLinkedIn}
                          />
                        </div>
                      )}
                    </div>
                    <div className="border-l h-full items-center flex flex-col p-2 text-center">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="font1 cursor-pointer hover:text-primary"
                        onClick={handleEmailRedirect}
                      />

                      <p
                        className="text-[12px] cursor-pointer mt-0.5"
                        onClick={handleEmailRedirect}
                      >
                        Email Itinerary
                      </p>
                    </div>
                  </div>
                  {/* card is here */}
                  <ItinerarySideCard
                    highlightedPackage1={highlightedPackage1?.[0]}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* reviewsCard */}
          <div className="my-7">
            <ReviewsCard />
          </div>

          <div className=" mt-12 pb-6">
            <TestingCard addPackage={addPackage} />
          </div>
          {/* FAQ section --- when data is not available then all content will hide */}
          {addPackage?.faqs?.days && addPackage.faqs.days.length > 0 ? (
            <div className=" mt-7 mb-16 md:p-0 px-4">
              <div className="text-center mb-4">
                <p className="md:text-[22px] text-[20px] mb-2 capitalize font-semibold">
                  Frequently Asked Questions (FAQs){" "}
                  <span className="lowercase">for</span> {addPackage?.name}
                  {" Tour Package"}
                </p>
                <p className="text-para md:text-base">
                  We help you prepare for your trip and ensure an effortless and
                  enjoyable travel experience.
                </p>
              </div>
              {/* <Faq1 data={addPackage?.faqs?.days} /> */}
              <Faq1 data={addPackage.faqs.days} />
            </div>
          ) : null}

          {/* bottom pricing */}
          <div className=" flex xl:hidden z-30  sticky bottom-0 bg-white border-t-2 border-primary">
            <div className=" container-wrapper sm:grid grid-cols-[1fr,2fr]">
              <div className="hidden sm:flex items-center">
                <p className=" text-[20px] font-semibold">{addPackage?.name}</p>
                <div>
                  <span></span>
                </div>
              </div>
              <div className="flex gap-1 md:justify-end justify-around  items-center">
                <div className="text-right flex flex-col items-center justify-center py-1">
                  <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                    best deal price
                  </p>
                  <div
                    className={`${addPackage?.prices?.diskHike < 0 ? "flex" : "hidden"
                      } gap-1 items-end`}
                  >
                    <p className="text-sm line-through">
                      ₹{addPackage?.prices?.withoutDiscount}
                    </p>
                    <button className="uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center">
                      {addPackage?.prices?.diskHike}% Off
                    </button>
                  </div>
                  {addPackage?.addguest === "addGuest" && (
                    <div>
                      <p className="text-sm leading-5">
                        Without GST{" "}
                      </p>
                      <p className="text-lg text-graytext font-medium">
                        {Math.floor(
                          (submitButtonOfPricingCalculation && guestPrice) ||
                          price2 ||
                          addPackage?.price
                        ).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  )}
                  {addPackage?.addguest === "fixedDeparture" && (
                    <div>
                      <p className="text-sm leading-5">
                        Starts From{" "}
                      </p>
                      <p className="text-lg text-graytext font-medium">
                        {Math.floor(
                          guestPrice || addPackage?.price
                        ).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  )}
                  {(guestPrice ? "" : <p className="text-xxs leading-5 text-center">per person on twin sharing</p>)}
                </div>
                <div className="flex-col align-middle my-auto pl-2 gap-2 py-2">
                  {addPackage?.prices?.addguest === "addGuest" && (
                    <p
                      onClick={
                        fixedDepartureButtonEnaibleAndDisable
                          ? handleClickPopup
                          : null
                      }
                      className={` ${fixedDepartureButtonEnaibleAndDisable
                        ? "bg-gradient-to-r from-orange-500 to-red-500 cursor-pointer"
                        : "bg-gradient-to-r from-orange-200 to-red-200"
                        } px-5 py-2 rounded-md text-white text-center text-para`}
                    >
                      <span className="disabled:opacity-75">{buttonGuest}</span>
                    </p>
                  )}
                  {addPackage?.prices?.departure1 === "fixedDeparture" && (
                    <button
                      onClick={handleSubmit}
                      className={`border px-5 py-1 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                        ? "bg-gradient-to-r from-orange-500 to-red-500"
                        : " bg-gradient-to-r from-orange-200 to-red-200"
                        }  text-center text-white text-para`}
                    >
                      Book Now
                    </button>
                  )}
                  {showPopup && <FixedDeparturePopup />}
                  {
                    <CustomiseTour>
                      <button className=" border-primary w-full border text-primary px-5 py-1 mt-2 text-para text-center rounded-md cursor-pointer">
                        Customise
                      </button>
                    </CustomiseTour>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
