import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  let joblist = job.map((item) => item[0]);

  const [selectedJobs, setSelectedJobs] = useState([]);

  const showRandomJobs = () => {
    // Check if selected jobs are stored in localStorage
    const storedJobs = JSON.parse(localStorage.getItem(`selectedJobs_${city}`));

    if (storedJobs) {
      setSelectedJobs(storedJobs);
    } else {
      const randomNumOfJobs = Math.floor(Math.random() * joblist.length) + 1;
      let randomJobArray = joblist.sort(() => Math.random() - 0.5);
      let selectedJobs = randomJobArray.slice(0, randomNumOfJobs);
      setSelectedJobs(selectedJobs);

      // Store selected jobs in localStorage
      localStorage.setItem(
        `selectedJobs_${city}`,
        JSON.stringify(selectedJobs)
      );
    }
  };

  useEffect(() => {
    showRandomJobs();
  }, [city, joblist]);

  const handleJobSave = (jobTitle) => {
    setSavedJobs([...savedJobs, jobTitle]);
  };

  return (
    <div>
      <ul className="joblist">
        {selectedJobs.map((jobTitle, index) => (
          <Link key={jobTitle} to={`/apply/${jobTitle}/${city}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li>{jobTitle}</li>
              <button
                className="save_btn"
                onClick={() => handleJobSave(jobTitle)}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "ffffff" }}
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
