import React from "react";
import { useState, useEffect } from "react";

const CityCard = ({ city }) => {
  const apiKey = "1938c0075c90b56822f16d9a4b53e74f";
  const [weather, setWeather] = useState("");

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("city is", city);
    console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getWeatherByCity();
  }, [city]);
  return (
    <div className="cityCard_wrap">
      <div className="cityCard_content">
        <h1>{city}</h1>
        <h3>{weather?.main?.temp}/c</h3>
        <h3>{weather?.weather?.[0].description}</h3>
        <button className="cityCard_btn">See available jobs</button>
      </div>
    </div>
  );
};

export default CityCard;
