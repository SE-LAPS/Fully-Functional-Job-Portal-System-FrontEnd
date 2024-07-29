// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons from react-icons

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JobHunter</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> {/* Updated link */}
        <Link to="/search">Search Jobs</Link>
        <Link to="/job_alert">Job Alerts</Link>
        <Link to="/employers">Employers</Link>
        <Link to="/contact">Contact</Link>
        <div className="auth-links">
          <Link to="/login" className="auth-link"><FaSignInAlt /> Login</Link>
          <Link to="/register" className="auth-link"><FaUserPlus /> Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
