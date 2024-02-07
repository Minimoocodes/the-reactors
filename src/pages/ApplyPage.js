import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

//parameters id and location target information from json file that need to be extracted and shown

export default function ApplyPage({ jsonData }) {
  const { id, location } = useParams();

  console.log("the id and location here is", id, location);

  //  this function captures form data, converts it into a JavaScript object, and logs it to the console 
  //  without actually submitting the form to the server

  function handleSubmit(e) {
    e.preventDefault();   // prevents the default behavior of form submission, which is to reload the page

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }


  // when application is submitted, clickOnSubmit function displays a paragraph "thanks for your application"
  // initial value of message is false, but when clickOnSubmit function performs, value of the message becomes true
  const [message, setMessage] = useState(false);
  const clickOnSubmit = () => {
    setMessage(true);
  };

  return (
    <div className="apply_wrapper">
      <div className="job_wrapper">
        <p className="job_title">{jsonData[id].title}</p>
        <p className="job_description">{jsonData[id].description}</p>
        <form method="post" onSubmit={handleSubmit} className="apply_form">
          {message && (                                                         //Conditionally render a message if 'message' state is true
            <p className="apply_message" style={{ color: "#03EDEE" }}>
              Thank you for your application!
            </p>
          )}

          <label>
            First and last name:{" "}
            <input
              name="myInput"
              placeholder={"John Doe"}
              className="apply__input"
            />
          </label>
          <label>
            E-mail:{" "}
            <input
              name="myInput"
              placeholder={"johndoe@gmail.com"}
              className="apply__input"
            />
          </label>
          <label>
            Tell us about yourself:{" "}
            <input
              name="myInput"
              placeholder={"Type here..."}
              className="apply-input__about"
            />
          </label>
          <button type="reset" className="apply__button">
            Reset Form
          </button>
          <button
            type="submit"
            onClick={clickOnSubmit}
            className="apply__button"
          >
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
}
