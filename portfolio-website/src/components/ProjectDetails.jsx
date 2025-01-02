import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const projectData = [
  {
    id: "1",
    name: "Vehicle and Fuel Management System",
    description:
      "A feature-rich Java application designed to streamline vehicle, staff, fuel, and service management. Built using the MVC architecture, it offers functionalities such as vehicle tracking, staff record management, fuel usage monitoring, and scheduling services. The application supports dynamic CRUD operations, multi-user roles (admin and staff), and detailed analytics through SQL reporting. It integrates seamlessly with SQL databases for real-time data updates and ensures data consistency with advanced validation.",
    technologies: [
      "Java", 
      "MVC Architecture", 
      "SQL (SQL Server, Workbench)", 
      "Servlets", 
      "Bootstrap", 
      "OOP Concepts"
    ],
    github: "https://github.com/NerandaDilhara/Vehicle-and-Fuel-Management-System---JAVA",
  },
  {
    id: "2",
    name: "Life Insurance Management System",
    description:
      "A web application aimed at automating life insurance processes. It includes features like policy creation and management, secure payment gateways, and agent-client interaction modules. Built with PHP and integrated with JavaScript, it delivers interactive and user-friendly interfaces. The system incorporates responsive design principles using CSS and ensures secure data storage with SQL databases. Additional features include real-time policy updates, reminders for payments, and an admin dashboard for operational oversight.",
    technologies: [
      "PHP", 
      "HTML5", 
      "CSS3", 
      "JavaScript (ES6+)", 
      "SQL (MySQL)", 
      "AJAX", 
      "Bootstrap"
    ],
    github: "https://github.com/NerandaDilhara/Life-Insurance-Management-System",
  },
  {
    id: "3",
    name: "Boarding Places Management System",
    description:
      "A modern MERN stack application designed to simplify the management of boarding places. Users can list, search, and book boarding facilities. The platform includes advanced search filters, authentication for user and admin roles, and real-time data updates. Leveraging MongoDB for secure data storage, it ensures scalability and performance. The app also features responsive design for optimal usability across devices, API integration for payment gateways, and an admin panel for managing listings and user activity.",
    technologies: [
      "React", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "Redux Toolkit", 
      "Material-UI", 
      "JWT Authentication", 
      "RESTful APIs"
    ],
    github: "https://github.com/ITP-project-Group-2-1-5/BoardingMERN-2Y2S",
  },
  {
    id: "4",
    name: "Laravel Student Management System",
    description:
      "An efficient Laravel-based CRUD application developed for managing student records. The system supports student registration, updates, and deletion with robust validation mechanisms. It includes an intuitive admin dashboard, role-based access control, and seamless integration with MySQL for efficient data handling. Additionally, the system provides features like bulk uploads, search functionalities, and detailed performance reports for better academic management.",
    technologies: [
      "Laravel", 
      "PHP", 
      "MySQL", 
      "Blade Templates", 
      "Bootstrap 5", 
      "jQuery", 
      "RESTful APIs", 
      "DataTables"
    ],
    github: "https://github.com/NerandaDilhara/Laravel-Student-Management-System---CRUD-Application",
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
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
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
