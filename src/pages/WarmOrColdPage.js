import React from "react";
import WarmOrColdCard from "../components/WarmOrColdCard";
import "../index.css";

const WarmOrCold = () => {
  const warmOrColdArray = ["warm", "cold"];

  return (
    <div className="WarmOrCOldPage">
      <div className="WarmOrCold_container">
        <h1 className="findajob_h1">
          Do you prefer to work in a warm or cold climate?
        </h1>
        <h2 className="findajob_h2">Click to see what jobs are available</h2>
      </div>
      <div className="WarmOrCold_wrap">
        {warmOrColdArray.map((warmOrColdDisplay, index) => (
          <WarmOrColdCard key={index} warmOrColdDisplay={warmOrColdDisplay} />
        ))}
      </div>
    </div>
  );
};

export default WarmOrCold;
