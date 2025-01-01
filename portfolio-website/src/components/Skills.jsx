import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>My Toolbox</h2>
      
      {/* Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Kotlin</li>
          <li>PHP</li>
        </ul>
      </div>

      {/* Frameworks & Libraries */}
      <div className="skills-category">
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>TensorFlow</li>
          <li>Keras</li>
        </ul>
      </div>

      {/* UI/UX Tools */}
      <div className="skills-category">
        <h3>UI/UX Tools</h3>
        <ul>
          <li>Figma</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </div>

      {/* Tools & Platforms */}
      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <ul>
          <li>Git</li>
          <li>VS Code</li>
          <li>Trello</li>
          <li>Postman</li>
          <li>Insomnia</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
