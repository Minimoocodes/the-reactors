import React from "react";
import WarmOrColdCard from "../components/WarmOrColdCard";

const WarmOrCold = () => {
  const warmOrColdArray = ["warm", "cold"];

  return (
    <>
      <div className="WarmOrCold_wrap">
        <h1>Do you prefer to work in a warm or cold climate?</h1>
      </div>
      <div className="WarmOrCold_wrap">
        <h2>Click to see what jobs are available</h2>
      </div>
      <div className="WarmOrCold_wrap">
        {warmOrColdArray.map((warmOrColdDisplay, index) => (
          <WarmOrColdCard key={index} warmOrColdDisplay={warmOrColdDisplay} />
        ))}
      </div>
    </>
  );
};

export default WarmOrCold;
