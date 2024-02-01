import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const CityCard = ({ city, images }) => {
  // Weather API fetching
  const apiKey = "1938c0075c90b56822f16d9a4b53e74f";
  const [weather, setWeather] = useState("");

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getWeatherByCity();
  }, [city]);

  return (
    <div className="div_wrap">
      <div
        className="cityCard_img"
        style={{
          backgroundImage: `url(
          "${images[city]}"
        )`,
        }}
      ></div>
      <div className="cityCard_content">
        <h1>{city}</h1>
        <h2>{Math.floor(weather?.main?.temp)} °C</h2>
        <div className="weather_description">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
            alt="weatherIcon"
          />
          <h3>{weather?.weather?.[0].description}</h3>
        </div>
        <div className="weather_humidity">
          <div style={{ textAlign: "center" }}>
            <h4>Humidity</h4>
            <h4>
              {weather?.main?.humidity}
              <FontAwesomeIcon icon={faDroplet} style={{ color: "#74C0FC" }} />
            </h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>Feels like </h4>
            <h4>{Math.floor(weather?.main?.feels_like)} °C</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
