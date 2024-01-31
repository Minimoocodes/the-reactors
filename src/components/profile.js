import React, { useState } from "react";

const Profile = ({
  name,
  fullName,
  image,
  skills,
  description,
  project1,
  project2,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const closeHiddenProfile = () => {
    setIsHidden(true);
  };

  return (
    <div style={{ marginTop: 30, marginLeft: 15 }}>
      <div onClick={toggleHidden} style={{ cursor: "pointer" }}>
        <img
          className="profile-image"
          width={180}
          src={image}
          alt={`${name}'s profile`}
        />
        <h2>{name}</h2>
      </div>
      <p
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 25,
          letterSpacing: 0,
          top: 0,
          width: 299,
        }}
      >
        {description}
      </p>
      {!isHidden && (
        <div>
          <button onClick={closeHiddenProfile} style={{ float: "right" }}>
            X
          </button>
          {/* Skills Section */}
          <div className="hidden-profile">
            <div className="skills-section">
              <div
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  border: "1px solid #D9D9D9",
                  padding: 5,
                }}
              >
                <h2>Skills:</h2>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects Section */}
            <div
              className="project-section"
              style={{
                marginBottom: 10,
                marginTop: 10,
                border: "1px solid #D9D9D9",
                padding: 5,
              }}
            >
              <div>
                {project1 && (
                  <div style={{ marginBottom: 10 }}>
                    <h2>Recent Projects</h2>
                    <img
                      src={project1}
                      style={{ width: "100%" }}
                      alt="Project 1"
                    />
                  </div>
                )}
                {project2 && (
                  <div>
                    <img
                      src={project2}
                      style={{ width: "100%" }}
                      alt="Project 2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
