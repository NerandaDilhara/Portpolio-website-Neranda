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
          <li>Achieved Island First in the Advanced Level Examination (Engineering Technology, Technology Stream).</li>
          <li>Consistently recognized on the Dean’s List for exceptional academic performance across consecutive semesters.</li>
          <li>Dedicated content creator and educator specializing in IT and programming concepts.</li>
          <li>Passionate about developing dynamic and innovative projects, including web and MERN stack applications.</li>
          <li>Experienced in creating end-to-end solutions with a focus on modern technologies and user-centric design.</li>
        </ul>

      </div>
    </div>
  );
}

export default About;
