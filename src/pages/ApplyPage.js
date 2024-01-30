import React from "react";
import { useState } from "react";
import JobAdds from "../components/JobAdd";

export default function ApplyPage() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    // const formData = new FormData(form);

    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
  }

  const [message, setMessage] = useState(false);
  const clickOnSubmit = () => {
    setMessage(true);
  };

  return (
    <div className="job_wrapper">
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
