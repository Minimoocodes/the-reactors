import React from "react";

const SavedJobs = ({ savedJobs }) => {
  // const handleRemove = (item) => {
  //   console.log(item, "is not removed");
  // };
  return (
    <div className="saved_jobs">
      <ul>
        {savedJobs.length == 0 ? (
          <li>No jobs are saved yet!</li>
        ) : (
          savedJobs.map((item) => (
            <li>
              {item} <button>remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SavedJobs;
