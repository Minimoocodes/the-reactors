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
    <div className="navbar_container">
      <div className="sub_container">
        <Link to="/">
          <img src={Logo} alt="NavLogo" style={{ height: 50, marginTop: 5 }} />
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/warmorcold">Find a job</NavLink>
            <NavLink to="/profiles">About us</NavLink>
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

const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link">
    <p className="nav-text">{children}</p>
  </Link>
);

export default NavBar;
