import React, { useEffect, createContext, useState, useContext } from "react";
const AppContext = createContext(null);
import { useRouter } from "next/router";

const fetchPackage = async (packageUrl) => {
  
  const response = await fetch(`/api/public/package/${packageUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const AppProvider = ({ children }) => {
  //changing button

  const [closeBtn, setCloseBtn] = useState(false);

  //calculation
  const [addPackage, setAddPackage] = useState(null);
  const [guestPrice, setGuestPrice] = useState(0);
  const router = useRouter();
  const data = {
    child: 0,
    infant: 0,
    singleRoom: 0,
    twinRoom: 0,
    tripleRoom: 0,
    quardRoom: 0,
    childAges: {},
    infantAges: {},
  };
  const [inputData, setInputData] = useState(data);
  const packageUrl = router.query.package?.replace("-tour-package", "");
// console.log("input data",inputData);
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

  //for main the popup through togle side bar


  const [toglePopup,setToglePopup]=useState(true);
  // console.log("hi");
  // console.log("add data", inputData);

 
// for handle pricing management popup
const [pricingManagement,setPricingManagement]=useState(null);

// console.log("pricingmanagement",typeof(pricingManagement))

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
// console.log("calculate prise ",calculatedPrice)
      setGuestPrice(calculatedPrice);
      // console.log("ppppp", calculatedPrice);
    }
  }, [inputData,addPackage]);

//frontend logic here related package details and departure section
const [showAddguest,setShowAddguest]=useState(null);
const [departureSectionData,setDepartureSectionData]=useState(null);
// console.log("item data :",departureSectionData);

const finalDataOfBooking={
  departureCity:showAddguest,
  itemDateAndDay:departureSectionData,
  twinSharingPrice:addPackage?.prices?.twinSharingRoom,
  totalCalculatedPrize:guestPrice,
  allDetail:inputData
}


console.log("show add guest popup",finalDataOfBooking);


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
    departureSectionData
  };
  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
