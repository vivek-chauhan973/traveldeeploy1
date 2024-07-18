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
  const [addPackage, setAddPackage] = useState(null);
  const [guestPrice, setGuestPrice] = useState(0);
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

  const filterApi = {
    locationId,
    catagoryId,
    minPrice,
    maxPrice
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

  const [showAddguest, setShowAddguest] = useState(null);
  const [departureSectionData, setDepartureSectionData] = useState(null);

  const finalDataOfBooking = {
    departureCity: showAddguest,
    itemDateAndDay: departureSectionData,
    twinSharingPrice: addPackage?.prices?.twinSharingRoom,
    totalCalculatedPrize: guestPrice,
    allDetail: inputData
  };

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
    filterApi
  };

  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
