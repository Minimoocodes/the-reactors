import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  // To get only the job titles from the jsondata(job)
  let joblist = job.map((item) => item[0]);

  // To generate random and different jobs for each <Citycard />. these are attemps, haven't succeeded yet
  const showRandomJobs = () => {
    let randomNum = Math.floor(Math.random() * joblist.length);
    let randomIndex = Math.floor(Math.random() * randomNum);
    let selectedJobs = joblist.slice(randomNum, randomIndex);

    console.log("selected jobs are", selectedJobs);
  };

  useEffect(() => {
    showRandomJobs();
  }, []);

  // To push the savedjobs into SavedJobs array
  const handleJobSave = (p) => {
    setSavedJobs([...savedJobs, p]);
  };

  return (
    <div>
      <ul className="joblist">
        {job.map(([key, item]) => (
          <Link to={`/apply/${key}/${city}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li>{item.title}</li>
              <button
                className="save_btn"
                onClick={() => handleJobSave(item.title, city)}
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

// function - 1. generate random number,
//2. iterate through the number
//3. another random number for the index of the jobs
// 4. list of chosen jobs / list of all jobs.
// setstate for the jobslist and run this function in useEffect.
