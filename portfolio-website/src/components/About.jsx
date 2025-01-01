import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>Who Am I?</h2>
      <p className="intro">
        Aspiring Software Engineering student with a strong foundation in
        computer science, agile methodologies, and object-oriented programming.
        Skilled in applying theoretical knowledge to real-world projects,
        collaborating effectively, and solving problems with precision.
      </p>
      <p className="mission">
        I aim to contribute to innovative software projects while continuously
        learning and growing in the field.
      </p>
      <div className="highlights">
        <h3>Key Highlights</h3>
        <ul>
          <li>Island First in Advanced Level Examination (Engineering Technology, Technology Stream).</li>
          <li>Dean’s List Achievements for consecutive semesters.</li>
          <li>Content creator and educator in IT and programming concepts.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
