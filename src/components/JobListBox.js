import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  // To get only the job titles from the jsondata(job)
  let joblist = job.map((item) => item[0]);

  const [selectedJobs, setSelectedJobs] = useState([]);

  // To generate random and different jobs for each <Citycard />. these are attempts, haven't succeeded yet
  const showRandomJobs = () => {
    const randomNumOfJobs = Math.floor(Math.random() * joblist.length) + 1; //randomize the number of jobs
    let randomJobArray = [...joblist].sort(() => Math.random() - 0.5); //shuffle array instead of sorting
    let selectedJobs = randomJobArray.slice(0, randomNumOfJobs);
    setSelectedJobs(selectedJobs);

    console.log("selected jobs are", selectedJobs);
  };

  useEffect(() => {
    showRandomJobs();
  }, [city]);

  // To push the savedjobs into SavedJobs array
  const handleJobSave = (jobTitle, city) => {
    setSavedJobs([...savedJobs, { jobTitle, city }]);
  };

  console.log("job is ", job);
  return (
    <div>
      <ul className="joblist">
        {selectedJobs.map((jobTitle, index) => (
          <Link key={index} to={`/apply/${jobTitle}/${city}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li>{jobTitle}</li>
              <button
                className="save_btn"
                onClick={() => handleJobSave(jobTitle, city)}
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
