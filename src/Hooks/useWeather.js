import React, { useEffect, useState } from "react";
import { useCntxt } from "../Context/Context";
const useWeather = () => {
  const counrtyData = useCntxt();
  //   counrtyData.city,counrtyData.country
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const dataFetcher = async () => {
      if (counrtyData.city.length && counrtyData.country != []) {
        const APIkey = import.meta.env.VITE_WEATHER_API_KEY;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${counrtyData.city},${counrtyData.country}&appid=${APIkey}&units=metric`
        );

        if (!res.ok) {
          setWeather("No Data Found");
        } else {
          const data = await res.json();
          setWeather(data);
        }
      }
    };
    dataFetcher();
  }, [counrtyData.city, counrtyData.country]);

  return weather;
};
export default useWeather;
