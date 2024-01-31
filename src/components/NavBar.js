import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/NavLogo copy.png";
import "../index.css";

function NavBar() {
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
        <li className="nav-menu">
          <p>Home</p>
          <Link to="/warmorcold">Find a job</Link>
          <Link to="/profiles">About us</Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
