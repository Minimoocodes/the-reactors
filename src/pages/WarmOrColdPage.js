import React from "react";
import WarmOrColdCard from "../components/WarmOrColdCard";

const WarmOrCold = () => {
  return (
    <div className="warmorcold-wrap">
      {warmOrCold.map((warmOrColdDisplay) => (
        <WarmOrColdCard warmOrColdDisplay={warmOrColdDisplay} />
      ))}
    </div>
  );
};

export default WarmOrCold;
