import { Link } from "react-router-dom";

const warmCities = [
  "Dubai",
  "Los Angeles",
  "Cebu",
  "Bali",
  "Sydney",
  "Singapore",
  "Rio de Janeiro",
  "Marrakesh",
];

const coldCities = [
  "Stockholm",
  "Toronto",
  "Seoul",
  "Anchorage",
  "New York",
  "Reykjavik",
  "Beijing",
  "Copenhagen",
];

//Warm or cold choice card. The WarmOrColdCard function gets warmOrColdDisplay parameter (warmorcoldArray from WarmorColdPage.js)
const WarmOrColdCard = ({ warmOrColdDisplay }) => {
  //warmorcoldimages, an object with warm and cold inside that is links to different images to be used as backgrounds
  const warmorcoldimages = {
    warm: "/thereactors/warm_weather.png",
    cold: "/thereactors/cold_weather.png",
  };

  //isWarm is true when warmOrColdDisplay equals "warm"
  const isWarm = warmOrColdDisplay === "warm";
  return (
    //card is wrapped in link and then depending if warmOrColdDisplay is warm or cold then /warm or /cold
    <Link to={`/${warmOrColdDisplay}`}>
      <div
        className="WarmOrColdCard_wrap"
        //depending if warmOrColdDisplay is warm or cold, warmorcoldimages object is chosen with the different link
        style={{
          backgroundImage: `url("${warmorcoldimages[warmOrColdDisplay]}")`,
        }}
      >
        <div className="WarmOrColdCard_content">
          {/* if statement. if isWarm is true then map warmCities array and make a list with each city
          otherwise map coldCities and make a list of those cities in that array */}
          {isWarm
            ? warmCities.map((city) => (
                <ul>
                  <li className="warmlist_li">{city}</li>
                </ul>
              ))
            : coldCities.map((city) => (
                <ul>
                  <li className="coldlist_li">{city}</li>
                </ul>
              ))}
        </div>
      </div>
    </Link>
  );
};

export default WarmOrColdCard;
