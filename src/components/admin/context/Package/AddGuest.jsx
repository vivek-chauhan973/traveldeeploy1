import React, { useEffect, createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const AppContext = createContext(null);

const fetchPackage = async (packageUrl) => {
  const response = await fetch(`/api/public/package/${packageUrl}`, {
    method: "GET",
  });
  const data = await response.json();
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
  }, [inputData, addPackage]);

  // console.log("fixed Depature date selected",fixedDepDate)
  // console.log("fixed Depature City selected",fixedDepCity)

  const [showAddguest, setShowAddguest] = useState(null);
  const [departureSectionData, setDepartureSectionData] = useState(null);
  const [fixedDepartureData1,setFixedDepartureData1]=useState(null);
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
    deparcity:fixedDepCity1,
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
// console.log("fetch api 123221",filterApi)
  // console.log("finalDataOfBookingByUsingMethodFixedDeparture237246722",fixedDepartureData1)
  // console.log("packages sfsjbfbfjbsfhjdf",addPackage)
  const contextFun = {
    closeBtn,
    setCloseBtn,
    guestPrice,
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
    setDuration
  };

  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
