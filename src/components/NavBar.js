import React from "react";
import Logo from "../Assets/NavLogo copy.png";
import { useState } from "react";
import SavedJobs from "./SavedJobs";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar({ savedJobs, setSavedJobs }) {
  const [showJobsCart, setShowJobsCart] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const showSavedJobs = () => {
    setShowJobsCart(!showJobsCart);
  };

  return (
    <div className="navbar_container">
      <div>
        <Link to="/">
          <img src={Logo} alt="NavLogo" style={{ height: 50, marginTop: 5 }} />
        </Link>
        <div className="navbar_something">
          <div className="nav-menu">
            <Link
              to="/"
              className={`nav-link ${
                activeLink === "home" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              <p
                className={`nav-text ${activeLink === "home" ? "active" : ""}`}
              >
                Home
              </p>
            </Link>
            <Link
              to="/warmorcold"
              className={`nav-link ${
                activeLink === "findJob" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("findJob")}
            >
              <p
                className={`nav-text ${
                  activeLink === "findJob" ? "active" : ""
                }`}
              >
                Find a job
              </p>
            </Link>
            <Link
              to="/profiles"
              className={`nav-link ${
                activeLink === "aboutUs" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("aboutUs")}
            >
              <p
                className={`nav-text ${
                  activeLink === "aboutUs" ? "active" : ""
                }`}
              >
                About us
              </p>
            </Link>
            <p
              className={`nav-text saved-jobs ${showJobsCart ? "active" : ""}`}
              onClick={showSavedJobs}
            >
              Saved jobs({savedJobs.length})
            </p>
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
