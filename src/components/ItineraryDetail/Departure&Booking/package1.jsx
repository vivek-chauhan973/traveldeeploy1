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
import { faEnvelope, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Faq1 from "@/components/Faq/Faq1";
const getAllPackags = async () => {
  return await (await fetch("/api/package/get-packages")).json()
}

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
    getAllPackags().then(res => setAllPackages(res?.packages || []))
  }, [])
  const handleClickPopup = () => {
    if (closeBtn) {
      setShowPopup(true);
    }
    if (!closeBtn) {
      setShowPopup1(true)
    }

  }
  useEffect(() => {
    const dataPackage = allPackages?.filter(item => item?.PackageIdGenerate === addPackage?.highlightedPackage);

    setHighLightedPackage1(dataPackage)
  }, [allPackages, addPackage])

  console.log("highlitedPackages1------> ", highlightedPackage1?.[0]);

  const handleSendItinerary = () => {
    const url =
      `https://api.whatsapp.com/send/?phone=919810241558&text=Hello+I+want+to+know+more+about+Chardham+4N+and+5D+Charter+booking.%0A%0A%E2%9E%A4+Travel+Date++%0A%E2%9E%A4+No.+of+seats+a+%0A%E2%9E%A4+Total+Weight+of+pax+a+%0A&type=phone_number&app_absent=0`;

    window.location.href = url;
  };
  const [showSharePopup, setShowSharePopup] = useState(false);
  const handleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };
  const handleEmailRedirect = () => {
    window.location.href = 'mailto:?subject=Your Itinerary&body=Here is your itinerary...';
  };

  return (
    <div>
      {showPopup && <FixedDeparturePopup />}
      {showPopup1 && <Addguest guestPrice={guestPrice}
        inputData={inputData}
        setInputData={setInputData}
        setCloseBtn={setCloseBtn}
        addPackage={addPackage}
        setShowPopup1={setShowPopup1} />}
      <div className="w-full ">
        <DesktopHeader />
      </div>

      {/* <Caraousel /> */}
      <div>
        <Breadcrumbs />
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
              Choose your departure city, dates, and add guests to secure your tour.
            </h1>
            <p className="italic  text-sm">
              Hurry, as seats fill up, prices rise! Book now!
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
                  <ItinaryFixedDepartureCard
                  />
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
                to="TourInformationSection"
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
                to="NeedToKnowSection"
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
                to="UpgradesSection"
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
                  <span className="font-semibold">Minimize Plastic Use : </span> Bring a reusable water bottle, shopping
                  bag, and utensils to reduce the need for single-use plastics.
                  Many destinations have water refill stations and eco-friendly
                  stores.
                </li>
                <li>
                  <span className="font-semibold">Support Local and Sustainable Businesses : </span> Eat at local
                  restaurants, buy souvenirs from local artisans, and choose
                  tour operators that prioritize sustainable practices and
                  support the local community.
                </li>
                <li>
                  <span className="font-semibold">Respect Wildlife and Natural Habitats : </span> Avoid disturbing
                  wildlife or their natural habitats. Stick to designated paths
                  and observe animals from a distance without feeding or
                  touching them.
                </li>
                <li>
                  <span className="font-semibold">Dispose of Waste Properly : </span> Follow local guidelines for
                  recycling and waste disposal. If facilities aren&apos;t
                  available, carry your waste with you until you can dispose of
                  it responsibly.
                </li>
                <li>
                  <span className="font-semibold">Educate Yourself and Others : </span> Learn about the local
                  environment, culture, and customs. Respect local practices and
                  traditions, and share your knowledge about responsible travel
                  with others.
                </li>
                <li>
                  <span className="font-semibold">Choose Sustainable Activities : </span> Engage in eco-friendly
                  activities such as hiking, snorkeling, or visiting national
                  parks. Avoid activities that exploit animals or damage the
                  environment.
                </li>
                <li>
                  <span className="font-semibold">Leave No Trace : </span> Follow the principle of &quot;Leave No
                  Trace,&quot; which means leaving natural areas as you found
                  them. Pack out all trash, avoid picking plants, and refrain
                  from carving or writing on rocks or trees.
                </li>
                <li>
                  <span className="font-semibold">Plant Trees Whenever Possible : </span> Participate in local
                  tree-planting initiatives or plant trees in your own
                  community. Trees absorb carbon dioxide, provide oxygen, and
                  help support biodiversity, making them vital for a healthy
                  environment.
                </li>
              </ol>
            </div>
          </div>
          <div className=" mt-10">
            <div className="sticky top-[50px] z-20">
              <div className="flex gap-1 justify-center items-center">
                <div className="items-center flex flex-col p-2 ml-10 text-center">
                  <span>
                    <svg
                      onClick={handleSendItinerary}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-whatsapp cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </span>
                  <p onClick={handleSendItinerary} className="text-[12px] cursor-pointer">Send Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon icon={faShareNodes} className="font1 cursor-pointer" onClick={handleSharePopup} />
                  <p className="text-[12px] cursor-pointer">Share Itinerary</p>
                  {showSharePopup && (
                    <div className="absolute top-14 left-32 z-[999] bg-slate-50 shadow-md p-4 rounded-md flex justify-center items-center gap-5">
                      <FontAwesomeIcon icon={faTwitter} className="font1 cursor-pointer" onClick={() => window.open('https://twitter.com', '_blank')} />

                      <FontAwesomeIcon icon={faFacebook} className="font1 cursor-pointer" onClick={() => window.open('https://facebook.com', '_blank')} />

                      <FontAwesomeIcon icon={faInstagram} className="font1 cursor-pointer" onClick={() => window.open('https://instagram.com', '_blank')} />

                      <FontAwesomeIcon icon={faLinkedin} className="font1 cursor-pointer" onClick={() => window.open('https://linkedin.com', '_blank')} />

                    </div>
                  )}
                 
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="font1 cursor-pointer" onClick={handleEmailRedirect} />

                  <p className="text-[12px] cursor-pointer">Email Itinerary</p>
                </div>
              </div>
              {/* card is here */}
              <ItinerarySideCard highlightedPackage1={highlightedPackage1?.[0]} />
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
        <div className="my-7 md:p-0 px-4">
          <div className="text-center mb-4">
            <p className="md:text-[22px] text-[20px] mb-2 capitalize font-semibold">
              Frequently Asked Questions (FAQs) <span className="lowercase">for</span> {addPackage?.name}{" Tour Package"}
            </p>
            <p className="text-para md:text-base">
              We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
            </p>
          </div>
          {/* <Faq1 data={addPackage?.faqs?.days} /> */}
          <Faq1 data={addPackage.faqs.days} />
        </div>
      ) : null}

      {/* bottom link */}
      <BottomLink locationId={addPackage?.state} addPackage={addPackage} />
      <div className=" flex xl:hidden z-30  sticky bottom-0 bg-white border-t-2 border-primary">
        <div className=" container-wrapper sm:grid grid-cols-[1fr,2fr]">
          <div className="hidden sm:flex items-center">
            <p className=" text-[20px] font-semibold">{addPackage?.name}</p>
            <div>
              <span></span>
            </div>
          </div>
          <div className="flex gap-1 md:justify-end justify-around  items-center">
            <div className="text-right flex flex-col items-end justify-center ">
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
              <p className="text-sm leading-5">
                Starts From{" "}
                {addPackage?.addguest === "addGuest" && (
                  <span className="text-lg text-graytext font-medium">
                    ₹
                    {Math.floor(
                      (submitButtonOfPricingCalculation && guestPrice / 2) ||
                      price2 ||
                      addPackage?.price
                    ).toLocaleString()}
                  </span>
                )}
                {addPackage?.addguest === "fixedDeparture" && (
                  <span className="text-lg text-graytext font-medium">
                    ₹
                    {Math.floor(
                      guestPrice || addPackage?.price
                    ).toLocaleString()}
                  </span>
                )}
              </p>
              <p className="text-xxs leading-5">per person on twin sharing</p>
            </div>

            <div className="flex-col align-middle my-auto pl-2 gap-2 py-2">

              {addPackage?.prices?.addguest === "addGuest" && (

                <p
                  onClick={fixedDepartureButtonEnaibleAndDisable ? handleClickPopup : null}
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
              {showPopup && (
                <FixedDeparturePopup
                />
              )}
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
  );
}
