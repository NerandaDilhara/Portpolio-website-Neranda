import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profileImage from "../assets/profile.jpg"; // Ensure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Neranda Dilhara</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li> {/* New link */}
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
