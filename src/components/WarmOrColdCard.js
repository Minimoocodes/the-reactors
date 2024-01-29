import React from "react";
import { Link } from "react-router-dom";

const WarmOrColdCard = ({ warmOrColdDisplay }) => {
  const warmorcoldimages = {
    warm: "/image/warm_weather.png",
    cold: "/image/cold_weather.png",
  };

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
          <h1>{warmOrColdDisplay}</h1>
        </div>
      </div>
    </Link>
  );
};

export default WarmOrColdCard;
