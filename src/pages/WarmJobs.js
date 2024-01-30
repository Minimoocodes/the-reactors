import React from "react";
import CityCard from "../components/CityCard";
import { useNavigate } from "react-router-dom";

const WarmJobs = () => {
  const warmCities = ["Dubai", "Los Angeles", "Cebu", "Bali", "Sydney"];
  const images = {
    Dubai: `https://www.civitatis.com/blog/wp-content/uploads/2022/12/panoramica-burj-al-arab-dubai.jpg`,
    "Los Angeles": `https://a.cdn-hotels.com/gdcs/production46/d1416/699535be-fc0a-4ece-9504-dab07867e26c.jpg?impolicy=fcrop&w=800&h=533&q=medium`,
    cebu: `https://www.citrineland.com/wp-content/uploads/2021/02/bantayan-island-cebu-best-beach-1.jpg`,
    bali: `https://content.api.news/v3/images/bin/59806f50929d8578cca0a01e7f90ea78`,
    sydney: `https://www.aircalin.com/sites/default/files/styles/hero_banner_mobile/public/2022-08/Sydney-min.jpg?h=8edabf11&itok=KPO8L4Ug`,
  };
  const navigate = useNavigate();
  const goToJobApply = (job) => {
    navigate(`/${job}`);
    console.log("clicked job is", job);
  };

  return (
    <div className="warm_wrap">
      {warmCities.map((city) => (
        <CityCard city={city} images={images} />
      ))}
      <div>
        <ul>
          <li onClick={() => goToJobApply("dataanalyst")}>Data Analyst</li>

          <li>UX designer</li>

          <li>Frontend Developer</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Data Analyst</li>
          <li>UX designer</li>
          <li>Frontend Developer</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Data Analyst</li>
          <li>UX designer</li>
          <li>Frontend Developer</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Data Analyst</li>
          <li>UX designer</li>
          <li>Frontend Developer</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Data Analyst</li>
          <li>UX designer</li>
          <li>Frontend Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default WarmJobs;
