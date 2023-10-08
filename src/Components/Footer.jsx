import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Css/FooterStyles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-header">Products</h3>
          <ul className="footer-list">
            <li>Event Tickets</li>
            <li>Merchandise</li>
            <li>Exclusive Access Passes</li>
            <li>Event Merchandise</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Community</h3>
          <ul className="footer-list">
            <li>Event Forums</li>
            <li>Networking Groups</li>
            <li>Fan Clubs</li>
            <li>Community Partners</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Support Center</h3>
          <ul className="footer-list">
            <li>Event FAQs</li>
            <li>Contact Event Organizer</li>
            <li>Terms Of Service</li>
            <li>Privacy & Data</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <div className="social-icon-container">
          <a href="https://www.instagram.com/">
            <FaInstagram size={25} color="orange" />
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://www.facebook.com/">
            <FaFacebook size={25} color="orange" />
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={25} color="orange" />
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://twitter.com/">
            <FaTwitter size={25} color="orange" />
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} EvenTick, Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
