import React from "react";
import Profile from "../components/AboutUs";
import { Profile as profilesData } from "../ProfileData";

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      {profilesData.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
    </div>
  );
};

export default AboutUsPage;
