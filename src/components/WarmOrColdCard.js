import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const warmCities = [
  "Dubai",
  "Los Angeles",
  "Cebu",
  "Bali",
  "Sydney",
  "Miami",
  "Singapore",
  "Rio de Janeiro",
];

const coldCities = [
  "Stockholm",
  "New York",
  "Paris",
  "Seoul",
  "London",
  "Reykjavik",
  "Toronto",
  "Beijing",
];

const WarmOrColdCard = ({ warmOrColdDisplay }) => {
  const warmorcoldimages = {
    warm: "/image/warm_weather.png",
    cold: "/image/cold_weather.png",
  };

  const isWarm = warmOrColdDisplay === "warm";
  return (
    <Link to={`/${warmOrColdDisplay}`}>
      <div
        className="WarmOrColdCard_wrap"
        style={{
          backgroundImage: `url(
        "${warmorcoldimages[warmOrColdDisplay]}"
      )`,
        }}
      >
        <div className="WarmOrColdCard_content">
          {isWarm
            ? warmCities.map((city) => (
                <ul>
                  <li>{city}</li>
                </ul>
              ))
            : coldCities.map((city) => (
                <ul>
                  <li>{city}</li>
                </ul>
              ))}
        </div>
      </div>
    </Link>
  );
};

export default WarmOrColdCard;
