import dynamic from "next/dynamic";
import "../../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import components
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
import { faEnvelope, faPrint } from "@fortawesome/free-solid-svg-icons";

// Import React and other dependencies
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Faq1 from "@/components/Faq/Faq1";
// import Metatag from '@/components/ItineraryDetail/MetaTag';
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
    // setPrice1,
    fixedDepDate,
    price2,
    submitButtonOfPricingCalculation,
  } = useAppContext();
  const [images, setImages] = useState(null);
  const [fixedDeparturePopupOpen, setFixedDeparturePopupOpen] = useState(false);
  // const fetchImages = useCallback(async () => {
  //   const res = await fetch(`/api/package/image-upload/${addPackage?._id}`);
  //   const data = await res.json();
  //   return data;
  // }, [addPackage]);
  // console.log(":::::::::::::::::::::::::::::::::::::ad pad--------",addPackage)
  useEffect(() => {
    // fetchImages().then((res) => setImages(res));
    setImages(addPackage?.uploads);
  }, [addPackage]);
  // console.log("Images :: :: :: ",images)
  // displayPrice
  const [isDisplayPrice, setDisplayPrice] = useState(); //display price
  // calculated price show
  // console.log("-==-=-=-=-=-=-=-=-=-=-==",isDisplayPrice)
  useEffect(() => {
    if (addPackage?.addguest === "addGuest") {
      // setPrice1(addPackage.price)
    } else {
      // console.log("fixed departure Packages :: ",addPackage)
    }
  }, [addPackage, guestPrice]);
  // console.log("packages is very smart",addPacka/
  // useEffect(() => {
  //   setPrice1(isDisplayPrice);
  // },[isDisplayPrice])
  const handleSubmit = () => {
    if (fixedDepartureButtonEnaibleAndDisable) {
      setFixedDeparturePopupOpen(true);
    }
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
  };

 // console.log("addPackage12324", addPackage);
  const [buttonGuest, setButtonGuest] = useState("Add Guest & Room");

  useEffect(() => {
    if (closeBtn) {
      setButtonGuest("Book Now");
    }
  }, [closeBtn]);
  return (
    <div>
      {/* <Metatag seoData={addPackage}/> */}
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
          isDisplayPrice={isDisplayPrice}
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
      <div>
        <div
          id="ItinerarySection"
          className="bg-white py-1 shadow-md sticky top-0 z-40"
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
            <ItineraryTourDetails/>
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
                  Minimize Plastic Use: Bring a reusable water bottle, shopping
                  bag, and utensils to reduce the need for single-use plastics.
                  Many destinations have water refill stations and eco-friendly
                  stores.
                </li>
                <li>
                  Support Local and Sustainable Businesses: Eat at local
                  restaurants, buy souvenirs from local artisans, and choose
                  tour operators that prioritize sustainable practices and
                  support the local community.
                </li>
                <li>
                  Respect Wildlife and Natural Habitats: Avoid disturbing
                  wildlife or their natural habitats. Stick to designated paths
                  and observe animals from a distance without feeding or
                  touching them.
                </li>
                <li>
                  Dispose of Waste Properly: Follow local guidelines for
                  recycling and waste disposal. If facilities aren&apos;t
                  available, carry your waste with you until you can dispose of
                  it responsibly.
                </li>
                <li>
                  Educate Yourself and Others: Learn about the local
                  environment, culture, and customs. Respect local practices and
                  traditions, and share your knowledge about responsible travel
                  with others.
                </li>
                <li>
                  Choose Sustainable Activities: Engage in eco-friendly
                  activities such as hiking, snorkeling, or visiting national
                  parks. Avoid activities that exploit animals or damage the
                  environment.
                </li>
                <li>
                  Leave No Trace: Follow the principle of &quot;Leave No
                  Trace,&quot; which means leaving natural areas as you found
                  them. Pack out all trash, avoid picking plants, and refrain
                  from carving or writing on rocks or trees.
                </li>
                <li>
                  Plant Trees Whenever Possible: Participate in local
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
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </span>
                  <p className="text-[12px]">Send Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon icon={faPrint} className="font1" />

                  <p className="text-[12px]">Print Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="font1" />

                  <p className="text-[12px]">Email Itinerary</p>
                </div>
              </div>
              {/* card is here */}
              <ItinerarySideCard />
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
            <p className="md:text-[22px] text-[20px] mb-2">
              HighLight & Inclusion
            </p>
            <p className="text-para md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* <Faq1 data={addPackage?.faqs?.days} /> */}
          <Faq1 data={addPackage.faqs.days} />
        </div>
      ) : null}

      {/* bottom link */}
      <BottomLink locationId={addPackage?.state} addPackage={addPackage} />
      <div className=" flex xl:hidden z-[999]  sticky bottom-0 bg-white border-t-2 border-primary">
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
                className={`${
                  addPackage?.prices?.diskHike < 0 ? "flex" : "hidden"
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
                {addPackage?.addguest==="addGuest"&&<span className="text-lg text-graytext font-medium">
                  ₹
                  {Math.floor(
                    (submitButtonOfPricingCalculation && (guestPrice/2)) ||
                      price2 ||
                      addPackage?.price
                  ).toLocaleString()}
                </span>}
                {addPackage?.addguest==="fixedDeparture"&&<span className="text-lg text-graytext font-medium">
                  ₹
                  {Math.floor(
                    ((guestPrice)) ||
                      addPackage?.price
                  ).toLocaleString()}
                </span>}
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
                      className={` ${
                        showAddguest
                          ? "bg-primary cursor-pointer"
                          : "bg-orange-200"
                      } px-5 py-2 rounded-md text-white text-center text-para`}
                    >
                      <span className="disabled:opacity-75">{buttonGuest}</span>
                    </p>
                  </Addguest>
                )}

                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <button
                    onClick={handleSubmit}
                    className={`border px-5 py-1 rounded-md ${
                      fixedDepartureButtonEnaibleAndDisable
                        ? "bg-primary"
                        : " bg-orange-200"
                    }  text-center text-para`}
                  >
                    Book Now
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
