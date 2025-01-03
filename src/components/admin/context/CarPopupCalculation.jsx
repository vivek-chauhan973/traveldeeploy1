import React, { createContext, useState, useContext } from "react";

const CarPopupContext = createContext(null);

export const CarPopupProvider = ({ children }) => {
    const [userFormData, setUserFormData] =  useState({});
    // Local 
    const [userDateLocal, setUserDateLocal] =  useState({});
    const [userTimeLocal, setUserTimeLocal] =  useState({});
    const [userPlanLocal, setUserPlanLocal] =  useState({});
    // Outstation
    const [pickupDateOutstation, setPickupDateOutstation] =  useState({});
    const [pickupTimeOutstation, setPickupTimeOutstation] =  useState({});
    const [returnDateOutstation, setReturnDateOutstation] =  useState({});
    const [returnTimeOutstation, setReturnTimeOutstation] =  useState({});
    // const [userPlanOutstation, setUserPlanOutstation] =  useState({});
    const [planOutstation, setPlanOutstation] =  useState({});

  const getDetail = (item) => {
    // console.log("Item =====> ",item);
    if(item){
      setUserFormData(item || {})
    }
  }

  console.log("userFormData global",userFormData); 
  // console.log("userDate global",userDate);
  // console.log("userTime global",userTime);
  // console.log("userPlan global",userPlan);
  // console.log("pickupDateOutstation global",pickupDateOutstation);
  // console.log("pickupTimeOutstation global",pickupTimeOutstation);
  // console.log("returnDateOutstation global",returnDateOutstation);
  // console.log("returnTimeOutstation global",returnTimeOutstation);
  // console.log("PlanOutstation global",planOutstation);

  const contextFun = {
    userFormData , setUserFormData, getDetail, userDateLocal, userTimeLocal, userPlanLocal, 
    setUserDateLocal, setUserTimeLocal, setUserPlanLocal, 
    pickupDateOutstation, returnDateOutstation, pickupTimeOutstation, returnTimeOutstation,  planOutstation,
    setPickupDateOutstation, setReturnDateOutstation, setPickupTimeOutstation, setReturnTimeOutstation, setPlanOutstation

  };

  return (
    <CarPopupContext.Provider value={contextFun}>{children}</CarPopupContext.Provider>
  );
};

export const useCarPopupContext = () => {
  return useContext(CarPopupContext);
};
