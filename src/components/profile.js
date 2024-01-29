import React from "react";
import { Profile as profilesData } from "../ProfileData";

const Profile = ({ name, image }) => {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <img className="profile-image" width={180} src={image} />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
