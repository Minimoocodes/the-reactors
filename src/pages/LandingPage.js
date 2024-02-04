import React from "react";
import landinglogo from "../Assets/reactorslandinglogo_transp.png";
import { Link } from "react-router-dom";
import tech from "../Assets/tech.png";

export default function LandingPage({ navigate }) {
  return (
    <div>
      <div className="landing-page__wrapper">
        <div className="title__wrapper">
          <img
            src={landinglogo}
            alt="thereactorslogo"
            className="landing-page__logo"
          />{" "}
          <p className="landing-page__text">
            Looking for a job and a new adventure? <br />
            Thriving under the sun or buried in snow? <br />
            We offer tech jobs in many locations worldwide!
          </p>
        </div>

        <div
          className="looking-for-job__wrapper"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img src={tech} alt="tech" className="landing-page__tech" />
          <Link to="/warmorcold">
            <button className="landingpage_button">Check our jobs here!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
