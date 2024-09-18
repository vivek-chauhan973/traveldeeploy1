import React, { useEffect, createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const AppContext = createContext(null);

const fetchPackage = async (packageUrl) => {
  // console.log("page url :: ",packageUrl)
  const response = await fetch(`/api/public/package/${packageUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  // console.log("..............................",packageUrl)
  return data;
};

export const AppProvider = ({ children }) => {
  const [closeBtn, setCloseBtn] = useState(false);
  const [addPackage, setAddPackage] = useState({});
  const [guestPrice, setGuestPrice] = useState(0);
  const [fixedDepCity,setFixedDepCity]=useState("");
  const [fixedDepDate,setFixedDepDate]=useState("");
  const [fixedDepCity1,setFixedDepCity1]=useState("");
  const [fixedDepDate1,setFixedDepDate1]=useState("");
  const [contactAdmin, setContactAdimn] = useState(false);
  const [submitButtonOfPricingCalculation,setSubmitButtonOfPricingCalculation]=useState(false);
  const [fixedDepartureButtonEnaibleAndDisable,setFixedDepartureButtonEnaibleAndDisable]=useState(false);
  const [highLightedPackage,setHighLightedPackage]=useState([]);
// set final price to show fixed departure popup

const [fixedDeparturePopupPrice,setFixedDeparturePopupPrice]=useState(0);

// handle popup sate of booking and addguest


const [showPopup, setShowPopup] = useState(false);
const [showPopup1, setShowPopup1] = useState(false);

  const router = useRouter();
  const initialData = {
    adult:0,
    child: 0,
    infant: 0,
    singleRoom: 0,
    twinRoom: 0,
    tripleRoom: 0,
    quardRoom: 0,
    childAges: {},
    infantAges: {},
  };
  const [inputData, setInputData] = useState(initialData);
  const packageUrl = router.query.package?.replace("-tour-package", "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (packageUrl) {
          const selectedPackageData = await fetchPackage(packageUrl);
          setAddPackage(selectedPackageData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [packageUrl]);


  const [toglePopup, setToglePopup] = useState(true);
  const [pricingManagement, setPricingManagement] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const [catagoryId, setCatagoryId] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9900);
  const [duration,setDuration]=useState([]);
  const filterApi = {
    locationId,
    catagoryId,
    minPrice,
    maxPrice,
    duration
  };
  const [price2,setPrice2]=useState(0);
  const [showAddguest, setShowAddguest] = useState(null);
  const [departureSectionData, setDepartureSectionData] = useState(null);
  const [fixedDepartureData1,setFixedDepartureData1]=useState(null);
  const [fixedDepartureProceedButton,setFixedDepartureProceedButton]=useState(false);
  const finalDataOfBookingByUsingMethodAddGuest = {
    departureCity: showAddguest,
    itemDateAndDay: departureSectionData,
    twinSharingPrice: addPackage?.prices?.twinSharingRoom,
    totalCalculatedPrize: guestPrice,
    allDetail: inputData
  };
  const handleCleckOnDepartureFixed=()=>{

  const finalDataOfBookingByUsingMethodFixedDeparture={
    depardate:departureSectionData?.Date,
    name:"Pradhumn",
    packageprice:guestPrice||addPackage?.price,
    packagename:addPackage?.name,
    departureCity: showAddguest,
  }
  setFixedDepartureData1(finalDataOfBookingByUsingMethodFixedDeparture)
  }
  // console.log("price2------> ",price2)
// useEffect(()=>{
//   if(addPackage?.addguest==="fixedDeparture"&&fixedDepartureButtonEnaibleAndDisable){
//     setPrice1(parseInt(departureSectionData?.price))
    
//  }
//  setPrice1(parseInt(departureSectionData?.price))
// },[departureSectionData])

  // console.log("finalDataOfBookingByUsingMethodFixedDeparture237246722",price1)
  // console.log("setSubmitButtonOfPricingCalculation sfshdfjbfd" ,submitButtonOfPricingCalculation)
  //  console.log("showAddguest -------> ",fixedDepartureData1)


  // select person selected in group departure
// console.log("hsdfsdb",highLightedPackage)
  const [groupDeparturePerson,setGroupDeparturePerson]=useState(0);
  const contextFun = {
    initialData,
    closeBtn,
    setCloseBtn,
    guestPrice,
    setGuestPrice,
    setInputData,
    addPackage,
    setAddPackage,
    inputData,
    setToglePopup,
    toglePopup,
    setPricingManagement,
    pricingManagement,
    setShowAddguest,
    showAddguest,
    setDepartureSectionData,
    departureSectionData,
    setLocationId,
    setCatagoryId,
    setMinPrice,
    setMaxPrice,
    price2,setPrice2,
    filterApi,
    fixedDepDate,setFixedDepDate,
    fixedDepCity,setFixedDepCity,
     setFixedDepDate1,
    setFixedDepCity1,
    handleCleckOnDepartureFixed,
    fixedDepartureButtonEnaibleAndDisable,setFixedDepartureButtonEnaibleAndDisable,
    setDuration,
    setSubmitButtonOfPricingCalculation,
    submitButtonOfPricingCalculation,
    fixedDepartureProceedButton,setFixedDepartureProceedButton,
    contactAdmin, setContactAdimn,
    showPopup, setShowPopup,
    showPopup1, setShowPopup1,
    fixedDeparturePopupPrice,setFixedDeparturePopupPrice,
    groupDeparturePerson,setGroupDeparturePerson,
    highLightedPackage,setHighLightedPackage
  };
  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
 