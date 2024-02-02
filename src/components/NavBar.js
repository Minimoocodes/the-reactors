import React from "react";
import Logo from "../Assets/NavLogo copy.png";
import { useState } from "react";
import SavedJobs from "./SavedJobs";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar({ savedJobs, setSavedJobs }) {
  const [showJobsCart, setShowJobsCart] = useState(false);

  const showSavedJobs = () => {
    setShowJobsCart(!showJobsCart);
  };

  return (
    <div>
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
          backgroundColor: "#D3D3D340",
        }}
      >
        <Link to="/">
          <img src={Logo} alt="NavLogo" style={{ height: 50, marginTop: -5 }} />
        </Link>
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
          <div className="nav-menu">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/warmorcold"}>
              <p>Find a job</p>
            </Link>
            <Link to={"/profiles"}>
              <p>About us</p>
            </Link>
            <button className="savedjobs_btn" onClick={showSavedJobs}>
              Saved jobs({savedJobs.length})
            </button>
            {showJobsCart ? (
              <SavedJobs savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
