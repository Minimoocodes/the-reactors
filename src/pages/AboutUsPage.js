import React from "react";
import Profile from "../components/profile";
import { Profile as profilesData } from "../ProfileData";

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <div className="profile-container">
          {profilesData.map((profile, index) => (
            <Profile key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
