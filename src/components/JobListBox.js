<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";
=======
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  // To get only the job titles from the jsondata(job)
  let joblist = job.map((item) => item[0]);

  const [selectedJobs, setSelectedJobs] = useState([]);

  // To generate random and different jobs for each <Citycard />. these are attemps, haven't succeeded yet
  const showRandomJobs = () => {
    const randomNumOfJobs = Math.floor(Math.random() * joblist.length) + 1; //randomize the numebr of jobs to
    let randomJobArray = joblist.sort(() => Math.random() - 0.5); //used sort instead of math random
    let selectedJobs = randomJobArray.slice(0, randomNumOfJobs);
    setSelectedJobs(selectedJobs);

    console.log("selected jobs are", selectedJobs);
  };

  useEffect(() => {
    showRandomJobs();
  }, [city]);

  // To push the savedjobs into SavedJobs array
  const handleJobSave = (p) => {
    setSavedJobs([...savedJobs, p]);
  };
>>>>>>> Stashed changes

const JobListBox = ({ job, city }) => {
  console.log("job is ", job);
  return (
    <div>
<<<<<<< Updated upstream
      <ul>
        {job.map(([key, item]) => (
          <Link to={`/apply/${key}/${city}`}>
            <li>{item.title}</li>
=======
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
                  style={{ color: "ffffff" }}
                />
              </button>
            </div>
>>>>>>> Stashed changes
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default JobListBox;

// function - 1. generate random number,
//2. iterate through the number
//3. another random number for the index of the jobs
// 4. list of chosen jobs / list of all jobs.
// setstate for the jobslist and run this function in useEffect.
