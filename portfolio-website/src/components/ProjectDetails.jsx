import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const projectData = [
  {
    id: "1",
    name: "Vehicle and Fuel Management System",
    description:
      "A Java application built using MVC architecture and SQL for vehicle, staff, fuel, and service management with dynamic CRUD operations.",
    technologies: ["Java", "MVC", "SQL", "Servlets"],
  },
  {
    id: "2",
    name: "Life Insurance Management System",
    description:
      "A PHP-based web application integrating HTML, CSS, JavaScript, and SQL for policy management, payment systems, and agent-client interaction features.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    id: "3",
    name: "Boarding Places Management System",
    description:
      "A full-stack MERN application enabling property management, search filters, real-time updates, and secure MongoDB storage.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "4",
    name: "Laravel Student Management System",
    description:
      "A Laravel-based CRUD application for efficient student data management with seamless MySQL integration and intuitive interface.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === id);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
