// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>For Jobseekers</h3>
        <ul>
          <li><a href="/">Search Jobs</a></li>
          <li><a href="/">Register</a></li>
          <li><a href="/">Job Alerts</a></li>
          <li><a href="/">Career Advice</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Popular Recruiters</h3>
        <ul>
          <li><a href="/">Search Jobs</a></li>
          <li><a href="/">CV Database Access</a></li>
          <li><a href="/">Advertise Jobs</a></li>
          <li><a href="/">Search CVs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Help</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-section subscribe">
        <h3>Subscribe to our newsletter</h3>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
      <p>&copy; 2024 | All Rights Reserved. Created with Group 7.design by DesignITBazinga</p>
    </footer>
  );
};

export default Footer;
