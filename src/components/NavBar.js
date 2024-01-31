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
        backgroundColor: "#2f0742",
        minHeight: 50,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,
        display: "flex",
        fontSize: "1.3em",
        color: "#FFD801",
        fontFamily: "ItikKecil",
        gap: 2,
      }}
    >
      <img src={Logo} alt="NavLogo" style={{ height: 50, marginTop: -5 }} />
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: 25,
          paddingLeft: 10,
          paddingRight: 20,
          paddingTop: 10,
          color: "#09D0D8",
        }}
      >
        <p>Home</p>
        <p>Find a job</p>
        <p onClick={showSavedJobs}>Save jobs({savedJobs.length})</p>
        {showSavedJobs}
        <SavedJobs />
        <p>About us</p>
      </div>
    </div>
  );
}

export default NavBar;
