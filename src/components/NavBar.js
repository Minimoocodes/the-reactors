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

  const [activeLink, setActiveLink] = useState("");

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
            <Link
              to="/"
              className={`nav-link ${
                activeLink === "home" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              <p className="nav-text">Home</p>
            </Link>
            <Link
              to="/warmorcold"
              className={`nav-link ${
                activeLink === "findJob" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("findJob")}
            >
              <p className="nav-text">Find a job</p>
            </Link>
            <Link
              to="/profiles"
              className={`nav-link ${
                activeLink === "aboutUs" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("aboutUs")}
            >
              <p className="nav-text">About us</p>
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
