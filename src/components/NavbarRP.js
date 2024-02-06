import Nav from "react-bootstrap/Nav";

import Logo from "../Assets/NavLogo copy.png";
import { useState } from "react";
import SavedJobs from "./SavedJobs";
import "../index.css";
import { Link } from "react-router-dom";

function NavbarRP({ savedJobs, setSavedJobs }) {
  const [showJobsCart, setShowJobsCart] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const showSavedJobs = () => {
    setShowJobsCart(!showJobsCart);
  };
  return (
    <Navbar expand="lg" className="bg-secondary bg-gradient">
      <Link to="/">
        <Navbar.Brand href="#home">
          {" "}
          <img
            className="nav_logo"
            src={Logo}
            alt="NavLogo"
            style={{ height: 50, marginTop: 5, marginLeft: "2rem" }}
          />
        </Navbar.Brand>
      </Link>
      <Container className="container_wrap">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link
              to="/"
              className={`nav-link ${
                activeLink === "home" ? "active-link" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              <Nav.Link href="#home" className="nav-text">
                Home
              </Nav.Link>
            </Link> */}
            <Link
              to="/warmorcold"
              className={` ${activeLink === "findJob" ? "active-link" : ""}`}
              onClick={() => setActiveLink("findJob")}
            >
              <Nav.Link
                href="#link"
                className={`nav-text
                ${activeLink === "findJob" ? "active" : ""}`}
              >
                FIND A JOB
              </Nav.Link>
            </Link>
            <Link
              to="/profiles"
              className={`
                 ${activeLink === "aboutUs" ? "active-link" : ""}`}
              onClick={() => setActiveLink("aboutUs")}
            >
              <Nav.Link
                href="#link"
                className={`nav-text
                ${activeLink === "aboutUs" ? "active" : ""}`}
              >
                ABOUT US
              </Nav.Link>
            </Link>
            <Nav.Link
              href="#link"
              className={`nav-text saved-jobs ${showJobsCart ? "active" : ""}`}
              onClick={showSavedJobs}
            >
              SAVED JOBS{`(${savedJobs.length})`}
            </Nav.Link>
            {showJobsCart ? (
              <SavedJobs savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRP;
