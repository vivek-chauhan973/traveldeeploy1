import { useState, } from "react";
import "../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from 'next/image';
import Breadcrumbs from "@/components/Breadcrumbs";
import CarDetailHeroSection from "@/components/car-rental/CarDetailHeroSection";
import CarDepartureSection from "@/components/car-rental/CarDepartureSection";
import CardDetailPricingCard from "@/components/car-rental/CarDetailPricingCard";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import CarItineraryFaq from "@/components/car-rental/CarItineraryFaq";
import CarItinerarymap from "@/components/car-rental/CarItineraryMap";
import CarItineraryPaymentTerms from "@/components/car-rental/CarItineraryPaymentterms";
import CarItinerarySideCard from "@/components/car-rental/CarItinerarySideCard";
import CarReviewsCard from "@/components/car-rental/CarReviewsCard";
import CarDetailFaq from "@/components/car-rental/carDetailFaq";
import BottomLink from "@/components/ItineraryDetail/BottomLink";

export default function CarDetail() {

    const handleSendItinerary = () => {
        const whatsAppUrl = `https://api.whatsapp.com/send/?phone=919810241558&text=Hello+I+want+to+know+more+about+Chardham+4Nights+and+5Days+Charter+booking.%0A%0A%E2%9E%A4+Travel+Date++%0A%E2%9E%A4+No.+of+seats+a+%0A%E2%9E%A4+Total+Weight+of+pax+a+%0A&type=phone_number&app_absent=0`;
        window.location.href = whatsAppUrl;
    };
    const handleEmailRedirect = () => {
        // window.location.href = 'mailto:?subject=Your Itinerary&body=Here is your itinerary...';
        const currentUrl = window.location.href; // Get the current URL
        const subject = encodeURIComponent("I have Itinerary related some query?");
        const body = encodeURIComponent(`Here is this itinerary: ${currentUrl}`);

        window.location.href = `mailto:rakeshspm2323@gmail.com?subject=${subject}&body=${body}`;
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
        window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`, "_blank");
    };
    const handleInstagram = () => {
        alert("Instagram does not support direct URL sharing.");
    };
    const handleLinkedIn = () => {
        // const currentUrl = encodeURIComponent(window.location.href);
        window.open(
            // `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
            `https://www.linkedin.com/sharing/share-offsite/?url=${"https://youtu.be/wTGVHLyV09M?si=qdwwlVkFQM3U5pDy"}`,
            "_blank"
        );
    };
    const handleFacebook = () => {
        const currentUrl = encodeURIComponent(window.location.href);
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
            "_blank"
        );
    }

    return (
        <>
            {/* CarDetailSkeleton  */}
            <div>
                {/* <div className="bg-gradient-to-r from-indigo-50 from-10% via-green-50 via-30% to-indigo-50 to-90%"> */}
                <DesktopHeader />
                <Breadcrumbs />
                {/* Car-rental Banner section */}
                <div>
                    <CarDetailHeroSection />
                    <div className="w-full h-20 bg-[#FF6600] flex flex-col justify-center items-center mb-3">
                        <h1 className="font-bold capitalize">Chardham Yatra From Innova Crysta</h1>
                    </div>
                    <div className="container-wrapper">
                        <div className="flex justify-between">
                            <div>
                                <h2 className=" text-lg md:text-lg font-semibold capitalize my-2">
                                    Vehicle Type : Innova Crysta
                                </h2>
                                <button
                                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize rounded-full py-1 px-2 text-xxs font-semibold text-white">
                                    badge
                                </button>
                                <p className="md:text-md text-[16px] my-2">Ex City : New Delhi</p>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-right flex flex-col items-end justify-center ">
                                    <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                                        best deal price
                                    </p>
                                    <div className="flex gap-1 items-end">
                                        <p className="text-sm line-through">₹</p>
                                        <button className="uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center">
                                            5% Off
                                        </button>
                                    </div>
                                    <p className="text-sm leading-5">
                                        with GST include {" "}
                                        <span className="text-lg text-graytext font-medium">
                                            ₹
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                                    <p
                                        className="bg-gradient-to-r from-orange-500 to-red-500  cursor-pointer px-5 py-2 rounded-md text-white text-center text-para">
                                        Book Now
                                    </p>
                                    {/* <CustomiseTour> */}
                                    <button className=" border-primary w-full border text-primary px-5 py-2 text-para rounded-md">
                                        Customise
                                    </button>
                                    {/* </CustomiseTour> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Departure and Booking summary starts */}
                <div className="bg-gray-100  mt-[20px] pb-7">
                    <div className="container-wrapper mb-4">
                        <div className="mb-[20px] pt-[40px]">
                            <h1 className="text-lg font-medium text-graytext">
                                Choose your departure city, dates, and add guests to secure your
                                tour.
                            </h1>
                            <p className="italic  text-sm">
                                Hurry, as seats fill up, prices rise! Book now!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
                            {/* Calender, About & Highlight */}
                            <CarDepartureSection />
                            {/* Booking Summary */}
                            <CardDetailPricingCard />
                        </div>
                    </div>
                </div>
                {/* Departure and Booking summary end */}
                <div>
                    <div id="ItinerarySection"
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
                                        Car Itinerary
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
                                    Car Itinerary{" "}
                                    <span className="text-[13px] italic text-slate-600 ">
                                        (Day Wise)
                                    </span>
                                </h3>
                            </div>
                            <div>
                                <p className="text-para leading-relaxed  pb-5">
                                    {/* {addPackage?.dayWiseInformation} */}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Impedit voluptate, corporis unde corrupti dolores rem accusamus neque aliquam tempore deserunt cumque explicabo quae maxime non laudantium,
                                    iusto sit quam temporibus harum fuga esse odit itaque? Dolor, sequi et.
                                    Ab assumenda fuga consectetur ex nesciunt explicabo perspiciatis reprehenderit odio, debitis accusamus.
                                </p>
                            </div>
                            {/* Car Itinerary is here */}
                            <div className="mb-7">
                                <CarItineraryFaq />
                            </div>
                            {/* Itinerary map is here*/}
                            <div>
                                <CarItinerarymap />
                            </div>
                            {/* <!- Tour Details is here --> */}
                            {/* <ItineraryTourDetails /> */}

                            {/* Privacy policy Terms */}
                            <div id="Policy&TermsSection" className="pt-7">
                                <CarItineraryPaymentTerms />
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
                                            className="text-[12px] cursor-pointer"
                                        >
                                            Send Itinerary
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
                                        <p className="text-[12px] cursor-pointer">Share Itinerary</p>
                                        {showSharePopup && (
                                            <div className="absolute top-12 left-32 z-[9999] bg-slate-100 shadow-md p-7 rounded-md flex justify-center items-center gap-7">
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
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="font1 cursor-pointer hover:text-primary"
                                                    onClick={handleInstagram}
                                                />
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
                                            className="text-[12px] cursor-pointer"
                                            onClick={handleEmailRedirect}
                                        >
                                            Email Itinerary
                                        </p>
                                    </div>
                                </div>
                                {/* card is here */}
                                <CarItinerarySideCard />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Car reviewsCard */}
                <div className="my-7">
                    <CarReviewsCard />
                </div>

                {/* Similar Car package */}
                <div className=" mt-12 pb-6">
                    {/* <TestingCard/> */}
                </div>

                {/* FAQ section --- when data is not available then all content will hide */}
                <div className="my-7 md:p-0 px-4">
                    <div className="text-center mb-4">
                        <p className="md:text-[22px] text-[20px] mb-2 capitalize font-semibold">
                            Frequently Asked Questions (FAQs){" "}
                            <span className="lowercase">for</span> Chardham
                            {" Tour Package"} From Car
                        </p>
                        <p className="text-para md:text-base">
                            We help you prepare for your trip and ensure an effortless and
                            enjoyable travel experience.
                        </p>
                    </div>
                    <CarDetailFaq />
                </div>

                {/* bottom link is here*/}
                <BottomLink />
            </div>
        </>
    )
};
