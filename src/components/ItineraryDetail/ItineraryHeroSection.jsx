import "../../app/globals.css";
import { Link as ScrollLink } from "react-scroll";
import Addguest from "@/components/addguest";
import { useEffect, useState } from "react";
import CustomiseTour from "./CustomiseTour";
import Slider from "react-slick";
import { useAppContext } from "../admin/context/Package/AddGuest";
import FixedDeparturePopup from "./Departure&Booking/FixedDeparturePopup";
import Image from "next/image";
const ItineraryHeroSection = ({
  addPackage,
  guestPrice,
  inputData,
  setInputData,
  closeBtn,
  setCloseBtn,
  images,
  isDisplayPrice
}) => {
  const {
    showAddguest,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepCity1,
    setFixedDepDate1,
    fixedDepDate,
    fixedDepCity,
    showPopup1,
    setShowPopup1,
    showPopup,
    setShowPopup,
    price2, submitButtonOfPricingCalculation
  } = useAppContext();
  const [data, setData] = useState(0);

  const formatINR = (number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const [hemages, setHemages] = useState(null);

  useEffect(() => {
    setHemages(images);
  }, [images]);
  const handleSubmit = () => {
    if (fixedDepartureButtonEnaibleAndDisable) {
      setShowPopup(true);
    }
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
  };
  const handleClickPopup = () => {
    if (closeBtn) {
      setShowPopup(true);
    }
    if (!closeBtn) {
      setShowPopup1(true)
    }

  }
  return (
    <>
      {showPopup && <FixedDeparturePopup />}
      {showPopup1 && <Addguest guestPrice={guestPrice}
        inputData={inputData}
        setInputData={setInputData}
        setCloseBtn={setCloseBtn}
        addPackage={addPackage}
        setShowPopup1={setShowPopup1} />}
      <div>
        <div className="">
          <div className="slider-container xl:hidden  mt-6 ">
            <div className="slider-container overflow-x-scroll snap-x snap-mandatory flex hide-scrollbar relative ">
              {hemages?.map((item, i) => (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-full relative"
                >
                  <img
                    className="w-full h-[50vh] object-cover"
                    src={item}
                    alt={`img ${i + 1}`}
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop if fallback also fails
                      e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                    }}
                  />
                  {/* phone */}
                  <div className="box-Shadow-Style-Package flex justify-end  gap-3  absolute  right-0 z-10 w-full  py-3 uppercase text-white  pl-3 font-bold italic  bottom-0 ">
                    <h1 className="flex items-center text-2xl gap-2 mr-2">
                      {addPackage?.name}
                      <span className=" mt-1 bg-gradient-to-r from-orange-500 to-red-500 py-[2px] px-2 text-white rounded text-para font-bold ">
                        {addPackage?.days?.length - 1}N/{" "}
                        {addPackage?.days?.length}D
                      </span>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* medium devices */}
        <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]  gap-4 ">
          <div className="relative rounded-md overflow-hidden">
            <img
              className="h-[300px] md:h-[400px] object-cover w-[850px] hidden xl:flex"
              src={(hemages && hemages?.[0])}
              alt="img 1"
              width={200}
              height={100}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if fallback also fails
                e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
              }}
            />

            <div className="box-Shadow-Style-Package hidden xl:flex justify-end gap-3 absolute right-0 z-10 w-full py-3 uppercase text-white  pl-3 font-bold italic bottom-0">
              <h1 className="flex items-center gap-2 mr-2 ">
                {addPackage?.name}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 py-[2px] px-2 text-white rounded text-para font-bold  ">
                  {addPackage?.days?.length - 1 > 0 ? addPackage?.days?.length - 1 : 0}N/{" "}
                  {addPackage?.days?.length}D
                </span>
              </h1>
            </div>
          </div>
          <div className="justify-end flex-col gap-y-4 md:justify-center w-full hidden xl:flex ">
            <div className="">
              <img
                className="rounded-md h-[192px] w-full object-cover"
                src={(hemages && hemages?.[1])}
                alt="img 2"
                width={200}
                height={100}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if fallback also fails
                  e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                }}
              />
            </div>
            <div className="">
              <img
                className="rounded-md h-[192px] max-md-full w-full object-cover"
                src={(hemages && hemages?.[2])}
                alt="img 3"
                width={200}
                height={100}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if fallback also fails
                  e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                }}
              // onError={handleError}
              />
            </div>
          </div>
          <div>
            <div>
              <div className=" mb-2 ">
                <h2 className=" text-lg   md:text-xl font-semibold capitalize ">
                  {addPackage?.name}{" Tour package"}
                </h2>
              </div>
              <div className="stick top-1">
                <div className="flex flex-wrap gap-2 text-xxs font-semibold text-white">
                  {addPackage?.badges?.map((badge, index) => (
                    <button
                      key={index}
                      className={`rounded-full py-1 px-2 ${index === 0
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize"
                        : "bg-navyblack"
                        }`}
                    >
                      {badge}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-wrap gap-1 items-center">
                    <p className="md:text-md text-[16px] ">
                      Start & City :{" "}
                      {addPackage?.startcity?.map((city, index) => (
                        <span
                          key={index}
                          className="capitalize font-semibold text-graytext"
                        >
                          {city}
                          {index < addPackage.startcity.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <div>
                      <span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg> */}
                      </span>

                    </div>

                    <div>
                      <ScrollLink
                        to="ItinerarySection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <p className="hidden md:block text-sm underline text-blue font-medium cursor-pointer">
                          View Iternery Page
                        </p>
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="hidden xl:flex gap-5">
              <div className="text-right flex flex-col items-end justify-center ">
                <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                  best deal price
                </p>
                <div className={`${addPackage?.prices?.diskHike < 0 ? 'flex' : 'hidden'} gap-1 items-end`}>
                  <p className="text-sm line-through">₹{addPackage?.prices?.withoutDiscount}</p>
                  <button className="uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center">
                    {addPackage?.prices?.diskHike}% Off
                  </button>
                </div>

                {addPackage?.prices?.addguest === "addGuest" && (
                  <p className="text-sm leading-5">
                    with GST include {" "}
                    <span className="text-lg text-graytext font-medium">
                      {Math.floor(((submitButtonOfPricingCalculation && (guestPrice / 2)) || price2) || addPackage?.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                  </p>
                )}
                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <p className="text-sm leading-5">
                    Starts From{" "}
                    <span className="text-lg text-graytext font-medium">
                      {(guestPrice || addPackage.price)?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                  </p>
                )}
                <p className="text-xxs leading-5">per person on twin sharing</p>
              </div>
              <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                {addPackage?.prices?.addguest === "addGuest" && (

                  <p
                    onClick={fixedDepartureButtonEnaibleAndDisable ? handleClickPopup : null}
                    className={` ${fixedDepartureButtonEnaibleAndDisable
                      ? "bg-gradient-to-r from-orange-500 to-red-500  cursor-pointer"
                      : "bg-gradient-to-r from-orange-200 to-red-200"
                      } px-5 py-2 rounded-md text-white text-center text-para`}
                  >
                    <span>
                      {closeBtn ? "Book Now" : "Add Guest and Room"}
                    </span>
                  </p>

                )}
                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <button
                    onClick={handleSubmit}
                    className={`border px-5 py-2 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                      ? "bg-gradient-to-r from-orange-500 to-red-500 cursor-pointer"
                      : "bg-gradient-to-r from-orange-200 to-red-200"
                      } text-center text-white text-para`}
                  >
                    Book now
                  </button>
                )}
                {
                  <CustomiseTour>
                    <button className=" border-primary w-full border text-primary px-5 py-2 text-para rounded-md">
                      Customise
                    </button>
                  </CustomiseTour>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItineraryHeroSection;
