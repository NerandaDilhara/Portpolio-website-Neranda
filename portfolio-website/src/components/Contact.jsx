import React from "react";
import "./Contacts.css";
import profileImage from "../assets/profile.jpg"; // Add your profile image here
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="contact-details">
          <p>
            <FaEnvelope className="icon" /> 
            <a href="mailto:nerandadilhara@gmail.com">nerandadilhara@gmail.com</a>
          </p>
          <p>
            <FaPhone className="icon" /> 
            <a href="tel:+94760323335">+94 76 032 3335</a>
          </p>
          <p>
            <FaLinkedin className="icon" /> 
            <a href="https://www.linkedin.com/in/neranda-dilhara-kumarasingha-2433a4257/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <FaFacebook className="icon" /> 
            <a href="https://web.facebook.com/neranda.dilhara/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
          <p>
            <FaYoutube className="icon" /> 
            <a href="https://www.youtube.com/channel/UCg-JUPuBeHWBtfEnXgEtrrg" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
