import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <h2>My Academic Journey</h2>
      <div className="education-item">
        <h3>Bachelor of Science (Honors) in Software Engineering</h3>
        <p>Sri Lanka Institute of Information Technology (SLIIT)</p>
        <p>CGPA: <strong>3.76</strong></p>
        <p>Dean's List: Year 1 (Semesters 1 & 2 - 2023), Year 2 (Semester 1 - 2024)</p>
      </div>
      <div className="education-item">
        <h3>Advanced Level Examination (Engineering Technology)</h3>
        <p><strong>Island First</strong> (Technology Stream).</p>
      </div>
      <div className="education-item">
        <h3>Ordinary Level Examination</h3>
        <p><strong>9A's</strong></p>
      </div>
      <div className="education-item">
        <h3>Certifications</h3>
        <p>
          Completed <strong>CCNA 200-301</strong> course: Networking fundamentals, routing, switching, security, and wireless technologies.
        </p>
      </div>
    </div>
  );
}

export default Education;
