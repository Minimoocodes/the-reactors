import React from "react";
import WarmOrColdCard from "../components/WarmOrColdCard";

const WarmOrCold = () => {
  const warmOrColdArray = ["warm", "cold"];

  return (
    <div className="WarmOrCold_wrap">
      {warmOrColdArray.map((warmOrColdDisplay, index) => (
        <WarmOrColdCard key={index} warmOrColdDisplay={warmOrColdDisplay} />
      ))}
    </div>
  );
};

export default WarmOrCold;
