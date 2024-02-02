import React from "react";
import CityCard from "../components/CityCard.js";
import JobListBox from "../components/JobListBox.js";

const ColdJobs = ({ jsonData, savedJobs, setSavedJobs }) => {
  const coldCities = [
    "Stockholm",
    "New York",
    "Paris",
    "Seoul",
    "London",
    "Reykjavik",
    "Toronto",
    "Beijing",
    "Anchorage",
    "Copenhagen",
  ];
  const images = {
    Stockholm: `https://i.natgeofe.com/n/90e37eca-f03a-45c9-a0b5-67609d37fd0b/sto_3x4.jpg`,
    "New York": `https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860`,
    Paris: `https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg`,
    Seoul: `https://cms.finnair.com/resource/blob/681052/5647b8b6803ecae2b51363d64e98ff3a/seoul-main-data.jpg?impolicy=crop&width=2989&height=2242&x=217&y=0`,
    London: `https://cdn-imgix.headout.com/media/images/db48a90d442343a3153acc31fa839a50-Best%20time%20to%20visit%20london%20-%20Tower%20Bridge.jpg`,
    Reykjavik: `https://i.pinimg.com/736x/80/27/b2/8027b2b9c1649471cfc13cd16000a271.jpg`,
    Toronto: `https://media.istockphoto.com/id/626545182/sv/foto/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=vu41k0gGbiNeQ8TrB7ghrKEk0K599bQbVsvQMnE4aOo=`,
    Beijing: `https://static.euronews.com/articles/stories/03/36/00/68/1200x675_cmsv2_f9f9ddba-f7fa-5fed-aadb-49d2df4d1935-3360068.jpg`,
    Anchorage: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Anchorage_on_an_April_evening.jpg/308px-Anchorage_on_an_April_evening.jpg`,
    Copenhagen: `https://www.travelmanagers.com.au/wp-content/uploads/2016/10/AdobeStock_78164903-copenhagen.jpeg`,
  };
  const jobList = Object.entries(jsonData);

  return (
    <div className="cities_wrap">
      {coldCities.map((city) => (
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

export default ColdJobs;
