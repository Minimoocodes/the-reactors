import React, { useState } from "react";
import profilesData from "../ProfileData";
import Profile from "../components/profile";
import "../index.css";

const ProfilePage = () => {
  const [activeProfile, setActiveProfile] = useState(null);

  const handleToggleProfile = (profileName) => {
    setActiveProfile((prevProfile) =>
      prevProfile === profileName ? null : profileName
    );
  };

  const filteredProfiles = activeProfile
    ? profilesData.filter((profile) => profile.name === activeProfile)
    : profilesData;

  return (
    <div className="profile-container">
      {filteredProfiles.map((profile) => (
        <Profile
          key={profile.name}
          isActive={activeProfile === profile.name}
          onToggleProfile={handleToggleProfile}
          {...profile}
        />
      ))}
    </div>
  );
};

export default ProfilePage;
