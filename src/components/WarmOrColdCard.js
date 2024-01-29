import React from "react";
import WarmOrCold from "../pages/WarmOrColdPage";

const WarmOrColdCard = ({ warmOrColdDisplay }) => {
  return (
    <div className="WarmOrColdCard_wrap">
      <div className="WarmOrColdCard_content">
        <h1>{warmOrColdDisplay}</h1>
      </div>
    </div>
  );
};
export default WarmOrColdCard;
