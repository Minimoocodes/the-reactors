import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const JobListBox = ({ job, city, savedJobs, setSavedJobs }) => {
  let joblist = job.map((item) => item[0]);

  const showRandomJobs = () => {
    let randomNum = Math.floor(Math.random() * joblist.length);
    let randomIndex = Math.floor(Math.random() * randomNum);
    let selectedJobs = joblist.slice(randomNum, randomIndex);

    console.log("selected jobs are", selectedJobs);
  };

  useEffect(() => {
    showRandomJobs();
  }, []);

  const handleJobSave = (p) => {
    setSavedJobs([...savedJobs, p]);
  };

  useEffect(() => {
    console.log("saved jobs are", savedJobs);
  }, [savedJobs]);

  return (
    <div>
      <ul className="joblist">
        {job.map(([key, item]) => (
          <Link to={`/apply/${key}/${city}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li>{item.title}</li>
              <button onClick={() => handleJobSave(item.title)}>save</button>
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
