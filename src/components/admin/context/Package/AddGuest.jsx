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
const fetchCarPackage = async (packageUrl) => {
  const response = await fetch(`/api/cars/public/${packageUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

// <-------all filter api is here---->

const filteredData = async (id, price, days, category) => {
  const response = await fetch(
    `/api/public/filter-india-packages?id=${id}&price=${price}&days=${days}&category=${category}`
  );
  const data = await response.json();
  // console.log("filter data is here --->:: ", data);
  return data;
};
const filteredDataCityOrState = async (id, price, days, category) => {
  const response = await fetch(
    `/api/public/filter-city-state-packages?id=${id}&price=${price}&days=${days}&category=${category}`
  );
  const data = await response.json();
  // console.log("filter data is here --->:: ", data);
  return data;
};
const filteredDataofSpecilityCategories= async (price, days, category) => {
  const response = await fetch(
    `/api/public/specility-filter?price=${price}&days=${days}&category=${category}`
  );
  const data = await response.json();
  // console.log("filter data is here --->:: ", data);
  return data;
};
const filteredDataofCategoriesWise= async (id,price, days, category) => {
  const response = await fetch(
    `/api/public/filter-category-wise?id=${id}&price=${price}&days=${days}&category=${category}`
  );
  const data = await response.json();
  // console.log("filter data is here --->:: ", data);
  return data;
};
const CarFilteredData= async (id,price, days, category) => {
  const response = await fetch(
    `/api/cars/public/filter-packages?id=${id}&price=${price}&days=${days}&category=${category}`
  );
  const data = await response.json();
  // console.log("filter data is here --->:: ", data);
  return data;
};

export const AppProvider = ({ children }) => {
  const [closeBtn, setCloseBtn] = useState(false);
  const [addPackage, setAddPackage] = useState({});
  const [guestPrice, setGuestPrice] = useState(0);
  const [fixedDepCity, setFixedDepCity] = useState("");
  const [fixedDepDate, setFixedDepDate] = useState("");
  const [fixedDepCity1, setFixedDepCity1] = useState("");
  const [fixedDepDate1, setFixedDepDate1] = useState("");
  const [contactAdmin, setContactAdimn] = useState(false);
  const [
    submitButtonOfPricingCalculation,
    setSubmitButtonOfPricingCalculation,
  ] = useState(false);
  const [
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepartureButtonEnaibleAndDisable,
  ] = useState(false);
  const [highLightedPackage, setHighLightedPackage] = useState([]);
  // set final price to show fixed departure popup

  const [fixedDeparturePopupPrice, setFixedDeparturePopupPrice] = useState(0);

  // handle popup sate of booking and addguest
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  //<---------------all filter logics of packages here-------------->
  const [filteredApi, setFilteredDataApi] = useState({});

  const filterApi = (days, price, category) => {
    const data = { days, price, category };
    setFilteredDataApi(data);
  };

  const [selectedId, setSelectedId] = useState(null);

  const [filteredPackages, setFilteredPackages] = useState([]);

  const router = useRouter();
 

  useEffect(() => {
    if (
      !router?.query?.hasOwnProperty("state") &&
      router?.query?.hasOwnProperty("india")
    ) {
      if (selectedId) {
        filteredData(
          selectedId,
          filteredApi?.price,
          filteredApi?.days,
          filteredApi?.category
        ).then((res) => {
          // console.log("filted data is here-->1--", res);
          if (res?.message === "not found") {
            setFilteredPackages(["not found"]);
          } else {
            setFilteredPackages(res?.packages || []);
          }
        });
      }
    }
    else if(router?.query?.hasOwnProperty("state")){
      if (selectedId) {
        filteredDataCityOrState(
          selectedId,
          filteredApi?.price,
          filteredApi?.days,
          filteredApi?.category
        ).then((res) => {
          // console.log("filteredDataCityOrState data is here-->1--", res);
          if (res?.message === "not found") {
            setFilteredPackages(["not found"]);
          } else {
            setFilteredPackages(res?.packages || []);
          }
        });
      }
    }
    else if(router?.pathname==="/speciality-tours"){
      filteredDataofSpecilityCategories(
        filteredApi?.price,
        filteredApi?.days,
        filteredApi?.category
      ).then((res) => {
        // console.log("filteredDataCityOrState data is here-->1--", res);
        if (res?.message === "not found") {
          setFilteredPackages(["not found"]);
        } else {
          setFilteredPackages(res?.packages || []);
        }
      });
    }
    else if(router?.query?.hasOwnProperty("spacilityTour")){
      filteredDataofCategoriesWise(
        selectedId,
        filteredApi?.price,
        filteredApi?.days,
        filteredApi?.category
      ).then((res) => {
        // console.log("filteredDataCityOrState data is here-->1--", res);
        if (res?.message === "not found") {
          setFilteredPackages(["not found"]);
        } else {
          setFilteredPackages(res?.packages || []);
        }
      });
    }
  }, [selectedId, filteredApi]);

  // <---------------all filter logics of packages here-------------->


  const [carSelectedId, setCarSelectedId] = useState(null);

  const [CarFilteredPackages, setCarFilteredPackages] = useState([]);
  const [CarFilteredApi, setCarFilteredDataApi] = useState({});

// console.log("carselected Id ------------------> ",carSelectedId)
// console.log("CarFilteredApi Id ------------------> ",CarFilteredApi)

useEffect(() => {
 
    if (carSelectedId) {
      CarFilteredData(
        carSelectedId,
        CarFilteredApi?.priceRange,
        CarFilteredApi?.durationRange,
        CarFilteredApi?.selectedCategories
      ).then((res) => {
        // console.log("filted data is here-->1--", res);
        if (res?.message === "not found") {
          setCarFilteredPackages(["not found"]);
        } else {
          setCarFilteredPackages(res?.packages || []);
        }
      });
    }
  
 
}, [selectedId, CarFilteredApi]);


// navlink logic that is implement in blog



  const initialData = {
    adult: 0,
    child: 0,
    infant: 0,
    infant1: 0,
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

  // Car retal package detail here
  const [addCarPackage, setAddCarPackage] = useState({});
  useEffect(() => {
    fetchCarPackage(router?.query?.detail?.replace("-tour-package", "")).then(
      (res) => {
        setAddCarPackage(res || {});
      }
    );
  }, [router?.query?.detail?.replace("-tour-package", "")]);

  const [toglePopup, setToglePopup] = useState(true);
  const [pricingManagement, setPricingManagement] = useState(null);
  const [locationId, setLocationId] = useState(null);

  const [price2, setPrice2] = useState(0);
  const [showAddguest, setShowAddguest] = useState(null);
  const [departureSectionData, setDepartureSectionData] = useState(null);
  const [fixedDepartureData1, setFixedDepartureData1] = useState(null);
  const [fixedDepartureProceedButton, setFixedDepartureProceedButton] =
    useState(false);
  const finalDataOfBookingByUsingMethodAddGuest = {
    departureCity: showAddguest,
    itemDateAndDay: departureSectionData,
    twinSharingPrice: addPackage?.prices?.twinSharingRoom,
    totalCalculatedPrize: guestPrice,
    allDetail: inputData,
  };
  const handleCleckOnDepartureFixed = () => {
    const finalDataOfBookingByUsingMethodFixedDeparture = {
      depardate: departureSectionData?.Date,
      name: "Pradhumn",
      packageprice: guestPrice || addPackage?.price,
      packagename: addPackage?.name,
      departureCity: showAddguest,
    };
    setFixedDepartureData1(finalDataOfBookingByUsingMethodFixedDeparture);
  };
  const [groupDeparturePerson, setGroupDeparturePerson] = useState(0);
  //here are all logics and state related car-rental package
  const [carbookdisableandenable, setCarbookdisableandenable] = useState(false);
  const [carPrice, setCarPrice] = useState(0);

  // packages filter data

  // console.log("....123....",filteredApi)

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
    setCarSelectedId,
    filteredPackages,
    setSelectedId,
    setCarFilteredDataApi,
    setDepartureSectionData,
    departureSectionData,
    setLocationId,
    price2,
    setPrice2,
    fixedDepDate,
    setFixedDepDate,
    fixedDepCity,
    setFixedDepCity,
    setFixedDepDate1,
    setFixedDepCity1,
    handleCleckOnDepartureFixed,
    fixedDepartureButtonEnaibleAndDisable,
    setFixedDepartureButtonEnaibleAndDisable,
    setSubmitButtonOfPricingCalculation,
    submitButtonOfPricingCalculation,
    fixedDepartureProceedButton,
    setFixedDepartureProceedButton,
    contactAdmin,
    setContactAdimn,
    showPopup,
    setShowPopup,
    filterApi,
    showPopup1,
    setShowPopup1,
    fixedDeparturePopupPrice,
    setFixedDeparturePopupPrice,
    groupDeparturePerson,
    setGroupDeparturePerson,
    highLightedPackage,
    setHighLightedPackage,
    addCarPackage,
    carbookdisableandenable,
    setCarbookdisableandenable,
    carPrice,
    setCarPrice,
    CarFilteredPackages,
  };
  return (
    <AppContext.Provider value={contextFun}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
