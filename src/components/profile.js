const Profile = ({
  name,
  image,
  skills,
  description,
  project1,
  project2,
  isActive,
  onToggleProfile,
}) => {
  const toggleHidden = () => {
    onToggleProfile(name);
  };

  const closeProfile = () => {
    onToggleProfile(null);
  };

  return (
    <div
      className="hidden-profile-container"
      style={{ marginTop: 30, marginLeft: 15 }}
    >
      {isActive && (
        <div>
          <button onClick={closeProfile} style={{ float: "right" }}>
            X
          </button>

          <div className="hidden-profile" style={{ display: "flex" }}>
            {/* profile buttons intro when clicked */}
            <div style={{ marginRight: 20, flex: 1 }}>
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
                <h2>{name}</h2>
                <p>{description}</p>
              </div>

              {/* skills area  */}
              <div className="skills-section">
                <h2>Skills:</h2>

                <ul className="skills">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              {/* projcts */}
              <div className="project-section">
                {project1 && (
                  <div style={{ marginBottom: 10 }}>
                    <h2>Recent Projects</h2>
                    <img
                      src={project1}
                      style={{ width: "70%" }}
                      alt="Project 1"
                    />
                  </div>
                )}
                {project2 && (
                  <div>
                    <img
                      src={project2}
                      style={{ width: "70%" }}
                      alt="Project 2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* profile container div*/}
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
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
