import React, { useState } from "react";
import profilesData from "../ProfileData";
import Profile from "../components/profile";
import "../index.css";

const ProfilePage = () => {
  // using useState to manage the active profile state
  const [activeProfile, setActiveProfile] = useState(null);

  // to toggle the active profile based on its name
  const handleToggleProfile = (profileName) => {
    setActiveProfile((prevProfile) =>
      // If the current active profile matches the given profile name it will turn off the active profile by setting it to null.
      // or it will set it to the profileName parameter (to be toggled on)
      prevProfile === profileName ? null : profileName
    );
  };

  // filters the profilesData array based on the activeProfile state
  const filteredProfiles = activeProfile
    ? profilesData.filter((profile) => profile.name === activeProfile)
    : profilesData;

  return (
    <div className="profile-container">
      {/* maps  the filteredProfiles array so that it will render the  profile components */}
      {filteredProfiles.map((profile) => (
        <Profile
          key={profile.name} // set the uniqie keyt
          isActive={activeProfile === profile.name} // making isActive prop based on whether the profile is active
          onToggleProfile={handleToggleProfile} // handleToggleProfile function as a prop
          {...profile} // makes  all the  other profile data as props with spread operator
        />
      ))}
    </div>
  );
};

export default ProfilePage;
