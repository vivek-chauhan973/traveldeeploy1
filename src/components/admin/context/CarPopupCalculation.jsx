import React, { createContext, useState, useContext, useEffect } from "react";
const CarPopupContext = createContext(null);
const fetchSearchedData = async () => {
  const data = await fetch(`/api/search-api`,
    {
      method: "GET"
    }
  );
  return await data.json()
}

const dynamicSchema = async () => {
  const res = await fetch('/api/rating');
  return await res.json();
}


export const CarPopupProvider = ({ children }) => {
  const [userFormData, setUserFormData] = useState({});
  const [pacakgeData, setPackageData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  // Local 
  const [userDateLocal, setUserDateLocal] = useState({});
  const [userTimeLocal, setUserTimeLocal] = useState({});
  const [userPlanLocal, setUserPlanLocal] = useState({});
  // console.log("userDateLocal global",userDateLocal);
  // console.log("userTimeLocal global",userTimeLocal);
  // console.log("userPlanLocal global",userPlanLocal);

  // Outstation
  const [pickupDateOutstation, setPickupDateOutstation] = useState({});
  const [pickupTimeOutstation, setPickupTimeOutstation] = useState({});
  const [returnDateOutstation, setReturnDateOutstation] = useState({});
  const [returnTimeOutstation, setReturnTimeOutstation] = useState({});
  const [planOutstation, setPlanOutstation] = useState({});
  // console.log("pickupDateOutstation global",pickupDateOutstation);
  // console.log("pickupTimeOutstation global",pickupTimeOutstation);
  // console.log("returnDateOutstation global",returnDateOutstation);
  // console.log("returnTimeOutstation global",returnTimeOutstation);
  // console.log("planOutstation global",planOutstation);

  //  Local and Outstation 
  const [grandTotalCar, setGrandTotalCar] = useState();
  const [summaryCarData, setSummaryCarData] = useState({});
  // console.log("userFormData global",userFormData);
  // console.log("grandTotalCar global",grandTotalCar);
  // console.log("summaryCarData global",summaryCarData);

  const getDetail = (item) => {
    // console.log("Item =====> ",item);
    if (item) {
      setUserFormData(item || {})
    }
  }

  // Car Package 
  const [summaryCarPackage, setSummaryCarPackage] = useState({});
  // console.log("summaryCarPackage global",summaryCarPackage);
  const [customiseData, setCustomiseData] = useState({});
  // console.log("customiseData global",customiseData);

  const [loginPopup, setLoginPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupOutstation, setShowPopupOutstation] = useState(false);
  const [activeBookingProcess, setActiveBookingProcess] = useState();
  const [activeInactivePopup, setActiveInactivePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [crmData, setCrmData] = useState({});

  useEffect(() => {
    fetchSearchedData().then(res => {
      setPackageData(res?.data || [])
    })
  }, [])
  useEffect(() => {
    const data = pacakgeData?.filter(item =>
      item?.name?.includes(searchQuery)
    );
    setSearchedData(data || []);
  }, [searchQuery, pacakgeData]);

  const [schemaData, setSchemaData] = useState({})
   useEffect(()=>{
      dynamicSchema().then(res => {
        // console.log("res of dynamic schema ===> ", res);
        setSchemaData(res)  
      })
    },[]);
  // console.log("schemaData of dynamic schema ===> ", schemaData);

  const [serverSideProps, setServerSideProps] = useState({});
  const [activeTab, setActiveTab] = useState("Tab1");
  // console.log("pacakgeData global",pacakgeData);
  // console.log("serverSideProps------->",serverSideProps);
  // console.log("crmData global",crmData);

  const contextFun = {
    userFormData, setUserFormData, getDetail, userDateLocal, userTimeLocal, userPlanLocal,
    setUserDateLocal, setUserTimeLocal, setUserPlanLocal,
    pickupDateOutstation, returnDateOutstation, pickupTimeOutstation, returnTimeOutstation, planOutstation,
    setPickupDateOutstation, setReturnDateOutstation, setPickupTimeOutstation, setReturnTimeOutstation, setPlanOutstation,
    loginPopup, setLoginPopup, showPopup, setShowPopup, showPopupOutstation, setShowPopupOutstation,
    activeBookingProcess, setServerSideProps, serverSideProps, setActiveBookingProcess, searchedData, activeInactivePopup, setActiveInactivePopup, searchQuery, setSearchQuery,
    crmData, setCrmData, grandTotalCar, setGrandTotalCar, summaryCarData, setSummaryCarData, summaryCarPackage, setSummaryCarPackage,
    customiseData, setCustomiseData, schemaData, setSchemaData,activeTab, setActiveTab
  };

  return (
    <CarPopupContext.Provider value={contextFun}>{children}</CarPopupContext.Provider>
  );
};

export const useCarPopupContext = () => {
  return useContext(CarPopupContext);
};
