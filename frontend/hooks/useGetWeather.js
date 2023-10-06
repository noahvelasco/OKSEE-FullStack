"use client";

import { useState, useEffect } from "react";
//https://openweathermap.org/api
export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currWeather, setCurrWeather] = useState([]);
  const [lat, setLat] = useState(35.4676);
  const [lon, setLon] = useState(-97.5164);
  const fetchWeatherData = async () => {
    try {
      //Get the current weather
      const res1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_API_KEY}&units=imperial`
      );
      const data1 = await res1.json();
      setCurrWeather(data1);
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // call the api's for the current weather
  useEffect(() => {
    (async () => {
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, currWeather];
};
