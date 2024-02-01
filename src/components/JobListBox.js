import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
