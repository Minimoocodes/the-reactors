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

  return (
    <div style={{ marginTop: 30, marginLeft: 15 }}>
      <a href="#" onClick={toggleHidden}>
        <img
          className="profile-image"
          width={180}
          src={image}
          alt={`${name}'s profile`}
        />
        <h2>{name}</h2>
      </a>
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
          {/* Skills Section */}
          <div
            className="hiiden-profile"
            style={{
              marginTop: 10,
              border: "1px solid #ccc",
              padding: 10,
            }}
          >
            <div className="skills-section">
              <div style={{ marginBottom: 10 }}>
                <h2>Skills:</h2>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects Section */}
            <div className="project-section">
              <div>
                {project1 && (
                  <div style={{ marginBottom: 10 }}>
                    <h2>Recent Projects</h2>
                    <img src={project1} style={{ width: "100%" }} />
                  </div>
                )}
                {project2 && (
                  <div>
                    <img src={project2} style={{ width: "100%" }} />
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
