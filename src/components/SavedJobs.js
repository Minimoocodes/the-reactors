import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SavedJobs = ({ savedJobs, setSavedJobs }) => {
  const handleRemove = (item) => {
    const updatedJobs = savedJobs.filter((jobs) => jobs !== item);
    setSavedJobs(updatedJobs);
    console.log(item, "is now removed");
  };
  return (
    <div className="saved_jobs">
      <ul>
        {savedJobs.length == 0 ? (
          <li>No jobs are saved yet!</li>
        ) : (
          savedJobs.map((item) => (
            <li>
              {item}{" "}
              <button
                className="removejobs_btn"
                onClick={() => handleRemove(item)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SavedJobs;
