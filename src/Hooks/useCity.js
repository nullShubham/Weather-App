import React, { useEffect, useState } from "react";
import { useCntxt } from "../Context/Context";

const useCity = () => {
  const context = useCntxt();
  const [city, setCity] = useState([]);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        const country = data.data.filter(
          (item) => item.iso2 == context.country
        );
        const cities = country[0]?.cities ?? [];

        setCity(cities);
      });
  }, [context.city]);

  return city;
};

export default useCity;
