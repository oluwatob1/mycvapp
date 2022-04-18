import React from "react";
import "./Eduexp.css";

function Eduexp() {
  return (
    <div className="edu_container">
      <div className="title">
        <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Python</p>
            <p>Photoshop</p>
      </div>
      <div className="edu_row">
        <h1>Education</h1>
        <hr />
        <h2>University Of Lagos</h2>
        <h3>Bachelor of Science (Hons.), Actuarial Science</h3>
        <h3>2016 - 2020</h3>
        {/* <hr /> */}
        <h2>University Of Lagos</h2>
        <h3>Diploma in Computer Engineering</h3>
        <h3>2013 - 2014</h3>
      </div>
    </div>
  );
}

export default Eduexp;
