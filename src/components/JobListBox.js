import React from "react";
import { Link } from "react-router-dom";

const JobListBox = ({ job, city }) => {
  console.log("job is ", job);
  return (
    <div>
      <ul>
        {job.map(([key, item]) => (
          <Link to={`/apply/${key}/${city}`}>
            <li>{item.title}</li>
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
