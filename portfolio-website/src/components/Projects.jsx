import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  { id: "1", name: "Vehicle and Fuel Management System" },
  { id: "2", name: "Life Insurance Management System" },
  { id: "3", name: "Boarding Places Management System" },
  { id: "4", name: "Laravel Student Management System" },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Work</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
