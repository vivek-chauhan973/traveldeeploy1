import dynamic from 'next/dynamic';
import "../../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import components
const DepartureSection = dynamic(() => import("@/components/ItineraryDetail/Departure&Booking/DepartureSection"));
const ItineraryPricingCard = dynamic(() => import("@/components/ItineraryDetail/Departure&Booking/ItineraryPricingCard"));
import ItineraryHeroSection from "@/components/ItineraryDetail/ItineraryHeroSection";
const Itinerary = dynamic(() => import("@/components/ItineraryDetail/Itinerarypackage/Itinerary"));
const ItineraryFaq = dynamic(() => import("@/components/itinerarylist/ItineraryFaq"))
const ItineraryTourDetails = dynamic(() => import("@/components/ItineraryDetail/Itinerarypackage/ItineraryTourDetails"));
const ItineraryPaymentTerms = dynamic(() => import("@/components/ItineraryDetail/Itinerarypackage/ItineraryPaymentTerms"));
const ItinerarySideCard = dynamic(() => import("@/components/ItineraryDetail/Itinerarypackage/ItinerarySideCard"));
const Itinerarymap = dynamic(() => import("@/components/ItineraryDetail/Itinerarypackage/Itinerarymap"));
import ReviewsCard from "@/components/ReviewsCard";
const BottomLink = dynamic(() => import("@/components/ItineraryDetail/BottomLink"));
const CustomiseTour = dynamic(() => import("@/components/ItineraryDetail/CustomiseTour"));
const Breadcrumbs = dynamic(() => import("@/components/Breadcrumbs"));
const Addguest = dynamic(() => import("@/components/addguest"));
const TestingCard = dynamic(() => import("@/components/ItineraryDetail/TestingCard"));
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader"; const ItinaryFixedDepartureCard = dynamic(() => import("./ItinaryFixedDepartureCard"));
const FixedDeparturePopup = dynamic(() => import("./FixedDeparturePopup"));


// Import React and other dependencies
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Faq1 from '@/components/Faq/Faq1';

export default function Package1() {
  const {
    addPackage,
    guestPrice,
    inputData,
    setInputData,
    closeBtn,
    setCloseBtn,
    showAddguest,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepCity1,
    setFixedDepDate1,
    fixedDepCity,
    fixedDepDate
  } = useAppContext();
  const [images, setImages] = useState(null);
  const [fixedDeparturePopupOpen, setFixedDeparturePopupOpen] = useState(false);
  const fetchImages = useCallback(async () => {
    const res = await fetch(`/api/package/image-upload/${addPackage?._id}`);
    const data = await res.json();
    return data;
  }, [addPackage]);

  useEffect(() => {
    fetchImages().then((res) => setImages(res));
  }, [addPackage, fetchImages]);

  // console.log("packages is very smart",addPacka/
  const handleSubmit = () => {
    if (fixedDepartureButtonEnaibleAndDisable) {
      setFixedDeparturePopupOpen(true);
    }
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
  };
  console.log("addPackage12324", addPackage);
  const [buttonGuest, setButtonGuest] = useState("Add Guest & Room");

  useEffect(() => {
    if (closeBtn) {
      setButtonGuest("Book Now");
    }
  }, [closeBtn])
  return (
    <div>
      <div className=" absolute w-full ">
        <DesktopHeader />
      </div>

      {/* <Caraousel /> */}
      <Breadcrumbs />
      <div className="md:mt-20 mt-3">
        <ItineraryHeroSection
          addPackage={addPackage}
          closeBtn={closeBtn}
          guestPrice={guestPrice}
          setInputData={setInputData}
          inputData={inputData}
          setCloseBtn={setCloseBtn}
          images={images}
          togglePopup={setFixedDeparturePopupOpen}
          fixedDeparturePopupOpen={fixedDeparturePopupOpen}
        />
      </div>
      <div className="bg-gray-100  mt-[20px] pb-7"> 
        <div className="container-wrapper mb-4">
          <div className="mb-[20px] pt-[40px]">
            <h1 className="text-lg font-medium text-graytext">
              Select departure city, dates & add guest to book your tour
            </h1>
            <p className="italic  text-sm">
              As seats fill, prices increase! So book today!
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
            {/*Select departure city */}

            <div id="departure" className=" hidden xl:block">
              <DepartureSection addPackage={addPackage} />
            </div>
            <div className="xl:hidden">
              {addPackage?.prices?.addguest === "addGuest" && (
                <DepartureSection addPackage={addPackage} />
              )}
              {addPackage?.prices?.departure1 === "fixedDeparture" && (
                <ItinaryFixedDepartureCard
                  addPackage={addPackage}
                  togglePopup={setFixedDeparturePopupOpen}
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
                    addPackage={addPackage}
                    togglePopup={setFixedDeparturePopupOpen}
                    fixedDeparturePopupOpen={fixedDeparturePopupOpen}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Departure city End */}
      <div className="">
        <div
          id="ItinerarySection"
          className="bg-white py-1 shadow-md sticky top-0 z-40"
        >
          <div className="container-wrapper gap-3  md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
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
              <p className="text-lg font-semibold text-graytext">
                Itinerary{" "}
                <span className="text-[13px] italic text-slate-600 ">
                  (Day Wise)
                </span>
              </p>
            </div>
            <div>
              <p className="text-para leading-relaxed  pb-5">
                {addPackage?.dayWiseInformation}
              </p>
            </div>
            <div className="mb-7">
              {/* <Itinerary /> */}
              <ItineraryFaq faq={addPackage?.days}/>

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
          </div>
          <div className=" mt-10">
            <div className="sticky top-[50px] z-20">
              <div className="flex gap-1 justify-center items-center">
                <div className="items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                    alt=""
                    width="125"
                    height="150"
                  />
                  <p className="text-[12px]">Send Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/522439/printer.svg"
                    alt=""
                    width="125"
                    height="150"
                  />
                  <p className="text-[12px]">Print Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/522399/envelope-closed.svg"
                    alt=""
                    width="125"
                    height="150"
                  />
                  <p className="text-[12px]">Email Itinerary</p>
                </div>

              </div>
              {/* card is here */}
              <div ClassName="xl:block hidden">
               <ItinerarySideCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review card */}
      <div className="mt-7 mb-5">
        <ReviewsCard/>
      </div>
      <div className="container-wrapper ">
        <div>
          <h2 className="md:text-xl font-semibold  text-lg">
            Similar Tour Packages
          </h2>
          <h2 className="md:text-md text-[15px] italic">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <TestingCard addPackage={addPackage} />
      </div>
      {/* bottom link */}
      {/* FAQ section  */}
      <div className='mt-12'>
        <div className="text-center mb-4">
            <p className="md:text-[22px] text-[20px] mb-2">HighLight & Inclusion</p>
          <p className="text-para md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Faq1 data={addPackage?.faqs?.days} />
      </div>
      <BottomLink />
      <div className=" flex xl:hidden z-[999]  sticky bottom-0 bg-white border-t-2 border-primary">
        <div className=" container-wrapper sm:grid grid-cols-[1fr,2fr]">
          <div className="hidden sm:flex items-center">
            <p className=" text-[20px] font-semibold">{addPackage?.name}</p>
            <div>
              <span></span>
            </div>
          </div>
          <div className="flex gap-1 justify-end">
            <div className="text-right flex flex-col items-end justify-center ">
              <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                best deal price
              </p>
              <p className="text-sm leading-5">
                Starts From{" "}
                <span className="text-lg text-graytext font-medium">
                  {addPackage?.price}
                </span>
              </p>
              <p className="text-xxs leading-5">per person on twin sharing</p>
            </div>

            <div className=" flex-col  align-middle my-auto pl-2 gap-2 py-2">
              <ScrollLink
                to="departure"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {addPackage?.prices?.addguest === "addGuest" && (
                  <Addguest
                    guestPrice={guestPrice}
                    setInputData={setInputData}
                    inputData={inputData}
                    setCloseBtn={setCloseBtn}
                    addPackage={addPackage}
                  >
                    <p
                      className={` ${showAddguest
                          ? "bg-primary cursor-pointer"
                          : "bg-orange-200"
                        } px-5 py-2 rounded-md text-white text-center text-para`}
                    >
                      <span className="disabled:opacity-75" onClick={() => setPricingShowPopup(true)}>
                        {buttonGuest}
                      </span>
                    </p>
                  </Addguest>
                )}


                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <button
                    onClick={handleSubmit}
                    className={`border px-5 py-1 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                        ? "bg-primary"
                        : " bg-orange-200"
                      }  text-center text-para`}
                  >
                    Book Noow
                  </button>
                )}
                {fixedDeparturePopupOpen && (
                  <FixedDeparturePopup
                    togglePopup={setFixedDeparturePopupOpen}
                    addPackage={addPackage}
                  />
                )}
              </ScrollLink>

              {
                <CustomiseTour>
                  <p className="border px-5 cursor-pointer py-1 mt-2 rounded-md text-center text-para">
                    <span>Customise</span>
                  </p>
                </CustomiseTour>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
