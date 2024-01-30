import React from "react";
import CityCard from "../components/CityCard.js";

const ColdJobs = ({ jsonData, apply }) => {
  const coldCities = ["Stockholm", "New York", "Paris", "Seoul", "London"];
  const images = {
    Stockholm: `https://i.natgeofe.com/n/90e37eca-f03a-45c9-a0b5-67609d37fd0b/sto_3x4.jpg`,
    "New York": `https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860`,
    Paris: `https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg`,
    Seoul: `https://cms.finnair.com/resource/blob/681052/5647b8b6803ecae2b51363d64e98ff3a/seoul-main-data.jpg?impolicy=crop&width=2989&height=2242&x=217&y=0`,
    London: `https://cdn-imgix.headout.com/media/images/db48a90d442343a3153acc31fa839a50-Best%20time%20to%20visit%20london%20-%20Tower%20Bridge.jpg`,
  };

  return (
    <div className="warm_wrap">
      {coldCities.map((city) => (
        <CityCard city={city} images={images} />
      ))}
    </div>
  );
};

export default ColdJobs;
