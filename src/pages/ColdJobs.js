import React from "react";
import CityCard from "../components/CityCard.js";

const WarmJobs = () => {
  const coldCities = ["Stockholm", "New York", "Paris", "Seoul", "London"];

  return (
    <div className="warm_wrap">
      {coldCities.map((city) => (
        <CityCard city={city} />
      ))}
    </div>
  );
};

export default WarmJobs;
