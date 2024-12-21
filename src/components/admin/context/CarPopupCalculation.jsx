import React, { createContext, useState, useContext } from "react";

const CarPopupContext = createContext(null);

export const CarPopupProvider = ({ children }) => {
    const [userFormData, setUserFormData] =  useState({})
 
  const contextFun = {
    userFormData , setUserFormData
  };

  return (
    <CarPopupContext.Provider value={contextFun}>{children}</CarPopupContext.Provider>
  );
};

export const useCarPopupContext = () => {
  return useContext(CarPopupContext);
};
