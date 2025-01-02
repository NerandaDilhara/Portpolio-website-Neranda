import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Neranda Dilhara. All Rights Reserved.</p>
      <div className="quick-links">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/neranda-dilhara-kumarasingha-2433a4257/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/NerandaDilhara" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.youtube.com/channel/UCg-JUPuBeHWBtfEnXgEtrrg" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </footer>
  );
}

export default Footer;
