import { useState, useEffect } from "react";

const useCountry = () => {
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        const countryList = data.data.map((item) => item.name);
        const countryCodeList = data.data.map((item) => item.iso2);
        setCountry(countryList);
        setCountryCode(countryCodeList);
      });
  }, []);
  return [country, countryCode];
};

export default useCountry;
