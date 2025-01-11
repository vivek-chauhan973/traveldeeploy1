import React, { createContext, useState, useContext, useEffect } from "react";

const CarPopupContext = createContext(null);
const fetchSearchedData=async ()=>{
  const data=await fetch(`/api/search-api`,
    {
      method:"GET"
    }
  );
  return await data.json()
}
export const CarPopupProvider = ({ children }) => {
  const [userFormData, setUserFormData] = useState({});
  const [pacakgeData,setPackageData]=useState([]);
  const [searchedData,setSearchedData]=useState([]);
  // Local 
  const [userDateLocal, setUserDateLocal] = useState({});
  const [userTimeLocal, setUserTimeLocal] = useState({});
  const [userPlanLocal, setUserPlanLocal] = useState({});
  // Outstation
  const [pickupDateOutstation, setPickupDateOutstation] = useState({});
  const [pickupTimeOutstation, setPickupTimeOutstation] = useState({});
  const [returnDateOutstation, setReturnDateOutstation] = useState({});
  const [returnTimeOutstation, setReturnTimeOutstation] = useState({});
  // const [userPlanOutstation, setUserPlanOutstation] =  useState({});
  const [planOutstation, setPlanOutstation] = useState({});

  const getDetail = (item) => {
    // console.log("Item =====> ",item);
    if (item) {
      setUserFormData(item || {})
    }
  }

  const [loginPopup, setLoginPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupOutstation, setShowPopupOutstation] = useState(false);
  const [activeBookingProcess, setActiveBookingProcess] = useState();
  const [activeInactivePopup, setActiveInactivePopup] = useState(false);

  console.log("userFormData global", userFormData);
  // console.log("userDate global",userDate);
  // console.log("userTime global",userTime);
  // console.log("userPlan global",userPlan);
  // console.log("pickupDateOutstation global",pickupDateOutstation);
  // console.log("pickupTimeOutstation global",pickupTimeOutstation);
  // console.log("returnDateOutstation global",returnDateOutstation);
  // console.log("returnTimeOutstation global",returnTimeOutstation);
  // console.log("PlanOutstation global",planOutstation);
  // console.log("loginPopup global",loginPopup);

  const [searchQuery,setSearchQuery]=useState("");
  useEffect(()=>{
    fetchSearchedData().then(res=>{
      setPackageData(res?.data||[])
    })
  },[])
  useEffect(()=>{
    const data = pacakgeData?.filter(item => 
      item?.name?.includes(searchQuery)
    );
    setSearchedData(data || []);
  },[searchQuery,pacakgeData])
  const contextFun = {
    userFormData, setUserFormData, getDetail, userDateLocal, userTimeLocal, userPlanLocal,
    setUserDateLocal, setUserTimeLocal, setUserPlanLocal,
    pickupDateOutstation, returnDateOutstation, pickupTimeOutstation, returnTimeOutstation, planOutstation,
    setPickupDateOutstation, setReturnDateOutstation, setPickupTimeOutstation, setReturnTimeOutstation, setPlanOutstation,
    loginPopup, setLoginPopup, showPopup, setShowPopup, showPopupOutstation, setShowPopupOutstation,
    activeBookingProcess, setActiveBookingProcess,searchedData, activeInactivePopup, setActiveInactivePopup,searchQuery,setSearchQuery
  };

  return (
    <CarPopupContext.Provider value={contextFun}>{children}</CarPopupContext.Provider>
  );
};

export const useCarPopupContext = () => {
  return useContext(CarPopupContext);
};
