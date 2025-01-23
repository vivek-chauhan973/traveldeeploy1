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
              />
            </div>
          </div>
          <div>
            <div>
              <div className=" mb-2">
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
                    <div></div>
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
                    Without GST {" "}
                    <span className="text-lg text-graytext font-medium">
                      {Math.floor(((submitButtonOfPricingCalculation && (guestPrice)) || price2) || addPackage?.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
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
                {(guestPrice ? "" : <p className="text-xxs leading-5">per person on twin sharing</p>)}
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
