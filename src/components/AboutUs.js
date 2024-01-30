import React from "react";
import { Profile as profilesData } from "../ProfileData";

const Profile = ({ name, image }) => {
  return (
    <div>
      <img width={250} src={image} />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
