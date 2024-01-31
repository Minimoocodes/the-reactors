import React from "react";
import CityCard from "../components/CityCard";
import JobListBox from "../components/JobListBox";

const WarmJobs = ({ jsonData, savedJobs, setSavedJobs }) => {
  const warmCities = ["Dubai", "Los Angeles", "Cebu", "Bali", "Sydney"];
  const images = {
    Dubai: `https://travelbird-images.imgix.net/f2/0b/f20bce73731062f021a0c62b7353fa76?auto=compress%2Cformat&crop=faces%2Cedges%2Ccenter&fit=crop&h=1144&upscale=true&w=828`,
    "Los Angeles": `https://a.cdn-hotels.com/gdcs/production46/d1416/699535be-fc0a-4ece-9504-dab07867e26c.jpg?impolicy=fcrop&w=800&h=533&q=medium`,
    Cebu: `https://www.citrineland.com/wp-content/uploads/2021/02/bantayan-island-cebu-best-beach-1.jpg`,
    Bali: `https://content.api.news/v3/images/bin/59806f50929d8578cca0a01e7f90ea78`,
    Sydney: `https://www.aircalin.com/sites/default/files/styles/hero_banner_mobile/public/2022-08/Sydney-min.jpg?h=8edabf11&itok=KPO8L4Ug`,
  };

  const jobList = Object.entries(jsonData);
  return (
    <div className="cities_wrap">
      {warmCities.map((city) => (
        <div className="cities_content">
          <div className="warm_wrap">
            <CityCard city={city} images={images} />
          </div>
          <div className="joblist_wrap">
            <JobListBox
              city={city}
              job={jobList}
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WarmJobs;
