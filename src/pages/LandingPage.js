import landinglogo from "../Assets/reactorslandinglogo_transp.png";
import { Link } from "react-router-dom";

export default function LandingPage({ navigate }) {
  return (
    <div
      style={{
        backgroundImage: "url(/image/landingpage.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        zIndex: -10,
      }}
    >
      <div className="landing-page__wrapper">
        <div className="title__wrapper">
          <img
            src={landinglogo}
            alt="thereactorslogo"
            className="landing-page__logo"
          />
          <div className="landing-page__text">
            Looking for a job and a new adventure? <br></br>
            Thriving under the sun or burried in snow? <br></br>
            We offer tech-jobs on many locations over the world!
          </div>
        </div>
        <div className="looking-for-job__wrapper">
          <Link to="/warmorcold">
            <button className="button">Check our jobs here!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
