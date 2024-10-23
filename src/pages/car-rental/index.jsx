import "../../app/globals.css";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaGlobe, FaCar, FaHandsHelping } from 'react-icons/fa';
import Carousel from "@/components/car-rental/CarouselCard";
import Image from "next/image";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import { IoMdArrowDropdown } from "react-icons/io";
import Breadcrumbs from "@/components/Breadcrumbs";
import Picker from "@/components/car-rental/Picker";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import CarSelectionPopup from "@/components/car-rental/CarSelectionPopup";
import CarCities from "@/components/car-rental/CarCities";
import CarPackageCarousel from "@/components/car-rental/CarPackageCarouel";
import CarCarousel from "@/components/car-rental/CarCarousel";
const fetchPromoList = async () => {
  const response = await fetch(
    `/api/public/package-state/carpromo/fetchpromocat?selectType=city`
  );
  const data = await response.json();
  return data;
};

const CarHireSection = ({ title, services }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-5">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="capitalize font-semibold cursor-pointer">{title}</p>
        {isOpen ? (
          <MdKeyboardArrowUp size={25} className="font-semibold" />
        ) : (
          <MdKeyboardArrowDown size={25} className="font-semibold" />
        )}
      </div>
      {isOpen && (
        <ul className="py-1 pl-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="capitalize text-sm hover:underline cursor-pointer text-gray-600"
            >
              {service}
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

const FAQSection = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-5 mb-10">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="capitalize cursor-pointer">{question}</p>
        {isOpen ? (
          <MdKeyboardArrowUp size={25} className="font-semibold" />
        ) : (
          <MdKeyboardArrowDown size={25} className="font-semibold" />
        )}
      </div>
      {isOpen && (
        <div>
          <p className="text-para py-1">{answer}</p>
        </div>
      )}
      <hr />
    </div>
  );
};

export default function App() {
  const [cityPromoData, setCityPromoData] = useState([]);
  const [carPackageData, seCarPackageData] = useState([]);
  useEffect(() => {
    // Fetch itinerary data
    const fetchItineraryData = async () => {
      try {
        const response = await fetch("/api/cars/package/get-packages");
        const data = await response.json();
        console.log("all packages list is here ---> ", data);
        seCarPackageData(data.packages || []); // Provide a default empty array if data.packages is undefined
      } catch (error) {
        console.error("Error fetching itinerary data:", error);
      }
    };

    fetchItineraryData();
  }, []);
  console.log("carPackageData", carPackageData);

  useEffect(() => {
    fetchPromoList().then((res) => {
      console.log("city promo data---> ", res?.responseData);
      setCityPromoData(res?.responseData || []);
    });
  }, []);


  const carHireData = [
    {
      title: "New Delhi Car Hire",
      services: [
        "Greater Noida Car Hire",
        "Noida Car Hire",
        "Gurgaon Car Hire",
      ],
    },
    {
      title: "Mumbai Car Hire",
      services: ["Navi Mumbai Car Hire", "Thane Car Hire"],
    },
    {
      title: "Bangalore Car Hire",
      services: ["Whitefield Car Hire", "Indiranagar Car Hire"],
    },
    {
      title: "New Delhi Car Hire",
      services: [
        "Greater Noida Car Hire",
        "Noida Car Hire",
        "Gurgaon Car Hire",
      ],
    },
    {
      title: "Mumbai Car Hire",
      services: ["Navi Mumbai Car Hire", "Thane Car Hire"],
    },
    {
      title: "Bangalore Car Hire",
      services: ["Whitefield Car Hire", "Indiranagar Car Hire"],
    },
  ];

  const faqData = [
    {
      question: "How to hire a car in New Delhi?",
      answer:
        "You can hire a car by contacting our support or booking online through our website.",
    },
    {
      question: "What documents are required?",
      answer:
        "You need a valid driving license, ID proof, and address proof to hire a car.",
    },
    {
      question: "What are the payment options?",
      answer: "We accept credit cards, debit cards, and UPI payments.",
    },
    {
      question: "How to hire a car in New Delhi?",
      answer:
        "You can hire a car by contacting our support or booking online through our website.",
    },
    {
      question: "What documents are required?",
      answer:
        "You need a valid driving license, ID proof, and address proof to hire a car.",
    },
    {
      question: "What are the payment options?",
      answer: "We accept credit cards, debit cards, and UPI payments.",
    },
  ];

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const boxShadowStyle = {
    boxShadow: "inset 0px -50px 20px  rgba(0, 0, 0, 0.8)",
  };

  const [carSelectionPopup, setCarSelectionPopup] = useState(false);

  return (
    <AppProvider>
      <div>
        {/* CarRentalHomeSkelton  */}
        <DesktopHeader setCarSelectionPopup={setCarSelectionPopup} />
        <Breadcrumbs />
        <div className="container-wrapper"></div>
        <div className="mb-5">
          <div className="overflow-hidden relative md:h-[83vh]">
            <div
              className="container-wrapper"
              onClick={() => setCarSelectionPopup(false)}
            >
              <div className="absolute top-20">
                <p className="md:font-semibold font-bold md:text-xl text-lg  text-white w-2/3">
                  India No.1 Bizare Expedition Car rental
                </p>
              </div>
            </div>
            <div className="container-wrapper xl:block hidden">
              <div className="absolute top-2/4 -translate-y-2/4">
                <Picker
                  setCarSelectionPopup={setCarSelectionPopup}
                  carSelectionPopup={carSelectionPopup}
                />
              </div>
            </div>
            <div onClick={() => setCarSelectionPopup(false)}>
              <Image
                className=" w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={1283}
                height={854}
              />
            </div>
          </div>
          <div className="absolute top-[480px] left-20 -translate-y-2/4">
            {carSelectionPopup && <CarSelectionPopup />}
          </div>
          <div
            className="py-5 container-wrapper pt-10 -z-40"
            onClick={() => setCarSelectionPopup(false)}
          >
            <div>
              <p className="md:font-semibold font-medium text-xl">
                Hello I am Heading
              </p>
              <p
                className={`text-[15px] pt-4 ${show ? "" : "line-clamp-6 md:line-clamp-3"
                  }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nulla soluta officia est facere, vel eius nam, et
                corrupti ratione cum magnam provident! Eligendi maiores nulla
                delectus vel, quisquam blanditiis sequi neque iste ullam.
                corrupti ratione cum magnam provident! Eligendi maiores nulla
                delectus vel, quisquam blanditiis sequi neque iste ullam.
                corrupti ratione cum magnam provident! Eligendi maiores nulla
                delectus vel, quisquam blanditiis sequi neque iste ullam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                nulla soluta officia est facere, vel eius nam, et corrupti
                ratione cum magnam provident! Eligendi maiores nulla delectus
                vel, quisquam blanditiis sequi neque iste ullam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptatum nulla
                soluta officia est facere, vel eius nam, et corrupti ratione cum
                magnam provident! Eligendi maiores nulla delectus vel, quisquam
                blanditiis sequi neque iste ullam.
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
        </div>

        {/* CarCities are here */}
        <div>
          <CarCities cityPromoData={cityPromoData} />
        </div>
        {/* Static section are here */}
        <div className="container-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center pb-12 pt-4 px-3">
            {/* Global Reach */}
            <div className="flex flex-col max-w-xs">
              <div className="flex items-center mb-2 gap-3">
                <FaGlobe className="text-2xl" />
                <h3 className="text-md font-semibold">Global reach</h3>
              </div>
              <p className="text-[23px]  font-semibold">2,000+ SIXT stations in over 105 countries</p>
            </div>
            {/* Distinctive Fleet */}
            <div className="flex flex-col max-w-xs">
              <div className="flex items-center mb-2 gap-3">
                <FaCar className="text-2xl" />
                <h3 className="text-md font-semibold">Distinctive fleet</h3>
              </div>
              <p className="text-[23px]  font-semibold">From high-end convertibles to premium SUVs</p>
            </div>
            {/* Exceptional Service */}
            <div className="flex flex-col max-w-xs">
              <div className="flex items-center mb-2 gap-3">
                <FaHandsHelping className="text-2xl" />
                <h3 className="text-md font-semibold">Exceptional service</h3>
              </div>
              <p className="text-[23px] font-semibold">Stress-free, trustworthy, no hidden costs</p>
            </div>
          </div>
        </div>
        <div className="container-wrapper">
          <CarCarousel />
        </div>
        {/* Car Packages are here */}
        <div>
          <CarPackageCarousel carPackageData={carPackageData} />
        </div>
        <div
          className="container-wrapper"
          onClick={() => setCarSelectionPopup(false)}
        >
          <div className="py-5">
            <p className="md:font-semibold font-medium text-xl">
              Hello I am Heading
            </p>
            <p className="text-[15px] pt-1 pb-7 md:font-semibold font-medium">
              Find the Car Deals
            </p>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatum
              nulla soluta officia est facere, vel eius iis sequi neque iste
              ullam. et corrupti ratione cum magnam provident! Eligendi maiores
              nulla delectus vel, quisquam blanditiis sequi neque iste ullam.
            </p>
          </div>
          <div className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {carHireData.map((carHire, index) => (
                <CarHireSection
                  key={index}
                  title={carHire.title}
                  services={carHire.services}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="container-wrapper"
          onClick={() => setCarSelectionPopup(false)}
        >
          <p className="md:font-semibold font-medium text-lg py-10">
            Frequently Asked Questions
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {faqData.map((faq, index) => (
              <FAQSection
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
