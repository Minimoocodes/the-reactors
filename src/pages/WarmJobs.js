import React from "react";
import CityCard from "../components/CityCard";

const WarmJobs = () => {
  const warmCities = ["Dubai", "Los Angeles", "Cebu", "Bali", "Sydney"];

  return (
    <div className="warm_wrap">
      {warmCities.map((city) => (
        <CityCard city={city} />
      ))}
    </div>
  );
};

export default WarmJobs;
