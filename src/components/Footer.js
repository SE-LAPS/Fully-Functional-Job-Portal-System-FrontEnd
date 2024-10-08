import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="yellow-text">For Jobseekers</h3>
          <ul>
            <li><a href="/">Search Jobs</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">Job Alerts</a></li>
            <li><a href="/">Career Advice</a></li>
            <li><a href="/">More..</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="yellow-text">Popular Recruiters</h3>
          <ul>
            <li><a href="/">Search Jobs</a></li>
            <li><a href="/">CV Database Access</a></li>
            <li><a href="/">Advertise Jobs</a></li>
            <li><a href="/">Search CVs</a></li>
            <li><a href="/">More..</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="yellow-text">About Us</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Help</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">More..</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="yellow-text">Social Media</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Linked-In</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Whatsapp</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h3 className="yellow-text">Subscribe to our newsletter</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
          </div>
          <button className="subscribe-button">SUBSCRIBE</button>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaWhatsapp />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="rainbow-text">&copy; 2024 | All Rights Reserved | Created with Group - 07<br />-|| Design by - DesignITBazinga ||-</p>
      </div>
    </footer>
  );
};

export default Footer;