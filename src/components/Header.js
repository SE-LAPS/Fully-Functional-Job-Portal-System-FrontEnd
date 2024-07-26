// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JobHunter</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/search">Search Jobs</Link>
        <Link to="/job_alert">Job Alerts</Link>
        <Link to="/employers">Employers</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
