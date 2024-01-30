import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ApplyPage({ jsonData }) {
  const { id, location } = useParams();

  console.log("the id and location here is", id, location);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  const [message, setMessage] = useState(false);
  const clickOnSubmit = () => {
    setMessage(true);
  };

  return (
    <div className="job_wrapper">
      <p className="job_title">{jsonData[id].title}</p>
      <p className="job_description">{jsonData[id].description}</p>
      <form method="post" onSubmit={handleSubmit} className="apply_form">
        <label>
          First and last name: <input name="myInput" placeholder={"John Doe"} />
        </label>
        <label>
          E-mail: <input name="myInput" placeholder={"johndoe@gmail.com"} />
        </label>
        <label>
          Tell us about yourself:{" "}
          <input name="myInput" placeholder={"I am..."} />
        </label>
        <button type="reset">Reset Form</button>
        <button type="submit" onClick={clickOnSubmit}>
          Submit form
        </button>
        {message && (
          <p className="apply_message">Thanks for your application!</p>
        )}
      </form>
    </div>
  );
}
