import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-main-div">
      <div className="footer-div">
        <div>
          <p>
            <Link to="/courses">Courses</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/tips">Tips</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/resources">Articles</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
      <div className="social-media">
        <p>Follow Me: @Lartey:</p>
        <a
          href="https://www.facebook.com/profile.php?id=61565018886542&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/lartey_laconic?t=3nM-DihllGc2x5MWB9I8Uw&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/tecklart/profilecard/?igsh=MWxxNHB5ZjhuOTQ1dQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-lartey-9b1308230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="line">CyberSafe &copy; all rights reserved</div>
    </footer>
  );
}

export default Footer;
