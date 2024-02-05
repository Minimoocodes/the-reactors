import React from "react";

const Profile = ({
  name,
  image,
  skills,
  description,
  project1,
  project2,
  isActive,
  onToggleProfile,
  fullName,
}) => {
  const toggleHidden = () => {
    onToggleProfile(name);
  };

  const closeProfile = () => {
    onToggleProfile(null);
  };

  return (
    <div className="hidden-profile-container">
      {isActive && (
        <div introduction_section>
          <button
            className="close_btn"
            onClick={closeProfile}
            style={{ float: "right" }}
          >
            X
          </button>

          <div className="hidden-profile" style={{ display: "flex" }}>
            <div className="hidden_introduction">
              <div
                className="introduction"
                onClick={toggleHidden}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="profile-image"
                  width={180}
                  src={image}
                  alt={`${name}'s profile`}
                />

                <div>
                  <h2>{fullName}</h2>
                  <p className="description_p">{description}</p>
                </div>
              </div>
            </div>

            {/* projects */}
            <div className="projectskills_container" style={{ flex: 1 }}>
              <h1 className="profiles_h1">Recent Projects</h1>

              <div className="project-section">
                {project1 && (
                  <div className="project1_img">
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
                      className="project2_img"
                      style={{ width: "100%" }}
                      src={project2}
                      alt="Project 2"
                    />
                  </div>
                )}
              </div>
              {/* skills area */}
              <div className="skills_container">
                <h1 className="profiles_h1">Skills:</h1>
                <ul className="skills">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* profile container div */}
      {!isActive && (
        <div
          className="introduction"
          onClick={toggleHidden}
          style={{ cursor: "pointer" }}
        >
          <img
            className="profile-image"
            width={180}
            src={image}
            alt={`${name}'s profile`}
          />
          <h2 className="intro_h2">{name}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
