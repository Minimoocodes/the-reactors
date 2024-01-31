import React from "react";

const SavedJobs = ({ savedJobs }) => {
  return (
    <div className="saved_jobs">
      <ul>
        {savedJobs.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobs;
