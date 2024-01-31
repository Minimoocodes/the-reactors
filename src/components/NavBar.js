import React from "react";
import Logo from "../Assets/NavLogo copy.png";
import { useState } from "react";
import SavedJobs from "./SavedJobs";
import "../index.css";

function NavBar({ savedJobs }) {
  const [showJobsCart, setShowJobsCart] = useState(false);

  const showSavedJobs = () => {
    setShowJobsCart(!showJobsCart);
  };

  return (
    <div
      style={{
        minHeight: 50,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,
        display: "flex",
        fontSize: "1.3em",
        color: "#FFD801",
        gap: 2,
      }}
    >
      <img src={Logo} alt="NavLogo" style={{ height: 50, marginTop: -5 }} />
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          paddingLeft: 10,
          paddingRight: 20,
          paddingTop: 10,
          color: "#09D0D8",
        }}
      >
        <p>Home</p>
        <p>Find a job</p>
        <p>About us</p>
        <button className="savedjobs_btn" onClick={showSavedJobs}>
          Saved jobs({savedJobs.length})
        </button>
        {showJobsCart ? <SavedJobs savedJobs={savedJobs} /> : null}
      </div>
    </div>
  );
}

export default NavBar;
