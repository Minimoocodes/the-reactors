import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  const jobList = job.map((item) => item[0]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const showRandomJobs = () => {
    const storedJobs = JSON.parse(localStorage.getItem(`selectedJobs_${city}`)); //retrieves data from the browser's local storage.
    if (storedJobs) {
      setSelectedJobs(storedJobs);
    } else {
      let randomNumOfJobs = Math.floor(Math.random() * jobList.length) + 1;
      randomNumOfJobs = Math.max(2, randomNumOfJobs); //make sures that there are atleast 2 joblisting.
      let randomJobArray = jobList.sort(() => Math.random() - 0.5); //randomize the array job list
      let selectedJobs = randomJobArray.slice(0, randomNumOfJobs); //takesthe first elemsnets from the randomized array
      setSelectedJobs(selectedJobs);
      localStorage.setItem(
        `selectedJobs_${city}`,
        JSON.stringify(selectedJobs)
      );
    }
  };
  useEffect(() => {
    showRandomJobs();
  }, [city]);
  useEffect(() => {
    localStorage.setItem(`selectedJobs_${city}`, JSON.stringify(selectedJobs));
  }, [selectedJobs, city]);
  const handleJobSave = (jobTitle) => {
    setSavedJobs([...savedJobs, jobTitle]);
  };
  return (
    <div>
      <ul className="joblist">
        {selectedJobs.map((jobTitle, index) => (
          <Link key={index} to={`/apply/${jobTitle}/${city}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li>{jobTitle}</li>
              <button
                className="save_btn"
                onClick={() => handleJobSave(jobTitle)}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default JobListBox;
