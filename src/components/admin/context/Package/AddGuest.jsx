import React, { useEffect, createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const AppContext = createContext(null);

const fetchPackage = async (packageUrl) => {
  console.log("page url :: ",packageUrl)
  const response = await fetch(`/api/public/package/${packageUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  // console.log("..............................",data)
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
  const [submitButtonOfPricingCalculation,setSubmitButtonOfPricingCalculation]=useState(false);
  const [fixedDepartureButtonEnaibleAndDisable,setFixedDepartureButtonEnaibleAndDisable]=useState(false);
  const router = useRouter();
  const initialData = {
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
  // console.log("package url 5454565",packageUrl)
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
  // console.log("duration",duration)
  const filterApi = {
    locationId,
    catagoryId,
    minPrice,
    maxPrice,
    duration
  };

  useEffect(() => {
    if(addPackage?.addguest==="addGuest"){
    if (addPackage && addPackage?.prices) {
      const {
        childOverFive,
        childUnderFive,
        singleRoom,
        twinSharingRoom,
        tripleSharingRoom,
        quadSharingRoom,
      } = addPackage?.prices;

      const calculatedPrice =
        childOverFive * inputData?.child +
        childUnderFive * inputData?.infant +
        singleRoom * inputData?.singleRoom +
        twinSharingRoom * inputData?.twinRoom +
        tripleSharingRoom * inputData?.tripleRoom +
        quadSharingRoom * inputData?.quardRoom;

      setGuestPrice(calculatedPrice);
    }
  }
  
  }, [inputData, addPackage]);

  // console.log("fixed Depature date selected",fixedDepDate)
  // console.log("fixed Depature City selected",fixedDepCity)
  const [price1,setPrice1]=useState(0);
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
  
  // console.log("finalDataOfBookingByUsingMethodAddGuest",finalDataOfBookingByUsingMethodAddGuest)
  const handleCleckOnDepartureFixed=()=>{

  const finalDataOfBookingByUsingMethodFixedDeparture={
    limit:fixedDepCity1,
    depardate:fixedDepDate1,
    name:"Pradhumn",
    packageprice:addPackage?.price,
    fixeddeparturebaseprice:addPackage?.prices?.basePrice,
    packagename:addPackage?.name,
    inventory:addPackage?.prices?.inventory,
    weight:addPackage?.prices?.weight
  }
  setFixedDepartureData1(finalDataOfBookingByUsingMethodFixedDeparture)
  }
useEffect(()=>{
  if(addPackage?.addguest==="fixedDeparture"&&fixedDepartureButtonEnaibleAndDisable){
    setPrice1(parseInt(departureSectionData?.price))
 }
 setPrice1(parseInt(departureSectionData?.price))
},[departureSectionData])

  console.log("finalDataOfBookingByUsingMethodFixedDeparture237246722",price1)
  // console.log("setSubmitButtonOfPricingCalculation sfshdfjbfd" ,submitButtonOfPricingCalculation)
  const contextFun = {
    closeBtn,
    setCloseBtn,
    guestPrice,
    setPrice1,
    price1,
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
    fixedDepartureProceedButton,setFixedDepartureProceedButton
  };

  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
