import React, { createContext, useState, useContext } from "react";

const CarPopupContext = createContext(null);

export const CarPopupProvider = ({ children }) => {
    const [userFormData, setUserFormData] =  useState({});
    // const [userTimeData, setUserTimeData] =  useState({});
    const [userDate, setUserDate] =  useState({});
    const [userTime, setUserTime] =  useState({});
    const [userPlan, setUserPlan] =  useState({});

  const getDetail = (item) => {
    // console.log("Item =====> ",item);
    if(item){
      setUserFormData(item || {})
    }
  }

  console.log("userFormData global",userFormData);
  console.log("userDate global",userDate);
  console.log("userTime global",userTime);
  console.log("userPlan global",userPlan);

  const contextFun = {
    userFormData , setUserFormData, getDetail, userDate, userTime, userPlan, setUserDate, setUserTime, setUserPlan
  };

  return (
    <CarPopupContext.Provider value={contextFun}>{children}</CarPopupContext.Provider>
  );
};

export const useCarPopupContext = () => {
  return useContext(CarPopupContext);
};
