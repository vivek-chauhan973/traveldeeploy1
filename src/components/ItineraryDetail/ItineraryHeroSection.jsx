import "../../app/globals.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import Addguest from "@/components/addguest";
import { useEffect, useState } from "react";
import CustomiseTour from "./CustomiseTour";
import Slider from "react-slick";
import { useAppContext } from "../admin/context/Package/AddGuest";
import FixedDeparturePopup from "./Departure&Booking/FixedDeparturePopup";
import Image from 'next/image';
const ItineraryHeroSection = ({
  addPackage,
  guestPrice,
  inputData,
  setInputData,
  closeBtn,
  setCloseBtn,
  images,
  togglePopup,
  fixedDeparturePopupOpen,
}) => {
  const {
    showAddguest,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepCity1,
    setFixedDepDate1,
    fixedDepDate,
    fixedDepCity,
  } = useAppContext();
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
    setHemages(images?.data);
  }, [images, hemages]);
  // console.log("images12324432423",hemages);
  const handleSubmit = () => {
    if (fixedDepartureButtonEnaibleAndDisable) {
      togglePopup(true);
    }
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
  };
  const def = "/logo.png"
  // const handleError = (e) => {
  //   e.target.src = def;
  // };
  // const imageSrc = hemages && hemages[2]?.path ? hemages[2]?.path : def;

  // Inner shadow Main image
  const boxShadowStyle = {
    boxShadow: 'inset 0px -50px 20px  rgba(0, 0, 0, 0.8)'
  };

  return (
    <>

      <div>
        <div className="slider-container xl:hidden mt-7">
          
          <div className="slider-container overflow-x-scroll snap-x snap-mandatory flex hide-scrollbar">
            {hemages?.map((item, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-full">
                <img
                  className="w-full h-[50vh] object-cover"
                  src={item.path || "/logo.png"}
                  alt={`img ${i + 1}`}
                />
              </div>
            ))}
        </div>
        </div>
        <div className="container-wrapper   grid grid-cols-1 xl:grid-cols-[2fr,1fr]  gap-4 ">   
          <div className="relative">
            <img
              className="rounded-md h-[400px] object-cover w-full hidden xl:flex"
              src={hemages && hemages[0]?.path || "/logo.png"}
              alt="img 1"
              width={200}
              height={100}
            />
            <div
              style={boxShadowStyle}
              className="hidden xl:flex  absolute top-0 left-0 z-10 w-full h-[400px] pb-5 text-white text-2xl font-semibold justify-center items-end rounded-md">
              {addPackage?.name} 
            </div>
          </div>
          <div className="justify-end flex-col gap-y-4 md:justify-center w-full hidden xl:flex ">
            <div className="">
              <img
                className="rounded-md h-[192px] w-full object-cover"
                src={hemages && hemages?.[1]?.path || "/logo.png"}
                alt="img 2"
                width={200}
                height={100}
              />
            </div>
            <div className="">
              <img
                className="rounded-md h-[192px] max-md-full w-full object-cover"
                src={hemages && hemages?.[2]?.path || "/logo.png"}
                // src={imageSrc}
                alt="img 3"
                width={200}
                height={100}
                // onError={handleError}
              />

            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-between my-2 p-2 bg-navyblack rounded-lg">
                <h1 className=" text-lg  md:text-xl font-semibold capitalize text-white">
                  {addPackage?.name}
                </h1>
                {/* <div className="flex items-center justify-center border rounded-full w-6 h-6">
                  <img
                    className=" p-1 "
                    src="https://www.svgrepo.com/show/13666/heart.svg"
                    alt="Heart Icon"
                    width={200}
                    height={100}
                  />
                </div> */}
              </div>
              <div className="stick top-1">
              <div className="flex flex-wrap gap-2 text-xxs font-semibold text-white">
                {addPackage?.badges?.map((badge, index) => (
                  <button
                    key={index}
                    className={`rounded-full py-1 px-2 ${
                      index === 0
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize'
                        : 'bg-navyblack'
                    }`}
                  >
                    {badge}
                  </button>
                ))}
              </div>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-wrap gap-1 items-center">
                    <p className="md:text-md text-[16px] ">
                      Start & City:{" "}
                      {addPackage?.startcity?.map((city, index) => (
                        <span key={index} className="capitalize font-semibold text-graytext">
                          {city}{index < addPackage.startcity.length - 1 ? ", " : ""}
                        </span>
                      ))}

                    </p>

                  </div>
                  <div className="flex gap-2 items-center ">
                    <div>
                      <MdOutlineWhatsapp size={25} className="cursor-pointer" />
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
            <div className="hidden xl:flex gap-1">
              <div className="text-right flex flex-col items-end justify-center ">
                <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                  best deal price
                </p>
                <div className="flex gap-1 items-end">
                  <p className="text-sm line-through">₹20,000</p>
                  <button className="uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center">
                    37% Off
                  </button>
                </div>
                {addPackage?.prices?.addguest === "addGuest" && (
                  <p className="text-sm leading-5">
                    Starts From{" "}
                    <span className="text-lg text-graytext font-medium">
                      ₹{addPackage?.price}
                    </span>
                  </p>
                )}
                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <p className="text-sm leading-5">
                    Starts From{" "}
                    <span className="text-lg text-graytext font-medium">
                      ₹{addPackage?.price}
                    </span>
                  </p>
                )}
                <p className="text-xxs leading-5">per person on twin sharing</p>
              </div>
              <div className="flex flex-col align-middle my-auto pl-2 gap-2">
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
                      <span>
                        {closeBtn ? "Book Now" : "Add Guest and Room"}
                      </span>
                    </p>
                  </Addguest>
                )}
                {
                  <CustomiseTour>
                    <p className="border px-5 py-2 rounded-md text-center text-para">
                      <span>Customise</span>
                    </p>
                  </CustomiseTour>
                }
                {addPackage?.prices?.departure1 === "fixedDeparture" && (
                  <button
                    onClick={handleSubmit}
                    className={`border px-5 py-2 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                      ? " bg-primary"
                      : " bg-orange-200"
                      } text-center text-para`}
                  >
                    book now
                  </button>
                )}
                {fixedDeparturePopupOpen && (
                  <FixedDeparturePopup
                    togglePopup={togglePopup}
                    addPackage={addPackage}
                  />
                )}
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ItineraryHeroSection;