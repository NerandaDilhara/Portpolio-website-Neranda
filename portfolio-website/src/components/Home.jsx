import React from "react";
import "./Home.css";
import profileImage from "../assets/background.png";  // Ensure this path is correct
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="profile-section">
          <img
            src={profileImage}  // Use the imported image path here
            alt="Neranda Dilhara"
            className="profile-photo"
          />
        </div>
        <div className="info-section">
        <h1 className="name">NERANDA DILHARA</h1>
          <h2 className="title">
            Aspiring Software Engineer | MERN Stack Developer | Software Engineering Undergraduate
          </h2>

          <p className="tagline">
            “Passionate about innovation, dynamic projects, and continuous
            learning.”
          </p>
          <div className="cta-buttons">
            {/* Link to resume */}
            <a 
              href="/NerandaDilhara_CV.pdf" // Ensure the path to your resume is correct
              className="btn resume-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View My Resume
            </a>
            {/* Contact link */}
            <Link to="/contact" className="btn contact-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
