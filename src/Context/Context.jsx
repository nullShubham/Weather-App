import React, { useContext, createContext, useState } from "react";

const context = createContext("India");

export const useCntxt = () => {
  return useContext(context);
};

export const ContextProvider = ({ children }) => {
  const [country, setCountry] = useState("IN");
  const [city, setCity] = useState("chandigarh");
  return (
    <context.Provider value={{ city, setCity, setCountry, country }}>{children}</context.Provider>
  );
};
